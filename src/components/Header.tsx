import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b shadow-soft transition-all duration-300 ${
      isScrolled 
        ? 'bg-primary/95 border-primary-foreground/20' 
        : 'bg-warm-white/95 border-border'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className={`text-2xl font-luxury font-semibold transition-colors duration-300 ${
              isScrolled ? 'text-primary-foreground' : 'text-primary'
            }`}>
              Daffy's Trimsalon
            </h1>
            <span className={`text-sm hidden sm:block transition-colors duration-300 ${
              isScrolled ? 'text-primary-foreground/70' : 'text-muted-foreground'
            }`}>
              Sittard
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className={`transition-colors duration-300 font-elegant ${
                isScrolled 
                  ? 'text-primary-foreground hover:text-primary-foreground/80' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('over-daffy')}
              className={`transition-colors duration-300 font-elegant ${
                isScrolled 
                  ? 'text-primary-foreground hover:text-primary-foreground/80' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Over Daffy
            </button>
            <button 
              onClick={() => scrollToSection('behandelingen')}
              className={`transition-colors duration-300 font-elegant ${
                isScrolled 
                  ? 'text-primary-foreground hover:text-primary-foreground/80' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Behandelingen
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className={`transition-colors duration-300 font-elegant ${
                isScrolled 
                  ? 'text-primary-foreground hover:text-primary-foreground/80' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`transition-colors duration-300 font-elegant ${
                isScrolled 
                  ? 'text-primary-foreground hover:text-primary-foreground/80' 
                  : 'text-foreground hover:text-primary'
              }`}
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