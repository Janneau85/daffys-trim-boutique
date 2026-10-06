import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Instagram, ExternalLink } from "lucide-react";
import { INSTAGRAM_URL, INSTAGRAM_FEED_URL } from "@/lib/contact";
import { parseBeholdFeed } from "@/lib/instagram";

const fetchFeed = async () => {
  const res = await fetch(INSTAGRAM_FEED_URL);
  if (!res.ok) throw new Error(`Instagram-feed gaf ${res.status}`);
  return parseBeholdFeed(await res.json());
};

const InstagramSection = () => {
  // Zonder feed-URL, tijdens het laden of bij een fout blijft posts leeg en
  // toont de sectie alleen de volg-knop.
  const { data: posts = [] } = useQuery({
    queryKey: ["instagram-feed", INSTAGRAM_FEED_URL],
    queryFn: fetchFeed,
    enabled: Boolean(INSTAGRAM_FEED_URL),
    staleTime: 60 * 60 * 1000,
    retry: 1,
  });

  return (
    <section className="py-20 bg-warm-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Instagram className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-luxury font-bold text-black">
              @daffys_trimsalon
            </h2>
          </div>
          <p className="text-lg text-black font-elegant max-w-2xl mx-auto">
            Getrimde hondjes, tips en een kijkje in de salon.
          </p>
        </div>

        {posts.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 max-w-4xl mx-auto mb-10">
            {posts.map((post) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-square overflow-hidden rounded-lg bg-muted shadow-soft"
              >
                <img
                  src={post.src}
                  alt={post.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </a>
            ))}
          </div>
        )}

        <div className="text-center">
          <Button asChild variant="luxury" size="lg" className="group">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5" />
              Volg op Instagram
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <p className="text-sm text-black/70 mt-4 font-elegant max-w-xl mx-auto">
            Tag @daffys_trimsalon of gebruik #daffystrimsalon, dan zie je je hondje misschien
            terug op mijn pagina.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
