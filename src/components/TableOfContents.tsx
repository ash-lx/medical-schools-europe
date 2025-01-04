import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";

interface TableOfContentsProps {
  className?: string;
}

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "available-programs", label: "Available Programs" },
  { id: "restricted-countries", label: "Why Not Other Countries?" },
  { id: "other-countries", label: "Other Western Europe" },
  { id: "conclusion", label: "Conclusion" },
];

export function TableOfContents({ className }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string>("introduction");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={cn("bg-white/50 backdrop-blur-sm rounded-lg p-6", className)}>
      <h3 className="font-semibold mb-4 text-lg">Table of Contents</h3>
      <ScrollArea className="h-[calc(100vh-12rem)]">
        <nav className="space-y-1">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
              }}
              className={cn(
                "block py-2 px-3 text-sm rounded-md transition-colors",
                activeSection === section.id ? "bg-blue-50 text-blue-700 font-medium" : "text-muted-foreground hover:text-foreground hover:bg-muted/50")}
            >
              {section.label}
            </a>
          ))}
        </nav>
      </ScrollArea>
    </div>
  );
}