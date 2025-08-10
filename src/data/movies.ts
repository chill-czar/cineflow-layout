import heroBanner from "@/assets/hero-cyber-action.jpg";
import imgAction from "@/assets/posters/action-cyber.jpg";
import imgComedy from "@/assets/posters/comedy-friends.jpg";
import imgDrama from "@/assets/posters/drama-portrait.jpg";
import imgScifi from "@/assets/posters/sci-fi-nebula.jpg";
import imgDoc from "@/assets/posters/documentary-nature.jpg";
import imgAnimation from "@/assets/posters/animation-family.jpg";
import imgThriller from "@/assets/posters/thriller-noir.jpg";
import imgFantasy from "@/assets/posters/fantasy-epic.jpg";

export type Movie = {
  id: string;
  title: string;
  image: string;
  genre: string;
};

export const featured = {
  id: "feat-1",
  title: "Neon Skies",
  image: heroBanner,
  genre: "Sci‑Fi",
};

export const movies: Movie[] = [
  { id: "m1", title: "Neon Runner", image: imgAction, genre: "Action" },
  { id: "m2", title: "Laugh Track", image: imgComedy, genre: "Comedy" },
  { id: "m3", title: "Silent Echoes", image: imgDrama, genre: "Drama" },
  { id: "m4", title: "Nebula Drift", image: imgScifi, genre: "Sci‑Fi" },
  { id: "m5", title: "Wild Horizons", image: imgDoc, genre: "Documentary" },
  { id: "m6", title: "Sunny Side Up", image: imgAnimation, genre: "Animation" },
  { id: "m7", title: "Midnight Alley", image: imgThriller, genre: "Thriller" },
  { id: "m8", title: "Crown of Ash", image: imgFantasy, genre: "Fantasy" },
  // reuse to fill rows
  { id: "m9", title: "Neon Runner II", image: imgAction, genre: "Action" },
  { id: "m10", title: "Friends & Fiascos", image: imgComedy, genre: "Comedy" },
  { id: "m11", title: "Last Letters", image: imgDrama, genre: "Drama" },
  { id: "m12", title: "Starlight Gate", image: imgScifi, genre: "Sci‑Fi" },
  { id: "m13", title: "Deep Forests", image: imgDoc, genre: "Documentary" },
  { id: "m14", title: "Moon Pals", image: imgAnimation, genre: "Animation" },
  { id: "m15", title: "Echo Street", image: imgThriller, genre: "Thriller" },
  { id: "m16", title: "Mythweaver", image: imgFantasy, genre: "Fantasy" },
];
