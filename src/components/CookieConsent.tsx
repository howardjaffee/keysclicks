import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Cookie, X } from "lucide-react";
import {
  ALL_DENIED,
  ALL_GRANTED,
  CATEGORY_META,
  CONSENT_EXPIRY_DAYS,
  CONSENT_OPEN_EVENT,
  type ConsentState,
  getConsent,
  hasConsentDecision,
  saveConsent,
} from "@/lib/consent";

/** Reopen the consent preferences (used by the Cookie Policy page). */
export { openCookiePreferences, clearConsent as resetCookieConsent } from "@/lib/consent";

export const CookieConsent = () => {
  const [bannerVisible, setBannerVisible] = useState(false);
  const [prefsOpen, setPrefsOpen] = useState(false);
  const [draft, setDraft] = useState<ConsentState>({ ...ALL_DENIED });

  const syncBanner = useCallback(() => {
    setBannerVisible(!hasConsentDecision());
    setDraft(getConsent());
  }, []);

  useEffect(() => {
    syncBanner();
    const open = () => {
      setDraft(getConsent());
      setPrefsOpen(true);
    };
    window.addEventListener(CONSENT_OPEN_EVENT, open);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, open);
  }, [syncBanner]);

  const commit = (state: ConsentState, action: "accept_all" | "reject_all" | "save_preferences" = "save_preferences") => {
    saveConsent(state, action);
    setDraft(state);
    setBannerVisible(false);
    setPrefsOpen(false);
  };

  return (
    <>
      {bannerVisible && (
        <div
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-desc"
          className="fixed inset-x-0 bottom-0 z-[60] border-t bg-card/95 backdrop-blur-md shadow-lg"
        >
          <div className="container mx-auto flex flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-3">
              <Cookie aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h2 id="cookie-consent-title" className="text-sm font-semibold">
                  We value your privacy
                </h2>
                <p id="cookie-consent-desc" className="mt-1 text-sm text-muted-foreground">
                  We use cookies to run this site, measure how our guides perform and track Amazon affiliate
                  referrals. Choose which categories you allow — your choice is remembered for{" "}
                  {CONSENT_EXPIRY_DAYS} days.{" "}
                  <Link to="/cookies" className="font-semibold text-primary underline underline-offset-4">
                    Cookie Policy
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex w-full shrink-0 flex-wrap items-center gap-2 md:w-auto md:flex-nowrap">
              <Button
                variant="ghost"
                size="sm"
                className="flex-1 rounded-full md:flex-none"
                onClick={() => {
                  setDraft(getConsent());
                  setPrefsOpen(true);
                }}
              >
                Manage preferences
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1 rounded-full md:flex-none"
                onClick={() => commit({ ...ALL_DENIED }, "reject_all")}
              >
                Reject non-essential
              </Button>
              <Button
                size="sm"
                className="flex-1 rounded-full md:flex-none"
                onClick={() => commit({ ...ALL_GRANTED }, "accept_all")}
              >
                Accept all
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="shrink-0"
                aria-label="Dismiss cookie banner and reject non-essential cookies"
                onClick={() => commit({ ...ALL_DENIED }, "reject_all")}
              >
                <X aria-hidden="true" className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      <Dialog open={prefsOpen} onOpenChange={setPrefsOpen}>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Cookie preferences</DialogTitle>
            <DialogDescription>
              Enable or disable each script group. Changes take effect immediately and are re-confirmed
              every {CONSENT_EXPIRY_DAYS} days.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="rounded-lg border bg-muted/40 p-4">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold">Strictly necessary</span>
                <span className="text-xs font-medium text-muted-foreground">Always on</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Security, sign-in session and remembering your cookie choice. These cannot be switched off.
              </p>
            </div>

            {CATEGORY_META.map((c) => (
              <div key={c.key} className="rounded-lg border p-4">
                <div className="flex items-center justify-between gap-4">
                  <label htmlFor={`consent-${c.key}`} className="text-sm font-semibold">
                    {c.title}
                  </label>
                  <Switch
                    id={`consent-${c.key}`}
                    checked={draft[c.key]}
                    onCheckedChange={(v) => setDraft((d) => ({ ...d, [c.key]: v }))}
                    aria-label={`${c.title} cookies`}
                  />
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
              </div>
            ))}
          </div>

          <DialogFooter className="gap-2 sm:justify-between">
            <Button variant="outline" className="rounded-full" onClick={() => commit({ ...ALL_DENIED }, "reject_all")}>
              Reject all
            </Button>
            <div className="flex gap-2">
              <Button variant="secondary" className="rounded-full" onClick={() => commit({ ...ALL_GRANTED }, "accept_all")}>
                Accept all
              </Button>
              <Button className="rounded-full" onClick={() => commit(draft, "save_preferences")}>
                Save choices
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
