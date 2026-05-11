import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Kennismaking aanvragen",
  description:
    "Vraag een kennismaking aan en ontdek samen met FONK hoe jouw zorgorganisatie verandering begrijpelijker, rustiger en menselijker kan organiseren.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="inhoud" className="bg-cream">
        <PageHero
          eyebrow="Contact"
          title="Vraag een kennismaking aan en ontdek wat FONK kan betekenen."
          body="Vertel kort waar projectdruk of implementatie nu stokt. We kijken samen wat past bij jullie organisatie, met aandacht voor medewerkers, projectleiders en de keuzes die nu rust kunnen brengen."
        />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
