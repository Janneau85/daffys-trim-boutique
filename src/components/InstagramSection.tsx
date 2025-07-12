import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, ExternalLink } from "lucide-react";

const InstagramSection = () => {
  // Mock Instagram posts data
  const instagramPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop",
      caption: "Bella's nieuwe teddy bear styling! 🐾✨"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop",
      caption: "Perfecte Pomeranian trim vandaag! 💛"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1574293876203-2fb2d25d9d18?w=400&h=400&fit=crop",
      caption: "Onze salon klaar voor een nieuwe dag! ✨"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop",
      caption: "Happy customer Luna na haar spa dag! 🥰"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop",
      caption: "Kleine Max ziet er weer prachtig uit! 🐕"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=400&h=400&fit=crop",
      caption: "Professional grooming tools ready! 🛠️"
    }
  ];

  return (
    <section className="py-20 bg-gradient-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Instagram className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-luxury font-bold text-foreground">
              @daffys_trimsalon
            </h2>
          </div>
          <p className="text-lg text-muted-foreground font-elegant max-w-2xl mx-auto">
            Volg ons op Instagram voor de nieuwste transformaties, tips en 
            behind-the-scenes van onze salon
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <Card 
              key={post.id} 
              className="group cursor-pointer overflow-hidden shadow-soft hover:shadow-luxury transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative aspect-square">
                <img 
                  src={post.image} 
                  alt={post.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-4">
                    <Instagram className="w-8 h-8 text-white mb-2 mx-auto" />
                    <p className="text-white text-sm font-elegant leading-tight">
                      {post.caption}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="luxury" 
            size="lg"
            onClick={() => window.open('https://www.instagram.com/daffys_trimsalon/', '_blank')}
            className="group"
          >
            <Instagram className="w-5 h-5 mr-2" />
            Volg ons op Instagram
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4 font-elegant">
            Nieuwste updates, tips en prachtige transformaties
          </p>
        </div>

        <div className="mt-12 bg-card p-8 rounded-lg shadow-soft border border-border text-center">
          <h3 className="font-luxury text-2xl text-foreground mb-4">
            Tag ons in je posts! 📸
          </h3>
          <p className="text-muted-foreground font-elegant max-w-2xl mx-auto">
            Heb je een mooie foto van je getrimde hondje? Tag ons @daffystrimsalon 
            of gebruik #daffystrimsalon en misschien zie je jouw foto terug op onze pagina!
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;