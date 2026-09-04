import { Button } from "@/components/ui/button";
import { Cpu, Layers, ShieldCheck, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  {
    icon: Layers,
    title: "Edition comparison",
    body: "Feature-level differences between Home, Pro, Education and Enterprise builds — documented, not sold.",
  },
  {
    icon: Cpu,
    title: "Hardware compatibility",
    body: "TPM 2.0, Secure Boot, ARM64 and x86-64 requirements mapped against each supported edition.",
  },
  {
    icon: ShieldCheck,
    title: "Licensing models",
    body: "How OEM, Retail and Volume entitlements differ in transfer rights, reactivation and audit exposure.",
  },
];

export const Hero = () => (
  <section className="relative overflow-hidden bg-hero text-hero-foreground">
    <div className="absolute inset-0 bg-gradient-to-br from-hero via-hero to-primary/20" />
    <div
      aria-hidden="true"
      className="absolute inset-0 opacity-[0.07]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--primary-glow)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-glow)) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
      }}
    />

    <div className="container relative z-10 mx-auto px-4 py-20 lg:py-28">
      <div className="max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-4 py-1.5 text-sm font-medium text-primary-glow backdrop-blur-sm">
          <BookOpen className="h-4 w-4" />
          Independent educational reference portal
        </span>

        <h1 className="mt-6 text-3xl font-bold leading-[1.1] md:text-5xl lg:text-6xl">
          Software Licensing, Compatibility &amp; Deployment Analyzer
          <span className="block text-gradient">(2026 Edition)</span>
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-hero-foreground/85 md:text-xl">
          Explore system architecture, compare software editions, and verify hardware compatibility before deployment.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button size="lg" className="group rounded-full px-8 shadow-primary" asChild>
            <a href="#analyzer">
              Open the compatibility matrix
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-hero-foreground/30 bg-hero-foreground/5 px-8 text-hero-foreground hover:bg-hero-foreground/15"
            asChild
          >
            <Link to="/insights">Read architecture insights</Link>
          </Button>
        </div>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {pillars.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-hero-foreground/15 bg-hero-foreground/5 p-6 backdrop-blur-sm transition-colors hover:border-primary/40"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/20 text-primary-glow">
              <item.icon className="h-5 w-5" />
            </span>
            <h2 className="mt-4 font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-hero-foreground/75">{item.body}</p>
          </div>
        ))}
      </div>

      <p className="mt-10 max-w-3xl text-xs leading-relaxed text-hero-foreground/60">
        This portal publishes reference documentation only. We do not sell, resell, issue or manage software licences,
        and we do not operate a technical support desk. All trademarks are the property of their respective owners.
      </p>
    </div>
  </section>
);
