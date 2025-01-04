import { Card, CardContent } from "@/components/ui/card";

export function Introduction() {
  return (
    <Card className="bg-white/50 backdrop-blur-sm border-none shadow-lg">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            Pursuing medical education abroad has become an increasingly attractive option for aspiring doctors, 
            offering a combination of quality education, international exposure, and often more affordable tuition 
            compared to private medical colleges in many countries.
          </p>
          <p>
            This comprehensive guide focuses specifically on English-medium MBBS programs in Europe with annual 
            tuition fees under €15,000, making them accessible to a wider range of students.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}