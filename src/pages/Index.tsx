import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import SliderRow from "@/components/home/SliderRow";
import { featured, movies } from "@/data/movies";

const Index = () => {
  const trending = movies.slice(0, 10);
  const topPicks = movies.slice(6, 16);
  const comedies = movies.filter((m) => m.genre === "Comedy");
  const action = movies.filter((m) => m.genre === "Action");
  const scifi = movies.filter((m) => m.genre === "Sci‑Fi");

  const websiteLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'StreamBox',
    url: '/',
    potentialAction: {
      '@type': 'SearchAction',
      target: '/?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-14">
        <Hero featured={featured} />

        <section aria-label="Content Rows" className="space-y-8 py-8">
          <SliderRow title="Trending Now" items={trending} />
          <SliderRow title="Top Picks for You" items={topPicks} />
          <SliderRow title="Comedies" items={comedies} />
          <SliderRow title="Action & Adventure" items={action} />
          <SliderRow title="Sci‑Fi" items={scifi} />
        </section>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
    </div>
  );
};

export default Index;
