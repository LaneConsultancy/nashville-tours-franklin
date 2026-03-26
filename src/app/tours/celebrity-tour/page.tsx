import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ClockIcon,
  UsersIcon,
  MapPinIcon,
  StarIcon,
  CarSimpleIcon,
  ShieldCheckIcon,
  PhoneIcon,
  ArrowRightIcon,
  FilmSlateIcon,
  HouseIcon,
  QuotesIcon,
  CheckIcon,
  InfoIcon,
  CurrencyDollarIcon,
} from "@phosphor-icons/react/dist/ssr";
import TourFaqAccordion from "@/components/TourFaqAccordion";

export const metadata: Metadata = {
  title: "Celebrity Homes & Filming Locations Tour | Franklin TN",
  description:
    "See where Keith Urban, Reese Witherspoon, Carrie Underwood & more call home. Franklin TN's only dedicated celebrity homes & filming locations tour.",
  alternates: {
    canonical: "https://nashvilletoursfranklin.com/tours/celebrity-tour",
  },
  openGraph: {
    title: "Celebrity Homes & Filming Locations Tour | Franklin TN",
    description:
      "See where Keith Urban, Reese Witherspoon, Carrie Underwood & more call home. Franklin TN's only dedicated celebrity homes & filming locations tour.",
    url: "https://nashvilletoursfranklin.com/tours/celebrity-tour",
    type: "website",
  },
  twitter: {
    title: "Celebrity Homes & Filming Locations Tour | Franklin TN",
    description:
      "See where Keith Urban, Reese Witherspoon, Carrie Underwood & more call home. Franklin TN's only dedicated celebrity homes & filming locations tour.",
  },
};

// JSON-LD: TouristTrip schema — static, no XSS risk
const celebrityTourSchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "@id": "https://nashvilletoursfranklin.com/tours/celebrity-tour#trip",
  name: "Celebrity Homes & Filming Locations Tour",
  description:
    "The only tour in Franklin covering the area's celebrity residents — from Carrie Underwood and Keith Urban to Reese Witherspoon and Tim McGraw. Includes Hallmark movie filming locations and the neighborhoods where Nashville's biggest stars call home. 2.5 hours, small group van tour from downtown Franklin, TN.",
  url: "https://nashvilletoursfranklin.com/tours/celebrity-tour",
  touristType: "Celebrity Tour, Filming Locations Tour",
  duration: "PT2H30M",
  provider: {
    "@type": "TourOperator",
    "@id": "https://nashvilletoursfranklin.com/#organization",
    name: "Nashville Tours Franklin",
  },
  offers: {
    "@type": "Offer",
    price: "55",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://nashvilletoursfranklin.com/contact",
  },
};

// JSON-LD: FAQPage for celebrity tour — static, no XSS risk
const celebrityTourFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What celebrities live in Franklin, Tennessee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Franklin and the surrounding Williamson County area is home to Keith Urban and Nicole Kidman, Carrie Underwood, Reese Witherspoon, Brad Paisley and Kimberly Williams-Paisley, Kenny Chesney, Kathie Lee Gifford, Amy Grant, Dierks Bentley, and others. The concentration of country music, entertainment, and crossover stars in this area is genuinely unusual for a town of Franklin's size.",
      },
    },
    {
      "@type": "Question",
      name: "Does Reese Witherspoon live in Franklin, TN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reese Witherspoon owns property in Franklin's Temple Hills neighborhood and has been associated with the Franklin area for a number of years. Her Tennessee connections are well-documented.",
      },
    },
    {
      "@type": "Question",
      name: "Does Miley Cyrus have a house in Franklin, TN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Miley Cyrus has family connections to the Franklin area through Billy Ray Cyrus, who has been a longtime Williamson County resident. Properties associated with the Cyrus family in the Franklin area are part of the tour's coverage.",
      },
    },
    {
      "@type": "Question",
      name: "Which Hallmark movies were filmed in Franklin, TN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Franklin has strong connections to Hallmark content, most notably through the Paisley family's involvement — Kimberly Williams-Paisley's work in the Sister Swap films brought significant attention to the Franklin area. The downtown historic district continues to attract film and commercial production because of its photogenic streetscape.",
      },
    },
    {
      "@type": "Question",
      name: "Will we see actual celebrities on the tour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Possibly, in the same way you might encounter someone famous at the coffee shop in any town where famous people live — but the tour is not predicated on celebrity sightings. Diana provides the context and the geography.",
      },
    },
    {
      "@type": "Question",
      name: "Is this a driving or walking tour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The tour begins and ends in downtown Franklin and uses a small group van for the residential and estate portions. There is a brief walking component through the downtown filming locations area. The majority of the tour is van-based.",
      },
    },
  ],
};

// JSON-LD: BreadcrumbList for celebrity tour
const celebrityTourBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nashvilletoursfranklin.com" },
    { "@type": "ListItem", position: 2, name: "Celebrity Homes & Filming Locations Tour", item: "https://nashvilletoursfranklin.com/tours/celebrity-tour" },
  ],
};

/* ─── Celebrity residents data ─────────────────────────────────────────────── */
const celebrities = [
  {
    name: "Keith Urban & Nicole Kidman",
    detail:
      "One of entertainment's most high-profile couples chose Franklin for their primary American residence — a secluded estate that gives them the privacy Nashville's urban neighborhoods can't provide.",
  },
  {
    name: "Carrie Underwood",
    detail:
      'Carrie Underwood has called her Franklin estate her "happy place." Her property is among the most substantial in Williamson County — a genuine estate that reflects both the scale of her success and her commitment to life outside the industry circuit.',
  },
  {
    name: "Brad Paisley & Kimberly Williams-Paisley",
    detail:
      "One of country music's most enduring couples has deep roots in the Franklin area. The Paisleys are community-embedded in ways that have made them genuinely liked rather than just famous neighbors.",
  },
  {
    name: "Reese Witherspoon",
    detail:
      "Reese Witherspoon owns property in Franklin's Temple Hills neighborhood. Her Tennessee connections are well-documented, and she's been spotted at Franklin's local businesses on numerous occasions.",
  },
  {
    name: "Kenny Chesney",
    detail:
      "Kenny Chesney's Franklin property — valued at approximately $12 million — is one of the most substantial celebrity estates in Williamson County, reflecting the broader pattern of country music's biggest earners gravitating toward this area.",
  },
  {
    name: "Alan Jackson",
    detail:
      "Alan Jackson's former Franklin estate is one of the most discussed celebrity properties in Williamson County history. The plantation-style property on 135 acres represented one of the most ambitious private estates in the area.",
  },
  {
    name: "The Cyrus Family",
    detail:
      "Billy Ray Cyrus has been a longtime Williamson County resident, and the family's Tennessee roots run deep. The family's Franklin-area properties and Miley Cyrus's connection to the region are part of the geography Diana covers.",
  },
  {
    name: "Amy Grant, Kathie Lee Gifford & Dierks Bentley",
    detail:
      "The Franklin area's list of notable residents extends well beyond the names above. Amy Grant, Kathie Lee Gifford, Dierks Bentley, and others have all chosen this corner of Middle Tennessee.",
  },
];

/* ─── Tour highlights ───────────────────────────────────────────────────────── */
const highlights = [
  {
    icon: <HouseIcon weight="light" size={22} />,
    title: "Celebrity Estate Drive-Bys",
    body: "Pass the actual properties associated with country music royalty and Hollywood A-listers in their Williamson County neighborhoods.",
  },
  {
    icon: <FilmSlateIcon weight="light" size={22} />,
    title: "Hallmark Filming Locations",
    body: "Stand on the downtown Main Street blocks that keep appearing in Hallmark productions — and understand why filmmakers keep coming back.",
  },
  {
    icon: <MapPinIcon weight="light" size={22} />,
    title: "The Williamson County Landscape",
    body: "Horse farm country, private estate geography, and the community context that makes all of it make sense — not just addresses.",
  },
  {
    icon: <StarIcon weight="light" size={22} />,
    title: "The Real Story Behind the Names",
    body: "Diana covers the 'why Franklin?' question in depth — the sociology, the privacy culture, and what draws the biggest names in the business here.",
  },
];

/* ─── Practical info ────────────────────────────────────────────────────────── */
const practicalInfo = [
  { label: "Price", value: "$55 / adult" },
  { label: "Duration", value: "2.5 hours" },
  { label: "Format", value: "Small group van tour" },
  { label: "Departure", value: "Downtown Franklin" },
  { label: "Group Size", value: "Max 8 guests" },
  { label: "Age", value: "All ages welcome" },
  { label: "Note", value: "Drive-by tour — all viewing from public roads" },
];

/* ─── Testimonials ──────────────────────────────────────────────────────────── */
const testimonials = [
  {
    quote:
      "I've always wanted to do a celebrity homes tour and was skeptical it would be more than a van driving past hedges. Diana made it genuinely interesting — she knows the stories behind every property and why each person chose Franklin. Came away understanding the town better than I expected.",
    name: "Jennifer R.",
    location: "Dallas, TX",
  },
  {
    quote:
      "We're big Hallmark fans and the filming locations piece was exactly what we hoped for. Seeing the actual Main Street that appears in the movies — and having Diana explain the broader Franklin story — was a perfect afternoon.",
    name: "Carol & Barbara M.",
    location: "Columbus, OH",
  },
  {
    quote:
      "My teenage daughter talked me into this tour and I'm glad she did. Diana covered the celebrity history in a way that was interesting even to someone who doesn't follow celebrity culture — the 'why Franklin?' question alone is a fascinating piece of Tennessee sociology.",
    name: "Michael T.",
    location: "Chicago, IL",
  },
];

/* ─── FAQ items ─────────────────────────────────────────────────────────────── */
const faqItems = [
  {
    question: "What celebrities live in Franklin, Tennessee?",
    answer:
      "Franklin and the surrounding Williamson County area is home to — or associated with — Keith Urban and Nicole Kidman, Carrie Underwood, Reese Witherspoon, Brad Paisley and Kimberly Williams-Paisley, Kenny Chesney, Kathie Lee Gifford, Amy Grant, Dierks Bentley, and others. The Cyrus family has long had roots in the area. Alan Jackson maintained a significant estate in Franklin for many years. The concentration of country music, entertainment, and crossover stars in this area is genuinely unusual for a town of Franklin's size.",
  },
  {
    question: "Does Reese Witherspoon live in Franklin, TN?",
    answer:
      "Reese Witherspoon owns property in Franklin's Temple Hills neighborhood and has been associated with the Franklin area for a number of years. Her Tennessee connections are well-documented and consistent with her public identification as a Southerner.",
  },
  {
    question: "Does Miley Cyrus have a house in Franklin, TN?",
    answer:
      "Miley Cyrus has family connections to the Franklin area through Billy Ray Cyrus, who has been a longtime Williamson County resident. Properties associated with the Cyrus family in the Franklin area have been referenced publicly and are part of the tour's coverage of the broader Cyrus family presence in Middle Tennessee.",
  },
  {
    question: "Which Hallmark movies were filmed in Franklin, TN?",
    answer:
      "Franklin has strong connections to Hallmark content, most notably through the Paisley family's involvement — Kimberly Williams-Paisley's work in the Sister Swap films brought significant attention to the Franklin area. The downtown historic district continues to attract film and commercial production because of its photogenic streetscape.",
  },
  {
    question: "Will we see actual celebrities on the tour?",
    answer:
      "Possibly, in the same way you might encounter someone famous at the coffee shop in any town where famous people live — but the tour is not predicated on celebrity sightings. Diana provides the context and the geography; whether anyone is home and visible from a public road on any given day is beyond prediction or guarantee.",
  },
  {
    question: "Is this a driving or walking tour?",
    answer:
      "The tour begins and ends in downtown Franklin and uses a small group van for the residential and estate portions. There is a brief walking component through the downtown filming locations area. The majority of the tour is van-based.",
  },
  {
    question: "Can I take photos from the road?",
    answer:
      "Yes. Photography from public roads is entirely appropriate and many guests bring good cameras specifically for this tour. Diana can advise on the best opportunities and angles throughout.",
  },
  {
    question: "Can I combine the celebrity tour with the historic walking tour?",
    answer:
      "Absolutely. The two tours complement each other well — the walking tour covers the history and architecture that make Franklin what it is, and the celebrity tour covers the contemporary chapter of the same story. Many guests book them on the same day or on consecutive days. Let us know when booking and we'll help coordinate the timing.",
  },
];

/* ─── Related tours ─────────────────────────────────────────────────────────── */
const relatedTours = [
  {
    name: "Historic Franklin Walking Tour",
    tagline: "The history that made Franklin what it is",
    price: "$30",
    duration: "2 hours",
    href: "/tours/historic-walking-tour",
    image: "/images/hero-historic-tour.png",
    imageAlt: "Historic Franklin Tennessee Main Street on a sunny day",
  },
  {
    name: "Private Custom Tours",
    tagline: "Celebrity homes + food scene, your group only",
    price: "From $150",
    duration: "2–4 hours",
    href: "/tours/private-tours",
    image: "/images/hero-private-tours.png",
    imageAlt: "Female tour guide with small private group in Franklin Tennessee",
  },
  {
    name: "Ghost & Haunted History Tour",
    tagline: "The weight of 1864, after dark",
    price: "$35",
    duration: "90 minutes",
    href: "/tours/ghost-tour",
    image: "/images/hero-ghost-tour.png",
    imageAlt: "Historic antebellum mansion at twilight in Franklin Tennessee",
  },
];

/* ─── Page ───────────────────────────────────────────────────────────────────── */
export default function CelebrityTourPage() {
  return (
    <>
      {/* TouristTrip, FAQPage, BreadcrumbList structured data — static JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(celebrityTourSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(celebrityTourFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(celebrityTourBreadcrumbSchema) }} />
    <div style={{ backgroundColor: "#FAFAF7" }}>

      {/* ══════════════════════════════════════════════════════════════════════
          1. HERO — full-bleed image, bottom-anchored overlay, left-aligned
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "65vh" }}
        aria-label="Celebrity Tour Hero"
      >
        <Image
          src="/images/hero-celebrity-tour.png"
          alt="Elegant estate home surrounded by rolling green Tennessee hills and white horse fencing in Williamson County at golden hour"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Directional overlay — heavier at bottom-left for text, fades top-right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(17,29,51,0.85) 0%, rgba(17,29,51,0.5) 50%, rgba(17,29,51,0.15) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Hero content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-end pb-20 pt-40"
          style={{ minHeight: "65vh" }}
        >
          {/* Eyebrow */}
          <div className="mb-5">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[10px] uppercase tracking-[0.22em] font-semibold"
              style={{
                backgroundColor: "rgba(200, 150, 62, 0.18)",
                color: "#C8963E",
                border: "1px solid rgba(200, 150, 62, 0.35)",
                fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
              }}
            >
              <CarSimpleIcon weight="bold" size={11} />
              Small Group Van Tour
            </span>
          </div>

          {/* H1 */}
          <h1
            className="font-bold mb-5 leading-none"
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', serif",
              color: "#F5F0E8",
              fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
              letterSpacing: "-0.025em",
              maxWidth: "16ch",
            }}
          >
            Celebrity Homes &amp; Filming Locations Tour
          </h1>

          {/* Subheading */}
          <p
            className="mb-8 leading-relaxed"
            style={{
              fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
              color: "rgba(245, 240, 232, 0.78)",
              fontSize: "1.1rem",
              maxWidth: "42ch",
            }}
          >
            Where country music royalty and Hollywood A-listers go to be left alone.
            The only dedicated celebrity homes tour in Franklin, Tennessee.
          </p>

          {/* Price + CTA row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm active:scale-[0.97]"
              style={{
                fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                backgroundColor: "#C8963E",
                color: "#1B2A4A",
                letterSpacing: "0.04em",
                transition: "all 0.4s cubic-bezier(0.32, 0.72, 0, 1)",
                boxShadow: "0 4px 24px rgba(200, 150, 62, 0.4)",
              }}
            >
              Book This Tour
              <span
                className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: "rgba(27, 42, 74, 0.15)" }}
              >
                <ArrowRightIcon weight="bold" size={10} />
              </span>
            </Link>

            {/* Price pill */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2"
              style={{
                backgroundColor: "rgba(27, 42, 74, 0.6)",
                border: "1px solid rgba(200, 150, 62, 0.2)",
              }}
            >
              <CurrencyDollarIcon
                weight="bold"
                size={14}
                style={{ color: "#C8963E" }}
              />
              <span
                className="text-sm font-semibold"
                style={{
                  fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#F5F0E8",
                }}
              >
                $55 / adult
              </span>
            </div>
          </div>

          {/* Quick stats row */}
          <div className="flex flex-wrap gap-3">
            {[
              { icon: <ClockIcon weight="bold" size={13} />, label: "2.5 hours" },
              { icon: <UsersIcon weight="bold" size={13} />, label: "Max 8 guests" },
              { icon: <MapPinIcon weight="bold" size={13} />, label: "Downtown Franklin" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: "rgba(17, 29, 51, 0.6)",
                  border: "1px solid rgba(245, 240, 232, 0.2)",
                  color: "rgba(245, 240, 232, 0.85)",
                  fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  letterSpacing: "0.02em",
                }}
              >
                <span style={{ color: "#C8963E" }}>{stat.icon}</span>
                {stat.label}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════
          2. TOUR OVERVIEW — cream background, opening copy
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#F5F0E8" }}
        aria-labelledby="overview-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left: editorial text */}
            <div className="lg:col-span-7">
              <p
                className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-4"
                style={{
                  fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#7A5820",
                }}
              >
                The Tour
              </p>
              <h2
                id="overview-heading"
                className="mb-6 heading-underline"
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  color: "#1B2A4A",
                  lineHeight: 1.18,
                  letterSpacing: "-0.02em",
                }}
              >
                Music City&apos;s best-kept secret is on the property records
              </h2>

              <div
                className="space-y-5 mt-8"
                style={{
                  fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#6b6456",
                  fontSize: "1.05rem",
                  lineHeight: 1.75,
                  maxWidth: "65ch",
                }}
              >
                <p>
                  Franklin, Tennessee has been called Music City&apos;s best-kept secret, which is a little ironic given the names on the property records.
                </p>
                <p>
                  Keith Urban and Nicole Kidman. Carrie Underwood. Reese Witherspoon. Brad Paisley and Kimberly Williams-Paisley. Kenny Chesney. Alan Jackson — whose former 135-acre estate became one of the most talked-about property sales in Williamson County history. The Cyrus family. Kathie Lee Gifford. Amy Grant.
                </p>
                <p>
                  This is where country music royalty, Hollywood A-listers, and the crossover between them have quietly built their lives. Not in Nashville proper — in Franklin, twenty miles south, where the estates have room to breathe and the town is small enough that the most famous person at the coffee shop is occasionally just someone&apos;s neighbor.
                </p>
                <p>
                  Nashville Tours Franklin is the only local tour company with a dedicated tour of Franklin&apos;s celebrity homes and filming locations. We cover the estates, the neighborhoods, the spots where stars have been photographed going about their actual lives, and the downtown streets that keep appearing in Hallmark movies.
                </p>
              </div>
            </div>

            {/* Right: practical info card */}
            <div className="lg:col-span-5">
              <div
                className="rounded-2xl p-1.5"
                style={{
                  backgroundColor: "rgba(27, 42, 74, 0.06)",
                  border: "1px solid rgba(27, 42, 74, 0.1)",
                }}
              >
                <div
                  className="rounded-xl p-8"
                  style={{
                    backgroundColor: "#FAFAF7",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8)",
                  }}
                >
                  <p
                    className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-6"
                    style={{
                      fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                      color: "#7A5820",
                    }}
                  >
                    Tour Details
                  </p>
                  <div className="space-y-0 divide-y" style={{ borderColor: "rgba(27, 42, 74, 0.08)" }}>
                    {practicalInfo.map((item) => (
                      <div key={item.label} className="flex items-start justify-between gap-4 py-3.5">
                        <span
                          className="text-sm font-medium"
                          style={{
                            fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                            color: "#1B2A4A",
                          }}
                        >
                          {item.label}
                        </span>
                        <span
                          className="text-sm text-right"
                          style={{
                            fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                            color: "#6b6456",
                            maxWidth: "55%",
                          }}
                        >
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="mt-7 w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300"
                    style={{
                      fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                      backgroundColor: "#1B2A4A",
                      color: "#F5F0E8",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Book This Tour
                    <ArrowRightIcon weight="bold" size={13} />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════
          3. WHAT YOU'LL EXPERIENCE — navy background, 4 highlight cards
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#1B2A4A" }}
        aria-labelledby="highlights-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <p
              className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-4"
              style={{
                fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                color: "#C8963E",
              }}
            >
              What You&apos;ll Experience
            </p>
            <h2
              id="highlights-heading"
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                color: "#F5F0E8",
                lineHeight: 1.18,
                letterSpacing: "-0.02em",
                maxWidth: "24ch",
              }}
            >
              More than drive-bys. A genuine understanding of why Franklin is this.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-1"
                style={{
                  backgroundColor: "rgba(245, 240, 232, 0.04)",
                  border: "1px solid rgba(245, 240, 232, 0.08)",
                }}
              >
                <div
                  className="rounded-xl p-8"
                  style={{
                    backgroundColor: "rgba(245, 240, 232, 0.03)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      backgroundColor: "rgba(200, 150, 62, 0.12)",
                      border: "1px solid rgba(200, 150, 62, 0.2)",
                      color: "#C8963E",
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3
                    className="mb-3 text-lg font-semibold"
                    style={{
                      fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                      color: "#F5F0E8",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                      color: "rgba(245, 240, 232, 0.62)",
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════
          4. CELEBRITIES IN FRANKLIN — warm white, asymmetric name grid
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#FAFAF7" }}
        aria-labelledby="celebrities-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            {/* Sticky left column on desktop */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <p
                className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-4"
                style={{
                  fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#7A5820",
                }}
              >
                Who Calls Franklin Home
              </p>
              <h2
                id="celebrities-heading"
                className="mb-6"
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                  color: "#1B2A4A",
                  lineHeight: 1.18,
                  letterSpacing: "-0.02em",
                }}
              >
                The names behind the estates
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{
                  fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#6b6456",
                  maxWidth: "36ch",
                }}
              >
                The concentration of country music, entertainment, and crossover stars in Williamson County is genuinely unusual for a town of Franklin&apos;s size. Diana covers each one — the property, the story, and what brought them here.
              </p>
              <div
                className="mt-8 flex items-start gap-3 rounded-xl p-5"
                style={{
                  backgroundColor: "rgba(200, 150, 62, 0.07)",
                  border: "1px solid rgba(200, 150, 62, 0.15)",
                }}
              >
                <InfoIcon weight="light" size={18} style={{ color: "#7A5820", flexShrink: 0, marginTop: "2px" }} />
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                    color: "#6b6456",
                  }}
                >
                  All viewing is from public roads. Diana provides the stories and context — the knowledge is more interesting than a close-up photograph.
                </p>
              </div>
            </div>

            {/* Right: celebrity list */}
            <div className="lg:col-span-8">
              <div className="space-y-0 divide-y" style={{ borderColor: "rgba(27, 42, 74, 0.08)" }}>
                {celebrities.map((celebrity, index) => (
                  <div
                    key={celebrity.name}
                    className="py-7 flex items-start gap-5"
                  >
                    <span
                      className="shrink-0 text-xs font-semibold mt-1"
                      style={{
                        fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                        color: "rgba(139, 106, 42, 0.5)",
                        letterSpacing: "0.05em",
                        minWidth: "24px",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3
                        className="mb-2 font-semibold"
                        style={{
                          fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                          color: "#1B2A4A",
                          fontSize: "1.15rem",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {celebrity.name}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{
                          fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                          color: "#6b6456",
                          maxWidth: "65ch",
                        }}
                      >
                        {celebrity.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════
          5. HALLMARK FILMING LOCATIONS — cream background
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#F5F0E8" }}
        aria-labelledby="hallmark-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Text column */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <p
                className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-4"
                style={{
                  fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#7A5820",
                }}
              >
                Filming Locations
              </p>
              <h2
                id="hallmark-heading"
                className="mb-6"
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)",
                  color: "#1B2A4A",
                  lineHeight: 1.18,
                  letterSpacing: "-0.02em",
                }}
              >
                Why Franklin Keeps Appearing on Screen
              </h2>
              <div
                className="space-y-4"
                style={{
                  fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#6b6456",
                  fontSize: "1.02rem",
                  lineHeight: 1.75,
                }}
              >
                <p>
                  Franklin, Tennessee has been called a &ldquo;Hallmark town,&rdquo; and the label has stuck for good reason. The downtown historic district looks like the town that every feel-good movie has been trying to construct on a backlot for decades — except it&apos;s real, it&apos;s been there for over two centuries, and it doesn&apos;t require set dressing because it simply looks the way it looks.
                </p>
                <p>
                  The connection runs deeper than the architecture. Kimberly Williams-Paisley — who is both a Franklin resident and a working actress — has starred in Hallmark content with direct Franklin connections. The Sister Swap films brought the Hallmark audience&apos;s attention to Franklin in a way that matched what travel bloggers had been saying for years: this town is absurdly photogenic.
                </p>
                <p>
                  Diana covers the specific locations in downtown Franklin that have appeared in productions — the storefronts, the public spaces, the Main Street blocks that photograph like a postcard but are also fully functioning parts of a real town.
                </p>
              </div>
            </div>

            {/* Visual accent column */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div
                className="rounded-2xl p-1.5"
                style={{
                  backgroundColor: "rgba(27, 42, 74, 0.06)",
                  border: "1px solid rgba(27, 42, 74, 0.1)",
                }}
              >
                <div
                  className="rounded-xl overflow-hidden relative"
                  style={{
                    aspectRatio: "4/3",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8)",
                  }}
                >
                  <Image
                    src="/images/hero-historic-tour.png"
                    alt="Historic Franklin Tennessee Main Street — the exact streetscape that appears in Hallmark productions"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Label overlay */}
                  <div
                    className="absolute bottom-5 left-5 right-5 rounded-xl px-5 py-4"
                    style={{
                      backgroundColor: "rgba(17, 29, 51, 0.92)",
                      border: "1px solid rgba(245, 240, 232, 0.1)",
                    }}
                  >
                    <p
                      className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-1"
                      style={{
                        fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                        color: "#C8963E",
                      }}
                    >
                      Downtown Franklin
                    </p>
                    <p
                      className="text-sm"
                      style={{
                        fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                        color: "rgba(245, 240, 232, 0.8)",
                      }}
                    >
                      Main Street blocks appearing in Hallmark productions
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════
          6. WHY FRANKLIN? — warm white background
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#FAFAF7" }}
        aria-labelledby="why-franklin-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p
              className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-4"
              style={{
                fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                color: "#7A5820",
              }}
            >
              Why Franklin?
            </p>
            <h2
              id="why-franklin-heading"
              className="mb-6"
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                color: "#1B2A4A",
                lineHeight: 1.18,
                letterSpacing: "-0.02em",
              }}
            >
              What Draws the Biggest Names in the Business Here
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{
                fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                color: "#6b6456",
                maxWidth: "60ch",
                margin: "0 auto",
              }}
            >
              The short answer: Nashville without Nashville. Understanding the long answer is part of what makes this tour interesting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px"
            style={{ backgroundColor: "rgba(27, 42, 74, 0.08)" }}
          >
            {[
              {
                number: "01",
                heading: "Privacy at scale",
                body: "Large properties on substantial acreage. The estates that aren't possible closer to Nashville — with the privacy that comes from genuine physical separation from the public.",
              },
              {
                number: "02",
                heading: "Small-town atmosphere",
                body: "Franklin has an unspoken community agreement about letting people be people. A lot of enormous talent has chosen Franklin precisely because Franklin lets them choose it without consequence.",
              },
              {
                number: "03",
                heading: "Nashville when you need it",
                body: "The music industry infrastructure in Nashville is 30 minutes away. The celebrities who've settled here get everything they need from both worlds.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="p-10 lg:p-12"
                style={{ backgroundColor: "#FAFAF7" }}
              >
                <p
                  className="text-3xl font-bold mb-5"
                  style={{
                    fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                    color: "rgba(139, 106, 42, 0.25)",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {item.number}
                </p>
                <h3
                  className="mb-3 font-semibold"
                  style={{
                    fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                    color: "#1B2A4A",
                    fontSize: "1.15rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.heading}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                    color: "#6b6456",
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════
          7. PRIVACY NOTE — cream background, important callout
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-20 lg:py-24"
        style={{ backgroundColor: "#F5F0E8" }}
        aria-label="Privacy policy for the tour"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div
            className="rounded-2xl p-1.5 max-w-3xl mx-auto"
            style={{
              backgroundColor: "rgba(27, 42, 74, 0.06)",
              border: "1px solid rgba(27, 42, 74, 0.1)",
            }}
          >
            <div
              className="rounded-xl px-8 py-10"
              style={{
                backgroundColor: "#FAFAF7",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9)",
              }}
            >
              <div className="flex items-start gap-5">
                <div
                  className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(27, 42, 74, 0.07)",
                    border: "1px solid rgba(27, 42, 74, 0.1)",
                    color: "#1B2A4A",
                  }}
                >
                  <ShieldCheckIcon weight="light" size={22} />
                </div>
                <div>
                  <h2
                    className="mb-3 font-semibold text-xl"
                    style={{
                      fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                      color: "#1B2A4A",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Drive-By, Not Walk-Up
                  </h2>
                  <p
                    className="text-sm leading-relaxed mb-3"
                    style={{
                      fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                      color: "#6b6456",
                    }}
                  >
                    This tour operates entirely on public roads. We drive past properties; we do not enter private driveways, approach private gates, or encourage any contact with residents or their staff. This is non-negotiable — not because we&apos;re required to say it, but because it&apos;s the right way to operate in a community where people have chosen to live precisely because it respects their privacy.
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                      color: "#6b6456",
                    }}
                  >
                    Diana&apos;s approach is to give you the genuine story and context behind each property — who lives there, what brought them here, what their connection to Franklin is. The knowledge is more interesting than a close-up photograph anyway.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════
          8. TESTIMONIALS — navy background
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#1B2A4A" }}
        aria-labelledby="testimonials-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <p
              className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-4"
              style={{
                fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                color: "#C8963E",
              }}
            >
              Guest Reviews
            </p>
            <h2
              id="testimonials-heading"
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                color: "#F5F0E8",
                lineHeight: 1.18,
                letterSpacing: "-0.02em",
              }}
            >
              What guests say about the tour
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl p-1"
                style={{
                  backgroundColor: "rgba(245, 240, 232, 0.04)",
                  border: "1px solid rgba(245, 240, 232, 0.08)",
                }}
              >
                <div
                  className="rounded-xl p-7 h-full flex flex-col"
                  style={{
                    backgroundColor: "rgba(245, 240, 232, 0.03)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                  }}
                >
                  <QuotesIcon
                    weight="fill"
                    size={26}
                    style={{ color: "#C8963E", opacity: 0.5, marginBottom: "1rem" }}
                  />
                  <p
                    className="text-sm leading-relaxed flex-1 mb-6"
                    style={{
                      fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                      color: "rgba(245, 240, 232, 0.72)",
                      fontStyle: "italic",
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{
                        fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                        color: "#F5F0E8",
                      }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{
                        fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                        color: "rgba(245, 240, 232, 0.45)",
                      }}
                    >
                      {t.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════
          9. FAQ — warm white background, reusing TourFaqAccordion component
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#FAFAF7" }}
        aria-labelledby="faq-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Left label column */}
            <div className="lg:col-span-4">
              <p
                className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-4"
                style={{
                  fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#7A5820",
                }}
              >
                FAQ
              </p>
              <h2
                id="faq-heading"
                className="mb-5"
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                  fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)",
                  color: "#1B2A4A",
                  lineHeight: 1.18,
                  letterSpacing: "-0.02em",
                }}
              >
                Celebrity Tour Questions Answered
              </h2>
              <p
                className="text-sm leading-relaxed"
                style={{
                  fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#6b6456",
                  maxWidth: "32ch",
                }}
              >
                These are the questions we hear most — including the ones that tend to appear in Google&apos;s featured snippets about Franklin&apos;s celebrity residents.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium"
                  style={{
                    fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                    color: "#7A5820",
                    letterSpacing: "0.02em",
                  }}
                >
                  Have another question?
                  <ArrowRightIcon weight="bold" size={13} />
                </Link>
              </div>
            </div>

            {/* Right accordion column */}
            <div className="lg:col-span-8">
              <TourFaqAccordion items={faqItems} />
            </div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════
          10. BOOKING CTA — navy background, compelling close
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#111d33" }}
        aria-label="Book the Celebrity Tour"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            <div className="lg:col-span-7">
              <p
                className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-5"
                style={{
                  fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#C8963E",
                }}
              >
                Book the Celebrity Tour
              </p>
              <h2
                className="mb-5"
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  color: "#F5F0E8",
                  lineHeight: 1.15,
                  letterSpacing: "-0.025em",
                }}
              >
                Franklin&apos;s celebrity landscape, with full context. $55 per person.
              </h2>
              <p
                className="mb-8 text-base leading-relaxed"
                style={{
                  fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "rgba(245, 240, 232, 0.65)",
                  maxWidth: "52ch",
                }}
              >
                2.5 hours. Small group of up to 8. All ages welcome. Contact Diana to check availability and book your spot.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-7 py-4 rounded-full font-semibold text-sm"
                  style={{
                    fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                    backgroundColor: "#C8963E",
                    color: "#1B2A4A",
                    letterSpacing: "0.04em",
                    boxShadow: "0 4px 20px rgba(200, 150, 62, 0.3)",
                  }}
                >
                  Book This Tour — $55
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(27, 42, 74, 0.15)" }}
                  >
                    <ArrowRightIcon weight="bold" size={12} />
                  </span>
                </Link>
                <a
                  href="tel:+16612019003"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-medium text-sm"
                  style={{
                    fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                    backgroundColor: "rgba(245, 240, 232, 0.08)",
                    border: "1px solid rgba(245, 240, 232, 0.15)",
                    color: "rgba(245, 240, 232, 0.8)",
                    letterSpacing: "0.02em",
                  }}
                >
                  <PhoneIcon weight="bold" size={13} />
                  (661) 201-9003
                </a>
              </div>
            </div>

            {/* Trust signals */}
            <div className="lg:col-span-5">
              <div className="space-y-4">
                {[
                  "Only dedicated celebrity homes tour in Franklin",
                  "Expert local knowledge — not a scripted script",
                  "Photography welcome from public roads",
                  "Small groups of max 8 — you can actually hear",
                  "Combine with the historic walking tour same day",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div
                      className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ backgroundColor: "rgba(200, 150, 62, 0.15)", color: "#C8963E" }}
                    >
                      <CheckIcon weight="bold" size={11} />
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                        color: "rgba(245, 240, 232, 0.65)",
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════
          11. RELATED TOURS — cream background
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#F5F0E8" }}
        aria-labelledby="related-tours-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <p
              className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-4"
              style={{
                fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                color: "#7A5820",
              }}
            >
              Two more ways to know Franklin
            </p>
            <h2
              id="related-tours-heading"
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)",
                color: "#1B2A4A",
                lineHeight: 1.18,
                letterSpacing: "-0.02em",
              }}
            >
              More Franklin experiences
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedTours.map((tour) => (
              <Link
                key={tour.href}
                href={tour.href}
                className="group block"
                aria-label={`View ${tour.name}`}
              >
                <div
                  className="rounded-2xl p-1.5 transition-all duration-500"
                  style={{
                    backgroundColor: "rgba(27, 42, 74, 0.06)",
                    border: "1px solid rgba(27, 42, 74, 0.1)",
                  }}
                >
                  <div
                    className="rounded-xl overflow-hidden"
                    style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8)" }}
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden" style={{ aspectRatio: "3/2" }}>
                      <Image
                        src={tour.image}
                        alt={tour.imageAlt}
                        fill
                        className="object-cover object-center transition-transform duration-700"
                        style={{ transform: "scale(1)" }}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(17,29,51,0.5) 0%, transparent 60%)",
                        }}
                        aria-hidden="true"
                      />
                    </div>
                    {/* Card body */}
                    <div
                      className="px-6 py-6"
                      style={{ backgroundColor: "#FAFAF7" }}
                    >
                      <p
                        className="text-[10px] uppercase tracking-[0.18em] font-semibold mb-2"
                        style={{
                          fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                          color: "#7A5820",
                        }}
                      >
                        {tour.price}
                      </p>
                      <h3
                        className="mb-2 font-semibold text-base"
                        style={{
                          fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                          color: "#1B2A4A",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {tour.name}
                      </h3>
                      <p
                        className="text-sm mb-5"
                        style={{
                          fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                          color: "#6b6456",
                        }}
                      >
                        {tour.tagline}
                      </p>
                      <div className="flex items-center gap-2">
                        <span
                          className="text-xs font-medium"
                          style={{
                            fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                            color: "#7A5820",
                          }}
                        >
                          View tour
                        </span>
                        <ArrowRightIcon weight="bold" size={12} style={{ color: "#7A5820" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
    </>
  );
}
