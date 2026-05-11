export type ProjectStatus = "PRIO" | "Loopt" | "Wachtlijst" | "Parkeren" | "Afgerond" | "Voorbereiding";
export type RiskLevel = "laag" | "middel" | "hoog";

export type FonkProject = {
  id: string;
  name: string;
  projectLead: string;
  sponsor: string;
  contact: string;
  departments: string[];
  location: string;
  status: ProjectStatus;
  progress: number;
  risk: RiskLevel;
  capacityHours: number;
  impactScore: number;
  urgencyScore: number;
  supportScore: number;
  x: number;
  y: number;
};

export const fonkProjects: FonkProject[] = [
  {
    id: "p1",
    name: "Procesoptimalisatie intake nieuw project",
    projectLead: "Sanne de Vries",
    sponsor: "Directeur zorg",
    contact: "Sanne de Vries",
    departments: ["Kwaliteit", "ICT/BIS", "Zorgteams", "Management"],
    location: "Organisatiebreed",
    status: "PRIO",
    progress: 68,
    risk: "middel",
    capacityHours: 220,
    impactScore: 88,
    urgencyScore: 92,
    supportScore: 74,
    x: 83,
    y: 86,
  },
  {
    id: "p2",
    name: "Medicatie intramuraal",
    projectLead: "Jeroen Bakker",
    sponsor: "MT wonen met zorg",
    contact: "Jeroen Bakker",
    departments: ["Zorgteams", "Kwaliteit", "ICT/BIS", "Cliëntenraad"],
    location: "Locatie Noord",
    status: "PRIO",
    progress: 51,
    risk: "hoog",
    capacityHours: 340,
    impactScore: 91,
    urgencyScore: 85,
    supportScore: 62,
    x: 78,
    y: 77,
  },
  {
    id: "p3",
    name: "Functiedifferentiatie",
    projectLead: "Mira Hoekstra",
    sponsor: "HR-directeur",
    contact: "Mira Hoekstra",
    departments: ["HR", "OR", "Planning", "Management"],
    location: "Regio Friesland",
    status: "PRIO",
    progress: 39,
    risk: "middel",
    capacityHours: 410,
    impactScore: 86,
    urgencyScore: 81,
    supportScore: 58,
    x: 72,
    y: 79,
  },
  {
    id: "p4",
    name: "Verpleegkundig specialist in de wijk",
    projectLead: "Amira Said",
    sponsor: "Manager wijkzorg",
    contact: "Amira Said",
    departments: ["Zorgteams", "Finance", "Planning", "Externe partners"],
    location: "Wijkteams Leeuwarden",
    status: "Loopt",
    progress: 44,
    risk: "laag",
    capacityHours: 180,
    impactScore: 74,
    urgencyScore: 64,
    supportScore: 80,
    x: 59,
    y: 61,
  },
  {
    id: "p5",
    name: "Digitaal zorgproces",
    projectLead: "Niels Visser",
    sponsor: "CIO",
    contact: "Niels Visser",
    departments: ["ICT/BIS", "Communicatie", "Zorgteams", "Kwaliteit"],
    location: "Thuiszorg",
    status: "Loopt",
    progress: 57,
    risk: "middel",
    capacityHours: 260,
    impactScore: 79,
    urgencyScore: 70,
    supportScore: 66,
    x: 64,
    y: 67,
  },
  {
    id: "p6",
    name: "Slimme planning",
    projectLead: "Eline Bos",
    sponsor: "Manager bedrijfsvoering",
    contact: "Eline Bos",
    departments: ["Planning", "HR", "Finance", "Zorgteams"],
    location: "Alle locaties",
    status: "Wachtlijst",
    progress: 12,
    risk: "laag",
    capacityHours: 150,
    impactScore: 72,
    urgencyScore: 54,
    supportScore: 77,
    x: 48,
    y: 55,
  },
  {
    id: "p7",
    name: "Valpreventie",
    projectLead: "Tessa Kuipers",
    sponsor: "Kwaliteitsmanager",
    contact: "Tessa Kuipers",
    departments: ["Kwaliteit", "Zorgteams", "Facilitair", "Cliëntenraad"],
    location: "Locatie Zuid",
    status: "Afgerond",
    progress: 100,
    risk: "laag",
    capacityHours: 120,
    impactScore: 69,
    urgencyScore: 49,
    supportScore: 84,
    x: 42,
    y: 43,
  },
  {
    id: "p8",
    name: "Anders werken in de zorg",
    projectLead: "Hidde Dijkstra",
    sponsor: "Raad van Bestuur",
    contact: "Hidde Dijkstra",
    departments: ["Management", "Zorgteams", "Externe partners", "Communicatie"],
    location: "Regionaal",
    status: "Voorbereiding",
    progress: 18,
    risk: "middel",
    capacityHours: 300,
    impactScore: 83,
    urgencyScore: 59,
    supportScore: 71,
    x: 53,
    y: 73,
  },
];

export const ideas = [
  {
    month: "Mei",
    idea: "Minder dubbele registratie bij overdracht",
    employee: "Marieke",
    team: "Wijkteam Oost",
    contact: "Sanne de Vries",
    status: "Omzetten naar project",
    linkedProject: "Procesoptimalisatie intake nieuw project",
    review: "Hoog praktijkprobleem, direct meenemen in intakeproces.",
    impact: 86,
    feasibility: 78,
  },
  {
    month: "Mei",
    idea: "Medicatiecheck met korte teamhuddle",
    employee: "Bram",
    team: "Intramuraal Noord",
    contact: "Jeroen Bakker",
    status: "In beoordeling",
    linkedProject: "Medicatie intramuraal",
    review: "Goed idee, toetsen met apotheek en kwaliteit.",
    impact: 82,
    feasibility: 64,
  },
  {
    month: "April",
    idea: "Roosterwensen eerder ophalen via formulier",
    employee: "Noura",
    team: "Flexpool",
    contact: "Eline Bos",
    status: "Nieuw idee",
    linkedProject: "Slimme planning",
    review: "Nog geen beoordeling.",
    impact: 68,
    feasibility: 81,
  },
];

export const departmentAdvice = [
  { department: "Zorgteam / praktijk", hours: 76, reason: "Praktijkinput, testmomenten en eigenaarschap." },
  { department: "Projectleider", hours: 48, reason: "Route, acties, besluiten, planning en samenhang." },
  { department: "Opdrachtgever", hours: 18, reason: "Opdracht, keuzes, randvoorwaarden en besluitvorming." },
  { department: "Teamleider", hours: 24, reason: "Teamimpact, draagvlak en uitvoerbaarheid in de praktijk." },
  { department: "MT-lid", hours: 20, reason: "Prioritering, escalatie en aansluiting op organisatiedoelen." },
  { department: "HR", hours: 34, reason: "Functierollen, scholing, capaciteit, werkdruk en veranderbelasting." },
  { department: "Facilitair", hours: 18, reason: "Ruimte, middelen en praktische randvoorwaarden." },
  { department: "Kwaliteit", hours: 42, reason: "Risicoanalyse, audits, borging, protocollen en kwaliteitsindicatoren." },
  { department: "ICT/BIS", hours: 56, reason: "Datastromen, applicaties, beveiliging en rapportage." },
  { department: "Communicatie", hours: 24, reason: "Heldere uitleg, teamupdates en verwachtingen." },
  { department: "Finance / Control", hours: 20, reason: "Kosten, baten, businesscase, opbrengst en structurele dekking." },
  { department: "Planning", hours: 28, reason: "Capaciteit, roosters en uitvoerbaarheid." },
  { department: "Cliëntenraad", hours: 12, reason: "Cliëntperspectief en passende zorg." },
  { department: "OR", hours: 14, reason: "Medewerkersimpact en medezeggenschap." },
  { department: "Functioneel beheer", hours: 18, reason: "Inrichting, werkwijze, rechten en beheer na implementatie." },
  { department: "Data / BI", hours: 22, reason: "Metingen, dashboards, indicatoren en betrouwbare impactdata." },
  { department: "Privacy / FG", hours: 12, reason: "AVG, toegang, dataminimalisatie en veilige kaders." },
  { department: "Inkoop", hours: 10, reason: "Contracten, leveranciers, voorwaarden en inkoopafspraken." },
  { department: "Management", hours: 32, reason: "Prioritering, besluitvorming en escalatie." },
  { department: "Externe partners", hours: 22, reason: "Regionale afhankelijkheden en opschaling." },
  { department: "Regionaal programma / netwerk", hours: 18, reason: "Kansen voor samenwerking, subsidies en organisatie-overstijgend leren." },
];

export const improvementSignals = [
  {
    source: "Zorgmedewerker",
    project: "Slimmere medicatie-overdracht",
    signal: "Knelpunt na livegang: informatie komt soms dubbel binnen.",
    label: "Signaal ontvangen",
    advice: "Kleine verbetering",
    urgency: "middel",
  },
  {
    source: "Kwaliteit",
    project: "Slimmere medicatie-overdracht",
    signal: "Auditbevinding: protocol moet worden aangescherpt.",
    label: "Extra evaluatie nodig",
    advice: "Procesaanpassing",
    urgency: "hoog",
  },
  {
    source: "BIS / ICT",
    project: "Digitale overdracht wijkzorg",
    signal: "Systeemupdate raakt koppeling met ECD.",
    label: "Bespreken",
    advice: "Risico monitoren",
    urgency: "hoog",
  },
  {
    source: "Teamleider",
    project: "Minder dubbele registratie",
    signal: "Team ziet extra kans om formulier te vereenvoudigen.",
    label: "Kleine verbetering",
    advice: "Alleen monitoren",
    urgency: "laag",
  },
  {
    source: "Management",
    project: "Medicatieveiligheid",
    signal: "Nieuwe regelgeving raakt werkwijze en scholing.",
    label: "Wetgeving geraakt",
    advice: "Mogelijk nieuw project",
    urgency: "hoog",
  },
];

export const signalStatuses = [
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

export const roleConnections = [
  ["Projecteigenaar", "Bewaakt doel en opbrengst"],
  ["Opdrachtgever", "Neemt keuzes en besluiten"],
  ["Projectleider", "Houdt route, acties en planning bij"],
  ["Proceseigenaar", "Borgt werkwijze na livegang"],
  ["Beheerder", "Volgt wijzigingen en beheer"],
  ["Kwaliteit", "Volgt risico, audit en borging"],
  ["BIS / ICT", "Volgt systemen, koppelingen en veiligheid"],
  ["HR", "Volgt scholing, rollen en werkdruk"],
  ["Management", "Bewaakt prioriteit en capaciteit"],
  ["Teams", "Melden signalen en testen verbetering"],
];

export const connectionMap = [
  ["Digitale overdracht wijkzorg", "medicatieveiligheid"],
  ["Digitale overdracht wijkzorg", "ECD"],
  ["Digitale overdracht wijkzorg", "scholing"],
  ["Digitale overdracht wijkzorg", "roosterproces"],
  ["Digitale overdracht wijkzorg", "kwaliteit"],
  ["Digitale overdracht wijkzorg", "gegevensuitwisseling"],
  ["Digitale overdracht wijkzorg", "cliëntveiligheid"],
  ["Digitale overdracht wijkzorg", "wijkteams"],
];

export const kwadrantUser = {
  name: "Ingrid Breuker Stockmann",
  organization: "Kwadrant",
  role: "Programmamanager",
  access: "Volledige beheerrechten",
};

export type KwadrantProject = {
  name: string;
  status: string;
  priority: "Topprioriteit" | "Hoog" | "Middel" | "Parkeren" | "Borgen";
  sponsor: string;
  lead: string;
  departments: string[];
  capacity: number;
  financialImpact: string;
  qualityImpact: string;
  employeeImpact: string;
  clientImpact: string;
  risk: string;
  dependency: string;
  governance: string;
  nextStep: string;
  progress: number;
};

export const kwadrantProjects: KwadrantProject[] = [
  {
    name: "Slimmere medicatie-overdracht",
    status: "Loopt met risico",
    priority: "Topprioriteit",
    sponsor: "Directeur zorg",
    lead: "Jeroen Bakker",
    departments: ["Zorgteams", "Kwaliteit", "BIS/ICT", "Cliëntenraad"],
    capacity: 340,
    financialImpact: "minder herstelwerk",
    qualityImpact: "hogere medicatieveiligheid",
    employeeImpact: "minder overdrachtsstress",
    clientImpact: "sneller juiste informatie",
    risk: "Kwaliteit en BIS/ICT zijn laat aangesloten.",
    dependency: "ECD, scholing, protocol, gegevensuitwisseling",
    governance: "Opdrachtgever bevestigen en scope bevriezen.",
    nextStep: "Besluit in stuurgroep voorbereiden",
    progress: 58,
  },
  {
    name: "Verminderen registratiedruk",
    status: "Loopt",
    priority: "Topprioriteit",
    sponsor: "MT Zorg Thuis",
    lead: "Sanne de Vries",
    departments: ["Zorgteams", "Kwaliteit", "Data/BI", "Functioneel beheer"],
    capacity: 260,
    financialImpact: "18 uur per maand vrijgespeeld",
    qualityImpact: "minder dubbele invoer",
    employeeImpact: "meer rust in dienst",
    clientImpact: "meer tijd voor zorg",
    risk: "PDCA-borging nog niet duidelijk.",
    dependency: "ECD, werkafspraken, rapportageformat",
    governance: "Decharge pas na evaluatiecyclus.",
    nextStep: "Meetplan afronden",
    progress: 72,
  },
  {
    name: "Regionale samenwerking wondzorg",
    status: "Voorbereiding",
    priority: "Hoog",
    sponsor: "Regionaal programma",
    lead: "Amira Said",
    departments: ["Externe partners", "Kwaliteit", "Zorgteams", "Inkoop"],
    capacity: 180,
    financialImpact: "gezamenlijke inzet specialisten",
    qualityImpact: "eenduidige werkwijze",
    employeeImpact: "sneller expertise beschikbaar",
    clientImpact: "betere continuïteit",
    risk: "Regionale afhankelijkheden nog niet belegd.",
    dependency: "AWIZ, wondexpertise, contractafspraken",
    governance: "Programmatische aanpak nodig.",
    nextStep: "Regionale matchtafel plannen",
    progress: 34,
  },
  {
    name: "Ondersteunde intake wijkzorg",
    status: "Scope bijstellen",
    priority: "Middel",
    sponsor: "Manager wijkzorg",
    lead: "Niels Visser",
    departments: ["BIS/ICT", "Privacy/FG", "Zorgteams", "Planning"],
    capacity: 210,
    financialImpact: "kortere intakevoorbereiding",
    qualityImpact: "completere intakegegevens",
    employeeImpact: "minder uitzoekwerk",
    clientImpact: "sneller passende start",
    risk: "Privacykaders en procesinrichting vragen besluit.",
    dependency: "gegevensuitwisseling, triage, planning",
    governance: "DPIA en besluitvormingslijn toevoegen.",
    nextStep: "Intake opnieuw vaststellen",
    progress: 41,
  },
  {
    name: "Spraakgestuurd rapporteren",
    status: "Pilot",
    priority: "Hoog",
    sponsor: "CIO",
    lead: "Mira Hoekstra",
    departments: ["BIS/ICT", "Kwaliteit", "HR", "Zorgteams"],
    capacity: 300,
    financialImpact: "minder indirecte schrijftijd",
    qualityImpact: "betere verslaglegging",
    employeeImpact: "lagere registratielast",
    clientImpact: "meer aandacht in contact",
    risk: "Scholing en ECD-koppeling bepalen tempo.",
    dependency: "ECD, scholing, informatiebeveiliging",
    governance: "Stuurgroep besluit over opschaling.",
    nextStep: "Pilotresultaten valideren",
    progress: 63,
  },
  {
    name: "Proactieve Zorgplanning",
    status: "Loopt",
    priority: "Middel",
    sponsor: "Directeur behandeling",
    lead: "Tessa Kuipers",
    departments: ["Zorgteams", "Kwaliteit", "Cliëntenraad", "Communicatie"],
    capacity: 160,
    financialImpact: "minder crisismomenten",
    qualityImpact: "betere passende zorg",
    employeeImpact: "duidelijker gesprekken",
    clientImpact: "meer regie voor cliënt",
    risk: "Adoptie verschilt per locatie.",
    dependency: "scholing, gespreksleidraad, kwaliteit",
    governance: "Locatie-eigenaren vastleggen.",
    nextStep: "Evaluatie per locatie starten",
    progress: 55,
  },
  {
    name: "Centrale Coördinatie en Triage",
    status: "Vertraagd",
    priority: "Topprioriteit",
    sponsor: "Raad van Bestuur",
    lead: "Hidde Dijkstra",
    departments: ["Planning", "Zorgteams", "BIS/ICT", "Management"],
    capacity: 420,
    financialImpact: "betere inzet capaciteit",
    qualityImpact: "sneller juiste route",
    employeeImpact: "minder ad hoc druk",
    clientImpact: "snellere opvolging",
    risk: "Capaciteit en opdrachtgeverschap schuiven.",
    dependency: "dienstenstructuur, planning, triageproces",
    governance: "Programmasturing nodig in plaats van projectsturing.",
    nextStep: "Bestuurlijk besluit over scope",
    progress: 37,
  },
  {
    name: "Procesmanagement fase 2",
    status: "Borgen",
    priority: "Borgen",
    sponsor: "Manager bedrijfsvoering",
    lead: "Eline Bos",
    departments: ["Kwaliteit", "Data/BI", "Management", "Functioneel beheer"],
    capacity: 150,
    financialImpact: "minder dubbel proceswerk",
    qualityImpact: "betere PDCA",
    employeeImpact: "meer duidelijkheid",
    clientImpact: "stabielere processen",
    risk: "Borging en beheerrollen zijn nog kwetsbaar.",
    dependency: "PDCA, proceshuis, rapportages",
    governance: "Proceseigenaren bevestigen.",
    nextStep: "Beheerstructuur vaststellen",
    progress: 81,
  },
  {
    name: "Anders Werken in de Zorg Friesland",
    status: "Regionaal",
    priority: "Hoog",
    sponsor: "Regionale coalitie",
    lead: "Ingrid Breuker Stockmann",
    departments: ["Externe partners", "Communicatie", "Zorgteams", "Management"],
    capacity: 280,
    financialImpact: "gedeelde leeropbrengst",
    qualityImpact: "sneller geteste aanpakken",
    employeeImpact: "meer eigenaarschap",
    clientImpact: "zorg dichter bij behoefte",
    risk: "Regionale planning en besluitvorming lopen uiteen.",
    dependency: "AWIZ Connect, projectbibliotheek, netwerken",
    governance: "Gezamenlijke prioriteiten afspreken.",
    nextStep: "FONK Match activeren",
    progress: 49,
  },
  {
    name: "Verbetering dienstenstructuur Zorg Thuis",
    status: "Parkeren",
    priority: "Parkeren",
    sponsor: "MT Zorg Thuis",
    lead: "Noura El Amrani",
    departments: ["Planning", "HR", "Zorgteams", "Finance / Control"],
    capacity: 230,
    financialImpact: "minder roosterdruk",
    qualityImpact: "betere continuïteit",
    employeeImpact: "duidelijkere diensten",
    clientImpact: "stabielere bezetting",
    risk: "Capaciteit ontbreekt voor zorgvuldige start.",
    dependency: "roosterproces, HR, triage, planning",
    governance: "Wachten op prioriteitskeuze.",
    nextStep: "Op parkeerstand houden",
    progress: 18,
  },
];

export const projectDepartmentDetails = [
  ["HR", "Scholing, rollen en werkdruk bewaken.", "Voor uitvoering", "8 uur", "Advies en borging", "Intake, start uitvoering, evaluatie"],
  ["Kwaliteit", "Risico’s, protocollen en PDCA vastleggen.", "Vanaf intake", "12 uur", "Kwaliteitsadvies", "Intake, risicoreview, borging"],
  ["ICT/BIS", "Applicaties, koppelingen en informatiebeveiliging toetsen.", "Voor besluit", "14 uur", "Technische haalbaarheid", "Intake, testfase, livegang"],
  ["Facilitair", "Praktische randvoorwaarden en middelen afstemmen.", "Voor uitvoering", "4 uur", "Praktische ondersteuning", "Start uitvoering"],
  ["Communicatie", "Teams helder informeren over doel en planning.", "Voor testfase", "5 uur", "Uitleg en updates", "Voor test, bij opschaling"],
  ["Finance", "Kosten, baten en structurele dekking bekijken.", "Voor prioritering", "6 uur", "Businesscase", "Prioritering, evaluatie"],
  ["Planning", "Roosters, capaciteit en uitvoerbaarheid bewaken.", "Vanaf intake", "8 uur", "Capaciteitscheck", "Intake, testfase"],
  ["Zorgteams", "Praktijkkennis, testen en signalen inbrengen.", "Vanaf start", "16 uur", "Praktijktoets", "Intake, test, evaluatie"],
  ["OR", "Medewerkersimpact en medezeggenschap volgen.", "Bij impact op werk", "4 uur", "Medezeggenschap", "Voor besluit"],
  ["Cliëntenraad", "Cliëntperspectief en passende zorg toetsen.", "Bij cliëntimpact", "4 uur", "Cliëntperspectief", "Voor testfase"],
  ["Management", "Prioriteit, scope en besluitvorming bewaken.", "Vanaf start", "10 uur", "Opdracht en keuzes", "Intake, stuurgroep, evaluatie"],
];

export const projectSignals = [
  ["Nieuw signaal", "Team ziet overlap met bestaande werkwijze.", "Bespreken in projectoverleg"],
  ["Bespreken", "Capaciteit van BIS/ICT is krap in de testfase.", "Keuze op planning nodig"],
  ["Kleine verbetering", "Formulier kan met twee velden korter.", "Meenemen in volgende test"],
  ["Procesaanpassing", "Werkafspraak moet worden aangepast voor Zorg Thuis.", "Kwaliteit en teamleider betrekken"],
  ["Mogelijk nieuw project", "Regionale koppeling vraagt aparte besluitvorming.", "Parkeren tot scope helder is"],
  ["Monitoren", "Effect op werkdruk verschilt per locatie.", "Na 4 weken opnieuw meten"],
];

export const fonkMatchExamples = [
  {
    theme: "Registratiedruk verminderen",
    organizations: "Kwadrant + voorbeeldorganisatie",
    score: "84%",
    why: ["vergelijkbaar probleem", "vergelijkbare doelgroep", "overlap in betrokken afdelingen", "vergelijkbare impactdoelen"],
    learning: "Meet tijdswinst klein per team voordat je opschaalt.",
  },
  {
    theme: "Medicatieveiligheid",
    organizations: "Kwadrant + 3 regio-organisaties",
    score: "88%",
    why: ["zelfde risico in overdracht", "kwaliteit en BIS/ICT betrokken", "vergelijkbare cliëntgroep", "behoefte aan korte teamcheck"],
    learning: "Een korte teamhuddle werkt beter dan extra instructiedocumenten.",
  },
  {
    theme: "Regionale wondzorg",
    organizations: "Kwadrant + AWIZ Connect",
    score: "78%",
    why: ["zelfde regionale uitdaging", "gedeelde schaarste in expertise", "zelfde opschalingsvraag", "mogelijke gezamenlijke leeragenda"],
    learning: "Begin met gedeelde casuïstiek voordat processen worden gelijkgetrokken.",
  },
];

export const kwadrantSignals = [
  ["Kwaliteit", "Auditpunt bij medicatie-overdracht", "Extra evaluatie nodig"],
  ["Zorgteam Drachten", "Registratieveld wordt dubbel ingevuld", "Kleine verbetering"],
  ["BIS/ICT", "ECD-release raakt spraakrapportage", "Bespreken"],
  ["Management", "Scope centrale triage groeit door", "Governance risico"],
  ["Teamleider", "Dienstenstructuur raakt werkdruk in weekend", "Monitoring"],
];

export const kwadrantMatches = [
  ["Registratiedruk", "3 organisaties", "86%", "gedeelde meetaanpak"],
  ["Wondzorg", "4 organisaties", "78%", "regionale werkwijze"],
  ["Spraakrapportage", "2 organisaties", "72%", "pilotresultaten delen"],
];

export const kwadrantAccounts = [
  {
    name: "Ingrid Breuker Stockmann",
    role: "Projectleider",
    organization: "Kwadrant",
    username: "ingrid.breuker@kwadrant.fonk",
    password: "Kwadrant-FONK-01!",
    access: "Volledige toegang tot portfolio, projecten, dashboards, signalen, FONK Match, regio en organisatieoverzicht.",
  },
  {
    name: "Jonieke Burema",
    role: "Projectleider",
    organization: "Kwadrant",
    username: "jonieke.burema@kwadrant.fonk",
    password: "Kwadrant-FONK-02!",
    access: "Toegang tot projecten, intake, impact, medewerkersideeën, signalen, FONK Match en regionale samenwerking.",
  },
  {
    name: "Brigitte Boot",
    role: "Projectleider",
    organization: "Kwadrant",
    username: "brigitte.boot@kwadrant.fonk",
    password: "Kwadrant-FONK-03!",
    access: "Toegang tot dashboards, kwaliteitsimpact, borging, signalen, verbeteringen, projecten en portfolio-overzicht.",
  },
  {
    name: "Nely van der Sluis Kooistra",
    role: "Projectleider",
    organization: "Kwadrant",
    username: "nely.vandersluis@kwadrant.fonk",
    password: "Kwadrant-FONK-04!",
    access: "Toegang tot teamprojecten, medewerkersideeën, signalen, verbeteringen, projectimpact en organisatieoverzicht.",
  },
  {
    name: "Barbara Lengkeek",
    role: "Projectleider",
    organization: "Kwadrant",
    username: "barbara.lengkeek@kwadrant.fonk",
    password: "Kwadrant-FONK-05!",
    access: "Toegang tot projecten, FONK Match, regionale samenwerking, projectbibliotheek, signalen en impactoverzichten.",
  },
];

export const superAdminAccount = {
  name: "Minke van der Veen",
  role: "Oprichtster / Platform Owner / Super Admin",
  organization: "FONK",
  username: "minke@fonk.platform",
  password: "FONK-Owner-01!",
  access:
    "Toegang tot Kwadrant, toekomstige organisaties, alle meldingen, dashboards, platformbeheer, FONK inbox, gebruikersbeheer, benchmarkinformatie en organisatieoverzichten.",
};

export const organizationOverview = [
  ["Kwadrant", "82%", "46", "10", "5", "live"],
  ["AWIZ Connect", "61%", "18", "4", "3", "regionaal"],
  ["Zorggroep pilot", "34%", "9", "2", "1", "voorbereiding"],
];

export const fonkInbox = [
  ["Kwadrant", "Vraag over scope Centrale Coördinatie en Triage", "besluit nodig"],
  ["Kwadrant", "Nieuwe signalen rondom registratiedruk", "opvolgen"],
  ["AWIZ Connect", "Matchvoorstel wondzorg delen met partners", "regionaal"],
  ["Kwadrant", "Supportvraag rechten projectleider", "beheer"],
];
