import type { Metadata } from "next";
import { Sora, Lexend } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.studiogc.info"),
  icons: {
    icon: "/StudiogLogo.png",
    apple: "/StudiogLogo.png",
  },
  title: {
    default: "Studio G s.n.c. | Progettazione Meccanica 3D ed Elettronica",
    template: "%s | Studio G",
  },
  description:
    "Studio G è uno studio tecnico specializzato in progettazione meccanica 3D ed elettrica. Esperti in packaging, converting, impianti rotocalco, flexo, estrusione. CAD Autocad, Inventor, SolidWorks, CATIA V5-V6.",
  keywords: [
    "progettazione meccanica 3D",
    "progettazione elettrica",
    "schemi elettrici",
    "CAD",
    "Autocad",
    "Inventor",
    "SolidWorks",
    "CATIA",
    "packaging",
    "converting",
    "impianti rotocalco",
    "flexo",
    "estrusione",
    "San Giorgio Monferrato",
    "Alessandria",
    "Piemonte",
    "Italia",
  ],
  authors: [{ name: "Studio G s.n.c. di Cattaneo e Calvo" }],
  creator: "Studio G",
  publisher: "Studio G s.n.c.",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://www.studiogc.info",
    siteName: "Studio G",
    title: "Studio G s.n.c. | Progettazione Meccanica 3D ed Elettronica",
    description:
      "Studio tecnico specializzato in progettazione meccanica 3D ed elettrica. Decennale esperienza nel settore packaging e converting.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Studio G - Progettazione Meccanica ed Elettronica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio G s.n.c. | Progettazione Meccanica 3D ed Elettronica",
    description:
      "Studio tecnico specializzato in progettazione meccanica 3D ed elettrica.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.studiogc.info",
  },
  category: "Engineering Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Studio G s.n.c. di Cattaneo e Calvo",
    description:
      "Studio tecnico specializzato in progettazione meccanica 3D ed elettrica",
    url: "https://www.studiogc.info",
    telephone: "+39 3477757878",
    email: "studio-gc@libero.it",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Aldo Sanlorenzo 35d",
      addressLocality: "San Giorgio Monferrato",
      addressRegion: "AL",
      addressCountry: "IT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.0567,
      longitude: 8.4234,
    },
    openingHours: "Mo-Fr 09:00-18:00",
    priceRange: "$$",
    serviceType: [
      "Progettazione Meccanica 3D",
      "Progettazione Elettrica",
      "Schemi Elettrici",
      "Documentazione Tecnica",
      "Manuali d'uso",
    ],
    areaServed: {
      "@type": "Country",
      name: "Italy",
    },
    knowsAbout: [
      "CAD Design",
      "Autocad",
      "Inventor",
      "SolidWorks",
      "CATIA V5-V6",
      "SPAC Automazione",
      "Packaging Industry",
      "Converting Industry",
    ],
  };

  return (
    <html lang="it" className={`${sora.variable} ${lexend.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0a0f1a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
