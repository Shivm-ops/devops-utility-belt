import { useMemo, useState } from "react";
import { Plus, Trash2, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

// Indicative on-demand Linux pricing (us-east-1, USD/hour). For estimation only.
const INSTANCES: Record<string, { vcpu: number; memGiB: number; hourly: number }> = {
  "t3.micro": { vcpu: 2, memGiB: 1, hourly: 0.0104 },
  "t3.small": { vcpu: 2, memGiB: 2, hourly: 0.0208 },
  "t3.medium": { vcpu: 2, memGiB: 4, hourly: 0.0416 },
  "t3.large": { vcpu: 2, memGiB: 8, hourly: 0.0832 },
  "m5.large": { vcpu: 2, memGiB: 8, hourly: 0.096 },
  "m5.xlarge": { vcpu: 4, memGiB: 16, hourly: 0.192 },
  "m5.2xlarge": { vcpu: 8, memGiB: 32, hourly: 0.384 },
  "c5.large": { vcpu: 2, memGiB: 4, hourly: 0.085 },
  "c5.xlarge": { vcpu: 4, memGiB: 8, hourly: 0.17 },
  "r5.large": { vcpu: 2, memGiB: 16, hourly: 0.126 },
  "r5.xlarge": { vcpu: 4, memGiB: 32, hourly: 0.252 },
};

const TYPES = Object.keys(INSTANCES);

type Row = { id: string; type: string; count: number; hours: number };

const HOURS_MONTH = 730;

export const CloudCostCalculator = () => {
  const [rows, setRows] = useState<Row[]>([
    { id: crypto.randomUUID(), type: "t3.medium", count: 2, hours: HOURS_MONTH },
    { id: crypto.randomUUID(), type: "m5.large", count: 1, hours: HOURS_MONTH },
  ]);

  const totals = useMemo(() => {
    let monthly = 0, vcpu = 0, mem = 0;
    rows.forEach((r) => {
      const i = INSTANCES[r.type];
      if (!i) return;
      monthly += i.hourly * r.hours * r.count;
      vcpu += i.vcpu * r.count;
      mem += i.memGiB * r.count;
    });
    return { monthly, yearly: monthly * 12, vcpu, mem };
  }, [rows]);

  const update = (id: string, patch: Partial<Row>) =>
    setRows((rs) => rs.map((r) => (r.id === id ? { ...r, ...patch } : r)));
  const remove = (id: string) => setRows((rs) => rs.filter((r) => r.id !== id));
  const add = () =>
    setRows((rs) => [...rs, { id: crypto.randomUUID(), type: "t3.micro", count: 1, hours: HOURS_MONTH }]);

  const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 });

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        {rows.map((r) => {
          const info = INSTANCES[r.type];
          const sub = info.hourly * r.hours * r.count;
          return (
            <div key={r.id} className="glass-input grid grid-cols-12 items-center gap-2 rounded-xl p-2 sm:p-3">
              <div className="col-span-12 sm:col-span-4">
                <label className="text-[10px] uppercase tracking-wider text-muted-foreground">Instance</label>
                <select
                  value={r.type}
                  onChange={(e) => update(r.id, { type: e.target.value })}
                  className="code-font mt-0.5 w-full rounded-md bg-background/40 px-2 py-1.5 text-sm outline-none focus:ring-1 focus:ring-primary/40"
                >
                  {TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t} — {INSTANCES[t].vcpu}vCPU / {INSTANCES[t].memGiB}GiB
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-4 sm:col-span-2">
                <label className="text-[10px] uppercase tracking-wider text-muted-foreground">Count</label>
                <input
                  type="number"
                  min={1}
                  value={r.count}
                  onChange={(e) => update(r.id, { count: Math.max(1, +e.target.value || 1) })}
                  className="code-font mt-0.5 w-full rounded-md bg-background/40 px-2 py-1.5 text-sm outline-none focus:ring-1 focus:ring-primary/40"
                />
              </div>
              <div className="col-span-4 sm:col-span-3">
                <label className="text-[10px] uppercase tracking-wider text-muted-foreground">Hours/mo</label>
                <input
                  type="number"
                  min={0}
                  max={HOURS_MONTH}
                  value={r.hours}
                  onChange={(e) => update(r.id, { hours: Math.max(0, Math.min(HOURS_MONTH, +e.target.value || 0)) })}
                  className="code-font mt-0.5 w-full rounded-md bg-background/40 px-2 py-1.5 text-sm outline-none focus:ring-1 focus:ring-primary/40"
                />
              </div>
              <div className="col-span-3 sm:col-span-2">
                <label className="text-[10px] uppercase tracking-wider text-muted-foreground">Subtotal</label>
                <div className="code-font mt-0.5 truncate text-sm font-semibold text-primary">{fmt(sub)}</div>
              </div>
              <div className="col-span-1 flex justify-end">
                <Button size="icon" variant="ghost" onClick={() => remove(r.id)} className="h-8 w-8 text-muted-foreground hover:text-destructive">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      <Button onClick={add} variant="outline" className="w-full gap-2 border-dashed border-border/60 bg-transparent hover:bg-primary/5 hover:border-primary/40">
        <Plus className="h-4 w-4" /> Add instance
      </Button>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="Monthly" value={fmt(totals.monthly)} highlight />
        <Stat label="Yearly" value={fmt(totals.yearly)} />
        <Stat label="Total vCPU" value={`${totals.vcpu}`} icon />
        <Stat label="Total RAM" value={`${totals.mem} GiB`} />
      </div>
      <p className="text-[10px] text-muted-foreground/70">
        Indicative on-demand Linux pricing (us-east-1). For estimation only — verify with the official AWS pricing calculator.
      </p>
    </div>
  );
};

const Stat = ({ label, value, highlight, icon }: { label: string; value: string; highlight?: boolean; icon?: boolean }) => (
  <div className={`glass rounded-xl px-3 py-2.5 ${highlight ? "ring-1 ring-primary/40" : ""}`}>
    <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-muted-foreground">
      {icon && <Server className="h-3 w-3" />} {label}
    </div>
    <div className={`code-font mt-0.5 truncate text-base font-bold sm:text-lg ${highlight ? "text-gradient" : "text-foreground"}`}>
      {value}
    </div>
  </div>
);
