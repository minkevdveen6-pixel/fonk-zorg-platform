import { AlertTriangle, BatteryLow, Repeat, TimerReset } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const problems = [
  {
    icon: BatteryLow,
    title: "Personeelstekort drukt alles plat",
    text: "Teams hebben weinig lucht. Innovatie voelt daardoor al snel als nog een taak bovenop de zorg.",
  },
  {
    icon: Repeat,
    title: "Verandermoeheid groeit",
    text: "Projecten volgen elkaar op, maar medewerkers zien te weinig effect in hun dagelijkse werk.",
  },
  {
    icon: AlertTriangle,
    title: "Implementaties missen draagvlak",
    text: "Besluiten worden vaak logisch bedacht, maar te laat getoetst aan praktijk, gedrag en teamenergie.",
  },
  {
    icon: TimerReset,
    title: "Waarde lekt weg",
    text: "Goede ideeen verliezen momentum omdat eigenaarschap, ritme en sociale innovatie ontbreken.",
  },
];

export function ProblemSection() {
  return (
    <section className="container-page py-20">
      <SectionHeading
        eyebrow="Het probleem"
        title="Zorgorganisaties kunnen zich geen mislukte implementaties meer veroorloven."
        body="De druk op de zorg is te groot voor verandertrajecten die draagvlak pas achteraf proberen te organiseren. Bestuurders hebben sneller zicht nodig op wat teams aankunnen, waar energie zit en welke stap morgen haalbaar is."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {problems.map((problem) => (
          <article key={problem.title} className="rounded-3xl border border-ink/10 bg-white/76 p-6 shadow-soft">
            <problem.icon className="text-coral" size={28} />
            <h3 className="mt-8 text-xl font-black text-ink">{problem.title}</h3>
            <p className="mt-3 leading-7 text-ink/68">{problem.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
