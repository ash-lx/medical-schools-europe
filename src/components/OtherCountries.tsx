import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const otherCountries = [
  {
    name: "Austria",
    code: "at",
    details: "German-language instruction, higher fees for non-EU students"
  },
  {
    name: "Netherlands",
    code: "nl",
    details: "Dutch-taught medicine, expensive private English tracks"
  },
  {
    name: "Scandinavian Countries",
    code: "no",
    details: "Local language instruction, high living costs"
  }
];

export function OtherCountries() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Other Western European Countries</h2>
      <div className="grid gap-4">
        {otherCountries.map((country) => (
          <Card key={country.name} className="bg-white/50 backdrop-blur-sm border-none shadow-lg">
            <CardContent className="p-4 flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={`https://flagcdn.com/${country.code}.svg`} alt={`${country.name} flag`} />
                <AvatarFallback>{country.name.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-lg">{country.name}</h3>
              <p className="text-muted-foreground mt-1">{country.details}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}