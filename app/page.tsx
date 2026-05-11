import { FonkHomePage } from "@/components/FonkHomePage";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FONK",
  slogan: "wêr it earste fonkje oerslacht, dêr ûntstiet feroaring",
  description:
    "Verander- en portfolioplatform voor zorgorganisaties. FONK brengt ideeën, projecten, teams en bestuur samen in één duidelijke route.",
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />
      <main id="inhoud">
        <FonkHomePage />
      </main>
      <Footer />
    </>
  );
}
