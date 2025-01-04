import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CountryData } from "@/types";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CountryDialogProps {
  country: CountryData | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CountryDialog({ country, open, onOpenChange }: CountryDialogProps) {
  if (!country) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{country.country}</DialogTitle>
          <DialogDescription>
            GDP per Capita: ${country.gdpPerCapita}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh]">
          <div className="space-y-4">
            <Section title="Entrance Exams & Scoring Criteria">
              {country.entranceExams}
            </Section>
            
            <Section title="Language Requirements">
              <p><strong>For Admission:</strong> {country.languageRequirementAdmission}</p>
              <p><strong>For Clinical Practice:</strong> {country.languageRequirementClinical}</p>
            </Section>

            <Section title="Universities">
              <ul className="list-disc pl-4 space-y-1">
                {country.universities.map((uni) => (
                  <li key={uni.name}>{uni.name}</li>
                ))}
              </ul>
            </Section>

            <Section title="Tuition Fees">
              {country.tuitionFees}
            </Section>

            <Section title="Practice Locations">
              {country.practiceLocations}
            </Section>

            <Section title="Pragmatic Reasoning">
              {country.pragmaticReasoning}
            </Section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-lg">{title}</h3>
      <Separator />
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  );
}