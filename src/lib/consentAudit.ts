/**
 * Internal cookie-consent audit log.
 *
 * Every consent decision (banner accept/reject, per-category change in the
 * preferences modal, reset) is appended locally with a timestamp so the choice
 * history can be reviewed for compliance purposes. Stored on the visitor's
 * device only — no personal data leaves the browser.
 */

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

export const AUDIT_KEY = "kc-cookie-consent-audit-v1";
export const AUDIT_EVENT = "kc-cookie-consent-audit-changed";
/** Keep the log bounded so localStorage never grows unchecked. */
export const AUDIT_MAX_ENTRIES = 100;

const isBrowser = () => typeof window !== "undefined";

const newId = () => {
  try {
    return crypto.randomUUID();
  } catch {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
  }
};

export const readAuditLog = (): ConsentAuditEntry[] => {
  if (!isBrowser()) return [];
  try {
    const raw = localStorage.getItem(AUDIT_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as ConsentAuditEntry[]) : [];
  } catch {
    return [];
  }
};

export const recordConsentAudit = (
  action: ConsentAuditAction,
  categories: ConsentState,
  version: number,
): ConsentAuditEntry | null => {
  if (!isBrowser()) return null;
  const entry: ConsentAuditEntry = {
    id: newId(),
    at: new Date().toISOString(),
    action,
    categories: { ...categories },
    path: window.location.pathname,
    userAgent: navigator.userAgent,
    version,
  };
  try {
    const next = [entry, ...readAuditLog()].slice(0, AUDIT_MAX_ENTRIES);
    localStorage.setItem(AUDIT_KEY, JSON.stringify(next));
    window.dispatchEvent(new CustomEvent(AUDIT_EVENT, { detail: next }));
  } catch {
    /* storage unavailable — audit is best effort */
  }
  return entry;
};

export const clearAuditLog = () => {
  if (!isBrowser()) return;
  localStorage.removeItem(AUDIT_KEY);
  window.dispatchEvent(new CustomEvent(AUDIT_EVENT, { detail: [] }));
};

export const exportAuditLog = () => JSON.stringify(readAuditLog(), null, 2);

export const onAuditChange = (handler: (entries: ConsentAuditEntry[]) => void) => {
  const listener = (e: Event) => handler((e as CustomEvent<ConsentAuditEntry[]>).detail ?? readAuditLog());
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
