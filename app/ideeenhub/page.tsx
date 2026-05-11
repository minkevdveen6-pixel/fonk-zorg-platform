import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { IdeasHub } from "@/components/IdeasHub";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Ideeënhub",
  description: "Voorbeeldomgeving waarin medewerkers ideeën, knelpunten en vervolgacties kunnen bekijken.",
};

export default function IdeeenhubPage() {
  return (
    <>
      <Header />
      <main id="inhoud" className="bg-cream">
        <PageHero
          eyebrow="Na inloggen"
          title="Ideeënhub medewerkers."
          body="Voorbeeldomgeving. Medewerkers kunnen ideeën indienen, zien wie reageert en volgen welke vervolgstap mogelijk is."
        />
        <IdeasHub />
      </main>
      <Footer />
    </>
  );
}
