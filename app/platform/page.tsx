import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { afterProjectSteps, kwadrantAccounts, kwadrantMatches, kwadrantProjects, kwadrantSignals, roleAccess, superAdminAccount, topIdeas } from "@/lib/fonk-data";
import {
  ArrowRight,
  AlertTriangle,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  Lightbulb,
  Route,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kwadrant",
  description:
    "Programmamanageromgeving van Kwadrant binnen FONK: portfolio, projecten, signalen, capaciteit, verbindingen en regionale samenwerking.",
};

const topPriorities = kwadrantProjects.filter((project) => project.priority === "Topprioriteit");
const riskProjects = kwadrantProjects.filter((project) => project.status.includes("risico") || project.status === "Vertraagd" || project.risk.includes("Governance"));
const delayedProjects = kwadrantProjects.filter((project) => project.status === "Vertraagd" || project.status === "Scope bijstellen");
const unclearScope = kwadrantProjects.filter((project) => project.governance.toLowerCase().includes("scope") || project.status === "Scope bijstellen");
const programmeProjects = kwadrantProjects.filter((project) => project.governance.toLowerCase().includes("programma"));
const totalCapacity = kwadrantProjects.reduce((sum, project) => sum + project.capacity, 0);

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const departmentPressure = [
  ["BIS/ICT", 84, "spraaktechnologie, ECD, privacy"],
  ["Zorgteams", 78, "testen, adoptie, werkdruk"],
  ["Kwaliteit", 71, "audit, PDCA, protocollen"],
  ["Planning", 66, "triage, diensten, capaciteit"],
  ["HR", 58, "scholing en rollen"],
];

const onboarding = [
  ["Waarom FONK", "Alle verandering loopt via één herkenbare route."],
  ["Voor projectleiders", "Scope, intake, afdelingen en besluiten blijven zichtbaar."],
  ["Voor bestuur", "Focus op 3 prioriteiten en risico’s die besluit vragen."],
  ["Voor medewerkers", "Signalen uit de praktijk verdwijnen niet in mailboxen."],
  ["Voor regio", "Projectmatches maken samenwerking sneller en concreter."],
];

const platformModules = [
  { title: "Projecten", text: "Dashboard, status en details.", href: "/projectdashboard" },
  { title: "Ideeën", text: "Top ideeën, reacties en opvolging.", href: "/ideeenhub" },
  { title: "Handouts", text: "Voorbeeldinhoud per rol.", href: "/handout" },
  { title: "Impact", text: "Tijdswinst, kwaliteit en opbrengst.", href: "#portfolio-overzicht" },
  { title: "Signalen", text: "Klikbare meldingen en opvolging.", href: "#signalen" },
  { title: "Borging", text: "Monitoring na livegang.", href: "#borging" },
  { title: "FONK Match", text: "Regionale matches en leerpunten.", href: "/samen-leren#fonk-match" },
  { title: "Regelingen", text: "Ondersteunend bij projectfinanciering.", href: "#regelingen", status: "pilotfase" },
];

export default function PlatformPage() {
  return (
    <>
      <Header />
      <main id="inhoud" className="bg-cream text-ink">
        <section id="kwadrant-dashboard" className="container-page scroll-mt-28 py-12 md:py-16">
          <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch">
            <article className="rounded-[2rem] bg-petrol p-7 text-cream shadow-soft md:p-9">
              <p className="text-sm font-black uppercase tracking-[0.12em] text-yellow">Kwadrant is aangesloten</p>
              <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">Welkom op FONK.</h1>
              <p className="mt-5 text-lg leading-8 text-cream/78">
                Overzicht van jouw organisatie: projecten, verbeteringen en organisatiebrede verandering komen samen in één route.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <Metric value="Kwadrant" label="organisatie" />
                <Metric value="Rolgericht" label="toegang" />
              </div>
            </article>

            <article className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-soft md:p-7">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.12em] text-petrol">Vandaag in beeld</p>
                  <h2 className="mt-2 text-3xl font-black text-ink">Programmamanager-dashboard</h2>
                </div>
                <span className="rounded-full bg-mist px-4 py-2 text-sm font-black text-petrol">Live organisatieomgeving</span>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <MiniStat value="3" label="topprioriteiten" />
                <MiniStat value={`${riskProjects.length}`} label="projecten met risico" />
                <MiniStat value={`${totalCapacity} u`} label="gevraagde capaciteit" />
                <MiniStat value="€ 420k" label="verwachte opbrengst" />
              </div>
              <div className="mt-6 grid gap-3 md:grid-cols-5">
                {onboarding.map(([title, text]) => (
                  <div key={title} className="rounded-2xl bg-cream p-4">
                    <p className="font-black text-petrol">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-ink/64">{text}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="modules" className="container-page scroll-mt-28 py-10">
          <SectionTitle eyebrow="Na inloggen" title="Alle beloofde onderdelen staan hier op één route." />
          <div className="mt-7 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {platformModules.map((module) => (
              <Link key={module.title} href={module.href} className="rounded-[1.25rem] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-lg font-black text-ink">{module.title}</p>
                  {module.status ? (
                    <span className="rounded-full bg-yellow/55 px-2.5 py-1 text-[0.68rem] font-black text-petrol">{module.status}</span>
                  ) : null}
                </div>
                <p className="mt-2 text-sm font-bold leading-6 text-ink/60">{module.text}</p>
              </Link>
            ))}
          </div>
        </section>

        <section id="portfolio-overzicht" className="container-page scroll-mt-28 py-12">
          <SectionTitle eyebrow="Portfolio" title="Focus houden zonder ruis." />
          <div className="mt-7 grid gap-4 lg:grid-cols-3">
            {topPriorities.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <SignalCard icon={AlertTriangle} title="Governance risico" text={`${programmeProjects.length} projecten vragen programmasturing of scherper opdrachtgeverschap.`} />
            <SignalCard icon={Clock3} title="Vertraging / scope" text={`${delayedProjects.length} projecten vragen keuze op scope, capaciteit of besluitvorming.`} />
            <SignalCard icon={Route} title="Onduidelijke scope" text={`${unclearScope.length} projecten hebben aanscherping nodig voor intake of decharge.`} />
            <SignalCard icon={BadgeCheck} title="Borging" text="PDCA, proceseigenaren en beheerrollen blijven zichtbaar na livegang." />
          </div>
        </section>

        <section id="gebruikers" className="container-page scroll-mt-28 py-12">
          <SectionTitle eyebrow="Gebruikers & rollen" title="Iedereen ziet wat past bij zijn of haar rol." />
          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {kwadrantAccounts.map((account) => (
              <article key={account.username} className="rounded-[1.5rem] border border-ink/10 bg-white p-5 shadow-sm">
                <span className="rounded-full bg-mist px-3 py-2 text-xs font-black text-petrol">{account.organization}</span>
                <h3 className="mt-5 text-xl font-black text-ink">{account.name}</h3>
                <p className="mt-2 text-sm font-black text-coral">{account.role}</p>
                <p className="mt-3 text-sm leading-6 text-ink/66">{account.access}</p>
              </article>
            ))}
            <article className="rounded-[1.5rem] bg-petrol p-5 text-cream shadow-soft">
              <span className="rounded-full bg-yellow/60 px-3 py-2 text-xs font-black text-petrol">Super admin</span>
              <h3 className="mt-5 text-xl font-black">{superAdminAccount.name}</h3>
              <p className="mt-2 text-sm font-black text-yellow">{superAdminAccount.role}</p>
              <p className="mt-3 text-sm leading-6 text-cream/72">{superAdminAccount.access}</p>
            </article>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {roleAccess.map((item) => (
              <article key={item.role} className="rounded-[1.5rem] bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black text-ink">{item.role}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.access.map((access) => (
                    <span key={access} className="rounded-full bg-mist px-3 py-2 text-xs font-black text-petrol">{access}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="top-ideeen" className="bg-white py-16 scroll-mt-28">
          <div className="container-page">
            <SectionTitle eyebrow="Top Ideeën & Verbeteringen" title="Wat speelt er op de werkvloer?" />
            <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {topIdeas.map((idea) => (
                <article key={idea.title} className="rounded-[1.5rem] border border-ink/10 bg-cream p-5 shadow-sm">
                  <Lightbulb className="text-coral" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-black text-ink">{idea.title}</h3>
                  <p className="mt-2 text-sm font-bold text-ink/58">{idea.submitter} · {idea.team}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-yellow/60 px-3 py-2 text-xs font-black text-petrol">{idea.label}</span>
                    <span className="rounded-full bg-white px-3 py-2 text-xs font-black text-petrol">{idea.status}</span>
                  </div>
                  <p className="mt-4 text-sm font-bold text-ink/62">{idea.likes} likes · {idea.comments} reacties</p>
                  <Link href="/ideeenhub" className="mt-5 inline-flex rounded-full bg-petrol px-4 py-2 text-xs font-black text-cream">
                    Bekijk in Ideeënhub
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="capaciteit" className="bg-white py-16 scroll-mt-28">
          <div className="container-page">
            <SectionTitle eyebrow="Capaciteit" title="Waar ontstaat druk?" />
            <div className="mt-7 grid gap-4 lg:grid-cols-5">
              {departmentPressure.map(([department, pressure, note]) => (
                <article key={department as string} className="rounded-[1.5rem] border border-ink/10 bg-cream p-5 shadow-sm">
                  <p className="font-black text-ink">{department}</p>
                  <div className="mt-4 h-2 rounded-full bg-white">
                    <div className="h-2 rounded-full bg-coral" style={{ width: `${pressure}%` }} />
                  </div>
                  <p className="mt-3 text-2xl font-black text-petrol">{pressure}%</p>
                  <p className="mt-1 text-sm leading-6 text-ink/62">{note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="verbindingen" className="container-page scroll-mt-28 py-16">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
            <article className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-soft">
              <SectionTitle eyebrow="Wat raakt wat?" title="Projecten en processen blijven verbonden." />
              <div className="mt-7 rounded-[1.5rem] bg-mist p-5">
                <p className="rounded-2xl bg-petrol p-4 text-center font-black text-cream">Spraakgestuurd rapporteren</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {["BIS/ICT", "kwaliteit", "roosterproces", "scholing", "werkdruk", "ECD", "gegevensuitwisseling", "governance"].map((item) => (
                    <span key={item} className="rounded-full bg-white px-4 py-3 text-center text-sm font-black text-ink shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-5 rounded-2xl bg-cream p-5 font-black text-petrol">
                FONK brengt verandering terug naar één gezamenlijke route.
              </p>
            </article>

            <article className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-soft">
              <SectionTitle eyebrow="Slimme intake" title="Eerder de juiste mensen aan tafel." />
              <div className="mt-7 grid gap-3">
                {["BIS/ICT: ECD-koppeling en informatiebeveiliging", "Kwaliteit: protocol, audit en PDCA", "HR: scholing en veranderimpact", "Finance: opbrengst en dekking", "OR: medewerkersimpact", "Cliëntenraad: cliëntperspectief"].map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl bg-cream p-4">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-coral" size={19} aria-hidden="true" />
                    <p className="text-sm font-bold leading-6 text-ink/74">{item}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="signalen" className="bg-nude py-16 scroll-mt-28">
          <div className="container-page grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <article id="fonk-match" className="scroll-mt-28 rounded-[2rem] bg-white p-6 shadow-soft">
              <SectionTitle eyebrow="Signalen & verbeteringen" title="Niet elk signaal wordt een project." />
              <div className="mt-7 grid gap-3">
                {kwadrantSignals.map(([source, signal, label]) => (
                  <details key={`${source}-${signal}`} className="rounded-2xl bg-cream p-4">
                    <summary className="cursor-pointer list-none">
                      <p className="text-sm font-black text-coral">{label}</p>
                      <p className="mt-1 font-black text-ink">{signal}</p>
                      <p className="mt-1 text-sm font-bold text-ink/58">{source} · klik voor detail</p>
                    </summary>
                    <div className="mt-4 rounded-2xl bg-white p-4 text-sm font-bold leading-6 text-ink/68">
                      Voorbeelddata: dit signaal wordt gekoppeld aan bestaand project of proces. Vervolg: bespreken, kleine verbetering, procesaanpassing, mogelijk nieuw project of monitoren.
                    </div>
                  </details>
                ))}
              </div>
            </article>
            <article className="rounded-[2rem] bg-white p-6 shadow-soft">
              <SectionTitle eyebrow="FONK Match" title="Regionale kansen worden zichtbaar." />
              <div className="mt-7 grid gap-3">
                {kwadrantMatches.map(([theme, orgs, score, learning]) => (
                  <div key={theme} className="rounded-2xl bg-cream p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-black text-ink">{theme}</p>
                      <span className="rounded-full bg-yellow/55 px-3 py-2 text-xs font-black text-petrol">{score}</span>
                    </div>
                    <p className="mt-2 text-sm font-bold text-ink/60">{orgs} · {learning}</p>
                    <Link href="/samen-leren#fonk-match" className="mt-4 inline-flex rounded-full bg-petrol px-4 py-2 text-xs font-black text-cream">
                      Bekijk match
                    </Link>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="borging" className="container-page scroll-mt-28 py-16">
          <SectionTitle eyebrow="Na afronding van een project" title="Een project stopt niet na livegang." />
          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {afterProjectSteps.map(([title, text]) => (
              <article key={title} className="rounded-[1.5rem] border border-ink/10 bg-white p-5 shadow-sm">
                <h3 className="text-xl font-black text-ink">{title}</h3>
                <p className="mt-3 text-sm font-bold leading-6 text-ink/66">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="regelingen" className="container-page scroll-mt-28 py-10">
          <article className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-soft md:p-7">
            <span className="rounded-full bg-yellow/55 px-3 py-2 text-xs font-black text-petrol">Deze module wordt voorbereid voor pilotfase</span>
            <h2 className="mt-5 text-3xl font-black text-ink">Regelingen ondersteunen het project, ze sturen het niet.</h2>
            <p className="mt-4 max-w-3xl text-sm font-bold leading-7 text-ink/66">
              Binnen FONK kan later zichtbaar worden welke subsidies, regelingen of regionale programma&apos;s passen bij een projectthema.
              Het vertrekpunt blijft altijd wat de praktijk nodig heeft.
            </p>
          </article>
        </section>

        <section id="projecten" className="container-page scroll-mt-28 py-16">
          <SectionTitle eyebrow="Alle projecten" title="Kwadrant portfolio." />
          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {kwadrantProjects.map((project) => (
              <article key={project.name} className="rounded-[1.5rem] border border-ink/10 bg-white p-5 shadow-sm">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-mist px-3 py-2 text-xs font-black text-petrol">{project.status}</span>
                  <span className="rounded-full bg-peach/45 px-3 py-2 text-xs font-black text-ink">{project.priority}</span>
                </div>
                <h3 className="mt-5 text-xl font-black text-ink">{project.name}</h3>
                <p className="mt-2 text-sm font-bold text-ink/58">{project.lead} · {project.sponsor}</p>
                <p className="mt-4 text-sm leading-6 text-ink/66">{project.risk}</p>
                <Link href={`/projecten/${slugify(project.name)}`} className="mt-5 inline-flex items-center gap-2 rounded-full bg-petrol px-5 py-3 text-sm font-black text-cream">
                  Bekijk detail <ArrowRight size={17} />
                </Link>
                <div className="mt-5 h-2 rounded-full bg-cream">
                  <div className="h-2 rounded-full bg-coral" style={{ width: `${project.progress}%` }} />
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-3xl">
      <p className="spark-mark text-sm font-black uppercase tracking-[0.12em] text-petrol">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black leading-tight text-ink md:text-4xl">{title}</h2>
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-white/10 p-4">
      <p className="text-xl font-black text-yellow">{value}</p>
      <p className="mt-1 text-sm font-bold text-cream/72">{label}</p>
    </div>
  );
}

function MiniStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-cream p-4">
      <p className="text-2xl font-black text-petrol">{value}</p>
      <p className="mt-1 text-sm font-bold text-ink/62">{label}</p>
    </div>
  );
}

function SignalCard({ icon: Icon, title, text }: { icon: LucideIcon; title: string; text: string }) {
  return (
    <article className="rounded-[1.5rem] border border-ink/10 bg-white p-5 shadow-sm">
      <Icon className="text-coral" aria-hidden="true" />
      <h3 className="mt-5 text-xl font-black text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-ink/66">{text}</p>
    </article>
  );
}

function ProjectCard({ project }: { project: (typeof kwadrantProjects)[number] }) {
  return (
    <article className="rounded-[1.5rem] border border-ink/10 bg-white p-6 shadow-soft">
      <span className="rounded-full bg-yellow/55 px-3 py-2 text-xs font-black text-petrol">{project.status}</span>
      <h3 className="mt-5 text-2xl font-black text-ink">{project.name}</h3>
      <p className="mt-2 text-sm font-bold text-ink/58">{project.lead} · {project.sponsor}</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <MiniStat value={`${project.capacity} u`} label="capaciteit" />
        <MiniStat value={project.qualityImpact} label="kwaliteit" />
      </div>
      <p className="mt-5 rounded-2xl bg-cream p-4 text-sm font-bold leading-6 text-ink/70">{project.nextStep}</p>
      <Link href={`/projecten/${slugify(project.name)}`} className="mt-5 inline-flex items-center gap-2 rounded-full bg-petrol px-5 py-3 text-sm font-black text-cream">
        Bekijk projectdetail <ArrowRight size={17} />
      </Link>
    </article>
  );
}
