"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { fonkProjects, type FonkProject } from "@/lib/fonk-data";

const colorByStatus: Record<FonkProject["status"], string> = {
  PRIO: "bg-pine",
  Loopt: "bg-lime",
  Wachtlijst: "bg-orange",
  Parkeren: "bg-orange",
  Afgerond: "bg-green",
  Voorbereiding: "bg-pine",
};

export function ProjectMap() {
  const [active, setActive] = useState<FonkProject>(fonkProjects[0]);
  const [questionSent, setQuestionSent] = useState(false);

  return (
    <section className="container-page py-16 text-ink">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-ink/10 bg-white/85 p-5 shadow-soft">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.12em] text-pine">Lopende veranderingen</p>
              <h2 className="mt-2 text-3xl font-black">Wat loopt er, wie doet mee en waar is hulp nodig?</h2>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-bold text-ink/70">
              {["loopt goed", "heeft aandacht", "wacht op keuze", "prioriteit"].map((item) => (
                <span key={item} className="rounded-full bg-white/80 px-3 py-2">{item}</span>
              ))}
            </div>
          </div>
          <div className="relative mt-8 min-h-[420px] overflow-hidden rounded-[1.5rem] border border-ink/10 bg-mist">
            {fonkProjects.map((project) => (
              <button
                key={project.id}
                type="button"
                onClick={() => setActive(project)}
                className={`focus-ring absolute h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-ink/60 ${colorByStatus[project.status]} shadow-soft transition hover:scale-125`}
                style={{ left: `${project.x}%`, top: `${100 - project.y}%` }}
                aria-label={`Open project ${project.name}`}
              />
            ))}
          </div>
        </div>

        <aside className="rounded-[2rem] border border-ink/10 bg-white/80 p-6 shadow-soft">
          <span className={`rounded-full px-3 py-1 text-xs font-black ${active.status === "PRIO" || active.status === "Voorbereiding" ? "text-cream" : "text-ink"} ${colorByStatus[active.status]}`}>
            {active.status}
          </span>
          <h3 className="mt-5 text-3xl font-black text-ink">{active.name}</h3>
          <dl className="mt-6 grid gap-4 text-sm">
            {[
              ["Contactpersoon", active.contact],
              ["Projectleider", active.projectLead],
              ["Locatie/team", active.location],
              ["Voortgang", `${active.progress}%`],
              ["Risico", active.risk],
              ["Afdelingen", active.departments.join(", ")],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl bg-white/85 p-4">
                <dt className="font-bold text-ink/54">{label}</dt>
                <dd className="mt-1 font-black text-ink">{value}</dd>
              </div>
            ))}
          </dl>
          <label className="mt-5 grid gap-2">
            <span className="text-sm font-bold text-ink/70">Stel een vraag over dit project</span>
            <textarea className="focus-ring min-h-24 rounded-2xl border border-ink/10 bg-white/85 p-4 text-ink" placeholder="Waar loop je in de praktijk tegenaan?" />
          </label>
          <button
            type="button"
            onClick={() => setQuestionSent(true)}
            className="focus-ring mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-pine px-5 py-4 font-black text-cream"
          >
            Vraag stellen <MessageCircle size={18} />
          </button>
          {questionSent ? (
            <p className="mt-4 rounded-2xl bg-mist p-4 text-sm font-bold leading-6 text-petrol">
              Vraag opgeslagen als voorbeeldmelding. In de pilot wordt dit gekoppeld aan projectleider en projectlog.
            </p>
          ) : null}
        </aside>
      </div>
    </section>
  );
}
