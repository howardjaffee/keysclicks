/**
 * Category-level cookie consent store with expiry.
 * Categories: necessary (always on), analytics, marketing, affiliate.
 */

import { recordConsentAudit, type ConsentAuditAction } from "./consentAudit";

export type ConsentCategory = "analytics" | "marketing" | "affiliate";

export type ConsentState = Record<ConsentCategory, boolean>;

export interface StoredConsent extends ConsentState {
  /** epoch ms when the choice was made */
  timestamp: number;
  version: number;
}

export const STORAGE_KEY = "kc-cookie-consent-v2";
export const LEGACY_KEY = "kc-cookie-consent";
export const CONSENT_VERSION = 1;
/** Re-prompt after this period (days) so consent stays current. */
export const CONSENT_EXPIRY_DAYS = 180;

export const CONSENT_CHANGED_EVENT = "kc-cookie-consent-changed";
export const CONSENT_OPEN_EVENT = "kc-cookie-consent-open";

export const CATEGORY_META: {
  key: ConsentCategory;
  title: string;
  description: string;
}[] = [
  {
    key: "analytics",
    title: "Analytics",
    description:
      "Anonymous usage statistics that tell us which guides and reviews are useful so we can improve them.",
  },
  {
    key: "marketing",
    title: "Marketing & advertising",
    description:
      "Google Ads conversion measurement and ad personalisation so we can show relevant campaigns.",
  },
  {
    key: "affiliate",
    title: "Affiliate tracking",
    description:
      "Credits qualifying purchases made through our Buy buttons. This never changes the price you pay.",
  },
];

export const ALL_DENIED: ConsentState = {
  analytics: false,
  marketing: false,
  affiliate: false,
};

export const ALL_GRANTED: ConsentState = {
  analytics: true,
  marketing: true,
  affiliate: true,
};

const isBrowser = () => typeof window !== "undefined";

export const consentExpiresAt = (stored: StoredConsent) =>
  stored.timestamp + CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000;

export const isExpired = (stored: StoredConsent) => Date.now() > consentExpiresAt(stored);

/** Returns the stored consent, or null when absent, invalid, outdated or expired. */
export const readConsent = (): StoredConsent | null => {
  if (!isBrowser()) return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      // Migrate the old all-or-nothing choice, keeping the same expiry rules.
      const legacy = localStorage.getItem(LEGACY_KEY);
      if (!legacy) return null;
      const migrated: StoredConsent = {
        ...(legacy === "accepted" ? ALL_GRANTED : ALL_DENIED),
        timestamp: Date.now(),
        version: CONSENT_VERSION,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
      localStorage.removeItem(LEGACY_KEY);
      return migrated;
    }
    const parsed = JSON.parse(raw) as StoredConsent;
    if (!parsed || typeof parsed !== "object" || parsed.version !== CONSENT_VERSION) return null;
    if (isExpired(parsed)) return null;
    return {
      analytics: !!parsed.analytics,
      marketing: !!parsed.marketing,
      affiliate: !!parsed.affiliate,
      timestamp: parsed.timestamp,
      version: parsed.version,
    };
  } catch {
    return null;
  }
};

/** Current consent per category — everything denied until a valid choice exists. */
export const getConsent = (): ConsentState => {
  const stored = readConsent();
  if (!stored) return { ...ALL_DENIED };
  const { analytics, marketing, affiliate } = stored;
  return { analytics, marketing, affiliate };
};

export const hasConsentDecision = () => readConsent() !== null;

export const saveConsent = (state: ConsentState, action: ConsentAuditAction = "save_preferences") => {
  if (!isBrowser()) return;
  const stored: StoredConsent = { ...state, timestamp: Date.now(), version: CONSENT_VERSION };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  localStorage.removeItem(LEGACY_KEY);
  recordConsentAudit(action, state, CONSENT_VERSION);
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT, { detail: state }));
};

export const clearConsent = () => {
  if (!isBrowser()) return;
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(LEGACY_KEY);
  recordConsentAudit("reset", { ...ALL_DENIED }, CONSENT_VERSION);
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT, { detail: { ...ALL_DENIED } }));
};

/** Open the cookie preferences modal from anywhere (header, footer, policy page). */
export const openCookiePreferences = () => {
  if (!isBrowser()) return;
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
};

export const onConsentChange = (handler: (state: ConsentState) => void) => {
  const listener = (e: Event) => handler((e as CustomEvent<ConsentState>).detail ?? getConsent());
  window.addEventListener(CONSENT_CHANGED_EVENT, listener);
  return () => window.removeEventListener(CONSENT_CHANGED_EVENT, listener);
};
