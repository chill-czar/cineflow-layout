import { Button } from "@/components/ui/button";
import { Play, Info } from "lucide-react";
import type { Movie } from "@/data/movies";

interface HeroProps { featured: Movie }

const Hero = ({ featured }: HeroProps) => {
  return (
    <section
      aria-label="Featured"
      className="relative aspect-[16/9] w-full overflow-hidden rounded-b-lg"
    >
      <img
        src={featured.image}
        alt={`${featured.title} hero banner`}
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-background/10" />

      <div className="relative z-10 container h-full flex items-end pb-12">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight mb-3">
            Meet Monkey D. Luffy: One Piece
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-foreground/90 mb-2">
            Oda
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-4">
            {featured.genre} • Featured Today
          </p>
          <div className="flex gap-3">
            <Button size="lg" className="hover-scale">
              <Play className="mr-2" /> Play
            </Button>
            <Button size="lg" variant="outline" className="hover-scale">
              <Info className="mr-2" /> More Info
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
