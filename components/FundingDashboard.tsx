export function FundingDashboard() {
  return (
    <section className="container-page py-16 text-ink">
      <div className="rounded-[2rem] border border-ink/10 bg-white/85 p-6 shadow-soft">
        <p className="text-sm font-black uppercase tracking-[0.12em] text-pine">Toekomstige samenwerking</p>
        <h2 className="mt-2 text-3xl font-black">Samen kijken waar ondersteuning het meeste verschil maakt</h2>
        <p className="mt-4 max-w-3xl leading-8 text-ink/70">
          Voor financiers laat FONK zien welke projecten impact maken, schaalbaar zijn en daadwerkelijk bijdragen aan passende zorg,
          arbeidsbesparing of kwaliteit. Subsidie wordt gekoppeld aan bewezen praktijkwaarde, niet alleen aan een goed geschreven aanvraag.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-5">
          {[
            ["Impact", "Welke projecten maken aantoonbaar verschil?"],
            ["Schaalbaarheid", "Welke innovaties kunnen regionaal groeien?"],
            ["Samenwerking", "Welke organisaties trekken samen op?"],
            ["Financiering", "Waar is subsidie logisch en verantwoord?"],
            ["Passende zorg", "Wat draagt bij aan kwaliteit en arbeidsbesparing?"],
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl bg-sand/70 p-5">
              <p className="font-black text-pine">{title}</p>
              <p className="mt-2 text-sm leading-6 text-ink/64">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
