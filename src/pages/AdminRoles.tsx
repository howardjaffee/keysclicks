import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { History, Lock, RefreshCw, ShieldAlert, ShieldCheck, ShieldOff, UserCog } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";

interface ProfileRow {
  id: string;
  email: string | null;
  full_name: string | null;
  created_at: string;
}

interface RoleRow {
  id: string;
  user_id: string;
  role: "admin" | "moderator" | "user";
}

const AdminRoles = () => {
  const { user, loading: authLoading } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [profiles, setProfiles] = useState<ProfileRow[]>([]);
  const [roles, setRoles] = useState<RoleRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [busyUser, setBusyUser] = useState<string | null>(null);

  // Resolve admin status
  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      setIsAdmin(false);
      return;
    }
    let cancelled = false;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (supabase as any)
      .rpc("has_role", { _user_id: user.id, _role: "admin" })
      .then(({ data, error }: { data: unknown; error: unknown }) => {
        if (!cancelled) setIsAdmin(error ? false : Boolean(data));
      });
    return () => {
      cancelled = true;
    };
  }, [user, authLoading]);

  const load = useCallback(async () => {
    setLoading(true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [{ data: p }, { data: r }] = await Promise.all([
      (supabase as any).from("profiles").select("id, email, full_name, created_at").order("created_at", { ascending: false }),
      (supabase as any).from("user_roles").select("id, user_id, role"),
    ]);
    setProfiles((p as ProfileRow[]) ?? []);
    setRoles((r as RoleRow[]) ?? []);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (isAdmin) load();
  }, [isAdmin, load]);

  const rolesOf = (userId: string) => roles.filter((r) => r.user_id === userId).map((r) => r.role);

  const grantAdmin = async (userId: string) => {
    setBusyUser(userId);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { error } = await (supabase as any).from("user_roles").insert({ user_id: userId, role: "admin" });
    setBusyUser(null);
    if (error) {
      toast({ title: "Could not grant admin", description: "This account may already have the role.", variant: "destructive" });
      return;
    }
    toast({ title: "Admin access granted" });
    load();
  };

  const revokeAdmin = async (userId: string) => {
    if (userId === user?.id) {
      toast({ title: "You cannot revoke your own admin access", variant: "destructive" });
      return;
    }
    setBusyUser(userId);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { error } = await (supabase as any).from("user_roles").delete().eq("user_id", userId).eq("role", "admin");
    setBusyUser(null);
    if (error) {
      toast({ title: "Could not revoke admin", variant: "destructive" });
      return;
    }
    toast({ title: "Admin access revoked" });
    load();
  };

  const term = search.trim().toLowerCase();
  const visible = term
    ? profiles.filter(
        (p) =>
          (p.email ?? "").toLowerCase().includes(term) ||
          (p.full_name ?? "").toLowerCase().includes(term),
      )
    : profiles;

  const checking = authLoading || isAdmin === null;

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Compliance Admin Management | Keys & Clicks"
        description="Internal compliance area for granting and revoking admin access."
        path="/admin/roles"
      />
      <Header />
      <main className="mx-auto w-full max-w-4xl px-4 py-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="flex items-center gap-2 text-2xl font-bold">
            <UserCog aria-hidden="true" className="h-6 w-6 text-primary" />
            Compliance admin management
          </h1>
          {isAdmin && (
            <div className="flex gap-2">
              <Button asChild variant="outline" size="sm" className="rounded-full">
                <Link to="/cookies">
                  <History aria-hidden="true" className="mr-1.5 h-4 w-4" />
                  Audit log
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="rounded-full" onClick={load} disabled={loading}>
                <RefreshCw aria-hidden="true" className={`mr-1.5 h-4 w-4 ${loading ? "animate-spin" : ""}`} />
                Refresh
              </Button>
            </div>
          )}
        </div>

        {checking ? (
          <p className="mt-6 text-sm text-muted-foreground" role="status">
            Checking compliance access…
          </p>
        ) : !isAdmin ? (
          <div className="mt-6 flex items-start gap-3 rounded-lg border border-dashed p-4">
            <ShieldAlert aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <div className="text-sm text-muted-foreground">
              <p>
                This page is restricted to authorized compliance admin accounts.
                {user
                  ? " Your current account does not have admin access."
                  : " Please sign in with an authorized account to continue."}
              </p>
              {!user && (
                <Button asChild variant="outline" size="sm" className="mt-3 rounded-full">
                  <Link to="/auth">Sign in</Link>
                </Button>
              )}
              {user && (
                <Button variant="outline" size="sm" className="mt-3 rounded-full" onClick={() => navigate("/")}>
                  Back to home
                </Button>
              )}
            </div>
          </div>
        ) : (
          <>
            <p className="mt-2 text-sm text-muted-foreground">
              Grant or revoke compliance admin access. Admins can view, filter, export and clear the
              cookie-consent audit log, and manage other admins.
            </p>

            <div className="mt-5">
              <Input
                type="search"
                placeholder="Search by email or name…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search accounts"
              />
            </div>

            {visible.length === 0 ? (
              <p className="mt-6 text-sm text-muted-foreground">
                {loading ? "Loading accounts…" : "No accounts found."}
              </p>
            ) : (
              <div className="mt-4 overflow-x-auto rounded-xl border bg-card">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead className="text-xs uppercase tracking-wide text-muted-foreground">
                    <tr>
                      <th scope="col" className="px-4 py-3 font-semibold">Account</th>
                      <th scope="col" className="px-4 py-3 font-semibold">Roles</th>
                      <th scope="col" className="px-4 py-3 font-semibold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {visible.map((p) => {
                      const userRoles = rolesOf(p.id);
                      const hasAdmin = userRoles.includes("admin");
                      return (
                        <tr key={p.id}>
                          <td className="px-4 py-3 align-top">
                            <p className="font-medium text-foreground">{p.full_name || "—"}</p>
                            <p className="text-muted-foreground">{p.email}</p>
                          </td>
                          <td className="px-4 py-3 align-top">
                            <div className="flex flex-wrap gap-1.5">
                              {userRoles.length === 0 ? (
                                <span className="text-muted-foreground">—</span>
                              ) : (
                                userRoles.map((r) => (
                                  <Badge key={r} variant={r === "admin" ? "default" : "secondary"} className="capitalize">
                                    {r}
                                  </Badge>
                                ))
                              )}
                            </div>
                          </td>
                          <td className="px-4 py-3 align-top text-right">
                            {hasAdmin ? (
                              <Button
                                variant="outline"
                                size="sm"
                                className="rounded-full"
                                onClick={() => revokeAdmin(p.id)}
                                disabled={busyUser === p.id || p.id === user?.id}
                                title={p.id === user?.id ? "You cannot revoke your own access" : undefined}
                              >
                                <ShieldOff aria-hidden="true" className="mr-1.5 h-4 w-4" />
                                Revoke admin
                              </Button>
                            ) : (
                              <Button
                                size="sm"
                                className="rounded-full"
                                onClick={() => grantAdmin(p.id)}
                                disabled={busyUser === p.id}
                              >
                                <ShieldCheck aria-hidden="true" className="mr-1.5 h-4 w-4" />
                                Grant admin
                              </Button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}

            <div className="mt-6 flex items-start gap-3 rounded-lg border border-dashed p-4 text-sm text-muted-foreground">
              <Lock aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0" />
              <p>
                Role changes take effect immediately on the user's next request. Keep at least one
                active admin account — you cannot revoke your own access from this page.
              </p>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default AdminRoles;
