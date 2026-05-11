import { Focus, HandHeart, Rocket, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const benefits = [
  { icon: ShieldCheck, title: "Minder verandermoeheid", text: "Teams krijgen overzicht, tempo en inspraak in plaats van nog een groot veranderprogramma." },
  { icon: HandHeart, title: "Meer eigenaarschap", text: "Zorgmedewerkers zien dat hun signalen leiden tot keuzes, acties en prioriteiten." },
  { icon: Rocket, title: "Snellere implementatie", text: "Micro-acties zorgen voor zichtbaar momentum terwijl de organisatie blijft leren." },
  { icon: Sparkles, title: "Hogere betrokkenheid", text: "Draagvlak wordt een stuurvariabele, niet pas een risico in de evaluatie." },
  { icon: TrendingUp, title: "Minder verspilde projecten", text: "Innovaties worden eerder getoetst aan praktijkwaarde, teamenergie en uitvoerbaarheid." },
  { icon: Focus, title: "Scherpere focus", text: "Bestuur en teams kiezen samen wat nu nodig is en wat beter kan wachten." },
];

export function FeatureCards() {
  return (
    <section className="container-page py-20">
      <SectionHeading
        eyebrow="Voordelen"
        title="Meer veranderkracht, minder ruis en beter zicht op wat echt werkt."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => (
          <article key={benefit.title} className="rounded-3xl border border-ink/10 bg-white/76 p-6 shadow-soft">
            <benefit.icon className="text-pine" size={28} />
            <h3 className="mt-7 text-xl font-black text-ink">{benefit.title}</h3>
            <p className="mt-3 leading-7 text-ink/68">{benefit.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
