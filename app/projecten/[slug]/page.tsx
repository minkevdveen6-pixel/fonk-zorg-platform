import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock3, UsersRound } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { kwadrantProjects, projectDepartmentDetails, projectSignals } from "@/lib/fonk-data";

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function generateStaticParams() {
  return kwadrantProjects.map((project) => ({ slug: slugify(project.name) }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = kwadrantProjects.find((item) => slugify(item.name) === params.slug);
  return {
    title: project ? `${project.name} | Projectdetail` : "Projectdetail",
    description: "Voorbeelddata voor projectdetails binnen de FONK pilotomgeving.",
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = kwadrantProjects.find((item) => slugify(item.name) === params.slug);
  if (!project) notFound();

  return (
    <>
      <Header />
      <main id="inhoud" className="bg-cream text-ink">
        <section className="container-page py-12 md:py-16">
          <Link href="/projectdashboard" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-black text-petrol shadow-sm">
            <ArrowLeft size={17} /> Terug naar projectdashboard
          </Link>
          <div className="mt-8 rounded-[2rem] bg-petrol p-8 text-cream shadow-soft md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.12em] text-yellow">Voorbeelddata voor pilotomgeving</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">{project.name}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-cream/76">
              {project.risk} FONK maakt zichtbaar wie betrokken is, welke capaciteit nodig is en welke volgende stap besluit vraagt.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              <span className="rounded-full bg-yellow/70 px-4 py-2 text-sm font-black text-petrol">{project.status}</span>
              <span className="rounded-full bg-white/12 px-4 py-2 text-sm font-black">{project.priority}</span>
              <span className="rounded-full bg-white/12 px-4 py-2 text-sm font-black">{project.progress}% voortgang</span>
            </div>
          </div>
        </section>

        <section className="container-page grid gap-4 py-8 md:grid-cols-3">
          <Metric icon={Clock3} label="Benodigde capaciteit" value={`${project.capacity} uur`} />
          <Metric icon={UsersRound} label="Betrokken afdelingen" value={project.departments.join(", ")} />
          <Metric icon={CalendarDays} label="Volgende stap" value={project.nextStep} />
        </section>

        <section className="container-page grid gap-6 py-10 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-soft">
            <h2 className="text-3xl font-black">Projectoverzicht</h2>
            <dl className="mt-6 grid gap-3">
              {[
                ["Aanleiding", project.risk],
                ["Doel", project.qualityImpact],
                ["Opdrachtgever", project.sponsor],
                ["Projectleider", project.lead],
                ["Risico’s", project.risk],
                ["Afhankelijkheden", project.dependency],
                ["Impactverwachting", `${project.financialImpact}; ${project.employeeImpact}; ${project.clientImpact}.`],
                ["Tijdswinst-inschatting", project.financialImpact],
                ["Kwaliteitsimpact", project.qualityImpact],
                ["Medewerkerimpact", project.employeeImpact],
                ["Volgende stap", project.nextStep],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-cream p-4">
                  <dt className="text-xs font-black uppercase tracking-[0.12em] text-ink/45">{label}</dt>
                  <dd className="mt-1 font-bold leading-7 text-ink/72">{value}</dd>
                </div>
              ))}
            </dl>
          </article>

          <article className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-soft">
            <h2 className="text-3xl font-black">Betrokken afdelingen</h2>
            <div className="mt-6 grid gap-3">
              {projectDepartmentDetails.map(([department, why, when, hours, role, contact]) => (
                <div key={department} className="rounded-2xl bg-cream p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-black text-ink">{department}</h3>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-petrol">{hours}</span>
                  </div>
                  <p className="mt-2 text-sm font-bold leading-6 text-ink/68">{why}</p>
                  <p className="mt-2 text-xs font-bold text-ink/50">Wanneer: {when} · Rol: {role} · Contactmoment: {contact}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="container-page py-10">
          <div className="rounded-[2rem] bg-lilac/40 p-6 shadow-soft">
            <h2 className="text-3xl font-black">Signalen & verbeteringen</h2>
            <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {projectSignals.map(([status, signal, next]) => (
                <article key={status} className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-sm font-black text-coral">{status}</p>
                  <h3 className="mt-2 font-black text-ink">{signal}</h3>
                  <p className="mt-2 text-sm font-bold leading-6 text-ink/62">Vervolg: {next}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Metric({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <article className="rounded-[1.5rem] bg-white p-5 shadow-sm">
      <Icon className="text-coral" aria-hidden="true" />
      <p className="mt-4 text-sm font-black uppercase tracking-[0.12em] text-ink/45">{label}</p>
      <p className="mt-2 font-black leading-7 text-petrol">{value}</p>
    </article>
  );
}
