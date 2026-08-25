import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "kc-cookie-consent";
const EVENT = "kc-cookie-consent-reset";

/** Reopen the consent banner (used by the Cookie Policy page). */
export const resetCookieConsent = () => {
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event(EVENT));
};

export const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const check = () => setVisible(!localStorage.getItem(STORAGE_KEY));
    check();
    window.addEventListener(EVENT, check);
    return () => window.removeEventListener(EVENT, check);
  }, []);

  const decide = (choice: "accepted" | "rejected") => {
    localStorage.setItem(STORAGE_KEY, choice);
    setVisible(false);
    if (choice === "accepted") {
      window.dispatchEvent(new Event("kc-cookie-consent-accepted"));
    }
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] border-t bg-card/95 backdrop-blur-md shadow-lg"
    >
      <div className="container mx-auto flex flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-3">
          <Cookie className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <p className="text-sm text-muted-foreground">
            We use cookies to run this site, measure how our guides perform and track Amazon affiliate
            referrals. Non-essential cookies are only set with your consent.{" "}
            <Link to="/cookies" className="font-semibold text-primary underline underline-offset-4">
              Cookie Policy
            </Link>
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <Button variant="outline" size="sm" className="rounded-full" onClick={() => decide("rejected")}>
            Reject non-essential
          </Button>
          <Button size="sm" className="rounded-full" onClick={() => decide("accepted")}>
            Accept all
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Dismiss cookie banner"
            onClick={() => decide("rejected")}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
