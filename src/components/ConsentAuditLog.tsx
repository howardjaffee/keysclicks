import { useEffect, useMemo, useState } from "react";
import { Download, History, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ACTION_LABEL,
  clearAuditLog,
  onAuditChange,
  readAuditLog,
  type ConsentAuditEntry,
} from "@/lib/consentAudit";
import type { ConsentCategory } from "@/lib/consent";

const yesNo = (v: boolean) => (v ? "Allowed" : "Blocked");

type CategoryFilter = "all" | ConsentCategory;
type StatusFilter = "any" | "allowed" | "blocked";

/** Compliance view of every cookie decision made on this device. */
export const ConsentAuditLog = () => {
  const [entries, setEntries] = useState<ConsentAuditEntry[]>([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [status, setStatus] = useState<StatusFilter>("any");

  useEffect(() => {
    setEntries(readAuditLog());
    return onAuditChange(setEntries);
  }, []);

  const filtered = useMemo(() => {
    const fromTime = from ? new Date(`${from}T00:00:00`).getTime() : null;
    const toTime = to ? new Date(`${to}T23:59:59.999`).getTime() : null;

    return entries.filter((entry) => {
      const at = new Date(entry.at).getTime();
      if (fromTime !== null && at < fromTime) return false;
      if (toTime !== null && at > toTime) return false;
      if (category === "all") {
        if (status === "allowed") {
          return entry.categories.analytics || entry.categories.marketing || entry.categories.affiliate;
        }
        if (status === "blocked") {
          return !entry.categories.analytics || !entry.categories.marketing || !entry.categories.affiliate;
        }
        return true;
      }
      const allowed = entry.categories[category];
      if (status === "allowed") return allowed;
      if (status === "blocked") return !allowed;
      return true;
    });
  }, [entries, from, to, category, status]);

  const resetFilters = () => {
    setFrom("");
    setTo("");
    setCategory("all");
    setStatus("any");
  };

  const filtersActive = Boolean(from || to || category !== "all" || status !== "any");

  const saveFile = (contents: string, type: string, filename: string) => {
    const blob = new Blob([contents], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadJson = () =>
    saveFile(
      JSON.stringify(filtered, null, 2),
      "application/json",
      "cookie-consent-audit-log.json",
    );

  const downloadCsv = () => {
    const cell = (v: string) => `"${v.replace(/"/g, '""')}"`;
    const rows = [
      ["Date & time (ISO)", "Date & time (local)", "Action", "Analytics", "Marketing", "Affiliate"],
      ...filtered.map((e) => [
        e.at,
        new Date(e.at).toLocaleString(),
        ACTION_LABEL[e.action] ?? e.action,
        yesNo(e.categories.analytics),
        yesNo(e.categories.marketing),
        yesNo(e.categories.affiliate),
      ]),
    ];
    // BOM keeps accents readable when compliance opens this in Excel.
    saveFile(
      `\uFEFF${rows.map((r) => r.map(cell).join(",")).join("\r\n")}`,
      "text/csv;charset=utf-8",
      "cookie-consent-audit-log.csv",
    );
  };

  return (
    <div className="mt-6 rounded-xl border bg-card p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="flex items-center gap-2 text-lg font-semibold">
          <History aria-hidden="true" className="h-5 w-5 text-primary" />
          Consent audit log
        </h2>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" className="rounded-full" onClick={downloadCsv} disabled={!filtered.length}>
            <FileSpreadsheet aria-hidden="true" className="mr-1.5 h-4 w-4" />
            Export CSV
          </Button>
          <Button variant="outline" size="sm" className="rounded-full" onClick={downloadJson} disabled={!filtered.length}>
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

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-1.5">
          <Label htmlFor="audit-from" className="text-xs font-semibold uppercase tracking-wide">From date</Label>
          <Input id="audit-from" type="date" value={from} max={to || undefined} onChange={(e) => setFrom(e.target.value)} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="audit-to" className="text-xs font-semibold uppercase tracking-wide">To date</Label>
          <Input id="audit-to" type="date" value={to} min={from || undefined} onChange={(e) => setTo(e.target.value)} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="audit-category" className="text-xs font-semibold uppercase tracking-wide">Category</Label>
          <Select value={category} onValueChange={(v) => setCategory(v as CategoryFilter)}>
            <SelectTrigger id="audit-category" aria-label="Filter by cookie category">
              <SelectValue placeholder="All categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All categories</SelectItem>
              <SelectItem value="analytics">Analytics</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="affiliate">Affiliate</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="audit-status" className="text-xs font-semibold uppercase tracking-wide">Choice</Label>
          <Select value={status} onValueChange={(v) => setStatus(v as StatusFilter)}>
            <SelectTrigger id="audit-status" aria-label="Filter by choice">
              <SelectValue placeholder="Any choice" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any choice</SelectItem>
              <SelectItem value="allowed">Allowed</SelectItem>
              <SelectItem value="blocked">Blocked</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
        <span aria-live="polite">
          Showing {filtered.length} of {entries.length} recorded {entries.length === 1 ? "decision" : "decisions"}
        </span>
        {filtersActive && (
          <Button variant="link" size="sm" className="h-auto p-0" onClick={resetFilters}>
            Clear filters
          </Button>
        )}
      </div>

      {entries.length === 0 ? (
        <p className="mt-4 text-sm text-muted-foreground">No consent decisions recorded on this device yet.</p>
      ) : filtered.length === 0 ? (
        <p className="mt-4 text-sm text-muted-foreground">No decisions match these filters.</p>
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
              {filtered.map((entry) => (
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
