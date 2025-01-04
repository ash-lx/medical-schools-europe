import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { CountryData } from "@/types";
import { Euro, GraduationCap, Languages, BookOpen, Globe2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CountryCardProps {
  country: CountryData;
}

export function CountryCard({ country }: CountryCardProps) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={`https://flagcdn.com/${country.countryCode.toLowerCase()}.svg`} alt={`${country.country} flag`} />
            <AvatarFallback>{country.country.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <CardTitle className="text-2xl">{country.country}</CardTitle>
            <Badge variant="secondary" className="text-base">GDP: ${country.gdpPerCapita}</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-8">
        <Section icon={Euro} title="Tuition Fees" className="text-lg">
          {country.tuitionFees}
        </Section>

        <Section icon={BookOpen} title="Entrance Exams" className="text-lg">
          {country.entranceExams}
        </Section>

        <Section icon={Languages} title="Language Requirements" className="text-lg">
          <p className="mb-4"><strong>For Admission:</strong> {country.languageRequirementAdmission}</p>
          <p><strong>For Clinical Practice:</strong> {country.languageRequirementClinical}</p>
        </Section>

        <Section icon={GraduationCap} title="Universities" className="text-lg">
          <div className="grid grid-cols-1 gap-2 mt-4">
            {country.universities.map((uni, index) => (
              <div key={uni.name} className="p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                <span className="font-medium">{index + 1}. {uni.name}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section icon={Globe2} title="Practice Locations" className="text-lg">
          {country.practiceLocations}
        </Section>
      </CardContent>
    </Card>
  );
}