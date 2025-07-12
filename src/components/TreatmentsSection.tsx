import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Scissors, Sparkles } from "lucide-react";

const TreatmentsSection = () => {
  const treatments = [
    {
      category: "Kleine Rassen",
      icon: <Heart className="w-5 h-5" />,
      color: "bg-pink-100 text-pink-700",
      treatments: [
        { name: "Basis trimbeurt", price: "vanaf €35", description: "Wassen, föhnen, nagels knippen, oren schoonmaken" },
        { name: "Luxe behandeling", price: "vanaf €45", description: "Basis + styling, parfum, strikje" },
        { name: "Puppy introductie", price: "€25", description: "Eerste kennismaking (tot 6 maanden)" }
      ]
    },
    {
      category: "Pomeranian Specialist",
      icon: <Star className="w-5 h-5" />,
      color: "bg-amber-100 text-amber-700",
      featured: true,
      treatments: [
        { name: "Pomeranian Classic", price: "vanaf €50", description: "Specialistische vachtverzorging, model knippen" },
        { name: "Pomeranian Deluxe", price: "vanaf €65", description: "Premium verzorging + teddybeer styling" },
        { name: "Pomeranian Maintenance", price: "vanaf €40", description: "Tussendoor bijwerken en verzorging" }
      ]
    },
    {
      category: "Middelgrote Rassen",
      icon: <Scissors className="w-5 h-5" />,
      color: "bg-blue-100 text-blue-700",
      treatments: [
        { name: "Standaard trimbeurt", price: "vanaf €45", description: "Complete verzorging voor middelgrote honden" },
        { name: "Vachtverkorting", price: "vanaf €55", description: "Uitdunnen en modeleren van de vacht" },
        { name: "Seizoensbehandeling", price: "vanaf €40", description: "Aangepast aan het seizoen" }
      ]
    }
  ];

  return (
    <section id="behandelingen" className="py-20 bg-gradient-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-luxury font-bold text-foreground mb-4">
            Onze Behandelingen
          </h2>
          <p className="text-lg text-muted-foreground font-elegant max-w-2xl mx-auto">
            Elke behandeling wordt aangepast aan jouw hondje. Prijs is afhankelijk van 
            vachttype, grootte, gedrag en huidige verzorgingstoestand.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {treatments.map((category, index) => (
            <Card 
              key={index} 
              className={`relative shadow-soft border border-border hover:shadow-luxury transition-all duration-300 ${
                category.featured ? 'lg:scale-105 border-primary' : ''
              }`}
            >
              {category.featured && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-luxury text-primary-foreground">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Specialiteit
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mx-auto mb-3`}>
                  {category.icon}
                </div>
                <CardTitle className="font-luxury text-xl">{category.category}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {category.treatments.map((treatment, treatmentIndex) => (
                  <div key={treatmentIndex} className="p-4 bg-warm-white rounded-lg border border-border/50">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground">{treatment.name}</h4>
                      <span className="text-primary font-bold">{treatment.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{treatment.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-card p-8 rounded-lg shadow-soft border border-border">
          <h3 className="font-luxury text-2xl text-center text-foreground mb-6">
            Belangrijke informatie
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">⏰ Behandelduur</h4>
                <p className="text-muted-foreground text-sm">
                  Kleine honden: 1-1.5 uur<br/>
                  Middelgrote honden: 1.5-2 uur<br/>
                  Eerste bezoek kan langer duren
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">🐕 Puppy's welkom</h4>
                <p className="text-muted-foreground text-sm">
                  Vanaf 16 weken (volledig ingeënt)<br/>
                  Speciale introductieprijs voor eerste bezoek
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">🚫 Vlooienbeleid</h4>
                <p className="text-muted-foreground text-sm">
                  Honden met vlooien kunnen helaas niet worden behandeld<br/>
                  Graag eerst behandelen bij dierenarts
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">💳 Betalen</h4>
                <p className="text-muted-foreground text-sm">
                  Contant, PIN of Tikkie<br/>
                  Betaling na behandeling
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;