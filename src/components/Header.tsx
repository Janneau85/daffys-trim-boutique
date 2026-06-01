import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { WHATSAPP_URL, BOOKING_URL } from "@/lib/contact";

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
          <div className="flex items-center space-x-3">
            <button
              onClick={() => scrollToSection('home')}
              aria-label="Daffy's Trimsalon — naar boven"
              className={`font-luxury text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-primary-foreground' : 'text-foreground'
              }`}
            >
              Daffy's Trimsalon
            </button>
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
            <Link
              to="/terms-of-service"
              className={`transition-colors duration-300 font-elegant ${
                isScrolled
                  ? 'text-primary-foreground hover:text-primary-foreground/80'
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Voorwaarden
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <Button
              asChild
              variant="whatsapp"
              size="sm"
              className="hidden sm:flex"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="luxury"
              size="sm"
            >
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4" />
                Afspraak
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;