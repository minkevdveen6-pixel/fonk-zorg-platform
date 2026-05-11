import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { kwadrantProjects } from "@/lib/fonk-data";

export const metadata: Metadata = {
  title: "Projectdashboard",
  description: "Voorbeeldomgeving met Kwadrant-projecten, status, risico en projectdetails.",
};

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function ProjectDashboardPage() {
  return (
    <>
      <Header />
      <main id="inhoud" className="bg-cream">
        <PageHero
          eyebrow="Na inloggen"
          title="Projectdashboard Kwadrant."
          body="Voorbeelddata voor pilotomgeving. Klik op een project om aanleiding, afdelingen, risico’s, signalen en volgende stap te bekijken."
        />
        <section className="container-page py-16">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {kwadrantProjects.map((project) => (
              <article key={project.name} className="rounded-[1.5rem] border border-ink/10 bg-white p-5 shadow-sm">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-mist px-3 py-2 text-xs font-black text-petrol">{project.status}</span>
                  <span className="rounded-full bg-peach/50 px-3 py-2 text-xs font-black text-ink">{project.priority}</span>
                </div>
                <h2 className="mt-5 text-2xl font-black text-ink">{project.name}</h2>
                <p className="mt-2 text-sm font-bold text-ink/58">{project.lead} · {project.sponsor}</p>
                <p className="mt-4 text-sm leading-6 text-ink/66">{project.risk}</p>
                <Link href={`/projecten/${slugify(project.name)}`} className="mt-5 inline-flex items-center gap-2 rounded-full bg-petrol px-5 py-3 font-black text-cream">
                  Bekijk projectdetail <ArrowRight size={18} />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
