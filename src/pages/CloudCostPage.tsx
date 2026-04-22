import { Cloud } from "lucide-react";
import { ToolCard } from "@/components/ToolCard";
import { CloudCostCalculator } from "@/components/CloudCostCalculator";

const CloudCostPage = () => {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Cloud Cost Calculator</h1>
        <p className="mt-2 text-muted-foreground">Estimate monthly AWS EC2 spend by instance type.</p>
      </header>
      
      <ToolCard
        icon={Cloud}
        title="EC2 Calculator"
        description="Quick cloud cost estimates."
        accent="secondary"
      >
        <CloudCostCalculator />
      </ToolCard>
    </div>
  );
};

export default CloudCostPage;
