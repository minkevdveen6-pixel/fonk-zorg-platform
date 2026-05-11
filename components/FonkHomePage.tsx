import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardList,
  Clock3,
  Euro,
  FileText,
  Handshake,
  HeartHandshake,
  Lightbulb,
  LockKeyhole,
  MessageCircle,
  Network,
  RefreshCw,
  Route,
  Search,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

const heroPhoto = "/images/fonk-hero-organization.png";

const heroBlocks = [
  ["Ideeën uit de praktijk", "Medewerkers delen wat beter kan.", Lightbulb],
  ["Projecten slimmer starten", "Intake, opzet en advies staan klaar.", ClipboardList],
  ["Prioriteiten bepalen", "Maximaal 3 echte keuzes tegelijk.", Route],
  ["Resultaat zichtbaar maken", "Tijd, kwaliteit en opbrengst in beeld.", BadgeCheck],
];

const stuckCards = [
  ["Te veel losse initiatieven", "Projecten starten op verschillende plekken zonder gezamenlijke route.", Route],
  ["Geen overzicht", "Niemand ziet precies wat loopt, wat wacht en wat besluit nodig heeft.", Search],
  ["Veranderdruk", "Teams moeten veel tegelijk dragen terwijl de zorg gewoon doorgaat.", Clock3],
  ["Afdelingen langs elkaar heen", "ICT, kwaliteit, HR en planning komen soms te laat in beeld.", UsersRound],
  ["Onduidelijke prioriteiten", "Alles lijkt belangrijk, waardoor niets echt vooruitkomt.", BadgeCheck],
  ["Mailboxprojecten", "Besluiten, signalen en ideeën verdwijnen in mail of losse overleggen.", MessageCircle],
  ["Weinig eigenaarschap", "Medewerkers herkennen niet altijd wat er met hun input gebeurt.", HeartHandshake],
  ["MT en praktijk spreken anders", "Bestuurlijke keuzes en werkvloerervaring raken elkaar te laat.", Building2],
];

const employeeSees = [
  "waar tijd verloren gaat",
  "waar cliënten last van hebben",
  "waar processen vastlopen",
  "waar kwaliteit beter kan",
  "waar werkdruk ontstaat",
  "waar slimme oplossingen mogelijk zijn",
];

const employeeCan = [
  "ideeën delen",
  "knelpunten melden",
  "vragen stellen",
  "verbeteringen volgen",
  "meedenken",
  "feedback geven",
  "signalen toevoegen aan lopende projecten",
  "resultaten terugzien",
];

const routeSteps = [
  "Signaal of idee",
  "Intake",
  "Eerste projectopzet",
  "Afdelingenadvies",
  "Prioritering",
  "Test of uitvoering",
  "Impact meten",
  "Bijsturen",
  "Delen en leren",
  "Borgen & doorontwikkelen",
];

const intakeAdvice = [
  ["Zorgteam / praktijk", "Praktijkkennis, testmomenten en eigenaarschap.", "vanaf start", "6 uur"],
  ["ICT / BIS", "Haalbaarheid, koppelingen, beveiliging en beheer.", "voor besluit", "12 uur"],
  ["Kwaliteit", "Risicoanalyse, protocollen, borging en indicatoren.", "vanaf intake", "10 uur"],
  ["HR", "Scholing, functierollen, werkdruk en veranderimpact.", "voor uitvoering", "8 uur"],
  ["Finance / Control", "Kosten, baten, businesscase en structurele dekking.", "voor prioritering", "6 uur"],
  ["Privacy / FG", "AVG, toegang, dataminimalisatie en veilige kaders.", "bij data", "4 uur"],
];

const intakeQuestions = [
  "Wie moet aansluiten bij het intakegesprek?",
  "Welke afdelingen zijn nodig?",
  "Welke risico’s zien we vooraf?",
  "Hoeveel capaciteit vraagt dit?",
  "Welke projecten overlappen?",
  "Zijn er subsidies of regionale programma’s relevant?",
];

const projectLead = [
  "intakegesprek uploaden",
  "spraaknotities toevoegen",
  "eerste projectplan laten maken",
  "afdelingenadvies ontvangen",
  "capaciteit en contactmomenten zien",
  "acties en besluiten volgen",
  "impactrapportage delen",
  "plan delen met opdrachtgever, MT en afdelingen",
];

const portfolioStats = [
  ["3", "topprioriteiten"],
  ["10", "lopende projecten"],
  ["164 u", "gevraagde capaciteit"],
  ["86%", "draagvlakscore"],
];

const improvementSignals = [
  ["Zorgmedewerker", "Knelpunt na livegang", "Signaal ontvangen"],
  ["Kwaliteit", "Auditbevinding protocol", "Extra evaluatie nodig"],
  ["BIS / ICT", "Systeemupdate raakt koppeling", "Bespreken"],
  ["Teamleider", "Extra verbeterkans in team", "Kleine verbetering"],
  ["Management", "Nieuwe regelgeving raakt werkwijze", "Wetgeving geraakt"],
];

const improvementLabels = [
  "Signaal ontvangen",
  "Bespreken",
  "Kleine verbetering",
  "Procesaanpassing",
  "Extra evaluatie nodig",
  "Mogelijk nieuw project",
  "Wetgeving geraakt",
  "Monitoring",
  "Opschalen",
  "Heropenen",
];

const connectionMap = [
  "medicatieveiligheid",
  "ECD",
  "scholing",
  "roosterproces",
  "kwaliteit",
  "gegevensuitwisseling",
  "cliëntveiligheid",
  "wijkteams",
];

const responsibilityRoles = [
  ["Projecteigenaar", "doel en opbrengst"],
  ["Opdrachtgever", "keuzes en besluiten"],
  ["Projectleider", "route, acties en planning"],
  ["Proceseigenaar", "borging na livegang"],
  ["Beheerder", "wijzigingen en beheer"],
  ["Kwaliteit", "audit, risico en borging"],
  ["BIS / ICT", "systemen en koppelingen"],
  ["Teams", "signalen en testen"],
];

const portfolioCards = [
  ["Topprioriteit", "Medicatieveiligheid", "risico hoog", 72],
  ["Loopt", "Slimmere overdracht wijkzorg", "18 uur tijdwinst", 64],
  ["Wachtlijst", "Slimmere planning", "capaciteit ontbreekt", 28],
  ["Opschalen", "Minder dubbele registratie", "kwaliteit omhoog", 91],
];

const impactCards = [
  ["Slimmere overdracht wijkzorg", "18 uur/mnd", "minder dubbele informatie", "meer rust in de dienst", "testen"],
  ["Minder dubbele registratie", "14 uur/mnd", "één invoerroute", "minder administratiedruk", "verbeteren"],
  ["Betere medicatieveiligheid", "+ kwaliteit", "teamcheck en leerkaart", "meer vertrouwen", "opschalen"],
];

const roleCards = [
  ["Zorgmedewerker", "Geen lange formulieren. Gewoon delen wat jij ziet in de praktijk.", MessageCircle],
  ["Projectleider", "FONK neemt geen regie af. FONK geeft overzicht terug.", FileText],
  ["Stafdienst", "Zie waarom, wanneer en hoeveel inzet nodig is.", UsersRound],
  ["MT / directie / RvB", "Besturen op focus in plaats van losse projectlijsten.", Building2],
];

const matchDetails = [
  ["Thema", "Medicatieveiligheid"],
  ["Organisaties", "4 VVT-organisaties"],
  ["Projectleiders", "Jeroen, Tessa, Amira, Niels"],
  ["Matchscore", "88%"],
  ["Leerpunten", "Teamcheck werkt beter dan lange instructie"],
  ["Samen sparren", "korte kennissessie"],
];

const reviews = [
  ["Zorgmedewerker", "Ik zie nu wat er met mijn idee gebeurt."],
  ["Projectleider", "De losse routes komen eindelijk bij elkaar."],
  ["Manager", "We kiezen scherper en praten over dezelfde feiten."],
  ["Bestuurder", "Focus wordt zichtbaar zonder extra rapporten."],
];

function Label({ children }: { children: ReactNode }) {
  return <p className="spark-mark text-sm font-black uppercase tracking-[0.12em] text-petrol">{children}</p>;
}

function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <article
      className={`rounded-[1.5rem] border border-ink/8 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </article>
  );
}

function IconCard({ icon: Icon, title, text }: { icon: LucideIcon; title: string; text: string }) {
  return (
    <Card>
      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-coral/12 text-coral">
        <Icon size={22} aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-xl font-black text-ink">{title}</h3>
      <p className="mt-3 leading-7 text-ink/66">{text}</p>
    </Card>
  );
}

function MiniMetric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-cream p-4">
      <p className="text-2xl font-black text-petrol">{value}</p>
      <p className="mt-1 text-sm font-bold text-ink/62">{label}</p>
    </div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  body,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <Label>{eyebrow}</Label>
      <h2 className={`mt-3 text-4xl font-black leading-tight ${dark ? "text-cream" : "text-ink"}`}>{title}</h2>
      {body && <p className={`mt-5 text-lg leading-8 ${dark ? "text-cream/74" : "text-ink/70"}`}>{body}</p>}
    </div>
  );
}

export function FonkHomePage() {
  return (
    <>
      <section className="bg-lilac/45">
        <div className="container-page grid min-h-[calc(100svh-5rem)] gap-12 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-black text-petrol shadow-sm">
              <Sparkles size={17} aria-hidden="true" /> Verander- en portfolioplatform voor de zorg
            </p>
            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[1.02] text-ink md:text-7xl">
              Verandering in de zorg loopt vast wanneer iedereen zijn eigen route volgt.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-ink/72">
              FONK brengt ideeën, projecten, teams en bestuur samen in één duidelijke veranderroute — zodat organisaties weer overzicht, eigenaarschap en beweging krijgen.
            </p>
            <p className="mt-5 max-w-2xl text-lg font-black leading-8 text-petrol">
              Van losse initiatieven naar gezamenlijke beweging.
            </p>
            <p className="mt-4 max-w-2xl text-base font-black leading-7 text-coral">
              Verandering stopt niet bij oplevering. Projecten blijven in beweging.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#hoe-werkt-fonk" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-petrol px-6 py-4 font-black text-cream">
                Ontdek FONK <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="focus-ring inline-flex items-center justify-center rounded-full border border-ink/12 bg-white px-6 py-4 font-black text-ink">
                Vraag een kennismaking aan
              </Link>
            </div>
          </div>

          <Card className="p-3 md:p-4">
            <div className="relative overflow-hidden rounded-[1.25rem]">
              <Image
                src={heroPhoto}
                alt="Zorgmedewerkers werken samen aan betere zorg"
                width={1100}
                height={820}
                className="h-[22rem] w-full object-cover object-center md:h-[31rem]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/52 via-ink/10 to-transparent" aria-hidden="true" />
              <div className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-cream/94 text-coral shadow-soft" aria-hidden="true">
                <span className="text-2xl leading-none">✦</span>
              </div>
              <div className="absolute bottom-5 left-5 right-5 rounded-3xl bg-ink/78 p-4 text-cream shadow-soft backdrop-blur">
                <p className="text-sm font-black">Iedereen doet ertoe.</p>
                <p className="mt-1 text-sm font-bold text-cream/78">Eén route voor de hele organisatie.</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="bg-violet py-16 text-cream">
        <div className="container-page">
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
            {[
              "Verandering blijft hangen?",
              "Te veel losse projecten?",
              "Nieuwe structuur, geen route?",
              "Ideeën kwijt in overleg?",
              "Te veel geitenpaadjes?",
            ].map((question) => (
              <div key={question} className="rounded-[1.5rem] border border-cream/16 bg-cream/12 p-5 text-lg font-black leading-7 text-cream shadow-sm backdrop-blur">
                {question}
              </div>
            ))}
          </div>
          <p className="mt-8 rounded-[2rem] bg-coral p-6 text-2xl font-black leading-tight text-cream md:text-3xl">
            FONK helpt zorgorganisaties weer beweging creëren.
          </p>
        </div>
      </section>

      <section className="border-y border-ink/8 bg-white py-10">
        <div className="container-page grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {heroBlocks.map(([title, text, Icon]) => (
            <IconCard key={title as string} title={title as string} text={text as string} icon={Icon as LucideIcon} />
          ))}
        </div>
      </section>

      <section className="bg-cream py-12">
        <div className="container-page grid gap-4 md:grid-cols-2">
          <article className="rounded-[1.5rem] bg-white p-6 shadow-sm">
            <p className="text-sm font-black uppercase tracking-[0.12em] text-coral">Publieke website</p>
            <h2 className="mt-3 text-2xl font-black text-ink">Voor uitleg, vertrouwen en kennismaking.</h2>
            <p className="mt-3 leading-7 text-ink/68">
              Hier lees je wat FONK is, voor wie het is, waarom het nodig is en hoe je een kennismaking aanvraagt.
            </p>
          </article>
          <article className="rounded-[1.5rem] bg-petrol p-6 text-cream shadow-sm">
            <p className="text-sm font-black uppercase tracking-[0.12em] text-yellow">Na inloggen</p>
            <h2 className="mt-3 text-2xl font-black">Iedere rol ziet wat relevant is.</h2>
            <p className="mt-3 leading-7 text-cream/74">
              In de FONK-omgeving zie je dashboards, projecten, ideeën, signalen, FONK Match, handouts en gebruikersrollen.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-nude py-24">
        <div className="container-page">
          <SectionIntro
            eyebrow="Waarom verandering vaak vastloopt"
            title="Niet door onwil. Wel door versnippering."
            body="Veel zorgorganisaties werken hard aan verbetering, maar oude patronen, losse routes en onduidelijke verantwoordelijkheden maken verandering traag."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stuckCards.map(([title, text, Icon]) => (
              <IconCard key={title as string} title={title as string} text={text as string} icon={Icon as LucideIcon} />
            ))}
          </div>
          <p className="mt-8 rounded-[2rem] bg-white p-6 text-2xl font-black text-petrol shadow-sm">
            FONK brengt rust, richting en verbinding.
          </p>
        </div>
      </section>

      <section id="wat-is-fonk" className="container-page py-24">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <SectionIntro
            eyebrow="Wat is FONK?"
            title="Eén duidelijke plek waar iedereen ziet wat er verandert."
            body="FONK is het verander- en portfolioplatform voor zorgorganisaties. Het vervangt bestaande systemen niet. Het voorkomt dat verandering verdwijnt in Excel-lijsten, Teams-kanalen, losse MT-besluiten en geitenpaadjes."
          />
          <Card className="bg-mist">
            <p className="text-2xl font-black leading-tight text-petrol">
              FONK haalt verandering uit de wandelgangen en brengt het terug naar één gezamenlijke route.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["ideeën", "projecten", "afdelingen", "prioriteiten", "besluiten", "impact"].map((item) => (
                <span key={item} className="rounded-full bg-white px-4 py-3 text-sm font-black text-ink">
                  {item}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section id="hoe-werkt-fonk" className="bg-nude py-24">
        <div className="container-page">
          <SectionIntro
            eyebrow="De FONK-route"
            title="Van eerste signaal naar leren en borgen."
            body="Iedere verandering volgt dezelfde simpele route. Na oplevering blijft het project zichtbaar, zodat signalen, evaluaties en wijzigingen gekoppeld blijven."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {routeSteps.map((step, index) => (
              <div key={step} className="rounded-2xl border border-ink/8 bg-white p-4 shadow-sm">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-peach/55 text-sm font-black text-petrol">{index + 1}</span>
                <p className="mt-4 font-black text-ink">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-24">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <SectionIntro
            eyebrow="Projecten blijven in beweging"
            title="Verandering stopt niet bij oplevering."
            body="Na implementatie ontstaan nieuwe vragen, auditpunten, systeemwijzigingen, kwaliteitsbevindingen en ideeën uit teams. FONK houdt afgeronde projecten levend, zodat kennis niet verdwijnt en verbeteren door kan gaan."
          />
          <Card>
            <h3 className="text-2xl font-black text-ink">Levend projectoverzicht</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {["afgeronde projecten", "lopende projecten", "verbeterpunten", "signalen", "wijzigingsvoorstellen", "evaluaties", "kwaliteitsbevindingen", "auditpunten"].map((item) => (
                <div key={item} className="rounded-2xl bg-cream p-4 font-black text-petrol">
                  {item}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-page">
          <SectionIntro
            eyebrow="Signalen & verbeteringen"
            title="Niet ieder signaal hoeft een project te zijn."
            body="FONK helpt bepalen of iets een klein verbeterpunt, proceswijziging, bespreekpunt, risico, monitoring of mogelijk nieuw project is."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card>
              <h3 className="text-2xl font-black text-ink">Verbeteroverzicht</h3>
              <div className="mt-5 grid gap-3">
                {improvementSignals.map(([source, signal, status]) => (
                  <div key={`${source}-${signal}`} className="rounded-2xl bg-cream p-4">
                    <p className="text-sm font-black text-coral">{status}</p>
                    <p className="mt-1 font-black text-ink">{signal}</p>
                    <p className="mt-1 text-sm font-bold text-ink/58">{source}</p>
                  </div>
                ))}
              </div>
            </Card>
            <Card>
              <h3 className="text-2xl font-black text-ink">Slimme beoordeling</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {improvementLabels.map((label) => (
                  <span key={label} className="rounded-full bg-mist px-3 py-2 text-sm font-black text-petrol">
                    {label}
                  </span>
                ))}
              </div>
              <p className="mt-6 rounded-2xl bg-petrol p-5 font-black leading-7 text-cream">
                Kleine signalen maken grote verbetering mogelijk.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="container-page py-24">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
          <SectionIntro
            eyebrow="Slimme intake"
            title="Vanaf de start de juiste mensen aan tafel."
            body="Bij elk nieuw project stelt FONK voor wie moet aansluiten, welke vragen vooraf nodig zijn, welke risico’s spelen, welke capaciteit gevraagd wordt en welke projecten mogelijk overlappen."
          />
          <Card>
            <h3 className="text-2xl font-black text-ink">Intakecheck</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {intakeQuestions.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-cream p-4">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-coral" size={19} aria-hidden="true" />
                  <p className="text-sm font-bold leading-6 text-ink/74">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {intakeAdvice.map(([department, reason, moment, hours]) => (
            <Card key={department}>
              <h3 className="text-xl font-black text-ink">{department}</h3>
              <p className="mt-3 leading-7 text-ink/66">{reason}</p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <MiniMetric value={moment} label="wanneer" />
                <MiniMetric value={hours} label="verwachte inzet" />
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-page grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <SectionIntro
            eyebrow="Voor projectleiders"
            title="Geen geitenpaadjes meer."
            body="Als projectleider kun je nooit overal zicht op houden wanneer veranderingen via losse routes ontstaan. FONK maakt ideeën, overlap, MT-besluiten, medewerkersvragen en afdelingen op één plek zichtbaar."
          />
          <Card>
            <p className="text-2xl font-black text-petrol">FONK neemt projectleiders geen regie af. FONK geeft overzicht terug.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {projectLead.map((item) => (
                <div key={item} className="rounded-2xl bg-cream p-4 text-sm font-bold text-ink/72">
                  {item}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section id="portfolio" className="bg-petrol py-24 text-cream">
        <div className="container-page">
          <SectionIntro
            eyebrow="Portfolio-dashboard"
            title="Besturen op focus in plaats van losse projectlijsten."
            body="MT, directie en RvB zien dezelfde kerninzichten: prioriteit, capaciteit, risico, draagvlak, opbrengst en waar een besluit nodig is."
            dark
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {portfolioStats.map(([value, label]) => (
              <div key={label} className="rounded-2xl bg-white/10 p-5">
                <p className="text-3xl font-black text-yellow">{value}</p>
                <p className="mt-1 text-sm font-bold text-cream/72">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-4">
            {portfolioCards.map(([status, name, note, progress]) => (
              <article key={name as string} className="rounded-[1.5rem] bg-white p-5 text-ink shadow-sm">
                <span className="rounded-full bg-yellow/55 px-3 py-2 text-xs font-black text-petrol">{status as string}</span>
                <h3 className="mt-5 text-xl font-black">{name as string}</h3>
                <p className="mt-2 text-sm font-bold text-ink/62">{note as string}</p>
                <div className="mt-5 h-2 rounded-full bg-cream">
                  <div className="h-2 rounded-full bg-coral" style={{ width: `${progress}%` }} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-24">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <SectionIntro
            eyebrow="Rollen & verbindingen"
            title="Iedereen ziet wie waarvoor aan zet is."
            body="Per project en proces maakt FONK zichtbaar wie eigenaar is, wie besluit, wie beheert, wie monitort en welke teams of afdelingen geraakt worden."
          />
          <Card>
            <h3 className="text-2xl font-black text-ink">Wat raakt wat?</h3>
            <div className="mt-6 rounded-[1.5rem] bg-mist p-5">
              <p className="rounded-2xl bg-petrol p-4 text-center font-black text-cream">Digitale overdracht wijkzorg</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {connectionMap.map((item) => (
                  <span key={item} className="rounded-full bg-white px-4 py-3 text-center text-sm font-black text-ink shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {responsibilityRoles.map(([role, task]) => (
                <div key={role} className="rounded-2xl bg-cream p-4">
                  <p className="font-black text-ink">{role}</p>
                  <p className="mt-1 text-sm font-bold text-ink/58">{task}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section id="medewerkers" className="container-page py-24">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <SectionIntro
            eyebrow="De werkvloer als vertrekpunt"
            title="De beste ideeën ontstaan op de werkvloer."
            body="Zorgmedewerkers zien iedere dag waar tijd verloren gaat, waar cliënten last van hebben en waar kwaliteit beter kan. FONK helpt organisaties om die signalen zichtbaar te maken en samen om te zetten naar echte verbetering."
          />
          <Card>
            <p className="text-2xl font-black text-petrol">Verandering werkt pas wanneer medewerkers mee kunnen sturen.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {employeeSees.map((item) => (
                <div key={item} className="rounded-2xl bg-cream p-4 font-bold text-ink/72">
                  {item}
                </div>
              ))}
            </div>
          </Card>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {employeeCan.map((item) => (
            <div key={item} className="rounded-2xl border border-ink/8 bg-white p-5 font-black text-petrol shadow-sm">
              {item}
            </div>
          ))}
        </div>
        <p className="mt-8 rounded-[2rem] bg-mist p-6 text-xl font-black leading-8 text-petrol">
          FONK brengt verandering terug naar de praktijk.
        </p>
      </section>

      <section id="bestuur" className="bg-nude py-24">
        <div className="container-page">
          <SectionIntro
            eyebrow="Voor de hele organisatie"
            title="Iedere rol ziet wat nodig is."
            body="Zorgmedewerkers, projectleiders, stafdiensten, MT, directie en RvB werken vanuit dezelfde route, maar zien hun eigen acties en inzichten."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {roleCards.map(([title, text, Icon]) => (
              <IconCard key={title as string} title={title as string} text={text as string} icon={Icon as LucideIcon} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-24">
        <SectionIntro
          eyebrow="Sociale innovatie"
          title="Verandering werkt pas als mensen mee kunnen sturen."
          body="FONK is niet top-down. Praktijkkennis, medewerkerservaring en bestuurlijke keuzes komen bij elkaar. Draagvlak is net zo belangrijk als planning."
        />
        <div className="mt-8 grid gap-3 md:grid-cols-6">
          {["Start klein", "Test", "Leer", "Behoud wat werkt", "Pas aan", "Stop of schaal op"].map((item, index) => (
            <div key={item} className="rounded-2xl border border-ink/8 bg-white p-4 shadow-sm">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-peach/55 text-sm font-black text-petrol">{index + 1}</span>
              <p className="mt-4 font-black text-ink">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="resultaten" className="bg-white py-24">
        <div className="container-page">
          <SectionIntro
            eyebrow="Wat levert het op?"
            title="Tijdwinst, kwaliteit en opbrengst zichtbaar."
            body="Geen dikke rapporten. Wel korte impactkaarten die laten zien wat behouden, aangepast, gestopt of opgeschaald wordt."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {impactCards.map(([name, time, quality, employee, status]) => (
              <Card key={name}>
                <span className="rounded-full bg-yellow/55 px-3 py-2 text-xs font-black text-petrol">{status}</span>
                <h3 className="mt-5 text-xl font-black text-ink">{name}</h3>
                <p className="mt-4 text-2xl font-black text-petrol">{time}</p>
                <p className="mt-3 text-sm leading-6 text-ink/62">Kwaliteit: {quality}</p>
                <p className="mt-2 text-sm leading-6 text-ink/62">Medewerkers: {employee}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="match" className="container-page py-24">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <SectionIntro
            eyebrow="Organisatie-overstijgend leren"
            title="Samen leren zonder opnieuw het wiel uit te vinden."
            body="FONK groeit mee met regionale samenwerking. Projectbibliotheek, gedeelde resultaten, regionale thema’s, subsidies en FONK Match helpen organisaties sneller van elkaar leren."
          />
          <Card>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.12em] text-coral">FONK Match</p>
                <h3 className="mt-2 text-2xl font-black text-ink">4 organisaties werken aan medicatieveiligheid.</h3>
              </div>
              <Handshake className="text-petrol" aria-hidden="true" />
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {matchDetails.map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-cream p-4">
                  <p className="text-xs font-black uppercase tracking-[0.12em] text-ink/45">{label}</p>
                  <p className="mt-1 font-black text-ink">{value}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="bg-nude py-24">
        <div className="container-page grid gap-4 md:grid-cols-3">
          <IconCard icon={Network} title="Regionale thema’s" text="Programmamanagers zien welke thema’s spelen en welke aanpak schaalbaar is." />
          <IconCard icon={Euro} title="Subsidies als hulp" text="FONK toont passende regelingen, maar start altijd bij wat de praktijk nodig heeft." />
          <IconCard icon={LockKeyhole} title="Veilig werken" text="AVG-bewust, rolgebaseerde toegang en geen onnodige cliëntgegevens." />
          <IconCard icon={RefreshCw} title="Doorontwikkelen" text="Projecten blijven na livegang verbonden aan signalen, wijzigingen en evaluaties." />
        </div>
      </section>

      <section className="container-page py-24">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <SectionIntro
            eyebrow="Waarom anders?"
            title="Praktijkkennis, portfoliosturing en leren komen samen."
            body="FONK voelt niet als consultancy, projectsoftware of nog een systeem. Het is één duidelijke route voor verandering, met slimme ondersteuning waar die tijd bespaart."
          />
          <Card>
            <div className="grid gap-3 sm:grid-cols-2">
              {["minder losse initiatieven", "minder administratie", "meer focus", "meer eigenaarschap", "betere samenwerking", "zichtbare impact"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-cream p-4 font-black text-petrol">
                  <ShieldCheck size={18} aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-page">
          <SectionIntro eyebrow="Ervaringen" title="Wat mensen direct herkennen." />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {reviews.map(([role, quote]) => (
              <figure key={role} className="rounded-[1.5rem] bg-cream p-5 shadow-sm">
                <HeartHandshake className="text-coral" size={20} aria-hidden="true" />
                <blockquote className="mt-4 text-sm font-bold leading-6 text-ink/72">“{quote}”</blockquote>
                <figcaption className="mt-5 text-sm font-black text-petrol">{role}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="rounded-[2rem] bg-petrol p-8 text-cream shadow-soft md:p-12">
          <Label>Aanvraag doen</Label>
          <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight">Ontdek hoe FONK jullie veranderroute eenvoudiger maakt.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-cream/74">
            We kijken samen waar ideeën, projecten en prioriteiten nu versnipperen en welke eerste route rust brengt.
          </p>
          <Link href="/contact" className="focus-ring mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-black text-petrol">
            Vraag een kennismaking aan <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
