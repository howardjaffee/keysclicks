import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Apple, Monitor, Home, Briefcase, RotateCcw, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

type OS = "windows" | "mac";
type Usage = "home" | "office";

const results: Record<OS, Record<Usage, { keyType: string; summary: string; steps: string[]; link: string }>> = {
  windows: {
    home: {
      keyType: "Windows 11 Home retail key + a consumer antivirus subscription",
      summary:
        "A retail Home licence covers one personal PC and can be moved if you replace the machine. Pair it with a single consumer security suite — never two.",
      steps: [
        "Install Windows 11 Home and run Windows Update until no updates remain.",
        "Sign in with a Microsoft account so the licence is recoverable after a hardware change.",
        "Enter the key under Settings → System → Activation → Change product key.",
        "Confirm with slmgr /xpr — it should say permanently activated.",
        "Remove any pre-installed trial security suite with the vendor's removal tool, reboot, then install your antivirus.",
      ],
      link: "/antivirus",
    },
    office: {
      keyType: "Windows 11 Pro key + Office 2021 Professional or Microsoft 365 Business",
      summary:
        "Pro adds BitLocker, Remote Desktop and domain join — the features small offices actually need. Choose a perpetual Office key for fixed desktops, or a 365 subscription if staff work across devices.",
      steps: [
        "Install or upgrade to Windows 11 Pro, then finish all pending updates.",
        "Activate Windows first, and only then install the Office suite.",
        "Activate Office from File → Account inside any installed app.",
        "Turn on BitLocker and confirm the recovery key is stored off the device.",
        "Install one business-grade security suite and exclude your accounting data folders from real-time scanning.",
      ],
      link: "/hot-deals",
    },
  },
  mac: {
    home: {
      keyType: "Microsoft 365 Personal + a Mac-compatible security suite",
      summary:
        "macOS licensing is tied to your Apple ID, so there is no OS key to buy. What you do need is an Office plan and a security product that actually ships a Mac build.",
      steps: [
        "Update macOS fully before installing anything.",
        "Redeem your Microsoft 365 code at the Microsoft redeem page while signed into the account you will keep.",
        "Install Office from the Mac App Store or Microsoft's installer, then sign in to activate.",
        "Check the antivirus listing explicitly says macOS supported before buying — many keys are Windows-only.",
        "Allow the security suite's system extension in System Settings → Privacy & Security, or real-time protection stays off.",
      ],
      link: "/antivirus",
    },
    office: {
      keyType: "Microsoft 365 Business + multi-device antivirus with Mac seats",
      summary:
        "For a Mac-based office, buy per-user subscriptions rather than per-device keys, and pick a security licence whose seats can be split between Macs and any Windows machines you keep.",
      steps: [
        "Create the business account first, then assign a seat to each user before installing.",
        "Install Office per user and sign in with the assigned work account, not a personal Apple ID.",
        "Enable FileVault on every Mac and record recovery keys centrally.",
        "Deploy the security suite and approve its system extension on each machine.",
        "Verify seat counts in the vendor dashboard so you are not paying for unused licences.",
      ],
      link: "/hot-deals",
    },
  },
};

export const SoftwareFinderQuiz = () => {
  const [os, setOs] = useState<OS | null>(null);
  const [usage, setUsage] = useState<Usage | null>(null);

  const step = os === null ? 1 : usage === null ? 2 : 3;
  const result = os && usage ? results[os][usage] : null;

  return (
    <section id="software-finder" className="py-20 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Interactive helper</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Find the Right Software for Your Setup</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Three quick questions and you will know which licence type fits your machine — plus the exact installation
            order our support team uses.
          </p>
        </div>

        <Card className="mx-auto mt-10 max-w-3xl p-6 md:p-8">
          <div className="mb-6 flex items-center gap-2" aria-label={`Step ${step} of 3`}>
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex flex-1 items-center gap-2">
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                    step >= s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {s}
                </span>
                {s < 3 && <span className={`h-1 flex-1 rounded ${step > s ? "bg-primary" : "bg-muted"}`} />}
              </div>
            ))}
          </div>

          {/* Step 1 */}
          <fieldset className="mb-6">
            <legend className="mb-3 font-semibold">Step 1 — Which operating system?</legend>
            <div className="grid gap-3 sm:grid-cols-2">
              {([
                { id: "windows" as OS, label: "Windows PC", icon: Monitor },
                { id: "mac" as OS, label: "Mac", icon: Apple },
              ]).map((o) => (
                <button
                  key={o.id}
                  type="button"
                  aria-pressed={os === o.id}
                  onClick={() => {
                    setOs(o.id);
                    setUsage(null);
                  }}
                  className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-colors ${
                    os === o.id ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
                  }`}
                >
                  <o.icon className="h-5 w-5 text-primary" />
                  <span className="font-medium">{o.label}</span>
                </button>
              ))}
            </div>
          </fieldset>

          {/* Step 2 */}
          <fieldset className="mb-6" disabled={!os}>
            <legend className={`mb-3 font-semibold ${!os ? "text-muted-foreground" : ""}`}>
              Step 2 — How will it be used?
            </legend>
            <div className="grid gap-3 sm:grid-cols-2">
              {([
                { id: "home" as Usage, label: "Home / personal", icon: Home },
                { id: "office" as Usage, label: "Office / business", icon: Briefcase },
              ]).map((u) => (
                <button
                  key={u.id}
                  type="button"
                  aria-pressed={usage === u.id}
                  onClick={() => setUsage(u.id)}
                  className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-colors disabled:opacity-50 ${
                    usage === u.id ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
                  }`}
                >
                  <u.icon className="h-5 w-5 text-primary" />
                  <span className="font-medium">{u.label}</span>
                </button>
              ))}
            </div>
          </fieldset>

          {/* Step 3 */}
          <div aria-live="polite">
            <h3 className="mb-3 font-semibold">Step 3 — Your recommendation</h3>
            {!result ? (
              <p className="rounded-xl border border-dashed border-border p-6 text-sm text-muted-foreground">
                Answer the two questions above and your recommended key type and installation steps will appear here.
              </p>
            ) : (
              <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
                <p className="text-lg font-semibold">{result.keyType}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{result.summary}</p>
                <ol className="mt-4 space-y-2">
                  {result.steps.map((s) => (
                    <li key={s} className="flex gap-2 text-sm leading-relaxed">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button asChild className="rounded-full">
                    <Link to={result.link}>See matching products</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full"
                    onClick={() => {
                      setOs(null);
                      setUsage(null);
                    }}
                  >
                    <RotateCcw className="mr-2 h-4 w-4" /> Start over
                  </Button>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  Guidance only — all products are purchased and fulfilled by Amazon or the software vendor.
                </p>
              </div>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};
