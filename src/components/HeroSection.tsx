import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar } from "lucide-react";
import heroImage from "@/assets/realistic-pomeranian.jpg";
import { WHATSAPP_URL, BOOKING_URL } from "@/lib/contact";

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
                  asChild
                  variant="luxury"
                  size="lg"
                  className="flex-1 sm:flex-none"
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  variant="elegant"
                  size="lg"
                  className="flex-1 sm:flex-none"
                >
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    <Calendar className="w-5 h-5" />
                    Online Afspraak Plannen
                  </a>
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