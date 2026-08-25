import { Seo } from "@/components/Seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { resetCookieConsent } from "@/components/CookieConsent";

const cookieTypes = [
  {
    name: "Strictly necessary",
    purpose:
      "Keep the site secure and remember your cookie choice and sign-in session. These cannot be switched off.",
    examples: "Authentication session, cookie consent preference",
  },
  {
    name: "Analytics",
    purpose:
      "Help us understand which pages, guides and product reviews are useful so we can improve them.",
    examples: "Google Analytics / Google Tag (gtag.js)",
  },
  {
    name: "Advertising & conversion",
    purpose:
      "Measure the performance of our Google Ads campaigns and avoid showing you irrelevant ads.",
    examples: "Google Ads conversion tag (AW-16504739130)",
  },
  {
    name: "Affiliate tracking",
    purpose:
      "When you click a Buy button, the retailer sets a cookie so any qualifying purchase is credited to us. This never changes the price you pay.",
    examples: "Amazon Associates tracking (store ID digitalcor054-20)",
  },
];

const Cookies = () => (
  <div className="min-h-screen bg-background">
    <Seo
      title="Cookie Policy | Keys & Clicks"
      description="What cookies Keys & Clicks uses for analytics, advertising and Amazon affiliate tracking, and how you can control or withdraw your consent at any time."
      path="/cookies"
    />
    <Header />
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-display text-3xl font-bold md:text-4xl">Cookie Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <section className="mt-8 space-y-4 text-muted-foreground">
        <p>
          Cookies are small text files stored on your device when you visit a website. Keys &amp; Clicks
          uses them to keep the site working, to understand how visitors use our guides and reviews, and
          to credit qualifying purchases made through our affiliate links.
        </p>
        <p>
          Non-essential cookies (analytics, advertising and affiliate tracking) are only set after you
          accept them in our cookie banner. You can change your mind at any time using the button at the
          bottom of this page.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">Cookies we use</h2>
        <div className="mt-4 overflow-x-auto rounded-xl border">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-4 py-3 font-semibold">Category</th>
                <th className="px-4 py-3 font-semibold">Purpose</th>
                <th className="px-4 py-3 font-semibold">Examples</th>
              </tr>
            </thead>
            <tbody>
              {cookieTypes.map((c) => (
                <tr key={c.name} className="border-t align-top">
                  <td className="px-4 py-3 font-medium">{c.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{c.purpose}</td>
                  <td className="px-4 py-3 text-muted-foreground">{c.examples}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10 space-y-4 text-muted-foreground">
        <h2 className="text-xl font-semibold text-foreground">Managing cookies in your browser</h2>
        <p>
          Every major browser lets you block or delete cookies from its settings or privacy menu.
          Blocking strictly necessary cookies may stop parts of the site — such as signing in — from
          working correctly.
        </p>
        <h2 className="text-xl font-semibold text-foreground">Third parties</h2>
        <p>
          Some cookies are set by third parties, including Google (analytics and ads) and Amazon
          (affiliate tracking). Their use of data is governed by their own privacy policies. See our{" "}
          <a href="/privacy" className="font-semibold text-primary underline underline-offset-4">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="/affiliate-disclosure" className="font-semibold text-primary underline underline-offset-4">
            Affiliate Disclosure
          </a>{" "}
          for more detail.
        </p>
        <h2 className="text-xl font-semibold text-foreground">Contact</h2>
        <p>
          Questions about this policy? Email{" "}
          <a href="mailto:support@keysandclicks.com" className="font-semibold text-primary underline underline-offset-4">
            support@keysandclicks.com
          </a>{" "}
          or call 540 242 3003.
        </p>
      </section>

      <div className="mt-10 rounded-xl border bg-card p-6">
        <h2 className="text-lg font-semibold">Change your cookie preferences</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Reopen the consent banner to accept or reject non-essential cookies.
        </p>
        <Button className="mt-4 rounded-full" onClick={resetCookieConsent}>
          Update cookie preferences
        </Button>
      </div>
    </main>
    <Footer />
  </div>
);

export default Cookies;
