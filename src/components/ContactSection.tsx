import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock, MessageCircle, ExternalLink } from "lucide-react";
import { WHATSAPP_URL, BOOKING_URL, MAPS_URL, PHONE, PHONE_DISPLAY } from "@/lib/contact";

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
              <div className="grid md:grid-cols-4 gap-6 md:divide-x md:divide-border">
                {/* Location & Maps */}
                <div className="flex flex-col h-full md:px-2">
                  <h4 className="font-semibold text-black mb-4">📍 Locatie</h4>
                  <div className="text-black space-y-1 mb-4">
                    <p className="font-semibold">Daffy's Trimsalon</p>
                    <p>Spechtstraat 9</p>
                    <p>6135 EJ Sittard</p>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full mt-auto"
                  >
                    <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                      <MapPin className="w-4 h-4 mr-2" />
                      Google Maps
                    </a>
                  </Button>
                </div>

                {/* Contact */}
                <div className="flex flex-col h-full md:px-2">
                  <h4 className="font-semibold text-black mb-4">💬 Contact</h4>
                  <a href={`tel:${PHONE}`} className="flex items-center text-black hover:text-primary transition-colors mb-4">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>{PHONE_DISPLAY}</span>
                  </a>
                  <Button
                    asChild
                    variant="whatsapp"
                    className="w-full mt-auto"
                  >
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                </div>

                {/* Opening Hours */}
                <div className="flex flex-col h-full md:px-2">
                  <h4 className="font-semibold text-black mb-4">🕐 Openingstijden</h4>
                  <div className="space-y-1 text-sm text-black mb-4">
                    <div className="flex justify-between gap-2">
                      <span>Dinsdag</span>
                      <span className="font-semibold whitespace-nowrap">9:00 - 15:00</span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span>Woensdag</span>
                      <span className="font-semibold whitespace-nowrap">9:00 - 15:00</span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span>Donderdag</span>
                      <span className="font-semibold whitespace-nowrap">9:00 - 15:00</span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span>Vrijdag</span>
                      <span className="font-semibold whitespace-nowrap">9:00 - 14:30</span>
                    </div>
                  </div>
                  <div className="bg-accent/30 p-3 rounded-lg border border-primary/20 mt-auto">
                    <p className="text-sm font-semibold text-black">
                      ⚠️ Uitsluitend op afspraak
                    </p>
                  </div>
                </div>

                {/* Online Booking */}
                <div className="flex flex-col h-full md:px-2">
                  <h4 className="font-semibold text-black mb-4">🌐 Online Boeken</h4>
                  <p className="text-sm text-black mb-4">
                    Bekijk beschikbare tijden en maak direct een afspraak.
                  </p>
                  <Button
                    asChild
                    variant="luxury"
                    className="w-full mt-auto"
                  >
                    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Online Afspraak
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;