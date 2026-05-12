import type { Metadata } from "next";
import Link from "next/link";
import { EmployeeInputForms } from "@/components/EmployeeInputForms";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { Lightbulb, MessageCircle, Route, Search, Send, UsersRound } from "lucide-react";

export const metadata: Metadata = {
  title: "Voor medewerkers",
  description:
    "FONK voor zorgmedewerkers: ideeën, knelpunten en resultaten delen zonder verplicht account.",
};

export default function VoorMedewerkersPage() {
  const items = [
    ["Idee indienen", "Deel wat beter kan in je werk, team of locatie.", Lightbulb],
    ["Knelpunt melden", "Laat zien waar iets vastloopt of dubbel gebeurt.", MessageCircle],
    ["Vragen stellen", "Stel vragen over veranderingen die jouw werk raken.", Search],
    ["Volgen wat gebeurt", "Zie of je idee getest, aangepast of opgepakt wordt.", Route],
    ["Team betrekken", "Praat mee met collega’s en projectleiders.", UsersRound],
    ["Snel doorgeven", "Houd het kort. Een signaal is genoeg om te starten.", Send],
  ];

  return (
    <>
      <Header />
      <main id="inhoud" className="bg-cream">
        <PageHero
          eyebrow="Voor medewerkers"
          title="Deel wat jij ziet. Zonder eerst in te loggen."
          body="FONK helpt medewerkers ideeën, knelpunten en resultaten door te geven zonder projecttaal. Projectleiders pakken het daarna op in de FONK-omgeving."
        />
        <section className="container-page py-16">
          <div className="rounded-[2rem] bg-white p-6 shadow-soft md:p-8">
            <p className="text-sm font-black uppercase tracking-[0.12em] text-coral">Zo werkt het</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight text-ink md:text-4xl">
              Medewerkers geven input via de publieke website. Projectleiders loggen in voor opvolging.
            </h2>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="#medewerkersinput" className="focus-ring inline-flex items-center justify-center rounded-full bg-petrol px-6 py-4 font-black text-cream">
                Geef input door
              </Link>
              <Link href="/login" className="focus-ring inline-flex items-center justify-center rounded-full border border-ink/12 bg-cream px-6 py-4 font-black text-ink">
                Naar login voor projectleiders
              </Link>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {items.map(([title, text, Icon]) => (
              <article key={title as string} className="flex h-full flex-col rounded-[1.5rem] border border-ink/10 bg-white p-5 shadow-sm md:p-6">
                <Icon className="text-coral" aria-hidden="true" />
                <h2 className="mt-5 text-xl font-black leading-tight text-ink">{title as string}</h2>
                <p className="mt-3 text-sm font-bold leading-6 text-ink/62">{text as string}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 rounded-3xl bg-mist p-6 text-lg font-black text-pine">
            Idee delen → reactie krijgen → status volgen → resultaat zien.
          </p>
        </section>
        <EmployeeInputForms />
      </main>
      <Footer />
    </>
  );
}
