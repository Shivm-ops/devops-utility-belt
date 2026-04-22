import { useEffect, useState } from "react";
import { Globe } from "lucide-react";

type EnvInfo = {
  label: string;
  hostname: string;
  tone: "prod" | "preview" | "local" | "staging";
};

function detect(): EnvInfo {
  const hostname = typeof window !== "undefined" ? window.location.hostname : "unknown";
  const h = hostname.toLowerCase();
  if (h === "localhost" || h.startsWith("127.") || h.endsWith(".local"))
    return { label: "Local", hostname, tone: "local" };
  if (h.includes("staging") || h.includes("stg")) return { label: "Staging", hostname, tone: "staging" };
  if (h.includes("preview") || h.includes("lovable.app") || h.includes("vercel.app") || h.includes("netlify.app"))
    return { label: "Preview", hostname, tone: "preview" };
  return { label: "Production", hostname, tone: "prod" };
}

const toneStyles: Record<EnvInfo["tone"], string> = {
  prod: "bg-[hsl(var(--success)/0.15)] text-[hsl(var(--success))] ring-[hsl(var(--success)/0.4)]",
  staging: "bg-[hsl(var(--warning)/0.15)] text-[hsl(var(--warning))] ring-[hsl(var(--warning)/0.4)]",
  preview: "bg-primary/15 text-primary ring-primary/40",
  local: "bg-accent/15 text-accent ring-accent/40",
};

export const EnvBadge = () => {
  const [env, setEnv] = useState<EnvInfo | null>(null);
  useEffect(() => setEnv(detect()), []);
  if (!env) return null;
  return (
    <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium ring-1 ${toneStyles[env.tone]} backdrop-blur-md`}>
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-pulse-glow rounded-full bg-current opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-current" />
      </span>
      <span className="font-semibold uppercase tracking-wider">{env.label}</span>
      <span className="hidden sm:inline-flex items-center gap-1 text-muted-foreground/80 font-normal normal-case tracking-normal">
        <Globe className="h-3 w-3" />
        <span className="code-font max-w-[180px] truncate">{env.hostname}</span>
      </span>
    </div>
  );
};
