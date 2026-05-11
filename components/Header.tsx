"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/platform", label: "Platform" },
  { href: "/voor-medewerkers", label: "Voor medewerkers" },
  { href: "/voor-projectleiders", label: "Voor projectleiders" },
  { href: "/voor-bestuur", label: "Voor bestuur" },
  { href: "/samen-leren", label: "Samen leren" },
  { href: "/handout", label: "Handout" },
  { href: "/login", label: "Inloggen" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/82 text-ink backdrop-blur-xl">
      <a
        href="#inhoud"
        className="focus-ring sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:font-bold focus:text-cream"
      >
        Naar inhoud
      </a>
      <div className="container-page flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 focus-ring rounded-full">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-coral/14 text-coral">
            <Sparkles size={21} aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-black text-ink">FONK</span>
            <span className="block max-w-36 text-xs font-bold leading-snug text-ink/58">wêr it earste fonkje oerslacht</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hoofdnavigatie">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring rounded-full px-3 py-2 text-xs font-semibold transition ${
                  active ? "bg-coral text-cream shadow-sm" : "text-ink/72 hover:bg-white/80 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/login"
          className="focus-ring hidden rounded-full bg-pine px-5 py-3 text-sm font-black text-cream shadow-soft transition hover:-translate-y-0.5 md:inline-flex"
        >
          Inloggen
        </Link>

        <button
          type="button"
          className="focus-ring inline-grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white/80 lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? "Menu sluiten" : "Menu openen"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-ink/10 bg-cream lg:hidden">
          <nav className="container-page grid gap-2 py-4" aria-label="Mobiele navigatie">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-ink hover:bg-white/80"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
