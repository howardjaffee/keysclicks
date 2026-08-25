import { useEffect, useState } from "react";
import { Download, History, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ACTION_LABEL,
  clearAuditLog,
  exportAuditLog,
  onAuditChange,
  readAuditLog,
  type ConsentAuditEntry,
} from "@/lib/consentAudit";

const yesNo = (v: boolean) => (v ? "Allowed" : "Blocked");

/** Compliance view of every cookie decision made on this device. */
export const ConsentAuditLog = () => {
  const [entries, setEntries] = useState<ConsentAuditEntry[]>([]);

  useEffect(() => {
    setEntries(readAuditLog());
    return onAuditChange(setEntries);
  }, []);

  const download = () => {
    const blob = new Blob([exportAuditLog()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "cookie-consent-audit-log.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mt-6 rounded-xl border bg-card p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="flex items-center gap-2 text-lg font-semibold">
          <History aria-hidden="true" className="h-5 w-5 text-primary" />
          Consent audit log
        </h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="rounded-full" onClick={download} disabled={!entries.length}>
            <Download aria-hidden="true" className="mr-1.5 h-4 w-4" />
            Export JSON
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="rounded-full"
            onClick={clearAuditLog}
            disabled={!entries.length}
          >
            <Trash2 aria-hidden="true" className="mr-1.5 h-4 w-4" />
            Clear
          </Button>
        </div>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">
        Each cookie choice you make is recorded with a timestamp so it can be reviewed for compliance. This
        record stays on your device and is never sent to our servers.
      </p>

      {entries.length === 0 ? (
        <p className="mt-4 text-sm text-muted-foreground">No consent decisions recorded on this device yet.</p>
      ) : (
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="text-xs uppercase tracking-wide text-muted-foreground">
              <tr>
                <th scope="col" className="py-2 pr-4 font-semibold">Date &amp; time</th>
                <th scope="col" className="py-2 pr-4 font-semibold">Action</th>
                <th scope="col" className="py-2 pr-4 font-semibold">Analytics</th>
                <th scope="col" className="py-2 pr-4 font-semibold">Marketing</th>
                <th scope="col" className="py-2 font-semibold">Affiliate</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {entries.map((entry) => (
                <tr key={entry.id}>
                  <td className="py-2 pr-4 align-top text-muted-foreground">
                    {new Date(entry.at).toLocaleString()}
                  </td>
                  <td className="py-2 pr-4 align-top font-medium text-foreground">
                    {ACTION_LABEL[entry.action] ?? entry.action}
                  </td>
                  <td className="py-2 pr-4 align-top">{yesNo(entry.categories.analytics)}</td>
                  <td className="py-2 pr-4 align-top">{yesNo(entry.categories.marketing)}</td>
                  <td className="py-2 align-top">{yesNo(entry.categories.affiliate)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ConsentAuditLog;
