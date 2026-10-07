import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { BOOKING_URL, WHATSAPP_URL } from "@/lib/contact";
import { VLOOIENTOESLAG, formatPrijs } from "@/lib/prijzen";

const TreatmentsSection = () => {
  return (
    <section id="behandelingen" className="py-20 bg-warm-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-luxury font-bold text-black mb-4">
            Behandelingen & prijzen
          </h2>
          <p className="text-lg text-black font-elegant max-w-2xl mx-auto">
            Ik ben gespecialiseerd in Pomeranians, maar ook andere rassen zijn van harte welkom.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="shadow-soft border border-border">
            <CardHeader className="text-center">
              <CardTitle className="font-luxury text-2xl">Prijzen & online afspraak</CardTitle>
              <CardDescription className="text-base">
                In het boekingssysteem zie je de behandelingen en vanaf-prijzen per ras, en plan je
                direct een afspraak.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button asChild variant="luxury" size="lg" className="w-full max-w-md">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-4 h-4" />
                  Bekijk prijzen & maak een afspraak
                </a>
              </Button>
              <p className="text-muted-foreground text-sm max-w-2xl mx-auto mt-5">
                De prijzen zijn vanaf-prijzen en gelden voor een goed onderhouden vacht met weinig
                klitten. Afhankelijk van de vacht en je wensen kan het bedrag hoger uitvallen.
              </p>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-foreground font-medium mb-4">
                  Staat het ras van je hond er niet bij? Stuur me een WhatsApp, dan hoor je wat het
                  kost.
                </p>
                <Button asChild variant="whatsapp" size="lg" className="w-full sm:w-auto">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </Button>
                <p className="text-muted-foreground text-sm mt-5">
                  <span className="font-semibold text-foreground">Gebitsverzorging</span> is
                  binnenkort ook online te boeken.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="bg-card p-8 rounded-lg shadow-soft border border-border">
            <h3 className="font-luxury text-2xl text-center text-foreground mb-6">
              Goed om te weten
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">🐕 Welzijn voorop</h4>
                <p className="text-muted-foreground text-sm">
                  Het welzijn van je hond staat bij mij voorop: ik neem de tijd voor elke behandeling
                  en zorg dat je hond zich op zijn gemak voelt in een rustige, ontspannen omgeving.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">🚫 Vlooienbeleid</h4>
                <p className="text-muted-foreground text-sm">
                  Honden moeten vlovrij naar de salon komen. Blijkt je hond vlooien te hebben, dan
                  reken ik {formatPrijs(VLOOIENTOESLAG)} per hond extra voor de vlooienbehandeling en
                  het schoonmaken van de salon, zodat die vlovrij blijft voor alle dieren.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border text-center">
              <Button asChild variant="outline" size="lg" className="w-full max-w-md">
                <Link to="/terms-of-service">
                  <FileText className="w-4 h-4" />
                  Algemene voorwaarden
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
