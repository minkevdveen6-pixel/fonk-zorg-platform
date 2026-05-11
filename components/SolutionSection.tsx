import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  "Meet draagvlak, werkdruk en implementatiekracht voordat een initiatief vastloopt.",
  "Haal praktijksignalen op bij zorgmedewerkers zonder extra vergaderdruk.",
  "Vertaal praktijksignalen naar kleine stappen die binnen 14 dagen uitvoerbaar zijn.",
  "Stuur op gedrag, energie en betrokkenheid naast planning, budget en output.",
];

export function SolutionSection() {
  return (
    <section className="bg-pine py-20 text-cream">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="De oplossing"
          title="Een mensgerichte veranderomgeving voor sociale innovatie en praktische implementatiekracht."
          body="FONK verbindt strategie en praktijk. Geen rapport dat in de la verdwijnt, maar een ritme van meten, luisteren, prioriteren en samen verder brengen."
        />
        <div className="grid gap-4">
          {items.map((item) => (
            <div key={item} className="flex gap-4 rounded-3xl bg-white/80 p-5">
              <CheckCircle2 className="mt-1 shrink-0 text-lime" aria-hidden="true" />
              <p className="text-lg font-semibold leading-7">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
