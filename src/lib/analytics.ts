/**
 * Category-gated analytics / advertising loader.
 * No Google tag, conversion tag or affiliate tracking script runs until the
 * visitor grants the matching cookie category in the consent modal.
 */

import { getConsent, hasConsentDecision, onConsentChange, type ConsentState } from "./consent";

const GOOGLE_TAG_ID = "AW-16504739130";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let tagLoaded = false;
let current: ConsentState = { analytics: false, marketing: false, affiliate: false };

const gtag = (...args: unknown[]) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
};

const loadGoogleTag = () => {
  if (tagLoaded) return;
  tagLoaded = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`;
  document.head.appendChild(script);

  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GOOGLE_TAG_ID);
};

/** Google Consent Mode v2 signal map for the current category choices. */
const consentSignals = (state: ConsentState) => ({
  analytics_storage: state.analytics ? "granted" : "denied",
  ad_storage: state.marketing ? "granted" : "denied",
  ad_user_data: state.marketing ? "granted" : "denied",
  ad_personalization: state.marketing ? "granted" : "denied",
  personalization_storage: state.marketing ? "granted" : "denied",
  functionality_storage: state.affiliate ? "granted" : "denied",
  security_storage: "granted",
});

const pushConsentMode = (state: ConsentState, mode: "default" | "update") => {
  gtag("consent", mode, consentSignals(state));

  // Mirror the change as a dataLayer event so GTM triggers can react to it.
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: mode === "default" ? "consent_default" : "consent_update",
    consent_mode: consentSignals(state),
    consent_categories: {
      analytics: state.analytics,
      marketing: state.marketing,
      affiliate: state.affiliate,
    },
    consent_updated_at: new Date().toISOString(),
  });
};

const applyConsent = (state: ConsentState) => {
  current = state;
  pushConsentMode(state, "update");
  if (state.analytics || state.marketing) loadGoogleTag();
};

export const hasAnalyticsConsent = () => current.analytics;
export const hasMarketingConsent = () => current.marketing;
export const hasAffiliateConsent = () => current.affiliate;

/** Send a page view — no-op without analytics consent. */
export const trackPageView = (path: string) => {
  if (!tagLoaded || !current.analytics) return;
  gtag("event", "page_view", { page_path: path });
};

/** Track an affiliate outbound click — no-op without affiliate consent. */
export const trackAffiliateClick = (label: string) => {
  if (!tagLoaded || !current.affiliate) return;
  gtag("event", "affiliate_click", { affiliate_target: label });
};

export const initAnalytics = () => {
  if (typeof window === "undefined") return;

  // Consent Mode defaults: everything denied until the visitor opts in.
  pushConsentMode({ analytics: false, marketing: false, affiliate: false }, "default");

  const stored = getConsent();
  if (hasConsentDecision()) applyConsent(stored);
  else current = stored;

  onConsentChange(applyConsent);
};
