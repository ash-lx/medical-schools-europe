import { countriesData } from "@/data/countries";
import { CountryCard } from "@/components/CountryCard";
import { Header } from "@/components/Header";
import { Introduction } from "@/components/Introduction";
import { RestrictedCountries } from "@/components/RestrictedCountries";
import { OtherCountries } from "@/components/OtherCountries";
import { Conclusion } from "@/components/Conclusion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TableOfContents } from "@/components/TableOfContents";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white relative">
      <Header />

      <div className="container mx-auto px-4 py-12 flex gap-8">
        <TableOfContents className="w-64 hidden lg:block sticky top-8 h-[calc(100vh-8rem)]" />
        
        <main id="content" className="flex-1 max-w-4xl mx-auto space-y-16">
          <ScrollArea className="h-full">
            <div className="space-y-16 pb-16">
              <section id="introduction">
                <Introduction />
              </section>

              <section id="available-programs">
                <h2 className="text-3xl font-bold mb-8">Available Programs by Country</h2>
                <div className="grid grid-cols-1 gap-8">
                  {countriesData.map((country) => (
                    <CountryCard key={country.country} country={country} />
                  ))}
                </div>
              </section>

              <section id="restricted-countries">
                <RestrictedCountries />
              </section>

              <section id="other-countries">
                <OtherCountries />
              </section>

              <section id="conclusion">
                <Conclusion />
              </section>
            </div>
          </ScrollArea>
        </main>
      </div>
    </div>
  );
}