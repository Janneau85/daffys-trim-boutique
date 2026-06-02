import { Heart, Instagram, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { INSTAGRAM_URL, PHONE, PHONE_DISPLAY } from "@/lib/contact";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-taupe text-warm-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-luxury text-2xl font-bold mb-4 text-warm-white">
              Daffy's Trimsalon
            </h3>
            <div className="flex items-center space-x-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Daffy's Trimsalon op Instagram"
                className="inline-flex p-2 text-warm-white/80 hover:text-warm-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={`tel:${PHONE}`}
                aria-label={`Bel ${PHONE_DISPLAY}`}
                className="inline-flex p-2 text-warm-white/80 hover:text-warm-white transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-warm-white">
              Snelle Links
            </h4>
            <ul className="text-warm-white/90">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="block py-2 hover:text-warm-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('behandelingen')}
                  className="block py-2 hover:text-warm-white transition-colors"
                >
                  Prijslijst
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="block py-2 hover:text-warm-white transition-colors"
                >
                  Veelgestelde Vragen
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block py-2 hover:text-warm-white transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="block py-2 hover:text-warm-white transition-colors"
                >
                  Algemene Voorwaarden
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-warm-white">
              Contact
            </h4>
            <div className="space-y-2 text-warm-white/90 text-sm">
              <p>Spechtstraat 9</p>
              <p>6135 EJ Sittard</p>
              <p>
                <a
                  href={`tel:${PHONE}`}
                  className="inline-block py-1 hover:text-warm-white transition-colors"
                >
                  {PHONE_DISPLAY}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-warm-white/80 text-sm">
              <Heart className="w-4 h-4 text-red-400" />
              <span>Met liefde verzorgd door Daffy's Trimsalon © 2026</span>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <Link
                to="/terms-of-service"
                className="inline-block py-2 text-warm-white/80 hover:text-warm-white transition-colors"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-4 bg-warm-white/10 px-6 py-3 rounded-lg">
            <span className="text-warm-white/80 text-sm">Gediplomeerd trimster</span>
            <span className="text-warm-white/40">•</span>
            <span className="text-warm-white/80 text-sm">5+ jaar ervaring</span>
            <span className="text-warm-white/40">•</span>
            <span className="text-warm-white/80 text-sm">Pomeranian specialist</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
