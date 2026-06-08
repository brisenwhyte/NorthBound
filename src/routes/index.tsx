import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import { Marquee } from "@/components/site/Marquee";
import { ProductCard } from "@/components/site/ProductCard";
import { categories, products } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NorthBound — Premium essentials, engineered." },
      { name: "description", content: "Engineered essentials for men. Tees, henleys, polos, hoodies and pants built to move." },
      { property: "og:title", content: "NorthBound — Premium essentials, engineered." },
      { property: "og:description", content: "Engineered essentials for men. Built to move, breathe, and outlast." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink text-bone grain">
        <img
          src={hero}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/10 to-ink/90" />

        <div className="relative z-10 h-full mx-auto max-w-[1600px] px-5 lg:px-10 flex flex-col justify-end pb-16 lg:pb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] uppercase tracking-[0.3em] text-bone/80 mb-5"
          >
            New Drop — Vol. 01
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-[14vw] lg:text-[10rem] leading-[0.85] uppercase tracking-tight"
          >
            Built for
            <br />
            <span className="text-signal">everywhere.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between"
          >
            <p className="text-bone/75 max-w-md text-sm leading-relaxed">
              Premium essentials engineered to breathe in the boardroom, the back-alley, and everything between.
            </p>
            <div className="flex gap-3">
              <Link to="/shop" className="bg-bone text-ink px-7 py-4 text-xs uppercase tracking-[0.25em] font-condensed hover:bg-signal hover:text-bone transition-colors inline-flex items-center gap-2">
                Shop the drop <ArrowUpRight size={14} />
              </Link>
              <Link to="/about" className="border border-bone/40 px-7 py-4 text-xs uppercase tracking-[0.25em] font-condensed hover:border-bone transition-colors">
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute top-1/2 right-5 lg:right-10 -translate-y-1/2 hidden md:flex flex-col gap-2 text-[10px] uppercase tracking-[0.3em] text-bone/60 [writing-mode:vertical-rl]">
          <span>True North</span>
          <span>—</span>
          <span>EST 2026</span>
        </div>
      </section>

      <Marquee items={["Free shipping over $120", "30-day returns", "Engineered in-house", "Worn worldwide", "New drop live"]} />

      {/* CATEGORIES */}
      <section className="bg-bone text-ink py-20 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-concrete">01 / Categories</span>
              <h2 className="font-display text-5xl lg:text-7xl uppercase mt-3">Shop the stack</h2>
            </div>
            <Link to="/shop" className="hidden md:inline-flex items-center gap-1 text-xs uppercase tracking-[0.25em] font-condensed hover:text-signal">
              View all <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-4">
            {categories.map((c, i) => (
              <Link
                key={c.slug}
                to="/shop"
                className={`group relative aspect-[3/4] overflow-hidden bg-ink ${i === 0 ? "lg:row-span-2 lg:aspect-auto col-span-2" : ""}`}
              >
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                <div className="absolute inset-0 p-5 lg:p-6 flex flex-col justify-end text-bone">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-bone/60">0{i + 1}</span>
                  <h3 className="font-display text-3xl lg:text-5xl uppercase mt-1">{c.name}</h3>
                  <p className="text-xs text-bone/70 mt-2 max-w-[18ch]">{c.copy}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="bg-ink text-bone py-20 lg:py-32 grain">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-bone/50">02 / Featured</span>
              <h2 className="font-display text-5xl lg:text-7xl uppercase mt-3">The drop</h2>
            </div>
            <Link to="/shop" className="hidden md:inline-flex items-center gap-1 text-xs uppercase tracking-[0.25em] font-condensed hover:text-signal">
              All products <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {products.slice(0, 4).map((p) => (
              <div key={p.id} className="text-bone">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-bone text-ink py-20 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-10 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={about} alt="Our workshop" loading="lazy" className="w-full h-full object-cover" />
            <span className="absolute bottom-5 left-5 bg-ink text-bone text-[10px] uppercase tracking-[0.3em] px-3 py-2 font-condensed">In-house cut & sew</span>
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-concrete">03 / The Studio</span>
            <h2 className="font-display text-5xl lg:text-7xl uppercase mt-3 leading-[0.9]">
              Less wardrobe.
              <br /><span className="text-signal">More armor.</span>
            </h2>
            <p className="mt-6 text-base lg:text-lg leading-relaxed text-ink/75 max-w-lg">
              We design every piece around one question: would we wear this every day for the next five years? If the answer's no, it doesn't ship.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/65 max-w-lg">
              From the fabric mill to the final stitch, NorthBound runs lean — fewer styles, sharper fits, longer lives.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 max-w-md border-t border-ink/15 pt-8">
              <Stat n="180" l="GSM cotton" />
              <Stat n="5yr" l="warranty" />
              <Stat n="0" l="logos visible" />
            </div>
          </div>
        </div>
      </section>

      {/* PRESS */}
      <section className="bg-ink text-bone py-16 border-y border-bone/10">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-10">
          <p className="text-center text-[11px] uppercase tracking-[0.3em] text-bone/50 mb-8">As worn in</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center text-center">
            {["GQ", "ESQUIRE", "HYPEBEAST", "MENSWEAR", "HIGHSNOB"].map((p) => (
              <span key={p} className="font-display text-2xl tracking-[0.1em] text-bone/40 hover:text-bone transition-colors">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-signal text-bone py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-10 text-center">
          <h2 className="font-display text-5xl lg:text-7xl uppercase leading-none">First to the drop.</h2>
          <p className="mt-5 text-bone/85 max-w-md mx-auto">Early access to new releases. No spam. No noise. Unsubscribe whenever.</p>
          <form
            className="mt-8 flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 bg-ink text-bone placeholder:text-bone/40 px-4 py-4 text-sm outline-none focus:ring-2 focus:ring-bone"
            />
            <button className="bg-ink text-bone px-7 py-4 text-xs uppercase tracking-[0.25em] font-condensed hover:bg-bone hover:text-ink transition-colors">
              Join
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-3xl lg:text-4xl">{n}</div>
      <div className="text-[10px] uppercase tracking-[0.2em] text-concrete mt-1">{l}</div>
    </div>
  );
}
