import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="mx-auto max-w-[1600px] px-5 lg:px-10 py-20 grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <img src={logo} alt="NorthBound" className="h-6 w-auto invert mb-6" loading="lazy" />
          <p className="text-sm text-bone/60 max-w-xs leading-relaxed">
            Premium essentials engineered for everywhere you're going.
          </p>
          <p className="mt-8 text-[11px] uppercase tracking-[0.25em] text-bone/40">Est. 2026 — Mumbai / NYC</p>
        </div>

        <FooterCol title="Shop" links={[
          { to: "/shop", label: "All" },
          { to: "/shop", label: "Tees" },
          { to: "/shop", label: "Hoodies" },
          { to: "/shop", label: "Pants" },
        ]} />

        <FooterCol title="Company" links={[
          { to: "/about", label: "Our Story" },
          { to: "/about", label: "Fabric Lab" },
          { to: "/contact", label: "Contact" },
          { to: "/contact", label: "Stores" },
        ]} />

        <FooterCol title="Help" links={[
          { to: "/contact", label: "Shipping" },
          { to: "/contact", label: "Returns" },
          { to: "/contact", label: "Size Guide" },
          { to: "/contact", label: "FAQ" },
        ]} />
      </div>

      <div className="border-t border-bone/10">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-10 py-6 flex flex-col md:flex-row gap-3 items-center justify-between text-[11px] uppercase tracking-[0.2em] text-bone/50">
          <span>© 2026 NorthBound Apparel Co.</span>
          <span>True north. Always forward.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h4 className="font-condensed text-sm tracking-[0.25em] uppercase mb-5 text-bone/70">{title}</h4>
      <ul className="space-y-3 text-sm">
        {links.map((l, i) => (
          <li key={i}>
            <Link to={l.to} className="hover:text-signal transition-colors">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
