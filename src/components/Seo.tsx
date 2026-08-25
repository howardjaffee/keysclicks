import { Helmet } from "react-helmet-async";

/** Canonical domain for the published site — used for canonical and og:url tags. */
export const SITE_URL = "https://keysclicks.lovable.app";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

interface SeoProps {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  jsonLd?: Record<string, unknown>;
  /** Breadcrumb trail for BreadcrumbList structured data, e.g. [{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]. */
  breadcrumbs?: BreadcrumbItem[];
}

/** Per-route head tags: title, description, canonical, Open Graph and optional JSON-LD. */
export const Seo = ({ title, description, path, type = "website", jsonLd, breadcrumbs }: SeoProps) => {
  const url = `${SITE_URL}${path}`;
  const breadcrumbLd = breadcrumbs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${SITE_URL}${item.path}`,
        })),
      }
    : null;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
      {breadcrumbLd && <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>}
    </Helmet>
  );
};
