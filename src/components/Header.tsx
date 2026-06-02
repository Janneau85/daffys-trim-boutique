import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { WHATSAPP_URL, BOOKING_URL } from "@/lib/contact";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const goToSection = (sectionId: string) => {
    scrollToSection(sectionId);
    setMenuOpen(false);
  };

  const navLinkClass = isScrolled
    ? "text-primary-foreground hover:text-primary-foreground/80"
    : "text-foreground hover:text-primary";

  const sections: [string, string][] = [
    ["home", "Home"],
    ["behandelingen", "Behandelingen"],
    ["faq", "FAQ"],
    ["contact", "Contact"],
  ];

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
              onClick={() => goToSection('home')}
              aria-label="Daffy's Trimsalon — naar boven"
              className={`font-luxury text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-primary-foreground' : 'text-foreground'
              }`}
            >
              Daffy's Trimsalon
            </button>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {sections.map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`transition-colors duration-300 font-elegant ${navLinkClass}`}
              >
                {label}
              </button>
            ))}
            <Link
              to="/terms-of-service"
              className={`transition-colors duration-300 font-elegant ${navLinkClass}`}
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
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
              aria-expanded={menuOpen}
              className={`md:hidden p-2 -mr-2 transition-colors ${
                isScrolled ? 'text-primary-foreground' : 'text-foreground'
              }`}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <nav className={`md:hidden border-t backdrop-blur-sm ${
          isScrolled ? 'bg-primary/95 border-primary-foreground/20' : 'bg-warm-white/95 border-border'
        }`}>
          <div className="container mx-auto px-4 py-2 flex flex-col">
            {sections.map(([id, label]) => (
              <button
                key={id}
                onClick={() => goToSection(id)}
                className={`text-left py-3 font-elegant transition-colors ${navLinkClass}`}
              >
                {label}
              </button>
            ))}
            <Link
              to="/terms-of-service"
              onClick={() => setMenuOpen(false)}
              className={`py-3 font-elegant transition-colors ${navLinkClass}`}
            >
              Voorwaarden
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 mb-1 inline-flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-md font-medium hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
