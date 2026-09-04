import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileText, Wrench, AlertTriangle, ShieldCheck } from "lucide-react";

export const KnowledgeBase = () => (
  <section id="knowledge-base" className="scroll-mt-24 py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Technical &amp; Troubleshooting Knowledge Base</h2>
        <p className="mt-4 text-muted-foreground">
          Original reference documentation on licensing models, deployment protocols, activation diagnostics and
          endpoint security architecture. Written for administrators and informed end users.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-4xl space-y-12">
        {/* 1. Licensing models */}
        <article id="licensing-models" className="scroll-mt-24 rounded-2xl border bg-card p-6 md:p-8">
          <header className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <FileText className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-2xl font-bold">Licensing Models Explained</h3>
              <p className="text-sm text-muted-foreground">OEM, Retail and Volume entitlements compared</p>
            </div>
          </header>

          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Almost every activation dispute traces back to a single misunderstanding: the licence you hold is not the
              same thing as the media you installed from. The installer for a given operating system or productivity
              suite is usually identical across channels. What differs is the entitlement attached to the key or the
              digital identity — who may use it, on how many devices, for how long, and whether it may move to a
              different machine later. Three channels dominate: OEM, Retail and Volume.
            </p>
            <h4 className="text-lg font-semibold text-foreground">OEM (Original Equipment Manufacturer)</h4>
            <p>
              An OEM entitlement is issued to a hardware builder and binds to the first system it activates. Modern
              devices embed the key in the firmware ACPI MSDM table, which is why a factory-imaged laptop reactivates
              automatically after a clean reinstall without anyone typing a key. The trade-off is permanence: the
              licence is legally tied to that motherboard. Replacing the mainboard is normally treated as a new device,
              and support obligations sit with the hardware manufacturer rather than the software publisher. OEM pricing
              is lower precisely because transfer rights and publisher-side support are removed.
            </p>
            <h4 className="text-lg font-semibold text-foreground">Retail (Full Packaged Product)</h4>
            <p>
              A Retail entitlement belongs to the purchaser, not the hardware. It may be deactivated on one machine and
              activated on another, provided only one installation is active at a time. When a Microsoft account is
              linked during setup, the entitlement becomes a digital licence recorded against that account, and the
              Activation Troubleshooter can reassign it after a hardware change. Retail keys also carry publisher
              support entitlement. For anyone who upgrades components regularly or builds their own systems, the extra
              cost buys portability.
            </p>
            <h4 className="text-lg font-semibold text-foreground">Volume Licensing (MAK and KMS)</h4>
            <p>
              Volume agreements serve organisations deploying at scale. A Multiple Activation Key (MAK) carries a
              finite activation count and contacts the publisher's servers directly — suitable for devices that rarely
              touch the corporate network. Key Management Services (KMS) instead activates clients against an on-premises
              host; clients receive a 180-day activation lease and renew every seven days while they can reach the host.
              Active Directory-Based Activation extends the same idea through the directory itself. Volume entitlements
              are contractual, auditable, and frequently include downgrade and reimaging rights that consumer channels
              do not.
            </p>
            <h4 className="text-lg font-semibold text-foreground">Why the distinction matters</h4>
            <p>
              Channel selection determines your recovery path. A Retail digital licence survives a motherboard swap
              through account reassociation. An OEM licence generally does not. A KMS-activated machine that leaves the
              corporate network for more than 180 days will drop into a grace state and display activation warnings even
              though nothing was ever misused. Subscription products add a fourth dimension: entitlement follows a user
              identity, so deprovisioning that identity revokes access on every device it authorised. Knowing which model
              applies before deployment prevents most licensing incidents that surface months later.
            </p>
          </div>
        </article>

        {/* 2. Installation protocols */}
        <article id="deployment-protocols" className="scroll-mt-24 rounded-2xl border bg-card p-6 md:p-8">
          <header className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Wrench className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-2xl font-bold">Software Installation &amp; Upgrade Protocols</h3>
              <p className="text-sm text-muted-foreground">Clean OS builds, Office deployment and security software staging</p>
            </div>
          </header>

          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            <h4 className="text-lg font-semibold text-foreground">Clean operating-system installation</h4>
            <p>
              Begin with a full image or file-level backup verified by restoring at least one file — an untested backup
              is not a backup. Record the current edition (<code>winver</code>) and confirm the activation state in
              Settings before wiping anything, because the target build must match the entitlement you hold; a Pro
              licence will not activate a Home image. Create installation media with the publisher's official media
              creation utility rather than a third-party image, then verify firmware settings: UEFI mode, Secure Boot
              capability, TPM 2.0 (listed as fTPM on AMD platforms and PTT on Intel) and the correct boot order. During
              setup choose Custom, delete existing partitions on the target disk only, and let the installer create the
              EFI, MSR, primary and recovery partitions automatically. After first boot, install chipset and storage
              drivers before anything else, then run Windows Update until it reports no pending items across two
              consecutive checks.
            </p>
            <h4 className="text-lg font-semibold text-foreground">Office and productivity-suite deployment</h4>
            <p>
              Remove prior versions with the vendor's dedicated removal tool; leftover registry entries and orphaned
              shortcuts are the most common cause of a suite that installs cleanly yet refuses to activate. For a single
              machine, sign in with the account holding the entitlement and let the click-to-run installer pull the
              current channel build. For fleets, the Office Deployment Tool with an XML configuration file is the correct
              approach: pin an update channel (Current, Monthly Enterprise or Semi-Annual Enterprise), exclude unwanted
              applications, set the language pack list and specify shared computer activation where multiple users log on
              to the same device. Test the configuration on a pilot group before broad rollout, and document the channel
              choice — mixed channels across a fleet produce file-format and add-in inconsistencies that are difficult to
              diagnose later.
            </p>
            <h4 className="text-lg font-semibold text-foreground">Security software staging</h4>
            <p>
              Never install a second real-time engine alongside an existing one. Two drivers competing for file-system
              filter positions cause lock contention, measurable I/O latency and false detections of each other. Uninstall
              the incumbent product using the vendor's removal utility rather than the generic Programs and Features
              entry, reboot, confirm the built-in platform defender has re-enabled itself, and only then install the
              replacement. After installation, run a full scan on an idle system, register any required exclusions for
              database and line-of-business applications, and verify that definition updates are downloading on schedule.
              Exclusions should be documented and reviewed; undocumented exclusions accumulate into blind spots.
            </p>
            <h4 className="text-lg font-semibold text-foreground">Post-deployment verification</h4>
            <p>
              Confirm edition and activation status, disk encryption state and recovery-key escrow, driver health in
              Device Manager, and that scheduled maintenance windows do not overlap with backup jobs. Capture the
              finished configuration as a reference image so the next build is reproducible rather than improvised.
            </p>
          </div>
        </article>

        {/* 3. Error directory */}
        <article id="activation-errors" className="scroll-mt-24 rounded-2xl border bg-card p-6 md:p-8">
          <header className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <AlertTriangle className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-2xl font-bold">Activation Error Code Directory</h3>
              <p className="text-sm text-muted-foreground">What each code means and the documented resolution path</p>
            </div>
          </header>

          <p className="mt-6 leading-relaxed text-muted-foreground">
            Activation failures are deterministic: each code identifies a specific condition. Read the code first, then
            apply the matching remedy. Where a resolution requires publisher intervention, the vendor's own support
            documentation is the authoritative source.
          </p>

          <Accordion type="single" collapsible className="mt-6">
            {[
              {
                code: "0xC004C003",
                title: "Activation server determined the key is blocked or in use",
                body: "The key has exceeded its permitted activation count, or the server is rate-limiting repeated attempts. Wait, verify the key against the edition installed, and if the key is legitimately yours use the built-in Activation Troubleshooter to reassociate a digital licence with your account. Keys purchased from unauthorised resellers frequently return this code because the same key was distributed multiple times.",
              },
              {
                code: "0x803FA067",
                title: "Digital licence could not be applied to this device",
                body: "Typically follows a hardware change or an edition mismatch after an upgrade. Confirm you are signed in with the Microsoft account that holds the entitlement, run the Activation Troubleshooter and select the option indicating recent hardware change, then choose the device from the list of previously activated systems.",
              },
              {
                code: "0xC004F074",
                title: "KMS host could not be contacted",
                body: "The client cannot reach a Key Management Service host on TCP 1688, DNS SRV records for _VLMCS are missing, or system time has drifted beyond the tolerated skew. Verify DNS resolution, firewall rules and NTP synchronisation before touching the key itself.",
              },
              {
                code: "0xC004F050",
                title: "The product key entered is invalid for this edition",
                body: "A Pro key was entered on a Home image or vice versa, or a generic setup key was mistaken for a licence key. Check the installed edition with winver and either install the matching edition or use a Change Product Key operation to move editions where the entitlement permits it.",
              },
              {
                code: "0x8007232B",
                title: "DNS name does not exist",
                body: "The client is attempting KMS activation on a network without a KMS host — common when a volume image is deployed to a device that should use a MAK or retail key. Install the correct key type for that device's licensing channel.",
              },
              {
                code: "0x80072EE7 / 0x8004FE33",
                title: "Network or proxy blocked the activation endpoint",
                body: "Corporate proxies, content filters or VPN split-tunnel rules can block the licensing endpoints. Temporarily allow the publisher's activation hostnames, retry, and confirm the system clock and certificate store are current.",
              },
            ].map((item) => (
              <AccordionItem key={item.code} value={item.code}>
                <AccordionTrigger className="text-left">
                  <span className="font-mono text-sm text-primary">{item.code}</span>
                  <span className="ml-3 flex-1 text-sm font-medium">{item.title}</span>
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">{item.body}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="mt-6 text-sm text-muted-foreground">
            Before escalating any of these codes, capture the exact code text, the installed edition, the licensing
            channel and whether hardware changed recently. Vendors resolve activation cases far faster with that record.
            We publish this directory as documentation; we do not perform activations or operate a support desk.
          </p>
        </article>

        {/* 4. Endpoint security */}
        <article id="endpoint-security" className="scroll-mt-24 rounded-2xl border bg-card p-6 md:p-8">
          <header className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-2xl font-bold">Antivirus &amp; Endpoint Security Guide</h3>
              <p className="text-sm text-muted-foreground">Detection engines, firewall policy and measurable system impact</p>
            </div>
          </header>

          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            <h4 className="text-lg font-semibold text-foreground">How detection engines actually differ</h4>
            <p>
              Every mainstream endpoint product layers several detection techniques. Signature matching compares file
              hashes and byte patterns against a known-threat database — fast, precise, and useless against a sample
              first seen an hour ago. Heuristic analysis inspects structure and instruction patterns for traits
              associated with malicious code. Behavioural monitoring watches processes at runtime and intervenes when a
              sequence looks like an attack chain: a document spawning a scripting host, that host reaching the internet,
              and mass file rewriting beginning. Cloud reputation shifts the decision to a backend service that has
              already observed the file elsewhere. Machine-learning classifiers score novel binaries on extracted
              features. The meaningful differences between products are not whether these layers exist but how
              aggressively each is tuned, which shows up as the trade-off between catch rate and false positives.
            </p>
            <h4 className="text-lg font-semibold text-foreground">Firewall configuration</h4>
            <p>
              A host firewall should default to denying inbound connections and allowing outbound, with explicit rules
              layered on top. Prefer application-scoped rules over broad port openings, and separate profiles for
              domain, private and public networks so a laptop tightens automatically on untrusted Wi-Fi. In managed
              environments, push firewall policy centrally rather than allowing per-device drift, log denied inbound
              attempts and review them periodically. Where a suite replaces the built-in firewall, confirm only one
              filtering stack is active — overlapping stacks produce intermittent connectivity faults that are hard to
              attribute.
            </p>
            <h4 className="text-lg font-semibold text-foreground">System impact metrics worth measuring</h4>
            <p>
              Vendor marketing rarely quantifies overhead, but you can. Measure cold boot time to a usable desktop,
              application launch latency for your heaviest daily application, file-copy throughput on a large archive,
              archive extraction time, and idle memory footprint after thirty minutes of uptime. Take a baseline before
              installation and repeat afterwards on the same hardware. Independent laboratories such as AV-TEST and
              AV-Comparatives publish comparable performance and protection scores using standardised methodology, which
              is a better decision input than star ratings on retail listings.
            </p>
            <h4 className="text-lg font-semibold text-foreground">Choosing by environment</h4>
            <p>
              For a single household device, the built-in platform engine kept current, an account with standard rather
              than administrator rights, prompt patching and verified offline backups already remove most realistic
              risk. Small businesses gain the most from a hosted management console: visibility of which endpoints are
              out of policy matters more than a marginal detection-rate difference. Enterprises should evaluate on
              telemetry quality, rollback capability, SIEM integration and incident-response tooling, because at that
              scale containment speed determines total impact far more than initial detection.
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
);
