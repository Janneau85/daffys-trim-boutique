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
    <section id="home" className="min-h-screen relative">
      {/* Content */}
      <div className="bg-warm-white/50 backdrop-blur-sm min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-20 pt-32">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 text-center">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-luxury font-bold text-black leading-tight">
                  Welkom bij
                  <span className="block text-black font-luxury">
                    Daffy's Trimsalon
                  </span>
                </h1>
              </div>

              <p className="text-lg text-black font-elegant leading-relaxed max-w-2xl mx-auto">
                Hallo! Ik ben Daphne. Vanuit mijn salon in 
                Sittard verwelkom ik elke hond alsof het mijn eigen huisdier is.
              </p>

              <div className="relative flex justify-center">
                {/* Bullet points - midden */}
                <div className="bg-card p-6 rounded-lg shadow-soft border border-border max-w-md relative">
                  {/* Logo box - links overlopend */}
                  <div className="absolute -left-10 -top-6 bg-white p-2 rounded-lg shadow-lg border border-border w-20 h-20 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/fb3e5604-4f9f-4947-9f43-db9e339ab36d.png" 
                      alt="Daffy's Trimsalon Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* 5+ jaar ervaring box - rechts overlopend */}
                  <div className="absolute -right-6 -top-4 bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-semibold shadow-soft">
                    ✨ 5+ jaar ervaring
                  </div>
                  
                  <div className="space-y-2 text-black font-elegant">
                    <p>✨ Persoonlijke aandacht voor elk dier</p>
                    <p>🏆 Vakkundige verzorging door gediplomeerd trimster</p>
                    <p>💛 Specialisatie in Pomeranian vachtverzorging</p>
                    <p>🌿 Rustige, stressvrije omgeving</p>
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

              <div className="text-sm text-black font-elegant">
                📍 Spechtstraat 9, 6135 EJ Sittard
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;