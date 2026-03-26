import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nashville Tours Franklin — Guided Tours of Historic Franklin, TN",
    template: "%s | Nashville Tours Franklin",
  },
  description:
    "Premium walking tours, ghost tours, food experiences, and private guided adventures in historic Franklin, Tennessee. Locally owned and operated.",
  keywords: [
    "Franklin TN tours",
    "Nashville day trips",
    "Franklin Tennessee walking tour",
    "ghost tour Franklin TN",
    "things to do Franklin TN",
    "celebrity homes Nashville",
    "historic Franklin Tennessee",
  ],
  metadataBase: new URL("https://nashvilletoursfranklin.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Nashville Tours Franklin",
    url: "https://nashvilletoursfranklin.com",
  },
  twitter: {
    card: "summary_large_image",
    site: "@NashvilleToursFranklin",
  },
};

// JSON-LD: TourOperator + LocalBusiness — static structured data for Knowledge Graph
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["TourOperator", "LocalBusiness"],
  "@id": "https://nashvilletoursfranklin.com/#organization",
  name: "Nashville Tours Franklin",
  url: "https://nashvilletoursfranklin.com",
  telephone: "+16612019003",
  email: "dberry017@icloud.com",
  description:
    "Premium guided tours of Franklin, Tennessee. Ghost tours, historic walking tours, food and spirits tours, celebrity homes and filming locations tours, and fully private custom experiences. Locally owned and operated.",
  priceRange: "$30\u2013$150",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Franklin",
    addressRegion: "TN",
    postalCode: "37064",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.9251,
    longitude: -86.8689,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Franklin",
      containedInPlace: {
        "@type": "State",
        name: "Tennessee",
      },
    },
    {
      "@type": "City",
      name: "Nashville",
      containedInPlace: {
        "@type": "State",
        name: "Tennessee",
      },
    },
    {
      "@type": "AdministrativeArea",
      name: "Williamson County",
    },
  ],
  founder: {
    "@type": "Person",
    name: "Diana Berry",
    jobTitle: "Lead Tour Guide & Founder",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Franklin Tennessee Guided Tours",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "TouristTrip",
          name: "Ghost & Haunted History Tour",
          url: "https://nashvilletoursfranklin.com/tours/ghost-tour",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "TouristTrip",
          name: "Historic Franklin Walking Tour",
          url: "https://nashvilletoursfranklin.com/tours/historic-walking-tour",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "TouristTrip",
          name: "Franklin Food & Spirits Tour",
          url: "https://nashvilletoursfranklin.com/tours/food-tour",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "TouristTrip",
          name: "Celebrity Homes & Filming Locations Tour",
          url: "https://nashvilletoursfranklin.com/tours/celebrity-tour",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "TouristTrip",
          name: "Private Custom Tours",
          url: "https://nashvilletoursfranklin.com/tours/private-tours",
        },
      },
    ],
  },
  sameAs: [
    "https://www.facebook.com/nashvilletoursfranklin",
    "https://www.instagram.com/nashvilletoursfranklin",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${sourceSans3.variable}`}
    >
      <body
        className="min-h-screen flex flex-col antialiased"
        style={{
          fontFamily: "var(--font-source-sans), 'Source Sans 3', system-ui, sans-serif",
          backgroundColor: "#FAFAF7",
          color: "#2D2D2D",
        }}
      >
        {/* Skip navigation — visible on focus for keyboard users, hidden otherwise */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-md focus:font-semibold"
          style={{
            backgroundColor: "#C8963E",
            color: "#1B2A4A",
            fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
          }}
        >
          Skip to main content
        </a>
        {/* Global TourOperator / LocalBusiness structured data */}
        <script
          type="application/ld+json"
          // Static developer-authored JSON — no user input, no XSS risk
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Subtle editorial grain overlay — physical paper texture, purely decorative */}
        <div aria-hidden="true" className="grain-overlay" />
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
