import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "Story" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-ink text-bone" : "bg-transparent text-bone"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-5 lg:px-10 h-16 flex items-center justify-between">
        <button
          aria-label="Menu"
          className="lg:hidden -ml-2 p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.18em] font-medium">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="hover:text-signal transition-colors">
              {n.label}
            </Link>
          ))}
        </nav>

        <Link to="/" className="flex items-center gap-2" aria-label="NorthBound home">
          <img src={logo} alt="NorthBound" className="h-5 w-auto invert" />
        </Link>

        <div className="flex items-center gap-1">
          <button aria-label="Search" className="p-2 hover:text-signal">
            <Search size={18} />
          </button>
          <button aria-label="Bag" className="p-2 hover:text-signal relative">
            <ShoppingBag size={18} />
            <span className="absolute -top-0.5 -right-0.5 text-[10px] font-display bg-signal text-bone w-4 h-4 grid place-items-center">0</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-bone/15">
          <nav className="flex flex-col px-5 py-6 gap-5 text-2xl font-condensed uppercase tracking-wider">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="hover:text-signal">
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
