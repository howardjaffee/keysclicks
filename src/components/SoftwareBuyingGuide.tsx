import { KeyRound, ShieldCheck, Wrench } from "lucide-react";

export const SoftwareBuyingGuide = () => (
  <section id="buying-guide" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">Original buyer's guide</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold">
          How to Choose and Activate Your Software License Key
        </h2>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Everything below is written by our own setup team from the questions we answer every week. Read it before you
          buy anything, and keep it open while you install — it will save you a support call.
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-4xl space-y-12">
        {/* a) Windows & Office */}
        <article className="surface-card p-6 md:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <KeyRound className="h-5 w-5" />
            </span>
            <h3 className="text-2xl font-semibold">Windows &amp; Office Activation Checklist</h3>
          </div>

          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              The first thing to understand is that a modern Windows or Microsoft 365 purchase is not always a
              twenty-five character product key any more. There are two very different things being sold, and buying the
              wrong one is the single most common reason an activation fails. A <strong className="text-foreground">digital
              licence</strong> is an entitlement stored on Microsoft's activation servers and tied to a hardware
              fingerprint of your PC and, optionally, to your Microsoft account. A <strong className="text-foreground">product
              key</strong> is a printed or emailed code that you type in once, which then creates a digital licence on
              that machine. If your PC came with Windows pre-installed by the manufacturer, you almost certainly already
              hold an OEM digital licence embedded in the motherboard firmware, and you do not need to buy a key at all
              to reinstall the same edition.
            </p>
            <p>
              Before you spend anything, check what you already have. Open <em>Settings &rarr; System &rarr; Activation</em>.
              If it reads "Windows is activated with a digital licence linked to your Microsoft account", a clean
              reinstall will reactivate itself as soon as you sign in. If it reads "Windows is not activated" or shows an
              error, note the edition (Home, Pro, Enterprise) — you must buy a key for the same edition family or a valid
              upgrade path. A Home key will not activate a Pro installation, and a Pro key will not downgrade a Windows
              Enterprise image.
            </p>
            <p>
              Our recommended order of operations for a clean, first-time activation:
            </p>
            <ol className="ml-5 list-decimal space-y-2 marker:font-semibold marker:text-primary">
              <li>
                Confirm the edition and architecture you need (64-bit is standard on anything built in the last decade),
                and confirm whether the licence is Retail, OEM or Volume. Retail licences can be moved to a new PC;
                OEM licences die with the motherboard they were first activated on.
              </li>
              <li>
                Install the operating system or Office suite <em>first</em>, and let Windows Update finish completely. A
                partially patched system frequently fails activation because the licensing service itself is out of date.
              </li>
              <li>
                Connect to the internet and sign in with the Microsoft account you intend to keep. Linking the licence to
                an account is what lets you recover it later from the Activation Troubleshooter after a hardware change.
              </li>
              <li>
                Enter the key in <em>Settings &rarr; System &rarr; Activation &rarr; Change product key</em>, not in a
                third-party tool. For Office, activate from any installed app under <em>File &rarr; Account</em>.
              </li>
              <li>
                Verify. Run <code className="rounded bg-muted px-1 py-0.5 text-foreground">slmgr /xpr</code> from an
                elevated Command Prompt; a permanently activated machine reports "The machine is permanently activated."
                Anything mentioning a grace period means the licence has not fully bound yet.
              </li>
              <li>
                Record the key and the account it is attached to somewhere off the machine — a password manager entry is
                ideal. Screenshots on the same drive you are about to reformat help nobody.
              </li>
            </ol>
            <p>
              One last point on Office: a perpetual suite such as Office 2021 installs one licence on one PC forever,
              while Microsoft 365 is a subscription that also covers phones and tablets and stops working when the
              subscription lapses. If several people in a household need Word and Excel, the subscription is usually
              cheaper over three years; if you use the same desktop for a decade and never need new features, the
              perpetual key wins.
            </p>
          </div>
        </article>

        {/* b) Antivirus */}
        <article className="surface-card p-6 md:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <h3 className="text-2xl font-semibold">Antivirus Installation &amp; Setup Tips</h3>
          </div>

          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              Security software behaves differently from ordinary applications: it installs drivers at the kernel level
              and hooks the file system. That is exactly why two security suites on one machine cause freezes, blue
              screens and false detections of each other. The rule is simple — one real-time scanner at a time. Windows
              Defender steps aside automatically when a recognised third-party suite registers itself, so you do not need
              to disable it manually, and you should not.
            </p>
            <p>
              Remove the old product properly before installing the new one. Using <em>Apps &amp; features</em> alone
              often leaves drivers and a residual firewall filter behind. Every major vendor publishes a dedicated
              removal utility for this reason: Norton's Remove and Reinstall tool, McAfee's MCPR, Bitdefender's Uninstall
              Tool, Kaspersky's kavremover and Avast's avastclear. Run the tool for the product you are removing, reboot,
              and only then start the new installer. If the new suite still reports a conflict, boot into Safe Mode and
              run the removal tool a second time.
            </p>
            <p>
              After installation, spend five minutes on the parts most people skip:
            </p>
            <ul className="ml-5 list-disc space-y-2 marker:text-primary">
              <li>
                <strong className="text-foreground">Verify the licence really registered.</strong> Open the product's
                About or Subscription panel and confirm the expiry date and the number of seats. A subscription that
                still says "trial" after you entered a key has not applied it — re-enter the code while signed into the
                vendor account you bought under.
              </li>
              <li>
                <strong className="text-foreground">Run a full scan once, then rely on scheduled quick scans.</strong>
                The first full scan builds a trust cache, so subsequent scans are dramatically faster.
              </li>
              <li>
                <strong className="text-foreground">Update definitions manually the first time.</strong> Fresh installs
                often ship definitions weeks old; do not assume the background updater has run.
              </li>
              <li>
                <strong className="text-foreground">Add sensible exclusions.</strong> Accounting packages such as
                QuickBooks, database engines and developer toolchains are routinely slowed or broken by real-time
                scanning. Exclude the vendor's own data folders and company files, never an entire drive.
              </li>
              <li>
                <strong className="text-foreground">Check the firewall prompt history.</strong> A suite installed on a
                busy machine may have silently blocked a printer, a backup agent or a network share during setup.
              </li>
            </ul>
            <p>
              Finally, keep the account email you used at purchase. Licence recovery, seat transfers to a new laptop and
              refunds all run through the vendor account, not through the retailer, and not through us.
            </p>
          </div>
        </article>

        {/* c) Troubleshooting */}
        <article className="surface-card p-6 md:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <Wrench className="h-5 w-5" />
            </span>
            <h3 className="text-2xl font-semibold">Troubleshooting Key Errors</h3>
          </div>

          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              Most activation failures are one of a handful of well-understood conditions. Work through the matching
              entry below before you contact anyone — in our experience roughly four out of five cases resolve here.
            </p>
            <dl className="space-y-4">
              <div className="rounded-lg border border-border/60 bg-muted/30 p-4">
                <dt className="font-semibold text-foreground">0xC004C003 — "The activation server determined the specified product key is blocked"</dt>
                <dd className="mt-1">
                  The key was recognised but refused. Usually this means the key has already been activated on the
                  maximum number of machines, or it is a volume key being used outside its organisation. Wait an hour and
                  retry once (servers do rate-limit), then confirm the key matches your exact edition. If you bought it
                  minutes ago, the entitlement may not have propagated yet.
                </dd>
              </div>
              <div className="rounded-lg border border-border/60 bg-muted/30 p-4">
                <dt className="font-semibold text-foreground">0xC004F050 — "The Software Licensing Service reported that the product key is invalid"</dt>
                <dd className="mt-1">
                  Almost always an edition mismatch or a typo in a character pair that looks alike (0/O, 1/I, 5/S). Paste
                  the key rather than typing it, and check that you are not entering an Office key into Windows.
                </dd>
              </div>
              <div className="rounded-lg border border-border/60 bg-muted/30 p-4">
                <dt className="font-semibold text-foreground">0x803FA067 / "Windows could not be activated"</dt>
                <dd className="mt-1">
                  A licence that existed but cannot re-bind, typically after a motherboard swap. Run <em>Settings &rarr;
                  Activation &rarr; Troubleshoot</em> and choose "I changed hardware on this device recently", then pick
                  the device from your Microsoft account list.
                </dd>
              </div>
              <div className="rounded-lg border border-border/60 bg-muted/30 p-4">
                <dt className="font-semibold text-foreground">"Invalid key" prompts that reappear after a successful activation</dt>
                <dd className="mt-1">
                  Corrupted licensing store. From an elevated Command Prompt run{" "}
                  <code className="rounded bg-muted px-1 py-0.5 text-foreground">slmgr /upk</code> to remove the key,{" "}
                  <code className="rounded bg-muted px-1 py-0.5 text-foreground">slmgr /cpky</code> to clear it from the
                  registry, reboot, then re-enter the key with{" "}
                  <code className="rounded bg-muted px-1 py-0.5 text-foreground">slmgr /ipk YOUR-KEY</code> followed by{" "}
                  <code className="rounded bg-muted px-1 py-0.5 text-foreground">slmgr /ato</code>.
                </dd>
              </div>
              <div className="rounded-lg border border-border/60 bg-muted/30 p-4">
                <dt className="font-semibold text-foreground">Antivirus licence shows expired immediately</dt>
                <dd className="mt-1">
                  Check the system clock and time zone first — an incorrect date invalidates the certificate check. Then
                  confirm you are signed into the same vendor account used at purchase.
                </dd>
              </div>
              <div className="rounded-lg border border-border/60 bg-muted/30 p-4">
                <dt className="font-semibold text-foreground">Activation hangs or times out</dt>
                <dd className="mt-1">
                  A VPN, proxy or restrictive DNS filter is blocking the activation endpoint. Disconnect the VPN, retry,
                  and if it still fails activate by phone using{" "}
                  <code className="rounded bg-muted px-1 py-0.5 text-foreground">slui 4</code>.
                </dd>
              </div>
            </dl>
            <p>
              Still stuck? Send us the exact error code and a screenshot of the activation screen and our team will work
              through it with you free of charge — we do this whether or not you bought through one of our links.
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
);
