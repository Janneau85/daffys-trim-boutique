import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Heart, Scissors, Sparkles, ExternalLink } from "lucide-react";

const TreatmentsSection = () => {
  return (
    <section id="behandelingen" className="py-20 bg-warm-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-luxury font-bold text-black mb-4">
            Prijslijst & Behandelingen
          </h2>
          <p className="text-lg text-black font-elegant max-w-2xl mx-auto">
            Wij zijn gespecialiseerd in het trimmen van Pomeranians, maar ook honden van andere rassen zijn van harte welkom.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-soft border border-border mb-8">
            <CardHeader className="text-center">
              <CardTitle className="font-luxury text-2xl flex items-center justify-center">
                <Star className="w-6 h-6 mr-2 text-primary" />
                Complete Prijslijst & Online Afspraak
              </CardTitle>
              <CardDescription className="text-base">
                Bekijk onze volledige prijslijst en maak direct een afspraak via ons online systeem
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="bg-primary/10 p-4 rounded-lg border border-primary/30 mb-4">
                <div className="flex items-center justify-center mb-2">
                  <Heart className="w-5 h-5 mr-2 text-primary" />
                  <span className="font-semibold text-primary">Puppy Wenbeurtje</span>
                </div>
                <p className="text-sm text-foreground">
                  Speciaal voor puppy's tot 5 maanden
                </p>
              </div>
              <div className="bg-gradient-subtle p-6 rounded-lg border border-primary/20">
                <Button 
                  variant="luxury" 
                  size="lg"
                  onClick={() => window.open('https://portal.looppiness.com/daffy-s-trimsalon/', '_blank')}
                  className="w-full max-w-md"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Bekijk Tarieven & Maak Afspraak
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="bg-card p-8 rounded-lg shadow-soft border border-border">
            <h3 className="font-luxury text-2xl text-center text-foreground mb-6">
              Belangrijke informatie
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">💰 Prijzen</h4>
                  <p className="text-muted-foreground text-sm">
                    De genoemde prijzen zijn een indicatie voor het trimmen.<br/>
                    De opgegeven prijs is een basisprijs en geldt alleen bij goed onderhouden vachten met weinig klitten.<br/>
                    Afhankelijk van de staat van de vacht en uw wensen kan het bedrag verschillen.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">🐕 Welzijn voorop</h4>
                  <p className="text-muted-foreground text-sm">
                    Bij ons staat het welzijn van uw hond voorop: we nemen de tijd voor elke behandeling en zorgen ervoor dat uw hond zich op zijn gemak voelt in een rustige en ontspannen omgeving.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">🚫 Vlooienbeleid</h4>
                  <p className="text-muted-foreground text-sm">
                    Honden moeten vlo-vrij naar de salon komen.<br/>
                    Bij aanwezigheid van vlooien rekenen we een extra schoonmaaktoeslag van €25 om de salon vlo-vrij te houden voor alle dieren.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">🐕 Alle rassen welkom</h4>
                  <p className="text-muted-foreground text-sm">
                    De rassen op onze website zijn slechts een klein aantal voorbeelden. Als je het ras van jouw hond er niet tussen ziet staan, neem dan contact met ons op.
                  </p>
                </div>
                </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-border text-center">
              <h4 className="font-semibold text-black mb-4">📋 Algemene Voorwaarden</h4>
              <p className="text-sm text-black mb-4">
                Voor alle voorwaarden en belangrijke informatie over onze dienstverlening.
              </p>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('/terms-of-service', '_self')}
                className="w-full max-w-md"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Bekijk Algemene Voorwaarden
              </Button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;