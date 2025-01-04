import { cn } from "@/lib/utils";

interface SectionProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ icon: Icon, title, children, className }: SectionProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center gap-2">
        <Icon className="w-5 h-5 text-primary" />
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <div className="h-px bg-border" />
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  );
}