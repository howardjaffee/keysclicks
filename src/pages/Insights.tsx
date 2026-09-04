import { Seo } from "@/components/Seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const articles = [
  {
    id: "windows-11-vs-windows-10-enterprise-security",
    title: "Windows 11 vs Windows 10: Enterprise Security & Hardware Requirements Compared",
    summary:
      "A hardware-first comparison of the two platforms: what the TPM 2.0 baseline actually changes, which protections are enabled by default, and how servicing timelines shape a migration plan.",
    paragraphs: [
      "The most consequential difference between Windows 10 and Windows 11 is not the interface — it is the hardware floor. Windows 11 requires UEFI firmware with Secure Boot capability, a TPM 2.0 module, a supported 64-bit processor, 4 GB of RAM and 64 GB of storage. Windows 10 treated almost all of those as optional. That single change lets the platform assume a measured boot path and a hardware root of trust on every installed device, which in turn allows security features that were previously opt-in to ship enabled by default.",
      "Virtualization-based security is the clearest example. On qualifying Windows 11 hardware, memory integrity (HVCI) runs by default on clean installations, isolating kernel-mode code integrity checks inside a hypervisor-protected container. Credential Guard, which stores derived domain credentials in that same isolated context, is enabled by default on Enterprise editions joined to a domain. On Windows 10 both features existed but required explicit policy, compatible drivers and administrator effort, so real-world adoption remained low. The practical effect is that a fleet migrated to Windows 11 raises its baseline without any additional configuration work.",
      "Disk encryption follows the same pattern. Windows 11 Home offers device encryption where the hardware supports it, but policy-managed BitLocker with recovery-key escrow, removable-media enforcement and pre-boot authentication still requires Pro or Enterprise. Because TPM 2.0 is now guaranteed, BitLocker can seal keys against platform measurements on every device rather than falling back to password protectors on the subset of machines that lacked a module. For administrators, this removes an entire class of exception handling from deployment scripts.",
      "Application control and driver hygiene also tighten. Windows 11 ships with the vulnerable-driver blocklist enabled and enforced, closing a technique attackers used to load a signed but flawed driver in order to disable protection from kernel space. Smart App Control, available on clean installations, extends reputation-based verification to unsigned and unrecognised binaries. Neither is unique to Windows 11 in concept, but both benefit from the guaranteed hardware baseline underneath them.",
      "Against this, the compatibility cost is real. Devices without TPM 2.0 or with unsupported processors cannot be upgraded through supported channels. ARM64 hardware runs Windows 11 natively with x64 emulation, but security drivers, VPN clients and older Office add-ins compiled only for x64 will not load in kernel space, so device-by-device verification is necessary before a fleet-wide commitment. Peripheral drivers — particularly for legacy printers, scanners and industrial interfaces — are the most frequent blocker discovered late in migration projects.",
      "Servicing timelines determine urgency. Windows 10 22H2 is the final consumer feature update, and organisations that need more time must either budget for extended security updates or accept an unpatched platform. Windows 11 moved to an annual feature-update cadence with a defined servicing window per release, which simplifies ring planning: pilot on the current release, broad-deploy one release behind, and keep a documented rollback image.",
      "A defensible migration plan sequences the work rather than rushing it. Inventory hardware against the readiness criteria and separate devices into upgrade-eligible, firmware-fixable (fTPM or PTT disabled in BIOS is extremely common and free to correct) and replacement-required. Pilot with a representative group that includes your most driver-dependent roles. Validate encryption, recovery-key escrow and application compatibility before broad rollout. Document the edition each device requires, because the memory ceilings, virtualization support and management capabilities differ sharply between Home, Pro and Enterprise.",
      "The summary for planners: Windows 11 is not primarily a feature release, it is a security baseline release. Its value comes from what is guaranteed on every device rather than what can be configured on some. That guarantee is exactly why the hardware requirements are non-negotiable, and why migration planning should start from a hardware inventory rather than a software wish list.",
    ],
  },
  {
    id: "digital-entitlements-vs-product-keys",
    title: "Understanding Digital Entitlements vs. Product Key Activation",
    summary:
      "Why some machines reactivate themselves after a wipe while others demand a 25-character key — and what that means when hardware changes.",
    paragraphs: [
      "Two activation mechanisms coexist in the modern Windows ecosystem, and confusing them produces most of the activation support cases seen in the wild. Classic product-key activation uses a 25-character alphanumeric string that is validated against a licensing service and then paired with a hardware fingerprint. Digital entitlement — also called a digital licence — records the right to run a given edition against a hardware hash and, optionally, a linked account identity. No key is typed and no key is displayed, because in the entitlement model the key was never the entitlement in the first place.",
      "The hardware hash is derived from stable characteristics of the machine: mainboard identifiers, storage controller, network adapter and processor family. On a clean reinstall of the same edition, setup submits that hash, the licensing service recognises it, and activation completes silently before the user reaches the desktop. This is why a factory laptop reinstalled from official media never asks for a key: either the OEM key sits in the firmware ACPI MSDM table, or a digital entitlement already exists against the hash, or both.",
      "Hardware change is where the two models diverge sharply. Replacing a mainboard usually produces a new hash, and an unlinked digital entitlement has no way to follow the device. If the entitlement was linked to an account, the Activation Troubleshooter can list previously activated devices and reassign the licence to the current one — provided the underlying entitlement is Retail rather than OEM. An OEM entitlement is contractually bound to the original hardware and does not transfer, which is the single most common cause of a post-upgrade activation failure.",
      "Volume-licensed environments add a third pattern. KMS clients hold a 180-day activation lease renewed every seven days against an on-premises host. A device that never contacts the host — a laptop issued to a long-term remote worker, or a machine moved to a subsidiary network — will eventually display activation warnings despite being fully licensed. MAK activation avoids this by contacting the publisher directly and consuming one of a finite pool of activations, which suits devices that rarely return to the corporate network.",
      "Subscription products introduce entitlement that follows identity rather than hardware. Microsoft 365 applications check the signed-in user's licence assignment on a recurring basis. Remove the assignment or disable the account and the applications drop to reduced functionality on every device that user authorised, regardless of hardware state. For shared-device scenarios such as clinical workstations or call-centre floors, shared computer activation exists precisely so the per-user device limit is not consumed by every login.",
      "Practical guidance follows directly from the model in use. Link the entitlement to an account during setup so it can be reassigned after hardware failure. Record the edition, channel and purchase evidence somewhere retrievable, since publisher support requests it. Before replacing a mainboard, note whether the entitlement is OEM or Retail — the answer decides whether the rebuild is a five-minute reassociation or a new purchase. And treat any offer of a heavily discounted key with scepticism: keys sold outside authorised channels are frequently volume keys redistributed beyond their permitted count, which surfaces as a blocked-key error months later.",
      "The conceptual shift worth internalising is that the licence is a record held by the publisher, not a string held by you. The string is only one way of presenting a claim to that record. Once you think in terms of entitlements, hashes and identities, activation behaviour stops looking arbitrary and becomes predictable.",
    ],
  },
  {
    id: "endpoint-antivirus-remote-work",
    title: "Best Practices for Deploying Endpoint Antivirus in Remote Work Environments",
    summary:
      "Cloud-managed policy, update paths that do not depend on the VPN, and the operational habits that keep distributed endpoints genuinely protected.",
    paragraphs: [
      "Distributed endpoints break the assumptions that on-premises security architecture was built on. There is no guaranteed nightly window when every device sits on the corporate LAN, no shared perimeter firewall inspecting all traffic, and no local technician to reimage a machine that stops reporting. Endpoint protection for remote fleets therefore has to be designed around intermittent connectivity and self-sufficiency rather than around a network boundary.",
      "Start with a cloud-managed console. Policy delivery, definition updates and telemetry collection should all reach the endpoint over the public internet without requiring a VPN session. Update paths that depend on an internal distribution point silently fail for anyone who does not connect that week, and the resulting drift is invisible until an incident. Configure the console to alert on devices that have not checked in within a defined window — typically seven days — and treat those alerts as operational work rather than noise.",
      "Standardise policy by role, not by device. Define a small number of profiles — general staff, developers, finance, administrators — and assign them centrally so a rebuilt machine inherits the correct configuration automatically. Developers usually need documented exclusions for build directories and container runtimes, but every exclusion is a permanent blind spot: record who requested it, why, and when it should be reviewed. Undocumented exclusions accumulate, and a folder excluded for a project that ended two years ago is a standing invitation.",
      "Enforce a single real-time engine. Remote users occasionally install a consumer suite they trust from personal experience, producing two filter drivers competing for the same file operations. The result is I/O latency, false detections and, occasionally, one product disabling the other. Where the platform supports it, block unmanaged security software through application control and communicate the reason rather than only the rule.",
      "Layer detection with response capability. Signature and heuristic detection stop known and near-known threats, but on remote endpoints the containment question matters more: when a device is compromised in a home office, how quickly can it be isolated from the network, how much process telemetry is available for reconstruction, and can encrypted files be rolled back? Endpoint detection and response tooling with network-isolation and rollback features is worth more in a distributed fleet than a marginally higher lab detection score.",
      "Support the endpoint's own hygiene. Full-disk encryption with escrowed recovery keys protects data on a laptop lost in transit. Standard user rights rather than local administrator prevent the majority of drive-by installations. Automatic patching for the operating system, browsers and document readers closes the vectors most commonly exploited. Verified backups — restored periodically as a test, not merely scheduled — are the only reliable defence against a ransomware event that gets past everything else.",
      "Finally, make the human path clear. Remote workers who suspect a compromise need a single, obvious reporting channel and an explicit instruction: disconnect from the network, do not power off (memory evidence is often valuable), and report immediately. Rehearse the isolation and rebuild sequence at least annually so response time is a known quantity rather than a hope. Well-configured tooling plus a rehearsed process consistently outperforms premium tooling with no operational plan behind it.",
    ],
  },
];

const Insights = () => (
  <div className="min-h-screen bg-background">
    <Seo
      title="Software Architecture Insights — Licensing & Deployment Analysis"
      description="Long-form technical analysis of Windows 11 vs Windows 10 security baselines, digital entitlements vs product keys, and endpoint antivirus deployment for remote teams."
      path="/insights"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Software Architecture Insights", path: "/insights" },
      ]}
    />
    <Header />
    <main>
      <section className="border-b bg-hero py-16 text-hero-foreground">
        <div className="container mx-auto px-4">
          <h1 className="max-w-4xl text-3xl font-bold md:text-5xl">Software Architecture Insights</h1>
          <p className="mt-4 max-w-3xl text-lg text-hero-foreground/80">
            Original long-form analysis on operating system security baselines, licensing mechanics and endpoint
            security deployment. Reference material only — no products are sold on this site.
          </p>
        </div>
      </section>

      <section className="border-b py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">In this hub</h2>
          <ol className="mt-4 grid gap-4 md:grid-cols-3">
            {articles.map((a, i) => (
              <li key={a.id} className="rounded-xl border bg-card p-5">
                <span className="text-xs font-semibold text-primary">Article {i + 1}</span>
                <h3 className="mt-2 font-semibold leading-snug">
                  <a href={`#${a.id}`} className="hover:text-primary">{a.title}</a>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.summary}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="container mx-auto max-w-3xl px-4 py-16 space-y-16">
        {articles.map((a) => (
          <article key={a.id} id={a.id} className="scroll-mt-24">
            <h2 className="text-2xl font-bold md:text-3xl">{a.title}</h2>
            <p className="mt-3 text-muted-foreground">{a.summary}</p>
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              {a.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default Insights;
