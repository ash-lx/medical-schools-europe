import { Card, CardContent } from "@/components/ui/card";

export function Conclusion() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Conclusion</h2>
      <Card className="bg-white/50 backdrop-blur-sm border-none shadow-lg">
        <CardContent className="p-6 space-y-6">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              While pursuing an MBBS in Europe offers numerous advantages, choosing the right destination requires careful consideration of various factors. 
              The countries listed in our detailed guide provide the best balance of:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>English-medium instruction</li>
              <li>Affordable tuition (under €15,000/year)</li>
              <li>Recognized qualifications</li>
              <li>Reasonable living costs</li>
              <li>Practical language requirements</li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground">
              For students specifically seeking English-taught programs within this budget range, Eastern and Central European 
              countries often provide the most viable options. While Western European countries like Germany or Switzerland 
              offer excellent medical education, their language requirements and costs make them less accessible for 
              English-speaking international students.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground">
              Remember that medical education is a significant investment in your future. Consider not just the immediate 
              costs and language of instruction, but also:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Recognition of the degree in your home country</li>
              <li>Quality of clinical training</li>
              <li>Living conditions and cultural adaptation</li>
              <li>Post-graduation opportunities</li>
              <li>Long-term career goals</li>
            </ul>
          </div>

          <p className="text-muted-foreground font-medium">
            Choose a destination that aligns with both your current capabilities and future aspirations in the medical field.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}