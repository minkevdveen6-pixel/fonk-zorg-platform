"use client";

import { useState } from "react";
import { CheckCircle2, Lightbulb, MessageCircle, Trophy } from "lucide-react";

const forms = [
  {
    id: "idee",
    title: "Idee indienen",
    intro: "Deel kort wat jij ziet en wat volgens jou beter kan.",
    icon: Lightbulb,
    fields: [
      ["naam", "Naam", "Bijvoorbeeld: Anja de Vries", "input"],
      ["werkmail", "Werkmail", "naam@organisatie.nl", "email"],
      ["team", "Team/locatie", "Bijvoorbeeld: Wijkteam Drachten", "input"],
      ["onderwerp", "Onderwerp", "Waar gaat je idee over?", "input"],
      ["praktijk", "Wat zie je in de praktijk?", "Beschrijf kort wat je merkt.", "textarea"],
      ["beter", "Wat kan beter?", "Wat zou fijner, veiliger of slimmer kunnen?", "textarea"],
      ["oplossing", "Jouw idee/oplossing", "Wat zou je willen proberen?", "textarea"],
      ["betrokkenen", "Wie heeft hiermee te maken?", "Team, afdeling, cliënten of andere collega’s.", "input"],
      ["urgentie", "Urgentie", "Kies wat past", "select"],
      ["contact", "Mag een projectleider contact opnemen?", "Kies wat past", "select-contact"],
    ],
  },
  {
    id: "knelpunt",
    title: "Knelpunt melden",
    intro: "Laat weten waar werk vastloopt of onnodig veel tijd kost.",
    icon: MessageCircle,
    fields: [
      ["naam", "Naam", "Bijvoorbeeld: Marieke", "input"],
      ["werkmail", "Werkmail", "naam@organisatie.nl", "email"],
      ["team", "Team/locatie", "Bijvoorbeeld: Wijkteam Oost", "input"],
      ["knelpunt", "Waar loop je tegenaan?", "Beschrijf het knelpunt in gewone taal.", "textarea"],
      ["frequentie", "Hoe vaak speelt dit?", "Bijvoorbeeld: dagelijks, wekelijks, soms.", "input"],
      ["effect", "Effect op medewerker/cliënt", "Wat merken collega’s of cliënten hiervan?", "textarea"],
      ["oplossing", "Mogelijke oplossing", "Heb je al een idee wat kan helpen?", "textarea"],
      ["bijlage", "Bijlage optioneel", "", "file"],
    ],
  },
  {
    id: "resultaat",
    title: "Resultaat delen",
    intro: "Vertel welke verbetering al is getest en wat het opleverde.",
    icon: Trophy,
    fields: [
      ["naam", "Naam", "Bijvoorbeeld: Bram", "input"],
      ["werkmail", "Werkmail", "naam@organisatie.nl", "email"],
      ["team", "Team/locatie", "Bijvoorbeeld: Intramuraal Noord", "input"],
      ["verbetering", "Welke verbetering is getest?", "Wat hebben jullie geprobeerd?", "textarea"],
      ["opbrengst", "Wat leverde het op?", "Wat veranderde er in het werk?", "textarea"],
      ["tijdswinst", "Tijdswinst", "Bijvoorbeeld: 20 minuten per dienst.", "input"],
      ["kwaliteit", "Effect op kwaliteit van zorg", "Wat werd beter voor de zorg?", "textarea"],
      ["werkplezier", "Effect op werkplezier", "Wat merkten collega’s?", "textarea"],
      ["delen", "Moet dit breder gedeeld worden?", "Kies wat past", "select-contact"],
    ],
  },
];

const statusFlow = ["Ontvangen", "In beoordeling", "Bespreken", "Kleine verbetering", "Mogelijk project", "Gekoppeld aan project", "Afgerond"];

export function EmployeeInputForms() {
  const [active, setActive] = useState(forms[0]);
  const [submitted, setSubmitted] = useState(false);

  const Icon = active.icon;

  return (
    <section id="medewerkersinput" className="container-page scroll-mt-28 py-16 text-ink">
      <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <aside className="rounded-[2rem] bg-petrol p-6 text-cream shadow-soft md:p-8">
          <p className="text-sm font-black uppercase tracking-[0.12em] text-yellow">Zonder login</p>
          <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">Geef input vanuit de praktijk.</h2>
          <p className="mt-4 text-base font-bold leading-7 text-cream/74">
            Zorgmedewerkers kunnen ideeën, knelpunten en resultaten delen via de publieke website. Een account is niet nodig.
          </p>
          <div className="mt-6 grid gap-3">
            {forms.map((form) => {
              const FormIcon = form.icon;
              const isActive = form.id === active.id;
              return (
                <button
                  key={form.id}
                  type="button"
                  onClick={() => {
                    setActive(form);
                    setSubmitted(false);
                  }}
                  className={`focus-ring flex items-center gap-3 rounded-2xl px-4 py-4 text-left font-black transition ${
                    isActive ? "bg-cream text-petrol" : "bg-white/10 text-cream hover:bg-white/16"
                  }`}
                >
                  <FormIcon size={19} aria-hidden="true" />
                  {form.title}
                </button>
              );
            })}
          </div>
          <div className="mt-6 rounded-2xl bg-white/10 p-4">
            <p className="text-sm font-black text-yellow">Daarna zichtbaar in FONK</p>
            <p className="mt-2 text-sm font-bold leading-6 text-cream/72">
              Projectleiders zien je signaal terug in Ideeënhub, Signalen & Verbeteringen en het projectdashboard.
            </p>
          </div>
        </aside>

        <form
          className="rounded-[2rem] border border-ink/10 bg-white p-5 shadow-soft md:p-7"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <p className="inline-flex items-center gap-2 rounded-full bg-lilac/35 px-4 py-2 text-sm font-black text-petrol">
                <Icon size={17} aria-hidden="true" /> {active.title}
              </p>
              <h3 className="mt-4 text-3xl font-black leading-tight text-ink">{active.intro}</h3>
            </div>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {active.fields.map(([id, label, placeholder, type]) => (
              <Field key={`${active.id}-${id}`} id={`${active.id}-${id}`} label={label} placeholder={placeholder} type={type} />
            ))}
          </div>

          <button type="submit" className="focus-ring mt-7 inline-flex w-full items-center justify-center rounded-full bg-petrol px-6 py-4 font-black text-cream sm:w-auto">
            Verstuur signaal
          </button>

          {submitted ? (
            <div className="mt-6 rounded-[1.5rem] bg-mist p-5">
              <p className="flex items-start gap-3 font-black text-petrol">
                <CheckCircle2 className="mt-0.5 shrink-0 text-coral" size={20} aria-hidden="true" />
                Dank je wel. Je signaal is ontvangen. Je ontvangt een bevestiging op je werkmail en kunt later een update krijgen over de voortgang.
              </p>
            </div>
          ) : null}
        </form>
      </div>

      <div className="mt-8 rounded-[2rem] bg-white p-5 shadow-sm">
        <p className="text-sm font-black uppercase tracking-[0.12em] text-petrol">Status na indienen</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {statusFlow.map((status) => (
            <span key={status} className="rounded-full bg-cream px-3 py-2 text-xs font-black text-petrol">
              {status}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Field({ id, label, placeholder, type }: { id: string; label: string; placeholder: string; type: string }) {
  const baseClass = "focus-ring w-full rounded-2xl border border-ink/10 bg-cream px-4 py-3 text-ink placeholder:text-ink/35";

  if (type === "textarea") {
    return (
      <label className="grid gap-2 md:col-span-2" htmlFor={id}>
        <span className="text-sm font-black text-ink/68">{label}</span>
        <textarea id={id} name={id} placeholder={placeholder} className={`${baseClass} min-h-28 resize-y leading-7`} />
      </label>
    );
  }

  if (type === "select" || type === "select-contact") {
    const options = type === "select" ? ["Laag", "Middel", "Hoog", "Weet ik niet"] : ["Ja", "Nee", "Alleen per werkmail"];
    return (
      <label className="grid gap-2" htmlFor={id}>
        <span className="text-sm font-black text-ink/68">{label}</span>
        <select id={id} name={id} className={baseClass} defaultValue="">
          <option value="" disabled>{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </label>
    );
  }

  if (type === "file") {
    return (
      <label className="grid gap-2 md:col-span-2" htmlFor={id}>
        <span className="text-sm font-black text-ink/68">{label}</span>
        <input id={id} name={id} type="file" className={`${baseClass} file:mr-4 file:rounded-full file:border-0 file:bg-petrol file:px-4 file:py-2 file:text-sm file:font-black file:text-cream`} />
      </label>
    );
  }

  return (
    <label className="grid gap-2" htmlFor={id}>
      <span className="text-sm font-black text-ink/68">{label}</span>
      <input id={id} name={id} type={type === "email" ? "email" : "text"} placeholder={placeholder} className={baseClass} />
    </label>
  );
}
