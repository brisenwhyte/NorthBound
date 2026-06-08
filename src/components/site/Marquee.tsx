export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="bg-ink text-bone border-y border-bone/10 overflow-hidden">
      <div className="marquee whitespace-nowrap py-3">
        {row.map((t, i) => (
          <span key={i} className="font-condensed text-sm tracking-[0.3em] uppercase px-8 inline-flex items-center gap-8">
            {t}
            <span className="text-signal">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
