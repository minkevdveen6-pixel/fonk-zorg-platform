import type { LucideIcon } from "lucide-react";

type CardGridItem = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export function CardGrid({ items }: { items: CardGridItem[] }) {
  return (
    <section className="container-page py-20 text-ink">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className="rounded-3xl border border-ink/10 bg-white/88 p-6 shadow-soft">
            <item.icon className="text-coral" size={30} />
            <h2 className="mt-8 text-2xl font-black text-ink">{item.title}</h2>
            <p className="mt-4 leading-7 text-ink/68">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
