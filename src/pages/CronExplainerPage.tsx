import { Clock } from "lucide-react";
import { ToolCard } from "@/components/ToolCard";
import { CronExplainer } from "@/components/CronExplainer";

const CronExplainerPage = () => {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Cron Schedule Explainer</h1>
        <p className="mt-2 text-muted-foreground">Decode complex 5-part cron expressions into plain English.</p>
      </header>
      
      <ToolCard
        icon={Clock}
        title="Cron Explainer"
        description="Understand your scheduled tasks."
        accent="accent"
      >
        <CronExplainer />
      </ToolCard>
    </div>
  );
};

export default CronExplainerPage;
