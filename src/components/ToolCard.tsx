import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface ToolCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
  accent?: "primary" | "accent" | "secondary";
}

const accentMap = {
  primary: "from-primary/30 to-transparent",
  accent: "from-accent/30 to-transparent",
  secondary: "from-secondary/30 to-transparent",
};

export const ToolCard = ({ icon: Icon, title, description, children, className = "", accent = "primary" }: ToolCardProps) => (
  <section className={`glass relative overflow-hidden rounded-2xl p-5 sm:p-6 animate-fade-in-up ${className}`}>
    <div className={`pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br ${accentMap[accent]} blur-3xl`} />
    <header className="relative mb-5 flex items-start gap-3">
      <div className="glass-strong flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div className="min-w-0">
        <h2 className="font-display text-base font-semibold text-foreground sm:text-lg">{title}</h2>
        <p className="text-xs text-muted-foreground sm:text-sm">{description}</p>
      </div>
    </header>
    <div className="relative">{children}</div>
  </section>
);
