import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Heart, Scissors, Sparkles, ExternalLink } from "lucide-react";

const TreatmentsSection = () => {
  return (
    <section id="behandelingen" className="py-20 bg-warm-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-luxury font-bold text-black mb-4">
            Prijslijst & Behandelingen
          </h2>
          <p className="text-lg text-black font-elegant max-w-2xl mx-auto">
            Wij zijn gespecialiseerd in het trimmen van Pomeranians, maar ook honden van andere rassen zijn van harte welkom.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl font-luxury font-bold text-black text-center mb-8">
              Voorbeeldprijzen - Pomeranian Behandelingen
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <Card className="shadow-soft border border-border">
                <CardHeader>
                  <CardTitle className="font-luxury text-lg flex items-center">
                    <Sparkles className="w-5 h-5 mr-2 text-primary" />
                    Puppy Treatment
                  </CardTitle>
                  <CardDescription className="text-sm">
                    Tot 6 maanden
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary mb-2">
                    Vanaf €55.00
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>• Wassen met shampoo & conditioner</p>
                    <p>• Föhnen</p>
                    <p>• Uitgekamd, klit vrij gemaakt</p>
                    <p>• Nagels knippen</p>
                    <p>• Voetjes modelleren</p>
                    <p>• Kontje vrij ivm ontlasting</p>
                    <p>• Oortjes in model (indien gewenst)</p>
                    <p>• Luxe parfum</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      (met vachtmasker +€5.00)
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft border border-border">
                <CardHeader>
                  <CardTitle className="font-luxury text-lg flex items-center">
                    <Scissors className="w-5 h-5 mr-2 text-primary" />
                    Basic Treatment
                  </CardTitle>
                  <CardDescription className="text-sm">
                    Standaard verzorging
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary mb-2">
                    Vanaf €65.00
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>• Wassen met shampoo & conditioner</p>
                    <p>• Föhnen</p>
                    <p>• Uitgekamd, klit vrij gemaakt</p>
                    <p>• Nagels knippen</p>
                    <p>• Voetjes modelleren</p>
                    <p>• Kontje vrij ivm ontlasting</p>
                    <p>• Oortjes in model (indien gewenst)</p>
                    <p>• Luxe parfum</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      (met vachtmasker +€5.00)
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft border border-border">
                <CardHeader>
                  <CardTitle className="font-luxury text-lg flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-primary" />
                    Luxe Treatment
                  </CardTitle>
                  <CardDescription className="text-sm">
                    Premium verzorging
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary mb-2">
                    Vanaf €75.00
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>• Wassen met shampoo & conditioner</p>
                    <p>• Föhnen</p>
                    <p>• Uitgekamd, klit vrij gemaakt</p>
                    <p>• Nagels knippen</p>
                    <p>• Voetjes modelleren</p>
                    <p>• Kontje vrij ivm ontlasting</p>
                    <p>• Oortjes in model (indien gewenst)</p>
                    <p>• In model knippen</p>
                    <p>• Paw balsem</p>
                    <p>• Luxe parfum</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      (met vachtmasker +€5.00)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-gradient-subtle p-4 rounded-lg border border-primary/20 text-center">
              <p className="text-sm text-muted-foreground">
                <strong>Let op:</strong> Dit zijn voorbeeldprijzen voor Pomeranians. Prijzen voor andere rassen kunnen variëren afhankelijk van grootte en vachtype. Neem contact op voor een prijsopgave voor uw hond.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-luxury font-bold text-black text-center mb-8">
              Alle Rassen - Prijsoverzicht
            </h3>
            
            <div className="space-y-8">
              {/* Kleine Rassen */}
              <div>
                <h4 className="text-xl font-luxury font-semibold text-black mb-4">
                  🐕 Kleine Rassen
                </h4>
                <div className="bg-card p-6 rounded-lg shadow-soft border border-border">
                  <div className="mb-4 p-4 bg-gradient-subtle rounded border border-primary/20">
                    <h5 className="font-semibold text-foreground mb-2">Puppy Treatment (tot 5 maanden)</h5>
                    <p className="text-sm text-muted-foreground mb-2">
                      Een zachte wasbeurt met föhnen, nagels knippen en de voetjes mooi rond knippen. 
                      Perfect om je kleintje op een fijne manier kennis te laten maken met de trimsalon!
                    </p>
                    <div className="text-lg font-bold text-primary">Vanaf €55.00</div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-sm">
                    <div className="flex justify-between"><span>Boomer</span><span className="font-semibold">€60.00</span></div>
                    <div className="flex justify-between"><span>Cavelier King Charles</span><span className="font-semibold">€80.00</span></div>
                    <div className="flex justify-between"><span>Chihuahua</span><span className="font-semibold">€60.00</span></div>
                    <div className="flex justify-between"><span>Franse Bulldog</span><span className="font-semibold">€60.00</span></div>
                    <div className="flex justify-between"><span>Lhasa Apso</span><span className="font-semibold">€65.00</span></div>
                    <div className="flex justify-between"><span>Maltezer</span><span className="font-semibold">€60.00</span></div>
                    <div className="flex justify-between"><span>Mopshond</span><span className="font-semibold">€60.00</span></div>
                    <div className="flex justify-between"><span>Pekinees</span><span className="font-semibold">€65.00</span></div>
                    <div className="flex justify-between"><span>Shiba Inu</span><span className="font-semibold">€60.00</span></div>
                    <div className="flex justify-between"><span>Shih Tzu</span><span className="font-semibold">€60.00</span></div>
                    <div className="flex justify-between"><span>Teckel Langhaar</span><span className="font-semibold">€60.00</span></div>
                    <div className="flex justify-between"><span>Vlinder Hondje</span><span className="font-semibold">€60.00</span></div>
                    <div className="flex justify-between"><span>Yorkshire Terrier</span><span className="font-semibold">€60.00</span></div>
                    <div className="flex justify-between"><span>Japanse Chin</span><span className="font-semibold">€65.00</span></div>
                    <div className="flex justify-between"><span>Boston Terriër</span><span className="font-semibold">€60.00</span></div>
                    <div className="flex justify-between"><span>Teckel Gladhaar</span><span className="font-semibold">€60.00</span></div>
                    <div className="flex justify-between"><span>Jack Russell Gladhaar</span><span className="font-semibold">€60.00</span></div>
                    <div className="flex justify-between"><span>Welsh Corgi</span><span className="font-semibold">€80.00</span></div>
                  </div>
                </div>
              </div>

              {/* Middelgrote Rassen */}
              <div>
                <h4 className="text-xl font-luxury font-semibold text-black mb-4">
                  🐕‍🦺 Middelgrote Rassen
                </h4>
                <div className="bg-card p-6 rounded-lg shadow-soft border border-border">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
                    <div className="flex justify-between"><span>Border Collie</span><span className="font-semibold">€80.00</span></div>
                    <div className="flex justify-between"><span>Hollandse Schapendoes</span><span className="font-semibold">€85.00</span></div>
                    <div className="flex justify-between"><span>Keeshond Middenslag</span><span className="font-semibold">€85.00</span></div>
                    <div className="flex justify-between"><span>Kooiker</span><span className="font-semibold">€67.50</span></div>
                    <div className="flex justify-between"><span>Nova Scotia Duck Tolling</span><span className="font-semibold">€75.00</span></div>
                    <div className="flex justify-between"><span>Tibetaanse Terriër</span><span className="font-semibold">€85.00</span></div>
                    <div className="flex justify-between"><span>Australian Shepherd</span><span className="font-semibold">€85.00</span></div>
                  </div>
                </div>
              </div>

              {/* Poedels */}
              <div>
                <h4 className="text-xl font-luxury font-semibold text-black mb-4">
                  🐩 Poedels
                </h4>
                <div className="bg-card p-6 rounded-lg shadow-soft border border-border">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-medium">Toypoedel</span>
                        <div className="text-xs text-muted-foreground">schofthoogte tot 28 cm</div>
                      </div>
                      <span className="font-semibold">€75.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-medium">Dwergpoedel</span>
                        <div className="text-xs text-muted-foreground">schofthoogte 28-35 cm</div>
                      </div>
                      <span className="font-semibold">€80.00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Doodles */}
              <div>
                <h4 className="text-xl font-luxury font-semibold text-black mb-4">
                  🐾 Doodles
                </h4>
                <div className="bg-card p-6 rounded-lg shadow-soft border border-border">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
                    <div className="flex justify-between"><span>Mini Doodle</span><span className="font-semibold">€75.00</span></div>
                    <div className="flex justify-between"><span>Bidoodle</span><span className="font-semibold">€75.00</span></div>
                    <div className="flex justify-between"><span>Chipoo</span><span className="font-semibold">€75.00</span></div>
                    <div className="flex justify-between"><span>Maltipoo</span><span className="font-semibold">€75.00</span></div>
                    <div className="flex justify-between"><span>Peekapoo Small</span><span className="font-semibold">€75.00</span></div>
                    <div className="flex justify-between"><span>Pomapoo Small</span><span className="font-semibold">€75.00</span></div>
                    <div className="flex justify-between"><span>Shih Poo Small</span><span className="font-semibold">€75.00</span></div>
                    <div className="flex justify-between"><span>Boompoo</span><span className="font-semibold">€75.00</span></div>
                  </div>
                  <div className="mt-3 text-xs text-muted-foreground">
                    Small varianten: tot 35 cm schofthoogte
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Card className="shadow-soft border border-border mb-8">
            <CardHeader className="text-center">
              <CardTitle className="font-luxury text-2xl flex items-center justify-center">
                <Star className="w-6 h-6 mr-2 text-primary" />
                Complete Prijslijst & Online Afspraak
              </CardTitle>
              <CardDescription className="text-base">
                Bekijk onze volledige prijslijst en maak direct een afspraak via ons online systeem
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="bg-gradient-subtle p-6 rounded-lg border border-primary/20">
                <Button 
                  variant="luxury" 
                  size="lg"
                  onClick={() => window.open('https://portal.looppiness.com/daffy-s-trimsalon/', '_blank')}
                  className="w-full max-w-md"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Bekijk Tarieven & Maak Afspraak
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="bg-card p-8 rounded-lg shadow-soft border border-border">
            <h3 className="font-luxury text-2xl text-center text-foreground mb-6">
              Belangrijke informatie
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">💰 Prijzen</h4>
                  <p className="text-muted-foreground text-sm">
                    De genoemde prijzen zijn een indicatie voor het trimmen.<br/>
                    De opgegeven prijs is een basisprijs en geldt alleen bij goed onderhouden vachten met weinig klitten.<br/>
                    Afhankelijk van de staat van de vacht en uw wensen kan het bedrag verschillen.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">🐕 Welzijn voorop</h4>
                  <p className="text-muted-foreground text-sm">
                    Bij ons staat het welzijn van uw hond voorop: we nemen de tijd voor elke behandeling en zorgen ervoor dat uw hond zich op zijn gemak voelt in een rustige en ontspannen omgeving.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">🚫 Vlooienbeleid</h4>
                  <p className="text-muted-foreground text-sm">
                    Honden moeten vlo-vrij naar de salon komen.<br/>
                    Bij aanwezigheid van vlooien rekenen we een extra schoonmaaktoeslag van €25 om de salon vlo-vrij te houden voor alle dieren.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">🐕 Alle rassen welkom</h4>
                  <p className="text-muted-foreground text-sm">
                    De rassen op onze website zijn slechts een klein aantal voorbeelden. Als je het ras van jouw hond er niet tussen ziet staan, neem dan contact met ons op.
                  </p>
                </div>
                </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-border text-center">
              <h4 className="font-semibold text-black mb-4">📋 Algemene Voorwaarden</h4>
              <p className="text-sm text-black mb-4">
                Voor alle voorwaarden en belangrijke informatie over onze dienstverlening.
              </p>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('/terms-of-service', '_self')}
                className="w-full max-w-md"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Bekijk Algemene Voorwaarden
              </Button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;