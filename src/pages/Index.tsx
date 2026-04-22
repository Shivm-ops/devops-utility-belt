import { Wrench, FileJson, Clock, Cloud } from "lucide-react";
import { EnvBadge } from "@/components/EnvBadge";
import { ToolCard } from "@/components/ToolCard";
import { YamlToJson } from "@/components/YamlToJson";
import { CronExplainer } from "@/components/CronExplainer";
import { CloudCostCalculator } from "@/components/CloudCostCalculator";

const Index = () => {
  return (
    <main className="relative min-h-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 ring-1 ring-primary/20">
              <Wrench className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-medium text-primary">DevOps Utility Belt</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Ship faster with the <span className="text-gradient">essentials</span>.
            </h1>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
              YAML→JSON, cron parsing, AWS cost estimates, and live environment detection — all in one glass.
            </p>
          </div>
          <EnvBadge />
        </header>

        <div className="grid gap-5 lg:grid-cols-2 xl:gap-6">
          <ToolCard
            icon={FileJson}
            title="YAML → JSON Converter"
            description="Paste YAML, get pretty JSON. Live validation."
            className="lg:col-span-2"
            accent="primary"
          >
            <YamlToJson />
          </ToolCard>

          <ToolCard
            icon={Clock}
            title="Cron Schedule Explainer"
            description="Decode 5-part cron expressions into plain English."
            accent="accent"
          >
            <CronExplainer />
          </ToolCard>

          <ToolCard
            icon={Cloud}
            title="Cloud Cost Calculator"
            description="Estimate monthly AWS EC2 spend by instance type."
            accent="secondary"
          >
            <CloudCostCalculator />
          </ToolCard>
        </div>

        <footer className="mt-10 text-center text-xs text-muted-foreground/60">
          Built for engineers · client-side only · no data leaves your browser
        </footer>
      </div>
    </main>
  );
};

export default Index;
