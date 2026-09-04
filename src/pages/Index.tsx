import { Seo } from "@/components/Seo";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CompatibilityMatrix } from "@/components/CompatibilityMatrix";
import { KnowledgeBase } from "@/components/KnowledgeBase";
import { SoftwareFinderQuiz } from "@/components/SoftwareFinderQuiz";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const insightTeasers = [
  {
    title: "Windows 11 vs Windows 10: Enterprise Security & Hardware Requirements Compared",
    body: "How the TPM 2.0 baseline changes which protections are on by default, and what that means for migration planning.",
    hash: "#windows-11-vs-windows-10-enterprise-security",
  },
  {
    title: "Understanding Digital Entitlements vs. Product Key Activation",
    body: "Why some machines reactivate silently after a wipe while others demand a 25-character key — and what happens when hardware changes.",
    hash: "#digital-entitlements-vs-product-keys",
  },
  {
    title: "Best Practices for Deploying Endpoint Antivirus in Remote Work Environments",
    body: "Cloud-managed policy, update paths independent of the VPN, and the operational habits distributed fleets depend on.",
    hash: "#endpoint-antivirus-remote-work",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Software Licensing, Compatibility & Deployment Analyzer (2026 Edition)"
        description="Independent educational portal: compare software editions, verify hardware and architecture compatibility, and study licensing models, deployment protocols and activation error codes."
        path="/"
      />
      <Header />
      <main>
        <Hero />
        <CompatibilityMatrix />
        <KnowledgeBase />
        <SoftwareFinderQuiz />

        <section className="border-t bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold md:text-4xl">Software Architecture Insights</h2>
              <p className="mt-4 text-muted-foreground">
                Long-form original analysis on platform security baselines, licensing mechanics and endpoint security
                deployment.
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
              {insightTeasers.map((a) => (
                <article key={a.hash} className="rounded-2xl border bg-card p-6">
                  <h3 className="font-semibold leading-snug">{a.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
                  <Link
                    to={`/insights${a.hash}`}
                    className="mt-4 inline-block text-sm font-semibold text-primary underline underline-offset-4"
                  >
                    Read the article
                  </Link>
                </article>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                <Link to="/insights">View the full insights hub</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
