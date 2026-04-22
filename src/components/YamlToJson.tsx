import { useMemo, useState } from "react";
import yaml from "js-yaml";
import { Copy, Check, ArrowRightLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const SAMPLE = `# Kubernetes-style sample
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web
  labels:
    app: web
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web
  template:
    spec:
      containers:
        - name: nginx
          image: nginx:1.27
          ports:
            - containerPort: 80
`;

export const YamlToJson = () => {
  const [input, setInput] = useState(SAMPLE);
  const [copied, setCopied] = useState(false);

  const result = useMemo(() => {
    try {
      const parsed = yaml.load(input);
      return { ok: true as const, output: JSON.stringify(parsed, null, 2) };
    } catch (e) {
      return { ok: false as const, output: e instanceof Error ? e.message : "Invalid YAML" };
    }
  }, [input]);

  const lines = input.split("\n").length;

  const onCopy = async () => {
    if (!result.ok) return;
    await navigator.clipboard.writeText(result.output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="grid gap-3 lg:grid-cols-2 lg:gap-4">
      <div className="glass-input rounded-xl overflow-hidden">
        <div className="flex items-center justify-between border-b border-border/50 px-3 py-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--warning))]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--success))]/80" />
            <span className="ml-2 text-xs font-medium text-muted-foreground">input.yaml</span>
          </div>
          <span className="code-font text-[10px] text-muted-foreground">{lines} lines</span>
        </div>
        <div className="flex">
          <div className="code-font select-none border-r border-border/50 bg-background/30 px-2 py-3 text-right text-xs leading-6 text-muted-foreground/60">
            {Array.from({ length: lines }).map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            spellCheck={false}
            className="code-font h-72 w-full resize-none bg-transparent px-3 py-3 text-xs leading-6 text-foreground outline-none sm:text-sm"
          />
        </div>
      </div>

      <div className={`glass-input rounded-xl overflow-hidden ${!result.ok ? "ring-1 ring-destructive/50" : ""}`}>
        <div className="flex items-center justify-between border-b border-border/50 px-3 py-2">
          <div className="flex items-center gap-2">
            <ArrowRightLeft className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium text-muted-foreground">output.json</span>
            {!result.ok && <span className="rounded-full bg-destructive/20 px-2 py-0.5 text-[10px] font-medium text-destructive">error</span>}
          </div>
          <Button size="sm" variant="ghost" onClick={onCopy} disabled={!result.ok} className="h-7 gap-1.5 px-2 text-xs">
            {copied ? <Check className="h-3.5 w-3.5 text-[hsl(var(--success))]" /> : <Copy className="h-3.5 w-3.5" />}
            {copied ? "Copied" : "Copy"}
          </Button>
        </div>
        <pre className={`code-font h-72 overflow-auto px-4 py-3 text-xs leading-6 sm:text-sm ${result.ok ? "text-foreground" : "text-destructive"}`}>
          {result.output}
        </pre>
      </div>
    </div>
  );
};
