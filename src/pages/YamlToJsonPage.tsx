import { FileJson } from "lucide-react";
import { ToolCard } from "@/components/ToolCard";
import { YamlToJson } from "@/components/YamlToJson";

const YamlToJsonPage = () => {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">YAML → JSON Converter</h1>
        <p className="mt-2 text-muted-foreground">Paste YAML, get pretty JSON. Live validation included.</p>
      </header>
      
      <ToolCard
        icon={FileJson}
        title="YAML to JSON"
        description="Fast client-side conversion."
        accent="primary"
      >
        <YamlToJson />
      </ToolCard>
    </div>
  );
};

export default YamlToJsonPage;
