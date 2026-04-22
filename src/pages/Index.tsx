import { Wrench, FileJson, Clock, Cloud } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="space-y-12">
      <header className="flex flex-col gap-4 text-center max-w-3xl mx-auto py-10">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Ship faster with the <span className="text-gradient">essentials</span>.
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Your all-in-one DevOps Utility Belt. Select a tool below to get started.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        <Link to="/yaml-json" className="group relative rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-glow hover:-translate-y-1">
          <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <FileJson className="h-6 w-6" />
          </div>
          <h2 className="text-xl font-bold mb-2">YAML → JSON</h2>
          <p className="text-sm text-muted-foreground">
            Convert YAML manifests to JSON instantly with live syntax validation.
          </p>
        </Link>

        <Link to="/cron" className="group relative rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-glow hover:-translate-y-1">
          <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-accent/10 p-3 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
            <Clock className="h-6 w-6" />
          </div>
          <h2 className="text-xl font-bold mb-2">Cron Explainer</h2>
          <p className="text-sm text-muted-foreground">
            Decode standard 5-part cron expressions into plain English.
          </p>
        </Link>

        <Link to="/cloud-cost" className="group relative rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-glow hover:-translate-y-1">
          <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-secondary/10 p-3 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
            <Cloud className="h-6 w-6" />
          </div>
          <h2 className="text-xl font-bold mb-2">Cloud Cost Calc</h2>
          <p className="text-sm text-muted-foreground">
            Estimate your monthly AWS EC2 spend across different instances.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Index;
