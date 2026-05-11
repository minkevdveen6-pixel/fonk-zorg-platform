"use client";

import { Send } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="container-page py-20">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[2rem] bg-pine p-8 text-cream shadow-soft">
          <p className="text-sm font-black uppercase tracking-[0.12em] text-yellow">Kennismaking aanvragen</p>
          <h2 className="mt-4 text-3xl font-black leading-tight">
            We kijken samen wat past bij jullie organisatie.
          </h2>
          <p className="mt-5 leading-8 text-cream/76">
            Vertel kort waar verandering nu stroef loopt, hoe projecten zijn georganiseerd en welke ondersteuning zou helpen.
            FONK denkt mee vanuit samenwerking, praktijkkennis en rust in de veranderagenda.
          </p>
          <p className="mt-6 rounded-3xl bg-white/10 p-5 text-lg font-black text-yellow">
            Verandering begint bij mensen.
          </p>
        </div>

        <form
          className="grid gap-5 rounded-[2rem] border border-ink/10 bg-white/80 p-6 shadow-soft md:p-8"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Organisatie" name="organisatie" placeholder="Naam van de organisatie" required />
            <Field label="Naam contactpersoon" name="naam" placeholder="Voor- en achternaam" required />
            <Field label="Functie" name="functie" placeholder="Bijvoorbeeld projectleider of manager" />
            <Field label="E-mail" name="email" type="email" placeholder="naam@organisatie.nl" required />
          </div>
          <label className="grid gap-2">
            <span className="text-sm font-bold text-ink">Aantal medewerkers</span>
            <select className="focus-ring rounded-2xl border border-ink/12 bg-cream px-4 py-3 text-ink">
              <option>1-50</option>
              <option>51-250</option>
              <option>251-1.000</option>
              <option>1.000+</option>
            </select>
          </label>
          <TextArea
            label="Grootste veranderuitdaging"
            placeholder="Bijvoorbeeld: te veel projecten tegelijk, weinig draagvlak, administratiedruk of ideeën die blijven liggen."
          />
          <TextArea
            label="Huidige projectstructuur"
            placeholder="Bijvoorbeeld: projectgroepen, Excel-overzichten, losse systemen, portfolio-overleg of programma's per locatie."
          />
          <TextArea
            label="Gewenste ondersteuning"
            placeholder="Bijvoorbeeld: meer overzicht, medewerkers betrekken, prioriteiten kiezen, projectleiders ontlasten of samen starten met een scan."
          />
          <button
            type="submit"
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-pine px-6 py-4 font-bold text-cream shadow-soft transition hover:-translate-y-0.5"
          >
            Vraag een kennismaking aan <Send size={18} aria-hidden="true" />
          </button>
          {submitted && (
            <p className="rounded-2xl bg-mist p-4 text-sm font-bold leading-6 text-petrol" role="status">
              Dank je. In deze voorbeeldomgeving is het formulier niet gekoppeld aan e-mail. Gebruik deze velden om de aanvraagflow te bekijken.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-bold text-ink">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="focus-ring rounded-2xl border border-ink/12 bg-cream px-4 py-3 text-ink"
      />
    </label>
  );
}

function TextArea({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-bold text-ink">{label}</span>
      <textarea
        className="focus-ring min-h-32 rounded-2xl border border-ink/12 bg-cream px-4 py-3 text-ink"
        placeholder={placeholder}
      />
    </label>
  );
}
