import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/products";
import { useState } from "react";

export function ProductCard({ product }: { product: Product }) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      to="/shop/$productId"
      params={{ productId: product.id }}
      className="group block"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${hover ? "scale-105 opacity-0" : "scale-100 opacity-100"}`}
        />
        <img
          src={product.altImage}
          alt=""
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${hover ? "scale-100 opacity-100" : "scale-105 opacity-0"}`}
        />
        <span className="absolute top-3 left-3 bg-ink text-bone text-[10px] uppercase tracking-[0.2em] px-2 py-1 font-condensed">
          {product.tagline}
        </span>
      </div>
      <div className="pt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-condensed text-lg uppercase tracking-wider">{product.name}</h3>
          <div className="flex gap-1.5 mt-1.5">
            {product.colors.map((c) => (
              <span
                key={c.name}
                className="w-3 h-3 rounded-full border border-ink/20"
                style={{ background: c.hex }}
                title={c.name}
              />
            ))}
          </div>
        </div>
        <span className="font-display text-base">${product.price}</span>
      </div>
    </Link>
  );
}
