import { fonkProjects } from "@/lib/fonk-data";

export function PriorityMatrix() {
  return (
    <section className="container-page py-16 text-ink">
      <div className="rounded-[2rem] border border-ink/10 bg-white/85 p-5 shadow-soft">
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.12em] text-pine">Keuzes maken</p>
            <h2 className="mt-2 text-3xl font-black">Wat is belangrijk en wat kan wachten?</h2>
          </div>
          <p className="max-w-lg text-sm leading-6 text-ink/62">
            Veranderingen rechtsboven vragen het eerst aandacht. FONK adviseert maximaal 3 echte prioriteiten tegelijk.
          </p>
        </div>
        <div className="relative mt-8 aspect-square min-h-[320px] overflow-hidden rounded-[1.5rem] border border-ink/10 bg-sand/70 sm:aspect-[16/9]">
          <div className="absolute inset-x-6 top-1/2 h-px bg-white/85" />
          <div className="absolute inset-y-6 left-1/2 w-px bg-white/85" />
          <p className="absolute left-4 top-4 text-xs font-black text-ink/50">Hoge urgentie</p>
          <p className="absolute bottom-4 right-4 text-xs font-black text-ink/50">Hoge impact</p>
          {fonkProjects.map((project) => (
            <div
              key={project.id}
              className={`absolute grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-xs font-black shadow-soft ${
                project.status === "PRIO" ? "bg-pine text-cream" : "bg-lime text-night"
              }`}
              style={{ left: `${project.impactScore}%`, bottom: `${project.urgencyScore}%` }}
              title={project.name}
            >
              {project.name.slice(0, 2)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
