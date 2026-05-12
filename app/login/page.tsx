import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, LockKeyhole, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { kwadrantAccounts, kwadrantUser, superAdminAccount } from "@/lib/fonk-data";

export const metadata: Metadata = {
  title: "Inloggen",
  description: "Log in op FONK voor jouw organisatie.",
};

export default function LoginPage() {
  return (
    <>
      <Header />
      <main id="inhoud" className="bg-cream">
        <section id="inloggen" className="container-page grid min-h-[calc(100svh-5rem)] scroll-mt-28 gap-8 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-black text-petrol shadow-sm">
              <Building2 size={17} aria-hidden="true" /> Voor projectleiders, MT, directie, RvB en beheer
            </p>
            <h1 className="mt-7 text-5xl font-black leading-tight text-ink md:text-7xl">Welkom op FONK.</h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-ink/72">
              Log in voor dashboards, portfolio, projectdetails, signalen, besluitvorming en organisatie-overzicht.
            </p>
            <p className="mt-5 max-w-xl font-black leading-7 text-petrol">
              Zorgmedewerkers kunnen ideeën, knelpunten en resultaten delen zonder account.
            </p>
            <Link href="/voor-medewerkers#medewerkersinput" className="mt-6 inline-flex rounded-full bg-white px-5 py-3 font-black text-petrol shadow-sm">
              Medewerkersinput zonder login
            </Link>
          </div>

          <article className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-soft md:p-8">
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-coral/12 text-coral">
                <Sparkles aria-hidden="true" />
              </span>
              <div>
                <p className="text-2xl font-black text-ink">{kwadrantUser.name}</p>
                <p className="mt-1 font-bold text-ink/58">{kwadrantUser.role} · {kwadrantUser.organization}</p>
              </div>
            </div>
            <p className="mt-6 rounded-2xl bg-lilac/35 p-4 text-sm font-bold leading-6 text-ink/70">
              Kwadrant-omgeving voor projectleiders, programmamanagers, MT, directie, RvB en platformbeheer. Medewerkersinput komt hier na indienen terug.
            </p>
            <div className="mt-8 grid gap-3">
              {["Portfolio beheren", "Projecten volgen", "Regionale samenwerking", "Signalen & verbeteringen", "Borging & doorontwikkeling"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-cream p-4 font-black text-petrol">
                  <LockKeyhole size={18} aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
            <Link href="/platform" className="focus-ring mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-petrol px-6 py-4 font-black text-cream">
              Open Kwadrant-omgeving <ArrowRight size={18} />
            </Link>
          </article>
        </section>

        <section className="bg-lilac/35 py-16">
          <div className="container-page">
            <p className="spark-mark text-sm font-black uppercase tracking-[0.12em] text-petrol">Kwadrant accounts</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight text-ink">Testtoegang voor aangesloten gebruikers.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-ink/68">
              Deze gegevens zijn tijdelijk en bedoeld om FONK intern te bekijken. Deel ze alleen met betrokken medewerkers.
            </p>
            <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-ink/10 bg-white shadow-soft">
              <div className="grid grid-cols-1 gap-0 lg:grid-cols-[1.15fr_1fr_0.8fr_1.25fr_1fr]">
                {["Naam", "Rol", "Organisatie", "Gebruikersnaam", "Tijdelijk wachtwoord"].map((heading) => (
                  <div key={heading} className="hidden bg-petrol px-4 py-3 text-sm font-black text-cream lg:block">{heading}</div>
                ))}
                {kwadrantAccounts.map((account) => (
                  <div className="contents" key={account.username}>
                    <div className="border-t border-ink/8 px-4 py-3 font-bold text-ink"><span className="lg:hidden text-xs uppercase tracking-[0.12em] text-ink/45">Naam · </span>{account.name}</div>
                    <div className="border-t border-ink/8 px-4 py-3 text-sm font-bold text-ink/66"><span className="lg:hidden text-xs uppercase tracking-[0.12em] text-ink/45">Rol · </span>{account.role}</div>
                    <div className="border-t border-ink/8 px-4 py-3 text-sm font-bold text-ink/66"><span className="lg:hidden text-xs uppercase tracking-[0.12em] text-ink/45">Organisatie · </span>{account.organization}</div>
                    <div className="break-anywhere border-t border-ink/8 px-4 py-3 text-sm font-bold text-petrol"><span className="lg:hidden text-xs uppercase tracking-[0.12em] text-ink/45">Gebruikersnaam · </span>{account.username}</div>
                    <div className="break-anywhere border-t border-ink/8 px-4 py-3 text-sm font-black text-coral"><span className="lg:hidden text-xs uppercase tracking-[0.12em] text-ink/45">Wachtwoord · </span>{account.password}</div>
                  </div>
                ))}
              </div>
            </div>
            <Link href="/testgebruikers" className="mt-6 inline-flex items-center gap-2 rounded-full bg-petrol px-5 py-3 font-black text-cream">
              Open deelbaar accountoverzicht <ArrowRight size={18} />
            </Link>
            <article className="mt-8 rounded-[1.5rem] bg-petrol p-6 text-cream shadow-soft">
              <p className="text-sm font-black uppercase tracking-[0.12em] text-yellow">Super admin</p>
              <h3 className="mt-2 text-2xl font-black">{superAdminAccount.name}</h3>
              <p className="mt-2 text-cream/76">{superAdminAccount.role} · toegang tot alle organisaties, meldingen, dashboards, rollen en platformstatistieken.</p>
              <Link href="/beheer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-cream px-5 py-3 font-black text-petrol">
                Open FONK beheer <ArrowRight size={18} />
              </Link>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
