import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-warm-white/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-luxury font-semibold text-primary">
              Daffy's Trimsalon
            </h1>
            <span className="text-sm text-muted-foreground hidden sm:block">
              Sittard
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors font-elegant"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('over-daffy')}
              className="text-foreground hover:text-primary transition-colors font-elegant"
            >
              Over Daffy
            </button>
            <button 
              onClick={() => scrollToSection('behandelingen')}
              className="text-foreground hover:text-primary transition-colors font-elegant"
            >
              Behandelingen
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-foreground hover:text-primary transition-colors font-elegant"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors font-elegant"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-3">
            <Button 
              variant="whatsapp" 
              size="sm" 
              onClick={() => window.open('https://wa.me/31612345678', '_blank')}
              className="hidden sm:flex"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
            <Button 
              variant="luxury" 
              size="sm"
              onClick={() => scrollToSection('contact')}
            >
              <Phone className="w-4 h-4" />
              Afspraak
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;