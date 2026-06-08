import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { ChevronDown, Truck, Shield, RefreshCw } from "lucide-react";
import { getProduct, getRelated, products } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/shop/$productId")({
  head: ({ params }) => {
    const p = getProduct(params.productId);
    const title = p ? `${p.name} — NorthBound` : "Product — NorthBound";
    const desc = p?.description ?? "Premium essentials from NorthBound.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        ...(p ? [{ property: "og:image", content: p.image }, { name: "twitter:image", content: p.image }] : []),
      ],
    };
  },
  loader: ({ params }) => {
    const p = getProduct(params.productId);
    if (!p) throw notFound();
    return { product: p };
  },
  notFoundComponent: () => (
    <div className="pt-40 pb-32 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-concrete">Not in stock</p>
      <h1 className="font-display text-5xl uppercase mt-3">Product not found</h1>
      <Link to="/shop" className="inline-block mt-6 bg-ink text-bone px-6 py-3 text-xs uppercase tracking-[0.25em] font-condensed">
        Back to shop
      </Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="pt-40 pb-32 text-center px-5">
      <h1 className="font-display text-3xl uppercase">Couldn't load product</h1>
      <p className="text-sm text-concrete mt-2">{error.message}</p>
      <button onClick={reset} className="mt-6 bg-ink text-bone px-6 py-3 text-xs uppercase tracking-[0.25em] font-condensed">Retry</button>
    </div>
  ),
  component: ProductPage,
});

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

function ProductPage() {
  const { product } = Route.useLoaderData();
  const [color, setColor] = useState(product.colors[0]);
  const [size, setSize] = useState<string | null>(null);
  const [open, setOpen] = useState<string | null>("fabric");
  const related = getRelated(product.id);

  const add = () => {
    if (!size) return toast.error("Pick a size first.");
    toast.success(`${product.name} (${size}, ${color.name}) added to bag.`);
  };

  return (
    <div className="pt-20 bg-bone text-ink">
      <div className="mx-auto max-w-[1600px] grid lg:grid-cols-2">
        {/* Gallery */}
        <div className="bg-muted">
          <div className="grid grid-cols-1 gap-1">
            <img src={product.image} alt={product.name} className="w-full aspect-square object-cover" />
            <img src={product.altImage} alt="" loading="lazy" className="w-full aspect-square object-cover" />
          </div>
        </div>

        {/* Detail */}
        <div className="p-6 lg:p-16 lg:sticky lg:top-20 self-start">
          <Link to="/shop" className="text-[11px] uppercase tracking-[0.3em] text-concrete hover:text-ink">← All shop</Link>
          <h1 className="font-display text-5xl lg:text-7xl uppercase mt-4 leading-none">{product.name}</h1>
          <p className="font-condensed text-2xl mt-3">${product.price}</p>
          <p className="mt-5 text-sm text-ink/75 leading-relaxed max-w-md">{product.description}</p>

          {/* Color */}
          <div className="mt-8">
            <div className="flex items-baseline justify-between mb-3">
              <span className="text-[11px] uppercase tracking-[0.25em] font-condensed">Color</span>
              <span className="text-[11px] text-concrete">{color.name}</span>
            </div>
            <div className="flex gap-2">
              {product.colors.map((c: { name: string; hex: string }) => (
                <button
                  key={c.name}
                  onClick={() => setColor(c)}
                  aria-label={c.name}
                  className={`w-10 h-10 rounded-full border-2 transition ${color.name === c.name ? "border-ink" : "border-ink/15 hover:border-ink/40"}`}
                  style={{ background: c.hex }}
                />
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="mt-8">
            <div className="flex items-baseline justify-between mb-3">
              <span className="text-[11px] uppercase tracking-[0.25em] font-condensed">Size</span>
              <button className="text-[11px] text-concrete underline">Size guide</button>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {SIZES.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`py-3 text-xs font-condensed tracking-wider border transition ${
                    size === s ? "bg-ink text-bone border-ink" : "border-ink/20 hover:border-ink"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={add}
            className="mt-8 w-full bg-ink text-bone py-5 text-xs uppercase tracking-[0.3em] font-condensed hover:bg-signal transition-colors"
          >
            Add to bag — ${product.price}
          </button>

          <div className="mt-6 grid grid-cols-3 gap-3 text-[10px] uppercase tracking-[0.2em] text-concrete">
            <Perk icon={<Truck size={14} />} label="Free ship $120+" />
            <Perk icon={<RefreshCw size={14} />} label="30-day returns" />
            <Perk icon={<Shield size={14} />} label="5-year warranty" />
          </div>

          {/* Accordion */}
          <div className="mt-10 border-t border-ink/15">
            {[
              { key: "fabric", title: "Fabric & Construction", body: product.fabric + ". Reinforced shoulder seams. Pre-shrunk. Tagless." },
              { key: "fit", title: "Fit & Sizing", body: "True-to-size, slim-regular cut. Model is 6'1\" / 185 cm wearing size M." },
              { key: "care", title: "Care", body: "Machine wash cold, inside out. Tumble dry low. Built to survive your worst laundry day." },
            ].map((row) => (
              <div key={row.key} className="border-b border-ink/15">
                <button
                  onClick={() => setOpen(open === row.key ? null : row.key)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="font-condensed text-sm uppercase tracking-[0.2em]">{row.title}</span>
                  <ChevronDown size={16} className={`transition-transform ${open === row.key ? "rotate-180" : ""}`} />
                </button>
                {open === row.key && (
                  <p className="pb-4 text-sm text-ink/70 leading-relaxed">{row.body}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="px-5 lg:px-10 py-20 lg:py-32 bg-ink text-bone grain">
        <div className="mx-auto max-w-[1600px]">
          <h2 className="font-display text-4xl lg:text-6xl uppercase mb-10">Complete the fit</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {related.length ? related.map((p) => (
              <div key={p.id} className="text-bone"><ProductCard product={p} /></div>
            )) : products.slice(0, 3).map((p) => (
              <div key={p.id} className="text-bone"><ProductCard product={p} /></div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Perk({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="border border-ink/15 p-3 flex flex-col items-start gap-2">
      {icon}<span>{label}</span>
    </div>
  );
}
