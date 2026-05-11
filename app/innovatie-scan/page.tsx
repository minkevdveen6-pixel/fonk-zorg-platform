import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InnovationScan } from "@/components/InnovationScan";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "De Innovatie Scan",
  description:
    "Start de Innovatie Scan en ontdek binnen enkele minuten de veranderkracht, werkdruk, draagvlak en implementatierisico's van jouw zorgteam.",
};

export default function InnovatieScanPage() {
  return (
    <>
      <Header />
      <main id="inhoud">
        <PageHero
          eyebrow="De Innovatie Scan"
          title="Ontdek je veranderkracht voordat een implementatie energie verliest."
          body="Beantwoord tien korte vragen over draagvlak, werkdruk, eigenaarschap en implementatiekracht. Je ontvangt direct een score en concrete aanbevelingen voor kleine, haalbare stappen."
        />
        <InnovationScan />
      </main>
      <Footer />
    </>
  );
}
