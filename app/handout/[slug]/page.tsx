import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Download, Sparkles } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { fonkHandouts } from "@/lib/fonk-data";

export function generateStaticParams() {
  return fonkHandouts.map((handout) => ({ slug: handout.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const handout = fonkHandouts.find((item) => item.slug === params.slug);
  return {
    title: handout ? handout.title : "Handout",
    description: handout?.goal ?? "Voorbeeldhandout binnen FONK.",
  };
}

export default function HandoutDetailPage({ params }: { params: { slug: string } }) {
  const handout = fonkHandouts.find((item) => item.slug === params.slug);
  if (!handout) notFound();

  return (
    <>
      <Header />
      <main id="inhoud" className="bg-cream text-ink">
        <section className="container-page py-12 md:py-16">
          <Link href="/handout" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-black text-petrol shadow-sm">
            <ArrowLeft size={17} /> Terug naar handouts
          </Link>
          <div className="mt-8 rounded-[2rem] bg-violet p-8 text-cream shadow-soft md:p-10">
            <p className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.12em] text-yellow">
              <Sparkles size={18} aria-hidden="true" /> Voorbeeldhandout
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">{handout.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-cream/78">{handout.goal}</p>
            <p className="mt-6 inline-flex rounded-full bg-white/12 px-4 py-2 text-sm font-black">Voor wie: {handout.audience}</p>
          </div>
        </section>

        <section className="container-page grid gap-6 py-10 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-soft">
            <h2 className="text-3xl font-black">Uitleg</h2>
            <p className="mt-4 leading-8 text-ink/70">{handout.explanation}</p>
            <div className="mt-6 rounded-2xl bg-mist p-5">
              <p className="font-black text-petrol">Download wordt voorbereid — voorbeeldinhoud hieronder zichtbaar.</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-ink/12 bg-cream px-5 py-3 text-sm font-black text-ink/60">
                <Download size={17} /> PDF in voorbereiding
              </span>
              <Link href="/login" className="rounded-full bg-petrol px-5 py-3 text-sm font-black text-cream">
                {handout.cta}
              </Link>
            </div>
          </article>

          <article className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-soft">
            <h2 className="text-3xl font-black">Voorbeeldvisuals</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {handout.visuals.map((visual) => (
                <div key={visual} className="rounded-2xl bg-lilac/35 p-5 font-black text-petrol">
                  {visual}
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="container-page grid gap-6 py-10 lg:grid-cols-3">
          <article className="rounded-[2rem] bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-black">Stappenplan</h2>
            <div className="mt-5 grid gap-3">
              {handout.steps.map((step, index) => (
                <div key={step} className="flex gap-3 rounded-2xl bg-cream p-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-coral text-sm font-black text-cream">{index + 1}</span>
                  <p className="font-bold leading-6 text-ink/72">{step}</p>
                </div>
              ))}
            </div>
          </article>
          <article className="rounded-[2rem] bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-black">Verwachte impact</h2>
            <p className="mt-5 rounded-2xl bg-mist p-5 font-bold leading-7 text-petrol">{handout.impact}</p>
          </article>
          <article className="rounded-[2rem] bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-black">Voorbeeldresultaten</h2>
            <div className="mt-5 grid gap-3">
              {handout.results.map((result) => (
                <p key={result} className="rounded-2xl bg-cream p-4 text-sm font-bold leading-6 text-ink/68">
                  {result}
                </p>
              ))}
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
