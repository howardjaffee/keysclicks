import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDownWideNarrow,
  ArrowUpNarrowWide,
  ChevronLeft,
  ChevronRight,
  Download,
  FileSpreadsheet,
  History,
  Lock,
  ShieldAlert,
  Trash2,
  UserCog,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ACTION_LABEL,
  onAuditChange,
  type ConsentAuditAction,
} from "@/lib/consentAudit";
import type { ConsentCategory } from "@/lib/consent";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";

const yesNo = (v: boolean) => (v ? "Allowed" : "Blocked");
const PAGE_SIZE = 25;

type CategoryFilter = "all" | ConsentCategory;
type StatusFilter = "any" | "allowed" | "blocked";
type ActionFilter = "all" | "granted" | "revoked" | "updated";
type SortColumn = "created_at" | "action";

/** High-level grouping of audit actions for compliance review. */
const ACTION_GROUP: Record<ConsentAuditAction, Exclude<ActionFilter, "all">> = {
  accept_all: "granted",
  reject_all: "revoked",
  reset: "revoked",
  save_preferences: "updated",
  expired_reprompt: "updated",
};

const GROUP_ACTIONS: Record<Exclude<ActionFilter, "all">, ConsentAuditAction[]> = {
  granted: ["accept_all"],
  updated: ["save_preferences", "expired_reprompt"],
  revoked: ["reject_all", "reset"],
};

interface AuditRow {
  id: string;
  created_at: string;
  action: ConsentAuditAction;
  analytics_allowed: boolean;
  marketing_allowed: boolean;
  affiliate_allowed: boolean;
  path: string | null;
}

/** Resolve whether the signed-in user holds the admin (compliance) role. */
const useIsComplianceAdmin = () => {
  const { user, loading } = useAuth();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    if (loading) return;
    if (!user) {
      setIsAdmin(false);
      return;
    }
    let cancelled = false;
    setIsAdmin(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (supabase as any)
      .rpc("has_role", { _user_id: user.id, _role: "admin" })
      .then(({ data, error }: { data: unknown; error: unknown }) => {
        if (!cancelled) setIsAdmin(error ? false : Boolean(data));
      });
    return () => {
      cancelled = true;
    };
  }, [user, loading]);

  return { isAdmin, loading: loading || isAdmin === null, signedIn: Boolean(user) };
};

/** Compliance view of every recorded cookie decision. Admin-only, server-paginated. */
export const ConsentAuditLog = () => {
  const { isAdmin, loading: adminLoading, signedIn } = useIsComplianceAdmin();
  const [rows, setRows] = useState<AuditRow[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [sortColumn, setSortColumn] = useState<SortColumn>("created_at");
  const [sortAsc, setSortAsc] = useState(false);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [status, setStatus] = useState<StatusFilter>("any");
  const [action, setAction] = useState<ActionFilter>("all");

  const buildQuery = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let q = (supabase as any)
      .from("cookie_consent_audit")
      .select("id, created_at, action, analytics_allowed, marketing_allowed, affiliate_allowed, path", {
        count: "exact",
      });
    if (from) q = q.gte("created_at", new Date(`${from}T00:00:00`).toISOString());
    if (to) q = q.lte("created_at", new Date(`${to}T23:59:59.999`).toISOString());
    if (action !== "all") q = q.in("action", GROUP_ACTIONS[action]);
    if (category !== "all") {
      const col = `${category}_allowed`;
      if (status === "allowed") q = q.eq(col, true);
      else if (status === "blocked") q = q.eq(col, false);
    } else if (status !== "any") {
      const allowed = status === "allowed";
      q = q
        .eq("analytics_allowed", allowed)
        .eq("marketing_allowed", allowed)
        .eq("affiliate_allowed", allowed);
    }
    return q;
  }, [from, to, action, category, status]);

  const load = useCallback(
    (pageIndex: number) => {
      if (!isAdmin) return;
      setLoading(true);
      buildQuery()
        .order(sortColumn, { ascending: sortAsc })
        .order("id", { ascending: sortAsc })
        .range(pageIndex * PAGE_SIZE, pageIndex * PAGE_SIZE + PAGE_SIZE - 1)
        .then(({ data, count, error }: { data: AuditRow[] | null; count: number | null; error: unknown }) => {
          if (!error) {
            setRows(data ?? []);
            setTotal(count ?? 0);
          }
          setLoading(false);
        });
    },
    [isAdmin, buildQuery, sortColumn, sortAsc],
  );

  useEffect(() => {
    load(page);
  }, [load, page]);

  // Refetch when a new consent decision is recorded.
  useEffect(() => {
    if (!isAdmin) return;
    return onAuditChange(() => load(0));
  }, [isAdmin, load]);

  // Reset to first page whenever filters or sorting change.
  useEffect(() => {
    setPage(0);
  }, [from, to, category, status, action, sortColumn, sortAsc]);

  const resetFilters = () => {
    setFrom("");
    setTo("");
    setCategory("all");
    setStatus("any");
    setAction("all");
  };

  const filtersActive = Boolean(from || to || category !== "all" || status !== "any" || action !== "all");
  const pageCount = Math.max(1, Math.ceil(total / PAGE_SIZE));

  const saveFile = (contents: string, type: string, filename: string) => {
    const blob = new Blob([contents], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  /** Fetch every row matching the current filters (paged server-side). */
  const fetchAllFiltered = async (): Promise<AuditRow[]> => {
    const out: AuditRow[] = [];
    const CHUNK = 1000;
    for (let offset = 0; ; offset += CHUNK) {
      const { data, error } = await buildQuery()
        .order(sortColumn, { ascending: sortAsc })
        .range(offset, offset + CHUNK - 1);
      if (error || !data) break;
      out.push(...(data as AuditRow[]));
      if (data.length < CHUNK) break;
    }
    return out;
  };

  const downloadJson = async () => {
    const all = await fetchAllFiltered();
    saveFile(JSON.stringify(all, null, 2), "application/json", "cookie-consent-audit-log.json");
  };

  const downloadCsv = async () => {
    const all = await fetchAllFiltered();
    const cell = (v: string) => `"${v.replace(/"/g, '""')}"`;
    const csvRows = [
      ["Date & time (ISO)", "Date & time (local)", "Action", "Action type", "Analytics", "Marketing", "Affiliate", "Page"],
      ...all.map((e) => [
        e.created_at,
        new Date(e.created_at).toLocaleString(),
        ACTION_LABEL[e.action] ?? e.action,
        ACTION_GROUP[e.action] ?? "",
        yesNo(e.analytics_allowed),
        yesNo(e.marketing_allowed),
        yesNo(e.affiliate_allowed),
        e.path ?? "",
      ]),
    ];
    // BOM keeps accents readable when compliance opens this in Excel.
    saveFile(
      `\uFEFF${csvRows.map((r) => r.map(cell).join(",")).join("\r\n")}`,
      "text/csv;charset=utf-8",
      "cookie-consent-audit-log.csv",
    );
  };

  const clearLog = () => {
    if (!window.confirm("Permanently delete the entire consent audit log? This cannot be undone.")) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (supabase as any)
      .from("cookie_consent_audit")
      .delete()
      .neq("id", "00000000-0000-0000-0000-000000000000")
      .then(() => load(0));
  };

  if (adminLoading) {
    return (
      <div className="mt-6 rounded-xl border bg-card p-6" role="status">
        <h2 className="flex items-center gap-2 text-lg font-semibold">
          <History aria-hidden="true" className="h-5 w-5 text-primary" />
          Consent audit log
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">Checking compliance access…</p>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="mt-6 rounded-xl border bg-card p-6">
        <h2 className="flex items-center gap-2 text-lg font-semibold">
          <Lock aria-hidden="true" className="h-5 w-5 text-primary" />
          Consent audit log
        </h2>
        <div className="mt-3 flex items-start gap-3 rounded-lg border border-dashed p-4">
          <ShieldAlert aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
          <div className="text-sm text-muted-foreground">
            <p>
              The consent audit log contains compliance records and is restricted to authorized
              admin/compliance accounts.
              {signedIn
                ? " Your current account does not have compliance access."
                : " Please sign in with an authorized account to view or export it."}
            </p>
            {!signedIn && (
              <Button asChild variant="outline" size="sm" className="mt-3 rounded-full">
                <Link to="/auth">Sign in</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 rounded-xl border bg-card p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="flex items-center gap-2 text-lg font-semibold">
          <History aria-hidden="true" className="h-5 w-5 text-primary" />
          Consent audit log
        </h2>
        <div className="flex flex-wrap gap-2">
          <Button asChild variant="outline" size="sm" className="rounded-full">
            <Link to="/admin/roles">
              <UserCog aria-hidden="true" className="mr-1.5 h-4 w-4" />
              Manage admins
            </Link>
          </Button>
          <Button variant="outline" size="sm" className="rounded-full" onClick={downloadCsv} disabled={!total}>
            <FileSpreadsheet aria-hidden="true" className="mr-1.5 h-4 w-4" />
            Export CSV (all filtered)
          </Button>
          <Button variant="outline" size="sm" className="rounded-full" onClick={downloadJson} disabled={!total}>
            <Download aria-hidden="true" className="mr-1.5 h-4 w-4" />
            Export JSON
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="rounded-full"
            onClick={clearLog}
            disabled={!total}
          >
            <Trash2 aria-hidden="true" className="mr-1.5 h-4 w-4" />
            Clear
          </Button>
        </div>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">
        Every cookie choice is recorded with a timestamp for compliance review. Records are stored
        securely and are only visible to authorized compliance accounts.
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
        <div className="space-y-1.5">
          <Label htmlFor="audit-from" className="text-xs font-semibold uppercase tracking-wide">From date</Label>
          <Input id="audit-from" type="date" value={from} max={to || undefined} onChange={(e) => setFrom(e.target.value)} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="audit-to" className="text-xs font-semibold uppercase tracking-wide">To date</Label>
          <Input id="audit-to" type="date" value={to} min={from || undefined} onChange={(e) => setTo(e.target.value)} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="audit-category" className="text-xs font-semibold uppercase tracking-wide">Category</Label>
          <Select value={category} onValueChange={(v) => setCategory(v as CategoryFilter)}>
            <SelectTrigger id="audit-category" aria-label="Filter by cookie category">
              <SelectValue placeholder="All categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All categories</SelectItem>
              <SelectItem value="analytics">Analytics</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="affiliate">Affiliate</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="audit-status" className="text-xs font-semibold uppercase tracking-wide">Choice</Label>
          <Select value={status} onValueChange={(v) => setStatus(v as StatusFilter)}>
            <SelectTrigger id="audit-status" aria-label="Filter by choice">
              <SelectValue placeholder="Any choice" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any choice</SelectItem>
              <SelectItem value="allowed">Allowed</SelectItem>
              <SelectItem value="blocked">Blocked</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="audit-action" className="text-xs font-semibold uppercase tracking-wide">Action type</Label>
          <Select value={action} onValueChange={(v) => setAction(v as ActionFilter)}>
            <SelectTrigger id="audit-action" aria-label="Filter by action type">
              <SelectValue placeholder="All actions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All actions</SelectItem>
              <SelectItem value="granted">Granted</SelectItem>
              <SelectItem value="updated">Updated</SelectItem>
              <SelectItem value="revoked">Revoked</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="audit-sort" className="text-xs font-semibold uppercase tracking-wide">Sort by</Label>
          <div className="flex gap-1.5">
            <Select value={sortColumn} onValueChange={(v) => setSortColumn(v as SortColumn)}>
              <SelectTrigger id="audit-sort" aria-label="Sort column">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="created_at">Date &amp; time</SelectItem>
                <SelectItem value="action">Action</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              size="icon"
              aria-label={sortAsc ? "Sort descending" : "Sort ascending"}
              onClick={() => setSortAsc((v) => !v)}
            >
              {sortAsc ? (
                <ArrowUpNarrowWide aria-hidden="true" className="h-4 w-4" />
              ) : (
                <ArrowDownWideNarrow aria-hidden="true" className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
        <span aria-live="polite">
          {loading
            ? "Loading…"
            : `Showing ${rows.length ? page * PAGE_SIZE + 1 : 0}–${page * PAGE_SIZE + rows.length} of ${total} recorded ${total === 1 ? "decision" : "decisions"}`}
        </span>
        {filtersActive && (
          <Button variant="link" size="sm" className="h-auto p-0" onClick={resetFilters}>
            Clear filters
          </Button>
        )}
      </div>

      {total === 0 && !loading ? (
        <p className="mt-4 text-sm text-muted-foreground">
          {filtersActive ? "No decisions match these filters." : "No consent decisions recorded yet."}
        </p>
      ) : (
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="text-xs uppercase tracking-wide text-muted-foreground">
              <tr>
                <th scope="col" className="py-2 pr-4 font-semibold">Date &amp; time</th>
                <th scope="col" className="py-2 pr-4 font-semibold">Action</th>
                <th scope="col" className="py-2 pr-4 font-semibold">Analytics</th>
                <th scope="col" className="py-2 pr-4 font-semibold">Marketing</th>
                <th scope="col" className="py-2 font-semibold">Affiliate</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {rows.map((entry) => (
                <tr key={entry.id}>
                  <td className="py-2 pr-4 align-top text-muted-foreground">
                    {new Date(entry.created_at).toLocaleString()}
                  </td>
                  <td className="py-2 pr-4 align-top font-medium text-foreground">
                    {ACTION_LABEL[entry.action] ?? entry.action}
                  </td>
                  <td className="py-2 pr-4 align-top">{yesNo(entry.analytics_allowed)}</td>
                  <td className="py-2 pr-4 align-top">{yesNo(entry.marketing_allowed)}</td>
                  <td className="py-2 align-top">{yesNo(entry.affiliate_allowed)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {pageCount > 1 && (
        <nav aria-label="Audit log pages" className="mt-4 flex items-center justify-between gap-3">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0 || loading}
          >
            <ChevronLeft aria-hidden="true" className="mr-1 h-4 w-4" />
            Previous
          </Button>
          <span className="text-sm text-muted-foreground" aria-live="polite">
            Page {page + 1} of {pageCount}
          </span>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full"
            onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
            disabled={page >= pageCount - 1 || loading}
          >
            Next
            <ChevronRight aria-hidden="true" className="ml-1 h-4 w-4" />
          </Button>
        </nav>
      )}
    </div>
  );
};

export default ConsentAuditLog;
