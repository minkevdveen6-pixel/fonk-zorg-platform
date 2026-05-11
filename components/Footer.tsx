import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-pine text-cream">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-2xl font-black">FONK</p>
          <p className="mt-1 max-w-sm text-sm font-bold leading-6 text-yellow">
            wêr it earste fonkje oerslacht, dêr ûntstiet feroaring
          </p>
          <p className="mt-4 max-w-md text-sm leading-7 text-cream/70">
            Een warme veranderomgeving voor zorgorganisaties. Simpel, menselijk en gericht op praktijkkennis.
          </p>
        </div>
        <div>
          <p className="font-semibold">Snel naar</p>
          <div className="mt-4 grid gap-2 text-sm text-cream/70">
            <Link href="/voor-medewerkers" className="hover:text-cream">Voor medewerkers</Link>
            <Link href="/voor-projectleiders" className="hover:text-cream">Voor projectleiders</Link>
            <Link href="/voor-bestuur" className="hover:text-cream">Voor bestuur</Link>
            <Link href="/samen-leren" className="hover:text-cream">Samen leren</Link>
            <Link href="/handout" className="hover:text-cream">Handout</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold">Aanvraag</p>
          <p className="mt-4 text-sm leading-7 text-cream/70">
            Organisaties kunnen een kennismaking aanvragen. We kijken samen wat past bij jullie organisatie.
          </p>
          <Link href="/contact" className="mt-4 inline-flex rounded-full bg-cream px-5 py-3 text-sm font-black text-pine">
            Aanvraag doen
          </Link>
        </div>
      </div>
    </footer>
  );
}
