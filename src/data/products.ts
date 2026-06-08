import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";

export type Category = "tees" | "henleys" | "polos" | "hoodies" | "pants";

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  image: string;
  altImage: string;
  colors: { name: string; hex: string }[];
  fabric: string;
  description: string;
  tagline: string;
}

export const categories: { slug: Category; name: string; image: string; copy: string }[] = [
  { slug: "tees", name: "Tees", image: new URL("@/assets/cat-tees.jpg", import.meta.url).href, copy: "Weightless cotton. Built to live in." },
  { slug: "henleys", name: "Henleys", image: new URL("@/assets/cat-henleys.jpg", import.meta.url).href, copy: "Worn-in feel. New-school cut." },
  { slug: "polos", name: "Polos", image: new URL("@/assets/cat-polos.jpg", import.meta.url).href, copy: "Off-duty refinement." },
  { slug: "hoodies", name: "Hoodies", image: new URL("@/assets/cat-hoodies.jpg", import.meta.url).href, copy: "Heavyweight. Heavy duty." },
  { slug: "pants", name: "Pants", image: new URL("@/assets/cat-pants.jpg", import.meta.url).href, copy: "Move first. Sit second." },
];

export const products: Product[] = [
  {
    id: "ridgeline-tee",
    name: "Ridgeline Tee",
    category: "tees",
    price: 38,
    image: p1,
    altImage: p6,
    colors: [{ name: "Ink", hex: "#0B0B0B" }, { name: "Bone", hex: "#F4F1EA" }, { name: "Concrete", hex: "#8A8A8A" }],
    fabric: "Pima cotton / micro-modal blend, 180gsm",
    description: "The shirt you reach for without thinking. Cut from a featherweight cotton-modal blend that breathes, drapes, and refuses to lose its shape.",
    tagline: "Engineered weightless.",
  },
  {
    id: "summit-henley",
    name: "Summit Henley",
    category: "henleys",
    price: 62,
    image: p2,
    altImage: p2,
    colors: [{ name: "Field Olive", hex: "#4A5237" }, { name: "Ink", hex: "#0B0B0B" }, { name: "Sand", hex: "#C8B89C" }],
    fabric: "Combed cotton jersey, 240gsm",
    description: "Three-button placket. Reinforced collar. The kind of henley that ages like denim — only better.",
    tagline: "Built to outlast.",
  },
  {
    id: "courtside-polo",
    name: "Courtside Polo",
    category: "polos",
    price: 58,
    image: p3,
    altImage: p3,
    colors: [{ name: "Bone", hex: "#F4F1EA" }, { name: "Ink", hex: "#0B0B0B" }, { name: "Navy", hex: "#1A2A44" }],
    fabric: "Performance pique, four-way stretch",
    description: "Wicks like a tech tee, finishes like a polo. From morning meetings to late-night dinners.",
    tagline: "Dress code: optional.",
  },
  {
    id: "blackout-hoodie",
    name: "Blackout Hoodie",
    category: "hoodies",
    price: 98,
    image: p4,
    altImage: p4,
    colors: [{ name: "Ink", hex: "#0B0B0B" }, { name: "Concrete", hex: "#8A8A8A" }],
    fabric: "Brushed heavyweight fleece, 420gsm",
    description: "The hoodie equivalent of putting your phone on silent. Dense, structured, and quietly luxurious.",
    tagline: "Heavy by design.",
  },
  {
    id: "transit-jogger",
    name: "Transit Jogger",
    category: "pants",
    price: 88,
    image: p5,
    altImage: p5,
    colors: [{ name: "Ink", hex: "#0B0B0B" }, { name: "Charcoal", hex: "#3A3A3A" }],
    fabric: "Tech twill with stretch, water-resistant",
    description: "Tapered jogger meets traveler's trouser. Hidden zip pockets, gusseted crotch, zero break-in time.",
    tagline: "Anywhere fit.",
  },
  {
    id: "everyday-tee-white",
    name: "Everyday Tee",
    category: "tees",
    price: 38,
    image: p6,
    altImage: p1,
    colors: [{ name: "Bone", hex: "#F4F1EA" }, { name: "Ink", hex: "#0B0B0B" }],
    fabric: "Pima cotton / micro-modal blend, 180gsm",
    description: "Our quiet classic. Clean lines, no logo, perfect crew. The white t-shirt, finally figured out.",
    tagline: "Quiet classic.",
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
export const getRelated = (id: string) => products.filter((p) => p.id !== id).slice(0, 3);
