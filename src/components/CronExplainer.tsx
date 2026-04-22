import { useMemo, useState } from "react";
import cronstrue from "cronstrue";
import { Clock } from "lucide-react";

const PRESETS = [
  { label: "Every minute", value: "* * * * *" },
  { label: "Hourly", value: "0 * * * *" },
  { label: "Daily 9am", value: "0 9 * * *" },
  { label: "Weekdays 8am", value: "0 8 * * 1-5" },
  { label: "1st of month", value: "0 0 1 * *" },
];

const FIELDS = ["Minute", "Hour", "Day (month)", "Month", "Day (week)"];

export const CronExplainer = () => {
  const [expr, setExpr] = useState("*/15 9-17 * * 1-5");

  const result = useMemo(() => {
    const parts = expr.trim().split(/\s+/);
    if (parts.length !== 5)
      return { ok: false as const, message: "Cron must have exactly 5 parts (min hour dom mon dow)" };
    try {
      return { ok: true as const, message: cronstrue.toString(expr, { use24HourTimeFormat: false }) };
    } catch (e) {
      return { ok: false as const, message: e instanceof Error ? e.message : "Invalid cron expression" };
    }
  }, [expr]);

  const parts = expr.trim().split(/\s+/);

  return (
    <div className="space-y-4">
      <div className="glass-input flex items-center gap-2 rounded-xl px-3 py-2.5">
        <Clock className="h-4 w-4 text-primary shrink-0" />
        <input
          value={expr}
          onChange={(e) => setExpr(e.target.value)}
          spellCheck={false}
          placeholder="* * * * *"
          className="code-font w-full bg-transparent text-sm outline-none sm:text-base"
        />
      </div>

      <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
        {FIELDS.map((f, i) => (
          <div key={f} className="glass rounded-lg px-1.5 py-2 text-center sm:px-2">
            <div className="code-font text-base font-bold text-primary sm:text-lg">{parts[i] ?? "—"}</div>
            <div className="mt-0.5 text-[9px] uppercase tracking-wider text-muted-foreground sm:text-[10px]">{f}</div>
          </div>
        ))}
      </div>

      <div className={`rounded-xl border p-4 ${result.ok ? "border-primary/30 bg-primary/5" : "border-destructive/40 bg-destructive/5"}`}>
        <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          {result.ok ? "In plain English" : "Error"}
        </div>
        <p className={`mt-1 text-sm sm:text-base ${result.ok ? "text-foreground" : "text-destructive"}`}>
          {result.message}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {PRESETS.map((p) => (
          <button
            key={p.value}
            onClick={() => setExpr(p.value)}
            className="glass-input rounded-full px-3 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            {p.label}
          </button>
        ))}
      </div>
    </div>
  );
};
