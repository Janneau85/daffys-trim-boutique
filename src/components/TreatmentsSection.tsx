import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Check, MessageCircle, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { BOOKING_URL, WHATSAPP_URL } from "@/lib/contact";
import {
  POMERANIAN,
  RASSEN,
  POEDELS_DOODLES,
  VLOOIENTOESLAG,
  formatPrijs,
  type Behandeling,
} from "@/lib/prijzen";

const Prijs = ({ vanaf }: { vanaf: number }) => (
  <span className="whitespace-nowrap">
    <span className="text-sm text-muted-foreground">vanaf </span>
    <span className="font-semibold text-foreground">{formatPrijs(vanaf)}</span>
  </span>
);

const PrijsLijst = ({ titel, behandelingen }: { titel: string; behandelingen: Behandeling[] }) => (
  <Card className="shadow-soft border border-border">
    <CardHeader className="pb-2">
      <CardTitle className="font-luxury text-xl">{titel}</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="divide-y divide-border">
        {behandelingen.map((b) => (
          <li key={b.naam} className="flex items-baseline justify-between gap-4 py-2.5">
            <span className="text-foreground">{b.naam}</span>
            <Prijs vanaf={b.vanaf} />
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const TreatmentsSection = () => {
  return (
    <section id="behandelingen" className="py-20 bg-warm-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-luxury font-bold text-black mb-4">
            Prijslijst & behandelingen
          </h2>
          <p className="text-lg text-black font-elegant max-w-2xl mx-auto">
            Ik ben gespecialiseerd in Pomeranians, maar ook andere rassen zijn van harte welkom.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {/* Pomeranian: de specialisatie, dus groot en bovenaan */}
          <Card className="shadow-soft border border-border">
            <CardHeader className="text-center">
              <CardTitle className="font-luxury text-2xl">Pomeranian (tot 35 cm)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {POMERANIAN.map((b) => (
                  <div key={b.naam} className="bg-muted/50 rounded-lg border border-border p-5">
                    <h3 className="font-semibold text-foreground">{b.naam}</h3>
                    <p className="mt-1 mb-3">
                      <span className="text-sm text-muted-foreground">vanaf </span>
                      <span className="text-2xl font-luxury font-bold text-foreground">
                        {formatPrijs(b.vanaf)}
                      </span>
                    </p>
                    {b.omschrijving && (
                      <p className="text-sm text-muted-foreground">{b.omschrijving}</p>
                    )}
                    {b.inbegrepen && (
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {b.inbegrepen.map((item) => (
                          <li key={item} className="flex gap-2">
                            <Check className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            <PrijsLijst titel="Andere rassen" behandelingen={RASSEN} />
            <div className="space-y-6">
              <PrijsLijst titel="Poedels & doodles" behandelingen={POEDELS_DOODLES} />
              <Card className="shadow-soft border border-border">
                <CardHeader className="pb-2">
                  <CardTitle className="font-luxury text-xl">Gebitsverzorging</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Binnenkort online te boeken. Vragen? Stuur me gerust een WhatsApp.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-soft border border-border text-center">
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
              Alle prijzen zijn vanaf-prijzen en gelden voor een goed onderhouden vacht met weinig
              klitten. Afhankelijk van de vacht en je wensen kan het bedrag hoger uitvallen.
            </p>
            <p className="text-foreground font-medium mt-4 mb-5">
              Staat het ras van je hond er niet bij? Stuur me een WhatsApp, dan hoor je wat het kost.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild variant="whatsapp" size="lg" className="w-full sm:w-auto">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </Button>
              <Button asChild variant="luxury" size="lg" className="w-full sm:w-auto">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-4 h-4" />
                  Afspraak maken
                </a>
              </Button>
            </div>
          </div>

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
