import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock, MessageCircle, ExternalLink } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-warm-white/40 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-luxury font-bold text-black mb-4">
            Contact & Afspraak
          </h2>
          <p className="text-lg text-black font-elegant max-w-2xl mx-auto">
            Klaar om jouw hondje te laten verwennen? Neem contact op voor een afspraak 
            of maak direct online een afspraak.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Contact Card */}
          <Card className="shadow-soft border border-border mb-8">
            <CardHeader className="text-center">
              <CardTitle className="font-luxury text-2xl">
                Contact & Afspraak
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                {/* Location & Maps */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-black mb-3">📍 Locatie</h4>
                  <div className="space-y-3">
                    <div className="text-black">
                      <p className="font-semibold">Daffy's Trimsalon</p>
                      <p>Spechtstraat 9</p>
                      <p>6135 EJ Sittard</p>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.open('https://maps.google.com/?q=Spechtstraat+9+Sittard', '_blank')}
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Google Maps
                    </Button>
                  </div>
                </div>

                {/* Contact */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-black mb-3">💬 Contact</h4>
                  <div className="space-y-3">
                    <div className="flex items-center text-black">
                      <Phone className="w-4 h-4 mr-2" />
                      <span>06 40 33 87 98</span>
                    </div>
                    <Button 
                      variant="whatsapp" 
                      className="w-full"
                      onClick={() => window.open('https://wa.me/31640338798', '_blank')}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </div>

                {/* Important Info */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-black mb-3">⚠️ Belangrijk</h4>
                  <div className="bg-accent/30 p-4 rounded-lg border border-primary/20">
                    <p className="text-sm font-semibold text-black mb-3">
                      Uitsluitend op afspraak
                    </p>
                    <p className="text-sm text-black">
                      Wachttijd: <span className="font-semibold text-primary text-lg">4 weken</span>
                    </p>
                  </div>
                </div>

                {/* Online Booking */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-black mb-3">🌐 Online Boeken</h4>
                  <div className="text-center">
                    <ExternalLink className="w-8 h-8 text-primary mx-auto mb-3" />
                    <p className="text-sm text-black mb-4">
                      Bekijk beschikbare tijden en maak direct een afspraak.
                    </p>
                    <Button 
                      variant="luxury" 
                      size="lg" 
                      className="w-full"
                      onClick={() => window.open('https://www.daffystrimsalon.nl/trimbehandelingen-1', '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Online Afspraak
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-sm text-black">
                  Voor vragen of speciale verzoeken neem telefonisch contact op.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;