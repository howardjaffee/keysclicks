/**
 * Cookie-consent audit log — server-side.
 *
 * Every consent decision (banner accept/reject, per-category change in the
 * preferences modal, reset) is recorded in the `cookie_consent_audit` table
 * with a timestamp so the choice history can be reviewed for compliance.
 * A lightweight local mirror is kept so the UI can react instantly to changes.
 */

import { supabase } from "@/integrations/supabase/client";
import type { ConsentState } from "./consent";

export type ConsentAuditAction =
  | "accept_all"
  | "reject_all"
  | "save_preferences"
  | "reset"
  | "expired_reprompt";

export interface ConsentAuditEntry {
  id: string;
  /** ISO 8601 UTC timestamp of the decision */
  at: string;
  action: ConsentAuditAction;
  categories: ConsentState;
  /** Page the decision was made on */
  path: string;
  userAgent: string;
  version: number;
}

export const AUDIT_EVENT = "kc-cookie-consent-audit-changed";

const isBrowser = () => typeof window !== "undefined";

export const recordConsentAudit = (
  action: ConsentAuditAction,
  categories: ConsentState,
  version: number,
): void => {
  if (!isBrowser()) return;
  const row = {
    action,
    analytics_allowed: categories.analytics,
    marketing_allowed: categories.marketing,
    affiliate_allowed: categories.affiliate,
    path: window.location.pathname,
    user_agent: navigator.userAgent,
    version,
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  void (supabase as any)
    .from("cookie_consent_audit")
    .insert(row)
    .then(() => {
      window.dispatchEvent(new CustomEvent(AUDIT_EVENT));
    });
};

export const onAuditChange = (handler: () => void) => {
  const listener = () => handler();
  window.addEventListener(AUDIT_EVENT, listener);
  return () => window.removeEventListener(AUDIT_EVENT, listener);
};

export const ACTION_LABEL: Record<ConsentAuditAction, string> = {
  accept_all: "Accepted all cookies",
  reject_all: "Rejected non-essential cookies",
  save_preferences: "Saved custom preferences",
  reset: "Reset consent",
  expired_reprompt: "Consent expired — re-prompted",
};
