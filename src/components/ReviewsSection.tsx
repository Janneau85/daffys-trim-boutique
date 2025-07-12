import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Anton Janssen & Nala",
      rating: 5,
      text: "Ik breng al geruime tijd mijn Maltezer naar Daffy's Trimsalon en dat tot grote tevredenheid. Nala vindt het ook geen probleem om er naar toe te gaan en ziet ze er na de behandeling mooi en verzorgd uit. Ook prettig dat ik twee dagen voor de afspraken een herinnering ontvang. Eventuele aandachtspunten, bijvoorbeeld een bultje onder het oog waarvoor een dierenarts moet worden geraadpleegd, worden gesignaleerd. Kortom, alle aandacht voor de cliënt.",
      dogBreed: "Maltezer"
    },
    {
      name: "Emil Kerckhoffs",
      rating: 5,
      text: "Top ervaring, wij laten onze lieftallige 4 voeter om de 3 maanden netjes verzorgen bij Daffy's Trimsalon. Altijd vriendelijk, tijd voor een praatje, geeft goed advies en verstaat haar vak heel goed. Wij raden Daffy's Trimsalon zeer zeker aan!!!",
      dogBreed: ""
    },
    {
      name: "Belinda Vluggen & Ravi",
      rating: 5,
      text: "Super tevreden, onze Ravi is altijd mooi in model getrimt, neemt alle tijd en rust voor een goede trim beurt.",
      dogBreed: ""
    }
  ];

  return (
    <section className="py-20 bg-warm-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-luxury font-bold text-black mb-4">
            Wat Klanten Zeggen
          </h2>
          <p className="text-lg text-black font-elegant max-w-2xl mx-auto">
            Lees de ervaringen van onze tevreden klanten en hun viervoetige vriendjes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="shadow-soft border border-border hover:shadow-luxury transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-muted-foreground">
                    ({review.rating}/5)
                  </span>
                </div>
                
                <blockquote className="text-black font-elegant leading-relaxed mb-4">
                  "{review.text}"
                </blockquote>
                
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-center">
                    <cite className="font-semibold text-black not-italic">
                      {review.name}
                    </cite>
                    {review.dogBreed && (
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                        {review.dogBreed}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center bg-card p-8 rounded-lg shadow-soft border border-border">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <span className="text-2xl font-bold text-primary">4.9/5</span>
          </div>
          <p className="text-black font-elegant">
            Gemiddelde beoordeling van 3 Google Reviews
          </p>
          <p className="text-sm text-black mt-2">
            Gebaseerd op Google Reviews
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;