import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar } from "lucide-react";
import heroImage from "@/assets/realistic-pomeranian.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url(${heroImage})`
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 bg-warm-white/90 backdrop-blur-sm min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-20 pt-32">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 text-center">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-luxury font-bold text-foreground leading-tight">
                  Welkom bij
                  <span className="block text-primary font-luxury">
                    Daffy's Trimsalon
                  </span>
                </h1>
              </div>

              <p className="text-lg text-foreground font-elegant leading-relaxed max-w-2xl mx-auto">
                Hallo! Ik ben Daphne, een gediplomeerd hondentrimster met een passie 
                voor het verzorgen van onze viervoetige vrienden. Vanuit mijn salon in 
                Sittard verwelkom ik elke hond alsof het mijn eigen huisdier is.
              </p>

              <div className="bg-card p-6 rounded-lg shadow-soft border border-border">
                <div className="space-y-2 text-muted-foreground font-elegant">
                  <p>✨ Persoonlijke aandacht voor elk dier</p>
                  <p>🏆 Vakkundige verzorging door gecertificeerd trimster</p>
                  <p>💛 Specialisatie in Pomeranian vachtverzorging</p>
                  <p>🌿 Rustige, stressvrije omgeving</p>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border shadow-soft">
                <h3 className="font-luxury text-xl text-primary mb-3">
                  Mijn specialisaties
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Pomeranian Expert</h4>
                    <p className="text-sm text-muted-foreground">
                      Gespecialiseerd in de unieke vacht van Pomeranians
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Kleine Rassen</h4>
                    <p className="text-sm text-muted-foreground">
                      Extra zorgvuldig met onze kleinste vriendjes
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Puppy's</h4>
                    <p className="text-sm text-muted-foreground">
                      Eerste trimbeurt? Ik maak er een positieve ervaring van
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Gedragsbegeleiding</h4>
                    <p className="text-sm text-muted-foreground">
                      Rustige aanpak voor angstige hondjes
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="luxury" 
                  size="lg"
                  onClick={() => window.open('https://wa.me/31612345678', '_blank')}
                  className="flex-1 sm:flex-none"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Button>
                <Button 
                  variant="elegant" 
                  size="lg"
                  onClick={() => window.open('https://portal.looppiness.com/daffy-s-trimsalon/', '_blank')}
                  className="flex-1 sm:flex-none"
                >
                  <Calendar className="w-5 h-5" />
                  Online Afspraak Plannen
                </Button>
              </div>

              <div className="text-sm text-muted-foreground font-elegant">
                📍 Spechtstraat 9, 6135 EJ Sittard
              </div>

              <div className="flex items-center justify-center space-x-6 pt-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">500+</p>
                  <p className="text-sm text-muted-foreground">Blije hondjes</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">100%</p>
                  <p className="text-sm text-muted-foreground">Liefde & zorg</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">5★</p>
                  <p className="text-sm text-muted-foreground">Klantbeoordeling</p>
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