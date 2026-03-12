import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif-display",
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anderius — Marketing-Agentur für ästhetische Chirurgie · Frankfurt",
  description:
    "Wir bauen Marken und Marketing-Systeme für Schönheitschirurgen und Kliniken. Damit Schönheit sichtbar wird. Frankfurt am Main.",
  openGraph: {
    title: "Anderius — Marketing-Agentur für ästhetische Chirurgie · Frankfurt",
    description:
      "Wir bauen Marken und Marketing-Systeme für Schönheitschirurgen und Kliniken. Damit Schönheit sichtbar wird.",
    type: "website",
    locale: "de_DE",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='4' fill='%23F7F5F0'/><polygon points='16,3 29,16 16,29 3,16' stroke='%231A1A1A' stroke-width='1.5' fill='none'/><polygon points='16,9 23,16 16,23 9,16' stroke='%231A1A1A' stroke-width='1' fill='none' opacity='0.5'/></svg>"
          type="image/svg+xml"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Anderius GmbH",
              description:
                "Digitalagentur für Performance Marketing und Markenentwicklung für Tech-Unternehmen",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Frankfurt am Main",
                addressCountry: "DE",
              },
              email: "hello@anderius.de",
            }),
          }}
        />
      </head>
      <body
        className={`${dmSerifDisplay.variable} ${dmSans.variable} antialiased`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
