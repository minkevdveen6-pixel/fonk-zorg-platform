import { FileAudio, Mic, Send, Upload, WandSparkles } from "lucide-react";
import { fonkProjects, ideas } from "@/lib/fonk-data";

const actions = [
  { icon: Upload, label: "Upload intakegesprek" },
  { icon: Mic, label: "Spraaknotitie toevoegen" },
  { icon: FileAudio, label: "Notities opslaan" },
  { icon: WandSparkles, label: "Projectplan laten voorbereiden" },
  { icon: Send, label: "Deel met opdrachtgever" },
  { icon: Send, label: "Deel met MT" },
];

export function ProjectLeadCockpit() {
  return (
    <section className="container-page py-16 text-ink">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-ink/10 bg-white/85 p-5 shadow-soft">
          <p className="text-sm font-black uppercase tracking-[0.12em] text-pine">Voor projectleiders</p>
          <h2 className="mt-2 text-3xl font-black">Van intake naar projectplan zonder extra administratie.</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {actions.map((action) => {
              const Icon = action.icon;
              return (
                <button key={action.label} className="focus-ring inline-flex items-center justify-center gap-2 rounded-2xl border border-ink/10 bg-sand/60 px-4 py-4 font-black text-ink">
                  <Icon size={18} aria-hidden="true" /> {action.label}
                </button>
              );
            })}
          </div>
          <div className="mt-6 rounded-3xl border border-ink/10 bg-cream p-5">
              <p className="font-black text-ink">Verwachte capaciteit deze maand</p>
              <p className="mt-2 text-5xl font-black text-lime">1.980 uur</p>
              <p className="mt-2 text-sm text-ink/62">Over alle lopende veranderingen en gekozen prioriteiten.</p>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="rounded-[2rem] border border-ink/10 bg-white/80 p-5 shadow-soft">
            <h3 className="text-2xl font-black">Betrokken afdelingen</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {Array.from(new Set(fonkProjects.flatMap((project) => project.departments))).map((department) => (
                <span key={department} className="rounded-full bg-white/80 px-3 py-2 text-sm font-bold text-ink/76">
                  {department}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-ink/10 bg-white/80 p-5 shadow-soft">
            <h3 className="text-2xl font-black">Vragen en ideeën van medewerkers</h3>
            <div className="mt-4 grid gap-3">
              {ideas.map((idea) => (
                <div key={idea.idea} className="rounded-2xl bg-white/85 p-4">
                  <p className="font-black">{idea.idea}</p>
                  <p className="mt-1 text-sm text-ink/60">{idea.team} · status: {idea.status}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
