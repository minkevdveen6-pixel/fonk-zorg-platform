import { BookOpen, GitPullRequestArrow, Library, Network, Scale, Users } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  { icon: Library, title: "Regionale projectbibliotheek", text: "Vind projecten van Anders Werken in de Zorg Friesland, AWIZ Connect en regionale partners." },
  { icon: BookOpen, title: "Gedeelde lessen", text: "Leg vast wat werkt, wat niet werkt en welke randvoorwaarden nodig zijn." },
  { icon: GitPullRequestArrow, title: "Projecttemplates", text: "Start sneller met bewezen aanpakken voor passende zorg, arbeidsbesparing en kwaliteit." },
  { icon: Users, title: "Samenwerkingsverzoeken", text: "Vraag andere organisaties, zorgverzekeraars of innovatiehubs om mee te doen." },
  { icon: Scale, title: "Regionale benchmark", text: "Vergelijk voortgang, impact en schaalbaarheid zonder organisaties plat te slaan tot cijfers." },
  { icon: Network, title: "Kennisnetwerken", text: "Verbind zorgorganisaties, verzekeraars, kennisnetwerken en externe partners." },
];

export function RegionalCollaboration() {
  return (
    <section className="bg-cream py-16 text-ink">
      <div className="container-page">
        <SectionHeading
          eyebrow="Regionaal samenwerken"
          title="Van losse pilots naar een gedeeld verandergeheugen voor Friesland."
          body="FONK kan samenwerking ondersteunen met Anders Werken in de Zorg Friesland, AWIZ Connect, regionale zorgorganisaties, zorgverzekeraars, kennisnetwerken en innovatiehubs."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-ink/10 bg-white/85 p-6 shadow-soft">
              <item.icon className="text-coral" aria-hidden="true" />
              <h3 className="mt-6 text-xl font-black">{item.title}</h3>
              <p className="mt-3 leading-7 text-ink/68">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
