/**
 * Consent-gated analytics / advertising loader.
 * No Google tag, conversion tag or affiliate tracking script is injected
 * until the visitor accepts non-essential cookies in the consent banner.
 */

const GOOGLE_TAG_ID = "AW-16504739130";
const STORAGE_KEY = "kc-cookie-consent";
const ACCEPTED_EVENT = "kc-cookie-consent-accepted";
const RESET_EVENT = "kc-cookie-consent-reset";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let loaded = false;

const gtag = (...args: unknown[]) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
};

const loadGoogleTag = () => {
  if (loaded) return;
  loaded = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`;
  document.head.appendChild(script);

  window.gtag = gtag;
  gtag("js", new Date());
  gtag("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
  });
  gtag("config", GOOGLE_TAG_ID);
};

export const hasTrackingConsent = () =>
  typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY) === "accepted";

/** Send a page view — no-op until consent is granted. */
export const trackPageView = (path: string) => {
  if (!loaded) return;
  gtag("event", "page_view", { page_path: path });
};

/** Track an affiliate outbound click — no-op until consent is granted. */
export const trackAffiliateClick = (label: string) => {
  if (!loaded) return;
  gtag("event", "affiliate_click", { affiliate_target: label });
};

export const initAnalytics = () => {
  if (typeof window === "undefined") return;

  // Consent Mode defaults: everything denied until the visitor opts in.
  gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });

  if (hasTrackingConsent()) loadGoogleTag();

  window.addEventListener(ACCEPTED_EVENT, loadGoogleTag);
  window.addEventListener(RESET_EVENT, () => {
    if (hasTrackingConsent()) loadGoogleTag();
  });
};
