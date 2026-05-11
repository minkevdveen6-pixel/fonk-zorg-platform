import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { PlatformPreview } from "@/components/PlatformPreview";

export const metadata: Metadata = {
  title: "Over FONK",
  description:
    "FONK is een warme veranderplek voor zorgorganisaties: menselijk, overzichtelijk en gebouwd voor de praktijk.",
};

export default function OverOnsPage() {
  return (
    <>
      <Header />
      <main id="inhoud" className="bg-cream">
        <PageHero
          eyebrow="Over FONK"
          title="FONK helpt zorgorganisaties minder tegelijk te doen en beter te veranderen."
          body="FONK is gebouwd vanuit één overtuiging: verandering begint pas echt wanneer medewerkers invloed krijgen, projectleiders overzicht hebben en directie durft te kiezen."
        />
        <PlatformPreview />
      </main>
      <Footer />
    </>
  );
}
