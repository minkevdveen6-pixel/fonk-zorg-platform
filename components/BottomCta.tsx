import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BottomCta() {
  return (
    <section className="container-page py-12 text-ink">
      <div className="overflow-hidden rounded-[2rem] border border-ink/10 bg-cream p-8 shadow-soft md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.12em] text-pine">Binnen 30 dagen samen op weg</p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <h2 className="max-w-3xl text-3xl font-black leading-tight md:text-5xl">
              Geef teams rust, geef projectleiders overzicht en geef directie duidelijke keuzes.
            </h2>
            <Link
              href="/contact"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-pine px-6 py-4 font-black text-cream"
            >
              Vraag een kennismaking aan <ArrowRight size={18} />
            </Link>
          </div>
          <p className="mt-6 text-lg font-bold text-ink/70">Verandering begint bij mensen.</p>
      </div>
    </section>
  );
}
