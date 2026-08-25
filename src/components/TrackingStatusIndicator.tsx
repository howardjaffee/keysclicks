import { useEffect, useState } from "react";
import { ShieldOff, X } from "lucide-react";
import {
  CATEGORY_META,
  getConsent,
  hasConsentDecision,
  onConsentChange,
  openCookiePreferences,
  type ConsentState,
} from "@/lib/consent";

/**
 * Small persistent indicator shown when one or more cookie categories are off,
 * confirming tracking was revoked and linking straight to the preferences modal.
 */
export const TrackingStatusIndicator = () => {
  const [state, setState] = useState<ConsentState | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const sync = () => setState(hasConsentDecision() ? getConsent() : null);
    sync();
    return onConsentChange(() => {
      setDismissed(false);
      sync();
    });
  }, []);

  if (!state || dismissed) return null;

  const off = CATEGORY_META.filter((c) => !state[c.key]);
  if (off.length === 0) return null;

  const names = off.map((c) => c.title.split(" ")[0].toLowerCase());
  const summary =
    off.length === CATEGORY_META.length
      ? "All optional tracking is off"
      : `${names.join(", ")} tracking is off`;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-4 left-4 z-40 flex max-w-[calc(100vw-2rem)] items-center gap-2 rounded-full border bg-card/95 px-3 py-2 text-xs shadow-lg backdrop-blur sm:text-sm"
    >
      <ShieldOff aria-hidden="true" className="h-4 w-4 shrink-0 text-primary" />
      <span className="truncate text-muted-foreground">
        <span className="font-medium text-foreground">{summary}</span> — scripts stopped and cookies cleared.
      </span>
      <button
        type="button"
        onClick={openCookiePreferences}
        className="shrink-0 rounded-full font-semibold text-primary underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Manage
      </button>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        aria-label="Hide tracking status indicator"
        className="shrink-0 rounded-full p-1 text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <X aria-hidden="true" className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};

export default TrackingStatusIndicator;
