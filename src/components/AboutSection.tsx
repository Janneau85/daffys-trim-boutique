import daffyImage from "@/assets/daffy-grooming.jpg";

const AboutSection = () => {
  return (
    <section id="over-daffy" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-soft">
              <img 
                src={daffyImage} 
                alt="Daffy aan het werk met een hondje"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            <div className="absolute -top-6 -right-6 bg-primary p-4 rounded-lg shadow-luxury">
              <div className="text-center">
                <p className="text-primary-foreground font-bold text-2xl">5+</p>
                <p className="text-primary-foreground/80 text-sm">Jaar ervaring</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-luxury font-bold text-foreground">
                Kennismaken met Daphne
              </h2>
              <p className="text-lg text-muted-foreground font-elegant leading-relaxed">
                Hallo! Ik ben Daphne, een gediplomeerd hondentrimster met een passie 
                voor het verzorgen van onze viervoetige vrienden. Vanuit mijn salon in 
                Sittard verwelkom ik elke hond alsof het mijn eigen huisdier is.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border border-border shadow-soft">
                <h3 className="font-luxury text-xl text-primary mb-3">
                  Mijn specialisaties
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Pomeranian Expert</h4>
                    <p className="text-sm text-muted-foreground">
                      Gespecialiseerd in de unieke vacht van Pomeranians
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Kleine Rassen</h4>
                    <p className="text-sm text-muted-foreground">
                      Extra zorgvuldig met onze kleinste vriendjes
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Puppy's</h4>
                    <p className="text-sm text-muted-foreground">
                      Eerste trimbeurt? Ik maak er een positieve ervaring van
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Gedragsbegeleiding</h4>
                    <p className="text-sm text-muted-foreground">
                      Rustige aanpak voor angstige hondjes
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-subtle p-6 rounded-lg">
                <h3 className="font-luxury text-xl text-foreground mb-3">
                  Mijn benadering
                </h3>
                <p className="text-muted-foreground font-elegant leading-relaxed">
                  Elk hondje verdient een ontspannen trimbeurt. Daarom werk ik altijd 
                  in een rustige omgeving, zonder haast, met veel geduld en liefde. 
                  Jouw hondje gaat niet alleen verzorgd, maar ook blij naar huis.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Blije hondjes</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Liefde & zorg</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">5★</p>
                <p className="text-sm text-muted-foreground">Klantbeoordeling</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;