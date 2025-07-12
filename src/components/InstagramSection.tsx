import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, ExternalLink } from "lucide-react";

const InstagramSection = () => {
  return (
    <section className="py-20 bg-gradient-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Instagram className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-luxury font-bold text-foreground">
              @daffys_trimsalon
            </h2>
          </div>
          <p className="text-lg text-muted-foreground font-elegant max-w-2xl mx-auto">
            Volg ons op Instagram voor de nieuwste transformaties, tips en 
            behind-the-scenes van onze salon
          </p>
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="luxury" 
            size="lg"
            onClick={() => window.open('https://www.instagram.com/daffys_trimsalon/', '_blank')}
            className="group"
          >
            <Instagram className="w-5 h-5 mr-2" />
            Volg ons op Instagram
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4 font-elegant">
            Nieuwste updates, tips en prachtige transformaties
          </p>
        </div>

        <div className="mt-12 bg-card p-8 rounded-lg shadow-soft border border-border text-center">
          <h3 className="font-luxury text-2xl text-foreground mb-4">
            Tag ons in je posts! 📸
          </h3>
          <p className="text-muted-foreground font-elegant max-w-2xl mx-auto">
            Heb je een mooie foto van je getrimde hondje? Tag ons @daffystrimsalon 
            of gebruik #daffystrimsalon en misschien zie je jouw foto terug op onze pagina!
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;