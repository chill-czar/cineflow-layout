import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MovieCard from "./MovieCard";
import type { Movie } from "@/data/movies";

interface SliderRowProps {
  title: string;
  items: Movie[];
}

const SliderRow = ({ title, items }: SliderRowProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: "left" | "right") => {
    const el = ref.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="relative">
      <div className="container flex items-center justify-between mb-2">
        <h2 className="text-lg md:text-xl font-semibold story-link">{title}</h2>
        <div className="hidden md:flex gap-2">
          <button aria-label="Scroll left" onClick={() => scrollBy("left")} className="p-2 rounded-md hover:bg-muted/50">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button aria-label="Scroll right" onClick={() => scrollBy("right")} className="p-2 rounded-md hover:bg-muted/50">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div
        ref={ref}
        className="no-scrollbar container relative overflow-x-auto snap-x snap-mandatory scroll-smooth"
      >
        <div className="flex gap-4 pb-2">
          {items.map((m) => (
            <MovieCard key={m.id} item={m} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SliderRow;
