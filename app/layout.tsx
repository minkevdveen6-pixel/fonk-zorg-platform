import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fonkzorg.nl"),
  title: {
    default: "FONK | Verandering begint bij mensen",
    template: "%s | FONK",
  },
  description:
    "FONK helpt zorgorganisaties ideeën, projecten en verbeteringen overzichtelijk te maken. Simpel, warm en samen met de mensen die het werk doen.",
  keywords: [
    "zorginnovatie",
    "sociale innovatie zorg",
    "verandermanagement zorg",
    "implementatie zorg",
    "zorgmedewerkers betrekken",
    "innovatie zorgorganisatie",
    "veranderkracht zorg",
  ],
  openGraph: {
    title: "FONK",
    description:
      "Verandering begint bij mensen. FONK helpt zorgorganisaties om ideeën, projecten en verbeteringen overzichtelijk te maken.",
    locale: "nl_NL",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
