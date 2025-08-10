import type { Movie } from "@/data/movies";

interface MovieCardProps { item: Movie }

const MovieCard = ({ item }: MovieCardProps) => {
  return (
    <article className="group relative snap-start shrink-0 w-40 sm:w-48 md:w-56 lg:w-64 2xl:w-72">
      <div className="relative rounded-md overflow-hidden ring-1 ring-border/60 hover:ring-primary/50 transition-shadow shadow-sm hover:shadow-[var(--shadow-elegant)]">
        <img
          src={item.image}
          alt={`${item.title} poster – ${item.genre}`}
          className="h-56 sm:h-64 md:h-72 w-full object-cover transition-transform duration-200 group-hover:scale-105"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="mt-2">
        <h3 className="text-sm font-medium text-foreground/90 truncate">{item.title}</h3>
        <p className="text-xs text-muted-foreground">{item.genre}</p>
      </div>
    </article>
  );
};

export default MovieCard;
