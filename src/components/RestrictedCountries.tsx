import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const countries = [
  {
    name: "Switzerland",
    code: "CH",
    reasons: [
      "Teaching languages are German, French, Italian, or Romansh",
      "No English-taught MBBS programs at undergraduate level",
      "Very high living costs, even with moderate tuition",
      "Strict quotas for non-EU/EEA students in medicine",
      "Requires B2/C1 level proficiency in local language"
    ]
  },
  {
    name: "Germany",
    code: "DE",
    reasons: [
      "Almost exclusively German-taught programs",
      "Requires B2/C1 level German proficiency",
      "Very competitive admission (numerus clausus)",
      "English-taught programs are rare and usually private with higher costs",
      "Clinical years require advanced German language skills"
    ]
  },
  {
    name: "France",
    code: "FR",
    reasons: [
      "Programs taught almost entirely in French",
      "Competitive first-year exam system (PACES)",
      "Requires high French language proficiency",
      "No English-taught MBBS programs in public system",
      "Strong focus on French medical practices"
    ]
  },
  {
    name: "Spain",
    code: "ES",
    reasons: [
      "Primary instruction in Spanish (Castilian)",
      "Limited English-taught programs",
      "Higher fees for non-EU students",
      "Requires B2/C1 Spanish proficiency",
      "Private universities exceed €15,000/year budget"
    ]
  }
];

export function RestrictedCountries() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Why Not Other Popular European Countries?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {countries.map((country) => (
          <Card key={country.code} className="bg-white/50 backdrop-blur-sm border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage
                    src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`}
                    alt={`${country.name} flag`}
                  />
                  <AvatarFallback>{country.code}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold">{country.name}</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                {country.reasons.map((reason, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}