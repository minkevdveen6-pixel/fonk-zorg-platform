import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { BadgeCheck, Clock3, Euro, HeartHandshake, ListChecks, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Voor bestuur",
  description:
    "FONK geeft bestuur, directie en MT overzicht in lopende veranderingen, prioriteiten, tijdwinst, kwaliteit, medewerkersopbrengst en keuzes.",
};

const insights = [
  ["Portfolio-overzicht", "Topprioriteiten, lopende projecten, wachtlijst en afgerond.", ListChecks],
  ["3 prioriteiten", "Niet alles tegelijk, wel de juiste dingen eerst.", ShieldCheck],
  ["Tijdwinst", "Hoeveel tijd besparen verbeteringen per maand?", Clock3],
  ["Financieel effect", "Waar nemen indirecte uren of kosten af?", Euro],
  ["Kwaliteit van zorg", "Wat wordt beter voor cliënten en teams?", BadgeCheck],
  ["Medewerkers", "Waar ontstaat rust, eigenaarschap of draagvlak?", HeartHandshake],
];

export default function VoorBestuurPage() {
  return (
    <>
      <Header />
      <main id="inhoud" className="bg-cream">
        <PageHero
          eyebrow="Voor bestuur"
          title="Besturen op focus in plaats van losse projectlijsten."
          body="FONK helpt MT, directie en RvB zien wat loopt, welke 3 projecten prioriteit hebben, waar capaciteit knelt en waar stoppen, aanpassen of opschalen verstandig is."
        />
        <section className="container-page py-20">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {insights.map(([title, text, Icon]) => (
              <article key={title as string} className="rounded-[1.5rem] border border-ink/10 bg-white p-6 shadow-sm">
                <Icon className="text-coral" aria-hidden="true" />
                <h2 className="mt-5 text-2xl font-black text-ink">{title as string}</h2>
                <p className="mt-3 leading-7 text-ink/68">{text as string}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-[2rem] bg-pine p-8 text-cream">
            <p className="text-3xl font-black">FONK maakt zichtbaar wat verandering oplevert.</p>
            <p className="mt-4 max-w-2xl leading-8 text-cream/74">
              Bestuur ziet financiële opbrengst, tijdswinst, kwaliteit van zorg, medewerkerimpact,
              cliëntimpact, risico’s, capaciteit en regionale kansen in één overzicht.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
