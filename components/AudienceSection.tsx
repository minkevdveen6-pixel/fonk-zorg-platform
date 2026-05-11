import { SectionHeading } from "./SectionHeading";

const audiences = ["Bestuurders", "Projectleiders", "Teamleiders", "HR", "Innovatieadviseurs", "Zorgteams"];

export function AudienceSection() {
  return (
    <section className="container-page py-20">
      <SectionHeading
        eyebrow="Voor wie"
        title="Voor organisaties die sneller willen leren wat teams nodig hebben om mee te bewegen."
        body="Relevant voor bestuur, programma's, HR en zorgteams die merken dat implementatie niet alleen om planning gaat, maar om draagvlak, gedrag en vertrouwen."
      />
      <div className="mt-10 flex flex-wrap gap-3">
        {audiences.map((audience) => (
          <span key={audience} className="rounded-full border border-ink/10 bg-white px-5 py-3 text-lg font-bold text-ink shadow-sm">
            {audience}
          </span>
        ))}
      </div>
    </section>
  );
}
