import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { fonkInbox, organizationOverview, superAdminAccount } from "@/lib/fonk-data";
import { Bell, Building2, ChartNoAxesColumnIncreasing, Inbox, Network, ShieldCheck, UsersRound } from "lucide-react";

export const metadata: Metadata = {
  title: "FONK beheer",
  description: "Centrale beheeromgeving voor FONK platformbeheer.",
};

const platformStats = [
  ["3", "aangesloten organisaties"],
  ["73", "actieve gebruikers"],
  ["16", "lopende projecten"],
  ["22", "signalen deze maand"],
  ["7", "supportvragen"],
  ["4", "regionale matches"],
];

const adminAreas = [
  ["Alle organisaties", "Kwadrant en toekomstige organisaties in één overzicht.", Building2],
  ["FONK inbox", "Meldingen, vragen en signalen uit organisaties centraal.", Inbox],
  ["Gebruikersrollen", "Beheer rollen zonder per organisatie opnieuw te starten.", UsersRound],
  ["Platformgroei", "Adoptie, activiteit en gebruik per organisatie volgen.", ChartNoAxesColumnIncreasing],
  ["Ondersteunende inzichten", "Patronen, risico’s en kansen over organisaties heen zichtbaar maken.", ChartNoAxesColumnIncreasing],
  ["Regionale samenwerking", "Thema’s, matches en netwerkactiviteit zichtbaar.", Network],
  ["Veilige toegang", "Super admin met zicht op rechten en escalaties.", ShieldCheck],
];

export default function BeheerPage() {
  return (
    <>
      <Header />
      <main id="inhoud" className="bg-cream text-ink">
        <section className="container-page py-14 md:py-18">
          <div className="rounded-[2rem] bg-violet p-8 text-cream shadow-soft md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.12em] text-yellow">FONK beheer</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">Centrale platformomgeving voor Minke.</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-cream/78">
              {superAdminAccount.name} heeft als {superAdminAccount.role} toegang tot organisaties, meldingen, dashboards, rollen, projectdata en platformstatistieken.
            </p>
          </div>
        </section>

        <section className="container-page py-10">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {platformStats.map(([value, label]) => (
              <div key={label} className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="text-3xl font-black text-petrol">{value}</p>
                <p className="mt-1 text-sm font-bold text-ink/62">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-lilac/35 py-16">
          <div className="container-page">
            <p className="spark-mark text-sm font-black uppercase tracking-[0.12em] text-petrol">Beheergebieden</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight text-ink">Alles verbonden zonder losse accounts.</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {adminAreas.map(([title, text, Icon]) => (
                <article key={title as string} className="rounded-[1.5rem] bg-white p-6 shadow-sm">
                  <Icon className="text-coral" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-black text-ink">{title as string}</h3>
                  <p className="mt-3 leading-7 text-ink/66">{text as string}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container-page grid gap-6 py-16 lg:grid-cols-[1fr_0.95fr]">
          <article className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-soft">
            <p className="spark-mark text-sm font-black uppercase tracking-[0.12em] text-petrol">Organisaties</p>
            <h2 className="mt-3 text-3xl font-black text-ink">Organisatie-activiteit.</h2>
            <div className="mt-6 grid gap-3">
              {organizationOverview.map(([org, adoption, users, projects, signals, status]) => (
                <div key={org} className="rounded-2xl bg-cream p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="font-black text-ink">{org}</p>
                    <span className="rounded-full bg-yellow/55 px-3 py-2 text-xs font-black text-petrol">{status}</span>
                  </div>
                  <p className="mt-2 text-sm font-bold text-ink/62">{adoption} adoptie · {users} gebruikers · {projects} projecten · {signals} signalen</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <Bell className="text-coral" aria-hidden="true" />
              <h2 className="text-3xl font-black text-ink">FONK inbox.</h2>
            </div>
            <div className="mt-6 grid gap-3">
              {fonkInbox.map(([org, message, label]) => (
                <div key={`${org}-${message}`} className="rounded-2xl bg-cream p-4">
                  <p className="text-sm font-black text-coral">{label}</p>
                  <p className="mt-1 font-black text-ink">{message}</p>
                  <p className="mt-1 text-sm font-bold text-ink/58">{org}</p>
                </div>
              ))}
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
