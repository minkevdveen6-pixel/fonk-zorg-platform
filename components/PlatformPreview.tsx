import Link from "next/link";
import { Building2, ClipboardList, HeartHandshake, MessagesSquare, Network, UsersRound } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const modules = [
  { icon: ClipboardList, title: "Hulp voor projectleiders", text: "Leg ideeën, gesprekken en besluiten rustig vast. FONK helpt plannen uitschrijven zonder extra papierwerk." },
  { icon: Building2, title: "Overzicht voor MT en directie", text: "Zie wat loopt, wat prioriteit heeft en waar teams ondersteuning nodig hebben." },
  { icon: UsersRound, title: "Ruimte voor medewerkers", text: "Medewerkers delen ideeën, knelpunten en vragen en zien wat ermee gebeurt." },
  { icon: HeartHandshake, title: "Slimme hulp, menselijke regie", text: "FONK helpt ordenen en schrijven, maar keuzes blijven bij mensen en bij de praktijk." },
  { icon: Network, title: "Samen leren in Friesland", text: "Bewaar lessen, voorbeelden en bewezen aanpakken zodat organisaties van elkaar leren." },
  { icon: MessagesSquare, title: "Vragen en draagvlak", text: "Maak zorgen bespreekbaar voordat een verandering vastloopt in de dagelijkse zorg." },
];

export function PlatformPreview() {
  return (
    <section className="bg-cream py-20 text-ink">
      <div className="container-page">
        <SectionHeading
          eyebrow="Het platform"
          title="Geen koude projectadministratie. Een warme plek voor gezamenlijke verandering."
          body="FONK maakt verandering kleiner, begrijpelijker en haalbaarder. Verandering begint bij mensen: medewerkers worden serieus genomen, projectleiders krijgen rust en bestuur krijgt duidelijke keuzes."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <article key={module.title} className="rounded-[2rem] border border-ink/10 bg-white/88 p-6 shadow-soft">
              <module.icon className="text-coral" size={30} aria-hidden="true" />
              <h3 className="mt-7 text-2xl font-black text-ink">{module.title}</h3>
              <p className="mt-3 leading-7 text-ink/68">{module.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/projectdashboard" className="focus-ring rounded-full bg-pine px-6 py-4 text-center font-black text-cream">
            Bekijk lopende veranderingen
          </Link>
          <Link href="/contact" className="focus-ring rounded-full border border-ink/14 bg-white px-6 py-4 text-center font-black text-ink">
            Start samen met FONK
          </Link>
        </div>
      </div>
    </section>
  );
}
