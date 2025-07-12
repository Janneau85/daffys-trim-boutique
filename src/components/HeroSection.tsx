import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-pomeranian.jpg";
import pomeranianCoin from "@/assets/pomeranian-coin.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-cream pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-luxury font-bold text-foreground leading-tight">
                Welkom bij
                <span className="block text-primary font-luxury">
                  Daffy's Trimsalon
                </span>
              </h1>
              <p className="text-xl text-muted-foreground font-elegant leading-relaxed">
                Exclusieve hondentrimsalon in het hart van Sittard, waar elk hondje 
                met liefde en vakmanschap wordt verzorgd.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-soft border border-border">
              <h3 className="font-luxury text-lg text-primary mb-3">
                Onze belofte aan jou
              </h3>
              <div className="space-y-2 text-muted-foreground font-elegant">
                <p>✨ Persoonlijke aandacht voor elk dier</p>
                <p>🏆 Vakkundige verzorging door gecertificeerd trimster</p>
                <p>💛 Specialisatie in Pomeranian vachtverzorging</p>
                <p>🌿 Rustige, stressvrije omgeving</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="luxury" 
                size="lg"
                onClick={() => window.open('https://wa.me/31612345678', '_blank')}
                className="flex-1 sm:flex-none"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Afspraak
              </Button>
              <Button 
                variant="elegant" 
                size="lg"
                onClick={scrollToContact}
                className="flex-1 sm:flex-none"
              >
                <Calendar className="w-5 h-5" />
                Contactformulier
              </Button>
            </div>

            <div className="text-sm text-muted-foreground font-elegant">
              📍 Spechtstraat 9, 6135 EJ Sittard
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-luxury">
              <img 
                src={heroImage} 
                alt="Perfect getrimde Pomeranian in luxe spa setting"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-warm-white p-6 rounded-lg shadow-luxury border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg border-2 border-primary/20">
                  <img 
                    src={pomeranianCoin} 
                    alt="Daffy's Trimsalon munt met Pomeranian"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-luxury font-semibold text-foreground">Daffy's Trimsalon</p>
                  <p className="text-sm text-muted-foreground">Sinds 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;