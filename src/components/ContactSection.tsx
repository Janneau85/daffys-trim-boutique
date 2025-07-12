import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dogName: '',
    dogBreed: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Bericht verzonden!",
      description: "Bedankt voor je bericht. Ik neem zo snel mogelijk contact met je op.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      dogName: '',
      dogBreed: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-luxury font-bold text-foreground mb-4">
            Contact & Afspraak
          </h2>
          <p className="text-lg text-muted-foreground font-elegant max-w-2xl mx-auto">
            Klaar om jouw hondje te laten verwennen? Neem contact op voor een afspraak 
            of kom langs in onze salon in Sittard.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
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
                  Openingstijden
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-accent/30 p-4 rounded-lg border border-primary/20">
                  <p className="font-semibold text-primary mb-2">⚠️ Belangrijk</p>
                  <p className="text-sm text-foreground">
                    Uitsluitend op afspraak
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Gemiddelde wachttijd: <span className="font-semibold text-primary">6 weken</span>
                  </p>
                </div>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p className="font-medium text-foreground">Indicatieve tijden:</p>
                  <p>• Dinsdag t/m Vrijdag: 09:00 - 17:00</p>
                  <p>• Zaterdag: 09:00 - 15:00</p>
                  <p>• Maandag & Zondag: Gesloten</p>
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
                <Button 
                  variant="whatsapp" 
                  className="w-full"
                  onClick={() => window.open('https://wa.me/31612345678', '_blank')}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp: +31 6 1234 5678
                </Button>
                <div className="flex items-center text-muted-foreground">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>info@daffystrimsalon.nl</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+31 46 123 4567</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-soft border border-border">
              <CardHeader>
                <CardTitle className="font-luxury text-2xl">
                  Contactformulier
                </CardTitle>
                <p className="text-muted-foreground">
                  Vul onderstaand formulier in en ik neem zo snel mogelijk contact met je op.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Jouw naam *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Voornaam Achternaam"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mailadres *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="naam@email.nl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefoonnummer</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+31 6 1234 5678"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="dogName">Naam van je hond</Label>
                      <Input
                        id="dogName"
                        name="dogName"
                        value={formData.dogName}
                        onChange={handleChange}
                        placeholder="Bijv. Bella"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dogBreed">Ras van je hond</Label>
                      <Input
                        id="dogBreed"
                        name="dogBreed"
                        value={formData.dogBreed}
                        onChange={handleChange}
                        placeholder="Bijv. Pomeranian"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Bericht *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Vertel iets over je hond en wat voor behandeling je wilt..."
                      className="resize-none"
                    />
                  </div>

                  <Button type="submit" variant="luxury" size="lg" className="w-full">
                    Verstuur Bericht
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    * Verplichte velden. Ik neem binnen 24 uur contact met je op.
                  </p>
                </form>
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