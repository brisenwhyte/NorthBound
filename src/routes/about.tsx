import { createFileRoute } from "@tanstack/react-router";
import about from "@/assets/about.jpg";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — NorthBound" },
      { name: "description", content: "How NorthBound builds premium essentials in-house, from fabric to final stitch." },
      { property: "og:title", content: "Our Story — NorthBound" },
      { property: "og:description", content: "How NorthBound builds premium essentials in-house, from fabric to final stitch." },
      { property: "og:image", content: about },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bg-bone text-ink">
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-24 px-5 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <span className="text-xs uppercase tracking-[0.3em] text-concrete">The Brand</span>
          <h1 className="font-display text-6xl md:text-8xl lg:text-[10rem] uppercase leading-[0.85] mt-4">
            True north.<br />
            <span className="text-signal">Always forward.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg lg:text-xl text-ink/75 leading-relaxed">
            We started NorthBound because we were tired of choosing between premium and practical. So we stopped choosing — and started building the wardrobe we actually wanted to wear.
          </p>
        </div>
      </section>

      {/* Full image */}
      <section className="px-5 lg:px-10">
        <div className="mx-auto max-w-[1600px] aspect-[16/9] overflow-hidden">
          <img src={hero} alt="NorthBound editorial" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-24 lg:py-32 px-5 lg:px-10">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[1fr_2fr] gap-10">
          <h2 className="font-display text-4xl lg:text-6xl uppercase leading-none">Three rules.</h2>
          <div className="space-y-12">
            {[
              { n: "01", t: "Less, but better.", b: "We make fewer pieces, on purpose. Every style earns its place — if we wouldn't wear it five years from now, it doesn't ship." },
              { n: "02", t: "Fabric first.", b: "We spec fabric before silhouette. Mills in Portugal, Japan, and Tirupur. Cotton-modal blends that breathe, technical twills that move." },
              { n: "03", t: "No visible logos.", b: "Your fit shouldn't be free advertising. We let cut and quality do the talking." },
            ].map((r) => (
              <div key={r.n} className="grid grid-cols-[60px_1fr] gap-6 border-t border-ink/15 pt-6">
                <span className="font-display text-2xl text-signal">{r.n}</span>
                <div>
                  <h3 className="font-condensed text-2xl uppercase tracking-wider">{r.t}</h3>
                  <p className="mt-3 text-ink/70 leading-relaxed max-w-xl">{r.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop */}
      <section className="bg-ink text-bone grain">
        <div className="mx-auto max-w-[1600px] grid lg:grid-cols-2">
          <div className="aspect-[4/3] lg:aspect-auto">
            <img src={about} alt="Workshop" className="w-full h-full object-cover" />
          </div>
          <div className="p-10 lg:p-20 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-[0.3em] text-bone/50">The Studio</span>
            <h2 className="font-display text-4xl lg:text-6xl uppercase mt-3 leading-[0.9]">Cut & sewn close to home.</h2>
            <p className="mt-6 text-bone/75 leading-relaxed">
              Our flagship workshop sits between Mumbai and the mills that supply it. Every sample we ship has been through a sewing machine our team operates personally.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-bone/15 pt-8">
              <div><div className="font-display text-3xl">42</div><div className="text-[10px] uppercase tracking-[0.25em] text-bone/50 mt-1">In-house team</div></div>
              <div><div className="font-display text-3xl">6</div><div className="text-[10px] uppercase tracking-[0.25em] text-bone/50 mt-1">Sourcing mills</div></div>
              <div><div className="font-display text-3xl">0</div><div className="text-[10px] uppercase tracking-[0.25em] text-bone/50 mt-1">Middlemen</div></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
