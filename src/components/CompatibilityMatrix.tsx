import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check, Minus, SlidersHorizontal } from "lucide-react";

type Row = {
  feature: string;
  values: string[];
};

type MatrixResult = {
  heading: string;
  editions: string[];
  rows: Row[];
  notes: string[];
};

const categories = [
  { value: "windows11", label: "Windows 11" },
  { value: "windows10", label: "Windows 10" },
  { value: "office", label: "Microsoft Office" },
  { value: "antivirus", label: "Antivirus Suites" },
];

const environments = [
  { value: "home", label: "Home" },
  { value: "smb", label: "Small Business" },
  { value: "enterprise", label: "Enterprise" },
];

const architectures = [
  { value: "x64", label: "64-bit x86 (x86-64)" },
  { value: "arm64", label: "ARM64" },
  { value: "tpm-on", label: "TPM 2.0 Enabled" },
  { value: "tpm-off", label: "TPM 2.0 Disabled" },
];

const matrices: Record<string, MatrixResult> = {
  windows11: {
    heading: "Windows 11 edition matrix (24H2 servicing baseline)",
    editions: ["Home", "Pro", "Enterprise"],
    rows: [
      { feature: "Maximum physical RAM", values: ["128 GB", "2 TB", "6 TB"] },
      { feature: "Maximum CPU sockets", values: ["1", "2", "2"] },
      { feature: "BitLocker device encryption", values: ["Device encryption only", "Full BitLocker + management", "BitLocker + Network Unlock"] },
      { feature: "Hyper-V / nested virtualization", values: ["no", "yes", "yes"] },
      { feature: "Windows Sandbox", values: ["no", "yes", "yes"] },
      { feature: "Domain / Entra ID join", values: ["no", "yes", "yes"] },
      { feature: "Group Policy & MDM control", values: ["MDM only", "yes", "yes"] },
      { feature: "Credential Guard / App Control", values: ["no", "Partial", "yes"] },
      { feature: "Windows Update for Business", values: ["no", "yes", "yes"] },
      { feature: "TPM 2.0 requirement", values: ["Required", "Required", "Required"] },
    ],
    notes: [
      "Windows 11 requires UEFI firmware with Secure Boot capability, TPM 2.0, 4 GB RAM and 64 GB storage on a supported 64-bit processor.",
      "Consumer devices normally receive device encryption; policy-managed BitLocker with recovery-key escrow requires Pro or higher.",
    ],
  },
  windows10: {
    heading: "Windows 10 edition matrix (22H2 final servicing branch)",
    editions: ["Home", "Pro", "Enterprise"],
    rows: [
      { feature: "Maximum physical RAM (x64)", values: ["128 GB", "2 TB", "6 TB"] },
      { feature: "Maximum CPU sockets", values: ["1", "2", "4"] },
      { feature: "BitLocker drive encryption", values: ["no", "yes", "yes"] },
      { feature: "Hyper-V client", values: ["no", "yes", "yes"] },
      { feature: "Remote Desktop host", values: ["no", "yes", "yes"] },
      { feature: "Domain join / Group Policy", values: ["no", "yes", "yes"] },
      { feature: "AppLocker / Device Guard", values: ["no", "no", "yes"] },
      { feature: "LTSC servicing option", values: ["no", "no", "yes"] },
      { feature: "TPM 2.0 requirement", values: ["Optional", "Recommended", "Recommended"] },
    ],
    notes: [
      "Windows 10 22H2 reached the end of mainstream consumer servicing; migration planning to Windows 11 or an ESU programme is a documented Microsoft path.",
      "32-bit Windows 10 installations are capped at 4 GB addressable RAM regardless of edition.",
    ],
  },
  office: {
    heading: "Microsoft Office / Microsoft 365 edition matrix",
    editions: ["Home", "Business Standard", "Enterprise E3"],
    rows: [
      { feature: "Core desktop apps", values: ["Word, Excel, PowerPoint, OneNote", "+ Outlook, Access, Publisher", "+ Outlook, Access, Publisher"] },
      { feature: "Licence model", values: ["One-time or subscription", "Subscription per user", "Subscription per user"] },
      { feature: "Devices per user", values: ["Up to 5", "Up to 5 PCs + 5 mobile", "Up to 5 PCs + 5 mobile"] },
      { feature: "Cloud storage per user", values: ["1 TB", "1 TB", "Unlimited archiving tiers"] },
      { feature: "Exchange hosted mailbox", values: ["no", "50 GB", "100 GB"] },
      { feature: "Shared computer activation", values: ["no", "no", "yes"] },
      { feature: "Volume / ODT deployment", values: ["no", "Partial", "yes"] },
      { feature: "Data-loss prevention & retention", values: ["no", "Partial", "yes"] },
      { feature: "ARM64 native builds", values: ["yes", "yes", "yes"] },
    ],
    notes: [
      "Perpetual Office editions attach to one device and are not transferable when sold as OEM; subscription plans follow the user identity instead.",
      "Enterprise deployments should use the Office Deployment Tool with an XML configuration to pin an update channel.",
    ],
  },
  antivirus: {
    heading: "Endpoint security tier matrix (capability reference)",
    editions: ["Built-in / Free", "Consumer Suite", "Business EDR"],
    rows: [
      { feature: "Real-time signature engine", values: ["yes", "yes", "yes"] },
      { feature: "Behavioural / heuristic detection", values: ["Partial", "yes", "yes"] },
      { feature: "Cloud reputation lookups", values: ["yes", "yes", "yes"] },
      { feature: "Ransomware rollback", values: ["no", "Partial", "yes"] },
      { feature: "Managed firewall policy", values: ["Local only", "Local only", "yes"] },
      { feature: "Central console & reporting", values: ["no", "no", "yes"] },
      { feature: "EDR telemetry / threat hunting", values: ["no", "no", "yes"] },
      { feature: "Typical idle RAM footprint", values: ["~120 MB", "~200-400 MB", "~250-500 MB"] },
      { feature: "Scheduled full-scan CPU impact", values: ["Low", "Medium", "Medium"] },
    ],
    notes: [
      "Running two real-time engines simultaneously causes file-lock contention; remove the previous product with its vendor removal tool before installing a replacement.",
      "Independent lab results (AV-TEST, AV-Comparatives) publish protection, performance and false-positive scores you can verify directly.",
    ],
  },
};

const environmentGuidance: Record<string, Record<string, string>> = {
  windows11: {
    home: "For a single household device, Home covers device encryption and Microsoft account sign-in. Pro is only necessary if you need BitLocker management, Hyper-V or Remote Desktop hosting.",
    smb: "Pro is the practical baseline: Entra ID join, Windows Update for Business rings and BitLocker recovery-key escrow are all Pro-gated.",
    enterprise: "Enterprise adds Credential Guard, App Control policies, Network Unlock and per-user volume entitlements administered through a volume licensing agreement.",
  },
  windows10: {
    home: "Home lacks BitLocker; plan an upgrade path or hardware refresh if disk encryption is required.",
    smb: "Pro provides domain join, Group Policy and BitLocker — the minimum for a managed fleet.",
    enterprise: "Enterprise/LTSC targets fixed-purpose devices with extended servicing and reduced feature-update cadence.",
  },
  office: {
    home: "Family and Personal plans are licensed per household identity and cannot be used for commercial work under the consumer terms.",
    smb: "Business Standard adds hosted Exchange, Teams and per-user commercial use rights.",
    enterprise: "E3 adds shared computer activation, retention policies and centrally managed deployment channels.",
  },
  antivirus: {
    home: "The built-in platform engine plus disciplined patching covers most household risk; add a suite for parental controls or VPN bundles.",
    smb: "Choose a product with a hosted console so policy and alerts are visible across all endpoints.",
    enterprise: "EDR telemetry, rollback and SIEM export become the deciding factors rather than raw detection scores.",
  },
};

const architectureGuidance: Record<string, string> = {
  x64: "x86-64 is the reference architecture: every edition and installer listed above ships a native 64-bit build, and virtualization features require VT-x/AMD-V enabled in firmware.",
  arm64: "On ARM64 devices, verify native builds. Windows 11 runs natively on ARM64 with x64 emulation; some security drivers, VPN clients and older Office add-ins have no ARM64 build and will not load.",
  "tpm-on": "With TPM 2.0 enabled and Secure Boot active, BitLocker can seal keys to platform measurements, and Windows 11 setup will pass the hardware readiness check.",
  "tpm-off": "With TPM 2.0 disabled, Windows 11 setup fails its readiness check and BitLocker falls back to password or USB-startup-key protectors. Enable the fTPM/PTT option in firmware before deployment planning.",
};

const renderCell = (value: string) => {
  if (value === "yes") return <Check className="mx-auto h-4 w-4 text-primary" aria-label="Supported" />;
  if (value === "no") return <Minus className="mx-auto h-4 w-4 text-muted-foreground" aria-label="Not supported" />;
  return <span>{value}</span>;
};

export const CompatibilityMatrix = () => {
  const [category, setCategory] = useState("windows11");
  const [environment, setEnvironment] = useState("smb");
  const [architecture, setArchitecture] = useState("x64");
  const [result, setResult] = useState<{
    matrix: MatrixResult;
    environment: string;
    architecture: string;
    envLabel: string;
    archLabel: string;
  } | null>(null);

  const analyze = () => {
    setResult({
      matrix: matrices[category],
      environment: environmentGuidance[category][environment],
      architecture: architectureGuidance[architecture],
      envLabel: environments.find((e) => e.value === environment)?.label ?? "",
      archLabel: architectures.find((a) => a.value === architecture)?.label ?? "",
    });
  };

  return (
    <section id="analyzer" className="scroll-mt-24 border-y bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <SlidersHorizontal className="h-4 w-4" />
            Analyzer tool
          </span>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Interactive System &amp; License Compatibility Matrix</h2>
          <p className="mt-4 text-muted-foreground">
            Select a software category, the environment it will run in and the target system architecture. The analyzer
            returns a side-by-side edition comparison covering memory ceilings, virtualization support and disk
            encryption capability.
          </p>
        </div>

        <Card className="mx-auto mt-10 max-w-5xl">
          <CardHeader>
            <CardTitle className="text-lg">Configure your analysis</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <label htmlFor="matrix-category" className="text-sm font-medium">Category</label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger id="matrix-category"><SelectValue /></SelectTrigger>
                  <SelectContent className="bg-popover z-50">
                    {categories.map((c) => (
                      <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="matrix-environment" className="text-sm font-medium">Environment</label>
                <Select value={environment} onValueChange={setEnvironment}>
                  <SelectTrigger id="matrix-environment"><SelectValue /></SelectTrigger>
                  <SelectContent className="bg-popover z-50">
                    {environments.map((e) => (
                      <SelectItem key={e.value} value={e.value}>{e.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="matrix-architecture" className="text-sm font-medium">System architecture</label>
                <Select value={architecture} onValueChange={setArchitecture}>
                  <SelectTrigger id="matrix-architecture"><SelectValue /></SelectTrigger>
                  <SelectContent className="bg-popover z-50">
                    {architectures.map((a) => (
                      <SelectItem key={a.value} value={a.value}>{a.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button size="lg" className="w-full rounded-full sm:w-auto" onClick={analyze}>
              Analyze &amp; Compare Editions
            </Button>

            {result && (
              <div className="animate-fade-in space-y-6 border-t pt-6">
                <h3 className="text-xl font-semibold">{result.matrix.heading}</h3>

                <div className="overflow-x-auto rounded-xl border">
                  <table className="w-full min-w-[600px] text-sm">
                    <caption className="sr-only">Edition feature comparison</caption>
                    <thead className="bg-muted/60">
                      <tr>
                        <th scope="col" className="px-4 py-3 text-left font-semibold">Capability</th>
                        {result.matrix.editions.map((ed) => (
                          <th key={ed} scope="col" className="px-4 py-3 text-center font-semibold">{ed}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {result.matrix.rows.map((row, i) => (
                        <tr key={row.feature} className={i % 2 ? "bg-muted/20" : undefined}>
                          <th scope="row" className="px-4 py-3 text-left font-medium">{row.feature}</th>
                          {row.values.map((v, idx) => (
                            <td key={idx} className="px-4 py-3 text-center text-muted-foreground">{renderCell(v)}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border bg-card p-5">
                    <h4 className="font-semibold">Environment: {result.envLabel}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{result.environment}</p>
                  </div>
                  <div className="rounded-xl border bg-card p-5">
                    <h4 className="font-semibold">Architecture: {result.archLabel}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{result.architecture}</p>
                  </div>
                </div>

                <ul className="space-y-2 text-sm text-muted-foreground">
                  {result.matrix.notes.map((n) => (
                    <li key={n} className="flex gap-2">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-muted-foreground">
                  Reference information only. Always confirm current edition capabilities and system requirements in the
                  vendor's official documentation before deployment.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
