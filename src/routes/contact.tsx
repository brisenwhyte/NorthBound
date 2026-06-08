import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { ChevronDown, Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — NorthBound" },
      { name: "description", content: "Reach NorthBound for sizing, shipping, returns, or anything else." },
      { property: "og:title", content: "Contact — NorthBound" },
      { property: "og:description", content: "Reach NorthBound for sizing, shipping, returns, or anything else." },
    ],
  }),
  component: ContactPage,
});

const FAQ = [
  { q: "What's your return policy?", a: "30 days, no questions. Pieces must be unworn with tags. Return shipping is on us within the US/EU/IN." },
  { q: "How do your sizes run?", a: "True-to-size, slim-regular. If you're between sizes, size up for tees and down for hoodies." },
  { q: "How long does shipping take?", a: "Standard: 3-5 business days. Express: 1-2. Free standard shipping on orders over $120." },
  { q: "Do you ship internationally?", a: "Yes — we ship to 40+ countries. Duties and taxes calculated at checkout." },
  { q: "Where are NorthBound clothes made?", a: "Cut and sewn in our Mumbai workshop. Fabric milled in Portugal, Japan, and Tirupur." },
];

function ContactPage() {
  const [open, setOpen] = useState<number | null>(0);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    toast.success("Message received. We'll get back within 24h.");
  };

  return (
    <div className="bg-bone text-ink">
      <section className="pt-32 lg:pt-40 pb-16 px-5 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <span className="text-xs uppercase tracking-[0.3em] text-concrete">Get in touch</span>
          <h1 className="font-display text-6xl lg:text-9xl uppercase mt-3 leading-[0.85]">
            Say
            <br /><span className="text-signal">hello.</span>
          </h1>
        </div>
      </section>

      <section className="px-5 lg:px-10 pb-24">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-20">
          <form onSubmit={submit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <Field label="Subject" name="subject" required />
            <div>
              <label className="text-[11px] uppercase tracking-[0.25em] font-condensed">Message</label>
              <textarea
                name="message"
                required
                rows={6}
                className="mt-2 w-full bg-transparent border-b border-ink/30 focus:border-ink outline-none py-2 text-sm resize-none"
              />
            </div>
            <button className="bg-ink text-bone px-8 py-4 text-xs uppercase tracking-[0.3em] font-condensed hover:bg-signal transition-colors">
              Send message
            </button>
          </form>

          <aside className="space-y-8">
            <Info icon={<Mail size={16} />} title="Email" lines={["hello@northbound.co", "support@northbound.co"]} />
            <Info icon={<Phone size={16} />} title="Phone" lines={["+91 22 4000 1234", "Mon–Fri · 10:00–19:00 IST"]} />
            <Info icon={<MapPin size={16} />} title="Flagship Studio" lines={["Workshop No. 14", "Lower Parel, Mumbai 400013"]} />
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ink text-bone py-20 lg:py-32 grain">
        <div className="mx-auto max-w-[1100px] px-5 lg:px-10">
          <span className="text-xs uppercase tracking-[0.3em] text-bone/50">FAQ</span>
          <h2 className="font-display text-5xl lg:text-7xl uppercase mt-3 mb-12">Questions, answered.</h2>
          <div className="border-t border-bone/15">
            {FAQ.map((row, i) => (
              <div key={i} className="border-b border-bone/15">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left"
                >
                  <span className="font-condensed text-lg lg:text-2xl uppercase tracking-wider">{row.q}</span>
                  <ChevronDown size={20} className={`transition-transform shrink-0 ml-4 ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && (
                  <p className="pb-6 text-bone/70 leading-relaxed max-w-2xl">{row.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-[0.25em] font-condensed">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full bg-transparent border-b border-ink/30 focus:border-ink outline-none py-2 text-sm"
      />
    </div>
  );
}

function Info({ icon, title, lines }: { icon: React.ReactNode; title: string; lines: string[] }) {
  return (
    <div className="border-t border-ink/15 pt-5">
      <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] font-condensed text-concrete">
        {icon}<span>{title}</span>
      </div>
      <div className="mt-2 space-y-1 text-sm">
        {lines.map((l, i) => <p key={i}>{l}</p>)}
      </div>
    </div>
  );
}
