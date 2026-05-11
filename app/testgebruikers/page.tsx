import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, UsersRound } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { kwadrantAccounts, superAdminAccount } from "@/lib/fonk-data";

export const metadata: Metadata = {
  title: "FONK testgebruikers Kwadrant",
  description: "Overzicht met tijdelijke testaccounts voor FONK binnen Kwadrant.",
};

const allAccounts = [
  ...kwadrantAccounts,
  {
    ...superAdminAccount,
    organization: "FONK beheer",
  },
];

export default function TestgebruikersPage() {
  return (
    <>
      <Header />
      <main id="inhoud" className="bg-cream text-ink">
        <section className="container-page py-14 md:py-18">
          <div className="rounded-[2rem] bg-violet p-8 text-cream shadow-soft md:p-10">
            <p className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.12em] text-yellow">
              <UsersRound size={18} aria-hidden="true" /> Deelbaar overzicht
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              FONK testgebruikers Kwadrant.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-cream/78">
              Tijdelijke accounts om FONK intern te bekijken. Deel deze gegevens alleen met betrokken medewerkers.
            </p>
          </div>
        </section>

        <section className="container-page py-10">
          <div className="overflow-hidden rounded-[1.5rem] border border-ink/10 bg-white shadow-soft">
            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.85fr_1fr_1.15fr_0.9fr_1.45fr]">
              {["Naam", "Organisatie", "Rol", "Gebruikersnaam", "Wachtwoord", "Toegangsrechten"].map((heading) => (
                <div key={heading} className="hidden bg-petrol px-4 py-3 text-sm font-black text-cream lg:block">
                  {heading}
                </div>
              ))}
              {allAccounts.map((account) => (
                <div className="contents" key={account.username}>
                  <Cell label="Naam" strong>{account.name}</Cell>
                  <Cell label="Organisatie">{account.organization}</Cell>
                  <Cell label="Rol">{account.role}</Cell>
                  <Cell label="Gebruikersnaam" accent>{account.username}</Cell>
                  <Cell label="Wachtwoord" warning>{account.password}</Cell>
                  <Cell label="Toegangsrechten">{account.access}</Cell>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-[1.5rem] bg-mist p-6 shadow-sm">
              <ShieldCheck className="text-petrol" aria-hidden="true" />
              <h2 className="mt-4 text-2xl font-black">Let op</h2>
              <p className="mt-3 leading-7 text-ink/68">
                Dit zijn tijdelijke testwachtwoorden. Vervang ze zodra FONK met echte accounts of SSO wordt gekoppeld.
              </p>
            </article>
            <article className="rounded-[1.5rem] bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-black">Direct testen</h2>
              <p className="mt-3 leading-7 text-ink/68">
                Open de loginpagina en gebruik een van de accounts om de voorbeeldomgeving te bekijken.
              </p>
              <Link href="/login" className="mt-5 inline-flex items-center gap-2 rounded-full bg-petrol px-5 py-3 font-black text-cream">
                Naar login <ArrowRight size={18} />
              </Link>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Cell({
  label,
  children,
  strong = false,
  accent = false,
  warning = false,
}: {
  label: string;
  children: string;
  strong?: boolean;
  accent?: boolean;
  warning?: boolean;
}) {
  return (
    <div
      className={`border-t border-ink/8 px-4 py-3 text-sm ${
        strong ? "font-black text-ink" : "font-bold text-ink/66"
      } ${accent ? "text-petrol" : ""} ${warning ? "font-black text-coral" : ""}`}
    >
      <span className="lg:hidden text-xs uppercase tracking-[0.12em] text-ink/45">{label} · </span>
      {children}
    </div>
  );
}
