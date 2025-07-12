import { Heart, Instagram, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-taupe text-warm-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-luxury text-2xl font-bold mb-4 text-primary-glow">
              Daffy's Trimsalon
            </h3>
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.instagram.com/daffys_trimsalon/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-warm-white/60 hover:text-primary-glow transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="tel:+31461234567"
                className="text-warm-white/60 hover:text-primary-glow transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-glow">
              Snelle Links
            </h4>
            <ul className="space-y-2 text-warm-white/80">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('home');
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-primary-glow transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('behandelingen');
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-primary-glow transition-colors"
                >
                  Prijslijst
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('faq');
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-primary-glow transition-colors"
                >
                  Veelgestelde Vragen
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-primary-glow transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-glow">
              Contact
            </h4>
            <div className="space-y-2 text-warm-white/80 text-sm">
              <p>Spechtstraat 9</p>
              <p>6135 EJ Sittard</p>
              <p>+31 46 123 4567</p>
              
            </div>
          </div>
        </div>

        <div className="border-t border-warm-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-warm-white/60 text-sm">
              <Heart className="w-4 h-4 text-red-400" />
              <span>Met liefde verzorgd door Daffy's Trimsalon © 2025</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <button className="text-warm-white/60 hover:text-primary-glow transition-colors">
                Algemene Voorwaarden
              </button>
              <button className="text-warm-white/60 hover:text-primary-glow transition-colors">
                Privacy
              </button>
              <span className="text-warm-white/40">
                Gemaakt met liefde & powered by Lovable
              </span>
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-4 bg-warm-white/10 px-6 py-3 rounded-lg">
            <span className="text-warm-white/60 text-sm">Gecertificeerd trimster</span>
            <span className="text-warm-white/40">•</span>
            <span className="text-warm-white/60 text-sm">5+ jaar ervaring</span>
            <span className="text-warm-white/40">•</span>
            <span className="text-warm-white/60 text-sm">Pomeranian specialist</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;