"use client";

import { useState } from "react";

const roles = {
  Projectleider: ["Nieuwe projecten", "Planhulp", "Vragen van medewerkers", "Capaciteit per afdeling"],
  Opdrachtgever: ["Projectdoel", "Besluiten nodig", "Voortgang", "Risico's en afhankelijkheden"],
  "MT-lid": ["Portfolio-overzicht", "PRIO 1-3", "Wachtlijst", "Capaciteitsdruk"],
  "Raad van Bestuur/directie": ["Strategische prioriteiten", "Impact x urgentie", "Organisatiebrede risico's", "Maximaal 3 echte prioriteiten"],
  Zorgmedewerker: ["Lopende projecten", "Mijn ideeën", "Vragen stellen", "Wat gebeurt er met mijn input"],
};

export function RoleDashboard() {
  const [role, setRole] = useState<keyof typeof roles>("Projectleider");

  return (
    <section className="container-page py-16 text-ink">
      <div className="rounded-[2rem] border border-ink/10 bg-white/85 p-5 shadow-soft">
        <p className="text-sm font-black uppercase tracking-[0.12em] text-pine">Voor iedereen duidelijk</p>
        <h2 className="mt-2 text-3xl font-black">Iedere rol ziet wat nodig is, niet alles.</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {Object.keys(roles).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setRole(item as keyof typeof roles)}
              className={`focus-ring rounded-full px-4 py-3 text-sm font-black ${
                role === item ? "bg-pine text-cream" : "bg-white/80 text-ink/72"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {roles[role].map((item) => (
            <div key={item} className="rounded-3xl border border-ink/10 bg-sand/70 p-5">
              <p className="text-sm font-bold text-ink/58">{role}</p>
              <p className="mt-3 text-xl font-black">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
