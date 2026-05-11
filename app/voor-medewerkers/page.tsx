import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { Lightbulb, MessageCircle, Route, Search, Send, UsersRound } from "lucide-react";

export const metadata: Metadata = {
  title: "Voor medewerkers",
  description:
    "FONK voor zorgmedewerkers: ideeën indienen, knelpunten melden, vragen stellen en beperkte inzage in lopende projecten.",
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
          title="Geen lange formulieren. Gewoon delen wat jij ziet in de praktijk."
          body="FONK helpt medewerkers ideeën, knelpunten en vragen te delen zonder projecttaal. Je ziet wat ermee gebeurt en welke veranderingen jouw team raken."
        />
        <section className="container-page py-20">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {items.map(([title, text, Icon]) => (
              <article key={title as string} className="rounded-[1.5rem] border border-ink/10 bg-white p-6 shadow-sm">
                <Icon className="text-coral" aria-hidden="true" />
                <h2 className="mt-5 text-2xl font-black text-ink">{title as string}</h2>
                <p className="mt-3 leading-7 text-ink/68">{text as string}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 rounded-3xl bg-mist p-6 text-lg font-black text-pine">
            Idee delen → reactie krijgen → status volgen → resultaat zien.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
