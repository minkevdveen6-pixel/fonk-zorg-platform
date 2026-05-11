"use client";

import { useState } from "react";
import { Lightbulb, Plus } from "lucide-react";
import { ideas, topIdeas } from "@/lib/fonk-data";

const statuses = ["Nieuw idee", "In beoordeling", "Omzetten naar project", "Parkeren", "Afgewezen met toelichting", "In uitvoering", "Afgerond"];
const ideaFields = [
  ["Idee", "Bijvoorbeeld: overdracht korter maken"],
  ["Knelpunt uit de praktijk", "Waar loop je tegenaan?"],
  ["Voorgestelde oplossing", "Wat zou helpen?"],
  ["Team/locatie", "Bijvoorbeeld: Zorg Thuis Noord"],
  ["Contactpersoon", "Naam of teamcontact"],
];

export function IdeasHub() {
  const [submitted, setSubmitted] = useState(false);
  const [activeIdea, setActiveIdea] = useState(ideas[0]);

  return (
    <section className="container-page py-16 text-ink">
      <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <form
          className="rounded-[2rem] border border-ink/10 bg-white/85 p-5 shadow-soft"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="flex items-center gap-3">
            <Lightbulb className="text-lime" aria-hidden="true" />
            <h2 className="text-2xl font-black">Idee of knelpunt indienen</h2>
          </div>
          <div className="mt-6 grid gap-4">
            {ideaFields.map(([label, placeholder]) => (
              <label key={label} className="grid gap-2">
                <span className="text-sm font-bold text-ink/70">{label}</span>
                <input placeholder={placeholder} className="focus-ring rounded-2xl border border-ink/10 bg-sand/60 px-4 py-3 text-ink placeholder:text-ink/35" />
              </label>
            ))}
          </div>
          <button type="submit" className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-pine px-5 py-4 font-black text-cream">
            Verstuur naar projectleiders <Plus size={18} />
          </button>
          {submitted ? (
            <p className="mt-4 rounded-2xl bg-lime/16 p-4 font-bold text-lime">
              Je idee is zichtbaar voor projectleiders als Nieuw idee.
            </p>
          ) : null}
        </form>

        <div className="rounded-[2rem] border border-ink/10 bg-white/80 p-5 shadow-soft">
          <p className="rounded-full bg-lilac/35 px-4 py-2 text-sm font-black text-petrol">Beschikbaar binnen de FONK-omgeving</p>
          <p className="text-sm font-black uppercase tracking-[0.12em] text-pine">Ideeën uit de praktijk</p>
          <h2 className="mt-2 text-3xl font-black">Van medewerkerssignaal naar duidelijke vervolgstap</h2>
          <div className="mt-6 rounded-[1.5rem] bg-mist p-5">
            <h3 className="text-2xl font-black text-ink">Top Ideeën & Verbeteringen</h3>
            <p className="mt-2 text-sm font-bold leading-6 text-ink/62">
              Iedereen in de organisatie kan ideeën bekijken, reacties volgen en inspiratie ophalen. Rechten verschillen per rol.
            </p>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {topIdeas.map((idea) => (
                <article key={idea.title} className="rounded-2xl bg-white p-4 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full bg-yellow/60 px-3 py-2 text-xs font-black text-petrol">{idea.label}</span>
                    <span className="text-xs font-black text-ink/52">{idea.likes} likes · {idea.comments} reacties</span>
                  </div>
                  <h4 className="mt-4 text-lg font-black text-ink">{idea.title}</h4>
                  <p className="mt-2 text-sm font-bold text-ink/60">{idea.submitter} · {idea.team}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[idea.theme, idea.department, idea.status, idea.impact].map((label) => (
                      <span key={label} className="rounded-full bg-cream px-3 py-2 text-xs font-black text-petrol">{label}</span>
                    ))}
                  </div>
                  <p className="mt-4 rounded-2xl bg-cream p-3 text-sm font-bold leading-6 text-ink/66">Vervolg: {idea.nextStep}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-6 grid gap-4">
            {ideas.map((idea) => (
              <article key={idea.idea} className="rounded-3xl border border-ink/10 bg-white/85 p-4">
                <div className="flex flex-col justify-between gap-3 md:flex-row">
                  <div>
                    <p className="text-sm font-bold text-lime">{idea.month} · {idea.team}</p>
                    <h3 className="mt-2 text-xl font-black">{idea.idea}</h3>
                    <p className="mt-2 text-sm text-ink/62">Medewerker: {idea.employee} · Contact: {idea.contact}</p>
                  </div>
                  <span className="h-fit rounded-full bg-coral px-3 py-2 text-xs font-black text-cream">{idea.status}</span>
                </div>
                <p className="mt-4 leading-7 text-ink/70">{idea.review}</p>
                <div className="mt-4 grid gap-3 text-sm font-bold md:grid-cols-3">
                  <span className="rounded-2xl bg-white/85 p-3">Project: {idea.linkedProject}</span>
                  <span className="rounded-2xl bg-white/85 p-3">Impact {idea.impact}</span>
                  <span className="rounded-2xl bg-white/85 p-3">Haalbaarheid {idea.feasibility}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveIdea(idea)}
                  className="focus-ring mt-4 inline-flex rounded-full bg-petrol px-5 py-3 text-sm font-black text-cream"
                >
                  Bekijk ideedetail
                </button>
              </article>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {statuses.map((status) => (
              <span key={status} className="rounded-full border border-ink/10 bg-white/85 px-3 py-2 text-xs font-bold text-ink/70">
                {status}
              </span>
            ))}
          </div>
          <div className="mt-6 rounded-[1.5rem] bg-mist p-5">
            <p className="text-sm font-black uppercase tracking-[0.12em] text-petrol">Ideedetail</p>
            <h3 className="mt-2 text-2xl font-black text-ink">{activeIdea.idea}</h3>
            <dl className="mt-5 grid gap-3 md:grid-cols-2">
              {[
                ["Indiener", activeIdea.employee],
                ["Team/locatie", activeIdea.team],
                ["Probleem", activeIdea.review],
                ["Voorstel", "Klein testen met het betrokken team en daarna effect bespreken."],
                ["Status", activeIdea.status],
                ["Reactie projectleider", activeIdea.review],
                ["Mogelijke vervolgstap", activeIdea.status === "Nieuw idee" ? "Bespreken in ideeënronde" : "Koppelen aan projectroute"],
                ["Gekoppeld project", activeIdea.linkedProject],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-white p-4">
                  <dt className="text-xs font-black uppercase tracking-[0.12em] text-ink/45">{label}</dt>
                  <dd className="mt-1 text-sm font-bold leading-6 text-ink/72">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
