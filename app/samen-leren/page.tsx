import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { fonkMatchExamples } from "@/lib/fonk-data";
import { Handshake, Library, Map, MessageCircle, Route, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Samen leren",
  description:
    "FONK Match helpt zorgorganisaties om projectmatches, gedeelde thema’s, regionale leerpunten en samenwerking sneller te vinden.",
};

const items = [
  ["FONK Match", "Zie wie aan hetzelfde thema werkt en vind projectleiders bij andere organisaties.", Search],
  ["Projectbibliotheek", "Deel projectplannen, resultaten en leerpunten.", Library],
  ["Regionale thema’s", "Maak zichtbaar welke onderwerpen in de regio spelen.", Map],
  ["Samen optrekken", "Organisaties kunnen rond hetzelfde vraagstuk samenwerken.", Handshake],
  ["Leerpunten", "Wat werkt, wat niet werkt en wat is aangepast?", MessageCircle],
  ["Opschalen", "Breng geteste verbeteringen rustig naar andere teams of organisaties.", Route],
];

export default function SamenLerenPage() {
  return (
    <>
      <Header />
      <main id="inhoud" className="bg-cream">
        <PageHero
          eyebrow="Samen leren"
          title="Samen leren zonder opnieuw het wiel uit te vinden."
          body="FONK Match laat zien welke organisaties met dezelfde thema’s bezig zijn. Geen dating, maar professioneel matchen op projecten, projectleiders, resultaten en leerpunten."
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
            4 organisaties werken aan medicatieveiligheid. FONK herkent de overlap en stelt samenwerking voor.
          </p>
          <div id="fonk-match" className="mt-8 grid gap-4 lg:grid-cols-3">
            {fonkMatchExamples.map((match) => (
              <article key={match.theme} className="rounded-[1.5rem] border border-ink/10 bg-white p-6 shadow-sm">
                <span className="rounded-full bg-yellow/60 px-3 py-2 text-xs font-black text-petrol">Matchscore {match.score}</span>
                <h2 className="mt-5 text-2xl font-black text-ink">{match.theme}</h2>
                <p className="mt-2 text-sm font-black text-coral">{match.organizations}</p>
                <ul className="mt-4 grid gap-2 text-sm font-bold text-ink/66">
                  {match.why.map((reason) => (
                    <li key={reason}>• {reason}</li>
                  ))}
                </ul>
                <p className="mt-4 rounded-2xl bg-cream p-4 text-sm font-bold leading-6 text-ink/68">Leerpunt: {match.learning}</p>
                <div className="mt-5 grid gap-2">
                  <a href="#fonk-match" className="rounded-full bg-petrol px-5 py-3 text-center text-sm font-black text-cream">Bekijk match</a>
                  <span className="rounded-full border border-ink/12 bg-cream px-5 py-3 text-center text-sm font-black text-ink/60">Stel samenwerking voor: in voorbereiding</span>
                  <span className="rounded-full border border-ink/12 bg-cream px-5 py-3 text-center text-sm font-black text-ink/60">Deel leerpunt: in voorbereiding</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
