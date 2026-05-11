import { Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const testimonials = [
  {
    quote:
      "Voor het eerst zagen we niet alleen welke innovatie prioriteit had, maar ook of teams er werkelijk ruimte en energie voor hadden.",
    name: "Programmamanager innovatie",
    org: "Middelgrote VVT-organisatie",
  },
  {
    quote:
      "De scan maakte het gesprek tussen bestuur en werkvloer concreter. Minder aannames, meer signalen uit de praktijk.",
    name: "Directeur zorg",
    org: "Regionale zorggroep",
  },
  {
    quote:
      "Het hielp ons om een groot veranderprogramma terug te brengen naar kleine stappen waar teams eigenaarschap op konden pakken.",
    name: "HR- en organisatieadviseur",
    org: "GGZ-instelling",
  },
];

export function Testimonials() {
  return (
    <section className="bg-cream py-20 text-ink">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <SectionHeading
            eyebrow="Vertrouwen"
            title="Gemaakt voor zorgorganisaties die resultaat willen zonder de mens uit het oog te verliezen."
            body="FONK is bedoeld voor gesprekken die vaak te laat worden gevoerd: wat kunnen teams dragen, welke keuze is nu nodig en wat helpt de praktijk echt? Verandering begint bij mensen."
          />
          <div className="rounded-3xl border border-ink/10 bg-white/85 p-6 text-ink shadow-soft">
            <p className="text-sm font-black uppercase tracking-[0.12em] text-pine">Rustig starten</p>
            <p className="mt-3 text-2xl font-black">Binnen 30 dagen live met scan, overlegritme en eerste kleine stappen.</p>
          </div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="rounded-[2rem] border border-ink/10 bg-white/85 p-6 shadow-soft">
              <Quote className="text-coral" aria-hidden="true" />
              <blockquote className="mt-6 text-lg font-bold leading-8 text-ink">
                {`"${testimonial.quote}"`}
              </blockquote>
              <figcaption className="mt-6 border-t border-ink/10 pt-5">
                <p className="font-black text-ink">{testimonial.name}</p>
                <p className="mt-1 text-sm text-ink/64">{testimonial.org}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
