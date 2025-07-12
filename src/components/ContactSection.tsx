import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock, MessageCircle, ExternalLink } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-warm-white/40 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-luxury font-bold text-foreground mb-4">
            Contact & Afspraak
          </h2>
          <p className="text-lg text-muted-foreground font-elegant max-w-2xl mx-auto">
            Klaar om jouw hondje te laten verwennen? Neem contact op voor een afspraak 
            of maak direct online een afspraak.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="shadow-soft border border-border">
              <CardHeader>
                <CardTitle className="font-luxury text-xl flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-primary" />
                  Locatie
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-semibold text-foreground">Daffy's Trimsalon</p>
                <p className="text-muted-foreground">Spechtstraat 9</p>
                <p className="text-muted-foreground">6135 EJ Sittard</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-4"
                  onClick={() => window.open('https://maps.google.com/?q=Spechtstraat+9+Sittard', '_blank')}
                >
                  Open in Google Maps
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-soft border border-border">
              <CardHeader>
                <CardTitle className="font-luxury text-xl flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  Wachttijd
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-accent/30 p-4 rounded-lg border border-primary/20">
                  <p className="font-semibold text-primary mb-2">⚠️ Belangrijk</p>
                  <p className="text-sm text-foreground mb-2">
                    Uitsluitend op afspraak
                  </p>
                  <p className="text-sm text-muted-foreground mb-1">
                    Gemiddelde wachttijd: <span className="font-semibold text-primary">4 weken</span>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Zomer en feestdagen kan het langer zijn
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft border border-border">
              <CardHeader>
                <CardTitle className="font-luxury text-xl">
                  Direct Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-muted-foreground">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>06 40 33 87 98</span>
                </div>
                <Button 
                  variant="whatsapp" 
                  className="w-full"
                  onClick={() => window.open('https://wa.me/31640338798', '_blank')}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp: 06 40 33 87 98
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Online Booking */}
          <div>
            <Card className="shadow-soft border border-border h-fit">
              <CardHeader>
                <CardTitle className="font-luxury text-2xl">
                  Online Afspraak Maken
                </CardTitle>
                <p className="text-muted-foreground">
                  Maak direct online een afspraak via ons boekingssysteem.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gradient-subtle p-6 rounded-lg border border-primary/20 text-center">
                  <ExternalLink className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-luxury text-xl text-foreground mb-4">
                    Boek direct online
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Bekijk beschikbare tijden en maak direct een afspraak via ons online boekingssysteem.
                  </p>
                  <Button 
                    variant="luxury" 
                    size="lg" 
                    className="w-full"
                    onClick={() => window.open('https://www.daffystrimsalon.nl/trimbehandelingen-1', '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Online Afspraak Maken
                  </Button>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Of neem telefonisch contact op voor vragen of speciale verzoeken.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-12">
          <Card className="shadow-soft border border-border overflow-hidden">
            <div className="h-64 bg-gradient-subtle flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-luxury text-xl text-foreground mb-2">
                  Vind ons in Sittard
                </h3>
                <p className="text-muted-foreground mb-4">
                  Spechtstraat 9, 6135 EJ Sittard
                </p>
                <Button 
                  variant="outline"
                  onClick={() => window.open('https://maps.google.com/?q=Spechtstraat+9+Sittard', '_blank')}
                >
                  Open Google Maps
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;