import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ProductCard } from "@/components/site/ProductCard";
import { products, type Category } from "@/data/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — NorthBound" },
      { name: "description", content: "Shop premium tees, henleys, polos, hoodies, and pants from NorthBound." },
      { property: "og:title", content: "Shop — NorthBound" },
      { property: "og:description", content: "Shop the full NorthBound collection of engineered essentials." },
    ],
  }),
  component: ShopPage,
});

const filters: { key: "all" | Category; label: string }[] = [
  { key: "all", label: "All" },
  { key: "tees", label: "Tees" },
  { key: "henleys", label: "Henleys" },
  { key: "polos", label: "Polos" },
  { key: "hoodies", label: "Hoodies" },
  { key: "pants", label: "Pants" },
];

function ShopPage() {
  const [active, setActive] = useState<"all" | Category>("all");
  const [sort, setSort] = useState<"feat" | "low" | "high">("feat");

  const list = products
    .filter((p) => (active === "all" ? true : p.category === active))
    .sort((a, b) =>
      sort === "low" ? a.price - b.price : sort === "high" ? b.price - a.price : 0,
    );

  return (
    <div className="pt-28 lg:pt-32 pb-24 bg-bone text-ink">
      <div className="mx-auto max-w-[1600px] px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-concrete">Collection / Vol. 01</span>
            <h1 className="font-display text-6xl lg:text-8xl uppercase mt-3 leading-[0.85]">Shop everything</h1>
          </div>
          <p className="max-w-sm text-sm text-ink/70 leading-relaxed">
            {list.length} pieces. Each one built around how it feels on the third wear, not the first.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10 border-y border-ink/15 py-4">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`px-4 py-2 text-[11px] uppercase tracking-[0.25em] font-condensed border transition-colors ${
                  active === f.key
                    ? "bg-ink text-bone border-ink"
                    : "border-ink/20 hover:border-ink"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as typeof sort)}
            className="bg-transparent border border-ink/20 px-3 py-2 text-[11px] uppercase tracking-[0.2em] font-condensed cursor-pointer"
          >
            <option value="feat">Sort: Featured</option>
            <option value="low">Price: Low → High</option>
            <option value="high">Price: High → Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
