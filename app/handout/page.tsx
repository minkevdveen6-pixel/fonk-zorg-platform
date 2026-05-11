import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { fonkHandouts } from "@/lib/fonk-data";
import {
  BadgeCheck,
  Download,
  FileText,
  HelpCircle,
  MessageCircle,
  RefreshCw,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  UsersRound,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Handout",
  description:
    "Download de FONK handout, bekijk praktijkvoorbeelden, projectresultaten, reviews en uitleg over FONK Match en slimme ondersteuning.",
};

const handoutCards = [
  ["Handout downloaden", "PDF wordt voorbereid. De inhoud staat hieronder alvast zichtbaar.", Download],
  ["Kennismaking", "Vraag een gesprek aan en bekijk samen wat FONK kan betekenen.", Sparkles],
  ["Bekijk praktijkvoorbeeld", "Zie hoe een idee vanaf de werkvloer een kleine verbetering wordt.", FileText],
  ["Bekijk projectresultaat", "Voorbeelddata voor tijdwinst, kwaliteit, draagvlak en leerpunten.", BadgeCheck],
  ["Ervaringen uit de praktijk", "Voorbeeldreviews voor de pilotfase, niet als klantclaim.", MessageCircle],
];

const roleInfo = [
  ["Medewerkers", "Idee delen, vraag stellen en volgen wat ermee gebeurt."],
  ["Projectleiders", "Intake, projectopzet, afdelingenadvies, acties en impact."],
  ["Bestuur", "Portfolio, prioriteiten, capaciteit, risico en opbrengst."],
  ["Regio", "Projectmatches, gedeelde leerpunten en regionale thema’s."],
];

const platformInfo = [
  ["Portfoliofunctie", "3 prioriteiten, 10 lopende projecten, wachtlijst, risico’s, capaciteit en impact.", BadgeCheck],
  ["Intakefunctie", "Wie moet aansluiten, welke vragen zijn nodig en welke afdelingen worden geraakt?", UsersRound],
  ["Borging & doorontwikkeling", "Projecten blijven zichtbaar na livegang, inclusief signalen, evaluaties en wijzigingen.", RefreshCw],
  ["FONK Match", "Organisaties met hetzelfde thema vinden elkaar professioneel en gericht.", Search],
  ["Veiligheid / AVG", "Rolgebaseerde toegang, geen onnodige cliëntgegevens en veilige ondersteuning.", ShieldCheck],
];

const faqs = [
  ["Vervangt FONK bestaande systemen?", "Nee. FONK geeft één route bovenop wat er al is."],
  ["Is dit extra administratie?", "Het doel is juist minder losse lijsten, minder dubbel werk en meer overzicht."],
  ["Wat gebeurt er na afronding?", "Een project blijft zichtbaar voor signalen, evaluaties, verbeterpunten en proceswijzigingen."],
  ["Wordt ieder signaal een project?", "Nee. FONK helpt bepalen of iets monitoring, een kleine verbetering, procesaanpassing of nieuw project vraagt."],
  ["Is FONK alleen voor bestuur?", "Nee. Medewerkers, projectleiders, staf, MT, directie en RvB werken ieder vanuit hun eigen rol."],
  ["Zijn er prijzen op de site?", "Nee. Organisaties vragen een kennismaking aan."],
];

const reviews = [
  ["Zorgmedewerker", "Ik kon eindelijk kwijt waar we elke dienst tijd verliezen. Daarna zag ik wat ermee gebeurde."],
  ["Projectleider", "FONK scheelt losse administratie en helpt mij sneller schakelen met de juiste afdelingen."],
  ["Teamleider", "Het gesprek werd concreter. Minder losse projecten, meer focus op wat teams kunnen dragen."],
  ["Zorgorganisatie", "Medewerkers voelen zich beter gehoord en we leren sneller van andere organisaties."],
];

const results = [
  ["Slimmere overdracht wijkzorg", "18 uur tijdwinst per maand", "minder dubbele informatie"],
  ["Minder dubbel registreren", "14 uur tijdwinst per maand", "meer rust in administratie"],
  ["Regionale projectmatch", "3 organisaties gekoppeld", "sneller leren van elkaar"],
];

export default function HandoutPage() {
  return (
    <>
      <Header />
      <main id="inhoud" className="bg-cream">
        <PageHero
          eyebrow="Handout"
          title="Alles om FONK duidelijk te delen binnen je organisatie."
          body="Download de handout, bekijk praktijkvoorbeelden en lees hoe FONK ideeën, projecten, prioriteiten en mensen samenbrengt in één veranderroute."
        />

        <section className="container-page py-20">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {handoutCards.map(([title, text, Icon]) => (
              <article key={title as string} className="rounded-[1.75rem] border border-ink/10 bg-white/90 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft">
                <Icon className="text-coral" aria-hidden="true" />
                <h2 className="mt-5 text-xl font-black text-ink">{title as string}</h2>
                <p className="mt-3 text-sm leading-6 text-ink/66">{text as string}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="voorbeelden" className="container-page py-12">
          <p className="spark-mark text-sm font-black uppercase tracking-[0.12em] text-petrol">Handouts</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight text-ink">Voorbeeldinhoud om intern te delen.</h2>
          <p className="mt-5 max-w-2xl leading-7 text-ink/68">
            PDF wordt voorbereid — inhoud is hieronder alvast zichtbaar. De knoppen tonen bewust wat nu beschikbaar is en wat nog wordt gemaakt.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {fonkHandouts.map((handout) => (
              <article id={handout.slug} key={handout.slug} className="rounded-[1.5rem] border border-ink/10 bg-white p-6 shadow-sm">
                <span className="rounded-full bg-lilac/45 px-3 py-2 text-xs font-black text-petrol">Voorbeeldhandout</span>
                <h3 className="mt-5 text-2xl font-black text-ink">{handout.title}</h3>
                <p className="mt-3 leading-7 text-ink/68">{handout.goal}</p>
                <p className="mt-3 text-sm font-black text-coral">Doelgroep: {handout.audience}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link href={`/handout/${handout.slug}`} className="rounded-full bg-petrol px-5 py-3 text-sm font-black text-cream">
                    Bekijk voorbeeld
                  </Link>
                  <span className="rounded-full border border-ink/12 bg-cream px-5 py-3 text-sm font-black text-ink/60">
                    Download wordt voorbereid
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-nude py-20">
          <div className="container-page grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="spark-mark text-sm font-black uppercase tracking-[0.12em] text-petrol">Borging</p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-ink">Verandering stopt niet bij oplevering.</h2>
              <p className="mt-5 text-lg leading-8 text-ink/70">
                De handout legt uit hoe FONK afgeronde projecten levend houdt met signalen, verbeteringen, audits, evaluaties en wijzigingen.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {["Levend projectoverzicht", "Signalen & verbeteringen", "Rollen & verbindingen", "Wat raakt wat?", "Borgen & doorontwikkelen", "Niet ieder signaal wordt project"].map((item) => (
                <div key={item} className="rounded-2xl bg-white p-5 font-black text-petrol shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container-page">
            <p className="spark-mark text-sm font-black uppercase tracking-[0.12em] text-petrol">Uitleg per rol</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight text-ink">Voor iedereen duidelijk wat FONK betekent.</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {roleInfo.map(([role, text]) => (
                <article key={role} className="rounded-[1.5rem] bg-cream p-5 shadow-sm">
                  <h3 className="text-xl font-black text-ink">{role}</h3>
                  <p className="mt-3 leading-7 text-ink/66">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-nude py-20">
          <div className="container-page grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="spark-mark text-sm font-black uppercase tracking-[0.12em] text-pine">Praktijkvoorbeelden</p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-ink">Voorbeelden die laten zien wat verandering oplevert.</h2>
              <p className="mt-5 text-lg leading-8 text-ink/70">
                Geen zware rapporten, maar korte projectresultaten die teams, projectleiders en bestuur begrijpen.
              </p>
            </div>
            <div className="grid gap-3">
              {results.map(([project, impact, learning]) => (
                <article key={project} className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-xl font-black text-ink">{project}</p>
                  <p className="mt-2 font-bold text-petrol">{impact}</p>
                  <p className="mt-1 text-sm text-ink/64">Leerpunten: {learning}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container-page py-20">
          <p className="spark-mark text-sm font-black uppercase tracking-[0.12em] text-petrol">Platformonderdelen</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight text-ink">Wat staat er in de handout?</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {platformInfo.map(([title, text, Icon]) => (
              <article key={title as string} className="rounded-[1.75rem] border border-ink/10 bg-white p-6 shadow-soft">
                <Icon className="text-coral" aria-hidden="true" />
                <h2 className="mt-5 text-2xl font-black text-ink">{title as string}</h2>
                <p className="mt-4 leading-7 text-ink/68">{text as string}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container-page">
            <p className="spark-mark text-sm font-black uppercase tracking-[0.12em] text-petrol">Reviews</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-ink">Ervaringen van mensen uit de zorg.</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {reviews.map(([role, quote]) => (
                <figure key={role} className="rounded-[1.75rem] bg-cream p-5 shadow-sm">
                  <Star className="text-coral" size={20} aria-hidden="true" />
                  <p className="mt-3 text-xs font-black uppercase tracking-[0.12em] text-coral">Voorbeeldreview voor pilotfase</p>
                  <blockquote className="mt-4 text-sm font-bold leading-6 text-ink/74">“{quote}”</blockquote>
                  <figcaption className="mt-5 text-sm font-black text-petrol">{role}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="container-page py-20">
          <p className="spark-mark text-sm font-black uppercase tracking-[0.12em] text-petrol">Veelgestelde vragen</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight text-ink">Kort en duidelijk.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {faqs.map(([question, answer]) => (
              <article key={question} className="rounded-[1.5rem] border border-ink/10 bg-white p-6 shadow-sm">
                <HelpCircle className="text-coral" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-black text-ink">{question}</h3>
                <p className="mt-3 leading-7 text-ink/66">{answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="container-page py-16">
          <div className="rounded-[2rem] bg-petrol p-8 text-cream shadow-soft md:p-12">
            <h2 className="max-w-3xl text-4xl font-black leading-tight">Vraag een kennismaking aan.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-cream/76">
              We kijken samen wat past bij jullie organisatie en welke vraag als eerste aandacht verdient.
            </p>
            <Link href="/contact" className="mt-8 inline-flex rounded-full bg-cream px-6 py-4 font-black text-petrol">
              Vraag een kennismaking aan
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
