import { fonkProjects } from "@/lib/fonk-data";

const statusColor = {
  PRIO: "bg-pine text-cream",
  Loopt: "bg-lime text-night",
  Wachtlijst: "bg-sand text-ink",
  Parkeren: "bg-orange text-night",
  Afgerond: "bg-white/85 text-ink",
  Voorbereiding: "bg-pine text-cream",
};

export function PriorityDashboard() {
  const prio = fonkProjects.filter((project) => project.status === "PRIO");
  const running = fonkProjects.filter((project) => project.status === "Loopt" || project.status === "Voorbereiding");
  const waiting = fonkProjects.filter((project) => project.status === "Wachtlijst" || project.status === "Parkeren");
  const done = fonkProjects.filter((project) => project.status === "Afgerond");

  return (
    <section className="container-page py-16 text-ink">
      <div className="grid gap-5 md:grid-cols-4">
        {[
          ["Prioriteiten", `${prio.length}/3`, "Maximaal 3 tegelijk"],
          ["Lopende veranderingen", `${running.length}/10`, "Ruimte voor focus"],
          ["Wacht op keuze", `${waiting.length}`, "Later beoordelen"],
          ["Afgerond", `${done.length}`, "Lessen borgen"],
        ].map(([label, value, helper]) => (
          <div key={label} className="rounded-[2rem] border border-ink/10 bg-white/85 p-5 shadow-soft">
            <p className="text-sm font-bold text-ink/58">{label}</p>
            <p className="mt-3 text-4xl font-black">{value}</p>
            <p className="mt-2 text-sm font-bold text-pine">{helper}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 overflow-hidden rounded-[2rem] border border-ink/10 bg-white/85 shadow-soft">
        <div className="grid grid-cols-1 gap-px bg-white/80 lg:grid-cols-[1.3fr_0.85fr_0.85fr_0.55fr_0.55fr_0.55fr_0.55fr]">
          {["Verandering", "Projectleider", "Afdelingen", "Voortgang", "Wat heeft aandacht?", "Tijd", "Draagvlak"].map((head) => (
            <div key={head} className="hidden bg-cream/86 p-4 text-sm font-black text-ink/64 lg:block">{head}</div>
          ))}
          {fonkProjects.map((project) => (
            <div key={project.id} className="contents">
              <div className="bg-cream/62 p-4">
                <span className={`rounded-full px-3 py-1 text-xs font-black ${statusColor[project.status]}`}>{project.status}</span>
                <p className="mt-3 font-black">{project.name}</p>
                <p className="mt-1 text-sm text-ink/58">Opdrachtgever: {project.sponsor}</p>
              </div>
              <div className="bg-cream/62 p-4 text-sm font-bold text-ink/74">{project.projectLead}</div>
              <div className="bg-cream/62 p-4 text-sm text-ink/68">{project.departments.join(", ")}</div>
              <div className="bg-cream/62 p-4 font-black">{project.progress}%</div>
              <div className="bg-cream/62 p-4 font-black capitalize">{project.risk}</div>
              <div className="bg-cream/62 p-4 font-black">{project.capacityHours}u</div>
              <div className="bg-cream/62 p-4 text-sm font-bold">
                I {project.impactScore} · U {project.urgencyScore} · D {project.supportScore}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
