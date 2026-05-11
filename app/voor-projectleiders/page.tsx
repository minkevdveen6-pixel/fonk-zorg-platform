import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { ClipboardList, Clock3, FileText, Handshake, Mic, Upload } from "lucide-react";

export const metadata: Metadata = {
  title: "Voor projectleiders",
  description:
    "FONK helpt projectleiders in de zorg om ideeën, intakes, projectplannen, afdelingen, capaciteit en leerpunten overzichtelijk te organiseren.",
};

const items = [
  ["Start een project", "Begin vanaf een idee, knelpunt of vraag uit de praktijk.", ClipboardList],
  ["Leg intakes vast", "Upload een gesprek of voeg spraaknotities toe.", Upload],
  ["Werk plannen uit", "Laat FONK een eerste projectplan voorbereiden.", FileText],
  ["Schat tijd in", "Zie welke afdelingen nodig zijn en hoeveel uren dit vraagt.", Clock3],
  ["Bewaar leerpunten", "Leg vast wat werkt, wat aangepast wordt en wat stopt.", Mic],
  ["Deel met anderen", "Vind projectmatches en leer van andere organisaties.", Handshake],
];

const intakeItems = [
  "wie moet aansluiten bij de intake",
  "welke afdelingen geraakt worden",
  "waar projecten mogelijk overlappen",
  "welke besluiten nodig zijn",
  "welke capaciteit nodig is",
  "welke impact zichtbaar moet worden",
];

export default function VoorProjectleidersPage() {
  return (
    <>
      <Header />
      <main id="inhoud" className="bg-cream">
        <PageHero
          eyebrow="Voor projectleiders"
          title="FONK geeft projectleiders overzicht terug."
          body="Als veranderingen via geitenpaadjes ontstaan, kun je nooit overal zicht op houden. FONK brengt ideeën, intake, afdelingen, besluiten, capaciteit en impact terug naar één route."
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
            FONK neemt projectleiders geen regie af. FONK voorkomt losse administratie en dubbel werk.
          </p>
        </section>
        <section className="bg-white py-20">
          <div className="container-page">
            <p className="spark-mark text-sm font-black uppercase tracking-[0.12em] text-petrol">Slimme intake</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight text-ink">Vanaf het begin de juiste vragen en mensen.</h2>
            <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {intakeItems.map((item) => (
                <div key={item} className="rounded-2xl bg-cream p-5 font-black text-petrol">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
