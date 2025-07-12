import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Marina & Bella",
      rating: 5,
      text: "Bella (Pomeranian) gaat altijd blij naar Daffy! Ze komt zo mooi verzorgd thuis en Daffy neemt echt de tijd voor haar. De salon is super schoon en rustig. Aanrader!",
      dogBreed: "Pomeranian"
    },
    {
      name: "Thomas & Buddy",
      rating: 5,
      text: "Buddy was eerst bang bij andere trimmers, maar bij Daffy voelt hij zich helemaal op zijn gemak. Ze heeft zoveel geduld en liefde voor de dieren. Top service!",
      dogBreed: "Yorkshire Terrier"
    },
    {
      name: "Lisa & Coco",
      rating: 5,
      text: "Coco's eerste trimbeurt was bij Daffy en het was een succes! Ze heeft haar zo voorzichtig en lief behandeld. De prijs is eerlijk en de kwaliteit is uitstekend.",
      dogBreed: "Maltezer"
    },
    {
      name: "Patrick & Max",
      rating: 5,
      text: "Al jaren een vaste klant. Daffy kent Max inmiddels door en door. Altijd tevreden met het resultaat en de persoonlijke aandacht die ze geeft. Heel professioneel!",
      dogBreed: "Bichon Frisé"
    },
    {
      name: "Emma & Luna",
      rating: 5,
      text: "Luna ziet er altijd prachtig uit na haar bezoek aan Daffy. De teddybear styling voor Pomeranians is echt haar specialiteit. Onze vaste trimster!",
      dogBreed: "Pomeranian"
    },
    {
      name: "Rob & Milo",
      rating: 5,
      text: "Milo heeft een moeilijke vacht, maar Daffy weet precies hoe ze hem moet behandelen. Altijd een perfect resultaat en Milo is er helemaal zen van.",
      dogBreed: "Poedel mix"
    }
  ];

  return (
    <section className="py-20 bg-gradient-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-luxury font-bold text-foreground mb-4">
            Wat Klanten Zeggen
          </h2>
          <p className="text-lg text-muted-foreground font-elegant max-w-2xl mx-auto">
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
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-muted-foreground">
                    ({review.rating}/5)
                  </span>
                </div>
                
                <blockquote className="text-muted-foreground font-elegant leading-relaxed mb-4">
                  "{review.text}"
                </blockquote>
                
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-center">
                    <cite className="font-semibold text-foreground not-italic">
                      {review.name}
                    </cite>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {review.dogBreed}
                    </span>
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
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-2xl font-bold text-primary">4.9/5</span>
          </div>
          <p className="text-muted-foreground font-elegant">
            Gemiddelde beoordeling van 50+ tevreden klanten
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Gebaseerd op Google Reviews en persoonlijke feedback
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;