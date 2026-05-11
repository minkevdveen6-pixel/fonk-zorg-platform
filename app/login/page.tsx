import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, LockKeyhole, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { kwadrantUser } from "@/lib/fonk-data";

export const metadata: Metadata = {
  title: "Inloggen | FONK",
  description: "Log in op FONK voor Kwadrant.",
};

export default function LoginPage() {
  return (
    <>
      <Header />
      <main id="inhoud" className="bg-cream">
        <section id="welkom-ingrid" className="container-page grid min-h-[calc(100svh-5rem)] scroll-mt-28 gap-8 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-black text-petrol shadow-sm">
              <Building2 size={17} aria-hidden="true" /> {kwadrantUser.organization} werkt met FONK
            </p>
            <h1 className="mt-7 text-5xl font-black leading-tight text-ink md:text-7xl">Welkom terug Ingrid.</h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-ink/72">
              Kwadrant werkt samen met FONK om projecten, verbeteringen en organisatiebrede verandering overzichtelijk samen te brengen.
            </p>
            <p className="mt-5 max-w-xl font-black leading-7 text-petrol">
              Je hebt toegang tot portfolio, intake, signalen, capaciteit, verbindingen, FONK Match en borging.
            </p>
          </div>

          <article className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-soft md:p-8">
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-coral/12 text-coral">
                <Sparkles aria-hidden="true" />
              </span>
              <div>
                <p className="text-2xl font-black text-ink">{kwadrantUser.name}</p>
                <p className="mt-1 font-bold text-ink/58">{kwadrantUser.role} · {kwadrantUser.organization}</p>
              </div>
            </div>
            <div className="mt-8 grid gap-3">
              {["Portfolio beheren", "Projecten volgen", "Regionale samenwerking", "Signalen & verbeteringen", "Borging & doorontwikkeling"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-cream p-4 font-black text-petrol">
                  <LockKeyhole size={18} aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
            <Link href="/platform" className="focus-ring mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-petrol px-6 py-4 font-black text-cream">
              Naar programmamanager-dashboard <ArrowRight size={18} />
            </Link>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
