import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ClockIcon,
  CurrencyDollarIcon,
  UsersIcon,
  MapPinIcon,
  ArrowRightIcon,
  QuotesIcon,
  ForkKnifeIcon,
  PlantIcon,
  PintGlassIcon,
  BreadIcon,
  WineIcon,
  StorefrontIcon,
  GhostIcon,
  BuildingsIcon,
} from "@phosphor-icons/react/dist/ssr";
import TourFaqAccordion from "@/components/TourFaqAccordion";
import type { TourFaqItem } from "@/components/TourFaqAccordion";

export const metadata: Metadata = {
  title: "Food Tour Franklin TN | Southern Culinary Walking Experience",
  description:
    "Taste your way through Franklin's best Southern restaurants & craft spirits on our guided food tour. Small groups, big flavours. Book now.",
  alternates: {
    canonical: "https://nashvilletoursfranklin.com/tours/food-tour",
  },
  openGraph: {
    title: "Food Tour Franklin TN | Southern Culinary Walking Experience",
    description:
      "Taste your way through Franklin's best Southern restaurants & craft spirits on our guided food tour. Small groups, big flavours. Book now.",
    url: "https://nashvilletoursfranklin.com/tours/food-tour",
    type: "website",
  },
  twitter: {
    title: "Food Tour Franklin TN | Southern Culinary Walking Experience",
    description:
      "Taste your way through Franklin's best Southern restaurants & craft spirits on our guided food tour. Small groups, big flavours. Book now.",
  },
};

// JSON-LD: TouristTrip schema — static, no XSS risk
const foodTourSchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "@id": "https://nashvilletoursfranklin.com/tours/food-tour#trip",
  name: "Franklin Food & Spirits Tour",
  description:
    "A curated tasting tour through Franklin's best Southern restaurants, bakeries, and craft cocktail bars. Five to six stops with generous tastings, drink pairings, and the stories behind Franklin's food scene. 3 hours, downtown Franklin, TN.",
  url: "https://nashvilletoursfranklin.com/tours/food-tour",
  touristType: "Food Tour, Culinary Tour",
  duration: "PT3H",
  provider: {
    "@type": "TourOperator",
    "@id": "https://nashvilletoursfranklin.com/#organization",
    name: "Nashville Tours Franklin",
  },
  offers: {
    "@type": "Offer",
    price: "85",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://nashvilletoursfranklin.com/contact",
  },
  itinerary: {
    "@type": "ItemList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Downtown Franklin meeting point" },
      { "@type": "ListItem", position: 2, name: "Southern restaurant tasting stop 1" },
      { "@type": "ListItem", position: 3, name: "Artisan bakery or farm-to-table stop" },
      { "@type": "ListItem", position: 4, name: "Craft spirits or cocktail bar tasting" },
      { "@type": "ListItem", position: 5, name: "Additional Southern cuisine stops (5-6 total)" },
    ],
  },
};

// JSON-LD: FAQPage for food tour — static, no XSS risk
const foodTourFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much food is actually included?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Plenty. The tour is designed so that five to six generous tastings add up to the equivalent of a full meal. Guests who arrive hungry typically leave full.",
      },
    },
    {
      "@type": "Question",
      name: "Is the food tour suitable for vegetarians?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every stop on the tour route has vegetarian options, and Diana selects the stops with dietary diversity in mind. If you are vegan or have specific severe allergies, let us know when booking so we can confirm the right accommodations.",
      },
    },
    {
      "@type": "Question",
      name: "Are alcoholic drinks included in the price?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The spirits stops include a craft cocktail or local beer or wine tasting as part of the tour experience. Non-alcoholic alternatives are available at every stop.",
      },
    },
    {
      "@type": "Question",
      name: "Which restaurants do you visit on the food tour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The exact lineup shifts seasonally. Diana updates the route to reflect the current best of Franklin's food scene and what is at its best in the current season. This keeps the tour fresh for repeat guests and ensures you are always getting the genuinely good stuff.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book the food tour for a large or private group?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. The food tour is available as a private experience for groups of any size. Contact us directly to arrange a private food tour — Diana will coordinate with each stop to ensure the experience works for your group.",
      },
    },
  ],
};

// JSON-LD: BreadcrumbList for food tour
const foodTourBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nashvilletoursfranklin.com" },
    { "@type": "ListItem", position: 2, name: "Franklin Food & Spirits Tour", item: "https://nashvilletoursfranklin.com/tours/food-tour" },
  ],
};

/* ─── Tour-specific FAQ data ─────────────────────────────────────────────── */
const faqs: TourFaqItem[] = [
  {
    question: "How much food is actually included?",
    answer:
      "Plenty. The tour is designed so that five to six generous tastings add up to the equivalent of a full meal. Guests who arrive hungry typically leave full. We're not fans of food tours that charge $80 and offer a few bites — this tour is built to be worth the price in food alone, and then some.",
  },
  {
    question: "Is the food tour suitable for vegetarians?",
    answer:
      "Yes. Every stop on the tour route has vegetarian options, and Diana selects the stops with dietary diversity in mind. If you're vegan or have specific severe allergies, let us know when booking so we can confirm the right accommodations.",
  },
  {
    question: "Do I need to eat beforehand?",
    answer:
      "A light breakfast if you're on a morning departure; otherwise, arrive hungry. The portions are generous and the tour is designed to be a meal, not a supplement to one.",
  },
  {
    question: "Are alcoholic drinks included in the price?",
    answer:
      "Yes. The spirits stops include a craft cocktail or local beer/wine tasting as part of the tour experience. Non-alcoholic alternatives are available at every stop — just let Diana know when you arrive.",
  },
  {
    question: "Which restaurants do you visit?",
    answer:
      "The exact lineup shifts seasonally. Diana updates the route to reflect the current best of Franklin's food scene and what's at its best in the current season. This keeps the tour fresh for repeat guests and ensures you're always getting the genuinely good stuff rather than a fixed list that never changes.",
  },
  {
    question: "Can I book the food tour for a large or private group?",
    answer:
      "Absolutely. The food tour is available as a private experience for groups of any size. Contact us directly to arrange a private food tour — Diana will coordinate with each stop to ensure the experience works for your group.",
  },
];

/* ─── Related tours ──────────────────────────────────────────────────────── */
const relatedTours = [
  {
    name: "Historic Franklin Walking Tour",
    tagline: "Six city blocks, two centuries of history. The full context of where you just ate.",
    price: "$30",
    duration: "2 hours",
    href: "/tours/historic-walking-tour",
    image: "/images/hero-historic-tour.png",
    imageAlt:
      "Historic Franklin Tennessee Main Street on a sunny day, preserved 19th-century brick storefronts",
    icon: <BuildingsIcon weight="light" size={16} />,
    type: "Daytime tour",
  },
  {
    name: "Ghost & Haunted History Tour",
    tagline: "When the restaurants close, Franklin has more stories to tell.",
    price: "$35",
    duration: "90 minutes",
    href: "/tours/ghost-tour",
    image: "/images/hero-ghost-tour.png",
    imageAlt:
      "Historic antebellum mansion at twilight, illuminated windows glowing warm amber against a deep purple sky",
    icon: <GhostIcon weight="light" size={16} />,
    type: "Evening tour",
  },
];

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function FoodTourPage() {
  return (
    <>
      {/* TouristTrip, FAQPage, BreadcrumbList structured data — static JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(foodTourSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(foodTourFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(foodTourBreadcrumbSchema) }} />
    <div style={{ backgroundColor: "#FAFAF7" }}>

      {/* ════════════════════════════════════════════════════════════════════
          1. HERO — warm food spread image, editorial left-anchored overlay
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-[100dvh] flex items-end"
        aria-label="Food Tour Hero"
      >
        <Image
          src="/images/hero-food-tour.png"
          alt="Artisanal Southern food spread including fried chicken, cornbread skillet, biscuits and two craft bourbon cocktails in a warm Franklin restaurant"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Warm, rich overlay — deeper at bottom for text, lighter at top */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,16,35,0.2) 0%, rgba(10,16,35,0.45) 40%, rgba(10,16,35,0.88) 100%)",
          }}
          aria-hidden="true"
        />
        {/* Left darkening for editorial text column */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(10,16,35,0.65) 0%, transparent 55%)",
          }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pb-16 pt-32">
          <div className="flex items-start gap-6 lg:gap-8">
            {/* Vertical gold rule — desktop only */}
            <div
              className="hidden lg:block shrink-0 w-px self-stretch"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, #C8963E 20%, #C8963E 80%, transparent 100%)",
                minHeight: "200px",
              }}
              aria-hidden="true"
            />

            <div style={{ maxWidth: "620px" }}>
              {/* Eyebrow badges */}
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[10px] uppercase tracking-[0.22em] font-semibold"
                  style={{
                    backgroundColor: "rgba(200, 150, 62, 0.18)",
                    color: "#C8963E",
                    border: "1px solid rgba(200, 150, 62, 0.35)",
                    fontFamily:
                      "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  }}
                >
                  <ForkKnifeIcon weight="fill" size={10} />
                  5&ndash;6 Stops
                </span>
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[10px] uppercase tracking-[0.22em] font-semibold"
                  style={{
                    backgroundColor: "rgba(245, 240, 232, 0.1)",
                    color: "rgba(245, 240, 232, 0.75)",
                    border: "1px solid rgba(245, 240, 232, 0.15)",
                    fontFamily:
                      "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  }}
                >
                  3 hours
                </span>
              </div>

              {/* H1 */}
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-5"
                style={{
                  fontFamily:
                    "var(--font-playfair), 'Playfair Display', serif",
                  color: "#F5F0E8",
                  letterSpacing: "-0.025em",
                }}
              >
                Franklin, Tennessee Food &amp; Spirits Tour:{" "}
                <em className="not-italic" style={{ color: "#C8963E" }}>
                  Taste the South&rsquo;s Most Charming Town
                </em>
              </h1>

              <p
                className="text-base md:text-lg leading-relaxed mb-8"
                style={{
                  fontFamily:
                    "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "rgba(245, 240, 232, 0.72)",
                  maxWidth: "50ch",
                  lineHeight: "1.8",
                }}
              >
                Franklin has no business having this good a food scene. Five to
                six stops, generous tastings at every one. Come hungry.
              </p>

              {/* Price + CTA row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm active:scale-[0.97]"
                  style={{
                    fontFamily:
                      "var(--font-source-sans), 'Source Sans 3', sans-serif",
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
                      fontFamily:
                        "var(--font-source-sans), 'Source Sans 3', sans-serif",
                      color: "#F5F0E8",
                    }}
                  >
                    $85 / adult
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          2. QUICK-REFERENCE STATS — cream background, pill row
      ════════════════════════════════════════════════════════════════════ */}
      <section
        style={{ backgroundColor: "#F5F0E8" }}
        aria-label="Tour details at a glance"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
          <div className="flex flex-wrap gap-3">
            {[
              {
                icon: <CurrencyDollarIcon weight="fill" size={14} />,
                label: "$85 / adult",
              },
              {
                icon: <ClockIcon weight="fill" size={14} />,
                label: "3 hours",
              },
              {
                icon: <ForkKnifeIcon weight="fill" size={14} />,
                label: "5–6 stops",
              },
              {
                icon: <MapPinIcon weight="fill" size={14} />,
                label: "Downtown Franklin",
              },
              {
                icon: <UsersIcon weight="fill" size={14} />,
                label: "Max 12 guests",
              },
              {
                icon: <PlantIcon weight="fill" size={14} />,
                label: "Vegetarian-friendly",
              },
              {
                icon: <WineIcon weight="fill" size={14} />,
                label: "Spirits included",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2"
                style={{
                  backgroundColor: "#FAFAF7",
                  border: "1px solid rgba(27, 42, 74, 0.1)",
                }}
              >
                <span style={{ color: "#7A5820" }}>{stat.icon}</span>
                <span
                  className="text-sm font-medium"
                  style={{
                    fontFamily:
                      "var(--font-source-sans), 'Source Sans 3', sans-serif",
                    color: "#1B2A4A",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          3. OPENING — cream background, editorial pull-quote layout
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#F5F0E8" }}
        aria-label="Tour introduction"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-3 lg:pt-2">
              <span
                className="inline-block text-[10px] uppercase tracking-[0.22em] font-semibold mb-4"
                style={{
                  fontFamily:
                    "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#7A5820",
                }}
              >
                About This Tour
              </span>
              <div
                className="w-8 h-px"
                style={{ backgroundColor: "#C8963E" }}
                aria-hidden="true"
              />
            </div>

            <div className="lg:col-span-9">
              <p
                className="text-2xl md:text-3xl font-bold leading-snug mb-8"
                style={{
                  fontFamily:
                    "var(--font-playfair), 'Playfair Display', serif",
                  color: "#1B2A4A",
                  letterSpacing: "-0.02em",
                  maxWidth: "28ch",
                }}
              >
                Franklin, Tennessee has no business having this good a food scene.
              </p>

              <div
                className="space-y-5 text-base leading-relaxed"
                style={{
                  fontFamily:
                    "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#6b6456",
                  maxWidth: "68ch",
                }}
              >
                <p>
                  That&rsquo;s not an insult &mdash; it&rsquo;s a reflection of
                  how consistently the restaurants, bakeries, and bars in this
                  14,000-person town punch above their weight. Farm-to-table
                  sourcing is table stakes here, not a marketing pitch. The
                  kitchens are run by chefs who chose Franklin deliberately
                  &mdash; not because it was the easy path, but because the
                  community takes food seriously and gives good restaurants room
                  to breathe.
                </p>
                <p>
                  Nashville gets most of the culinary attention in Middle
                  Tennessee, and it deserves a lot of it. But many Nashville
                  food professionals will quietly tell you that the best meal
                  they&rsquo;ve had recently was in Franklin, not Nashville.
                  That gap between reputation and reality is exactly what makes
                  this tour worth doing.
                </p>
                <p>
                  The Franklin Food &amp; Spirits Tour covers five to six stops
                  across downtown Franklin over three hours. Each stop involves
                  a generous tasting &mdash; not a nibble, but a real portion
                  designed to add up to a full meal by the end of the tour. At
                  each stop, Diana Berry covers not just the food but the story:
                  how the restaurant came to be here, who&rsquo;s behind the
                  kitchen, what makes this particular dish or cocktail
                  representative of what Franklin&rsquo;s food scene is about.
                </p>
                <p className="font-semibold" style={{ color: "#1B2A4A" }}>
                  Come hungry. That&rsquo;s the main instruction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          4. THE STOPS — navy background, 5 experience cards
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#1B2A4A" }}
        aria-label="Tour stops"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <span
              className="inline-block text-[10px] uppercase tracking-[0.22em] font-semibold mb-4"
              style={{
                fontFamily:
                  "var(--font-source-sans), 'Source Sans 3', sans-serif",
                color: "#C8963E",
              }}
            >
              The Stops
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              style={{
                fontFamily:
                  "var(--font-playfair), 'Playfair Display', serif",
                color: "#F5F0E8",
                letterSpacing: "-0.02em",
                maxWidth: "20ch",
              }}
            >
              What You&rsquo;ll Taste
            </h2>
            <p
              className="mt-4 text-base"
              style={{
                fontFamily:
                  "var(--font-source-sans), 'Source Sans 3', sans-serif",
                color: "rgba(245, 240, 232, 0.6)",
                maxWidth: "58ch",
              }}
            >
              The exact lineup shifts seasonally to reflect what&rsquo;s best in
              the current rotation of Franklin&rsquo;s independent restaurants
              and bars. Below is the format and style of what guests experience.
            </p>
          </div>

          {/* Stops grid — 2-col with one featured and smaller cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">

            {/* Stop 1 — Southern Comfort, featured */}
            <div
              className="p-1.5 rounded-2xl lg:row-span-2"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(200, 150, 62, 0.15)",
              }}
            >
              <div
                className="rounded-xl h-full p-8 lg:p-10"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-6"
                  style={{
                    backgroundColor: "rgba(200, 150, 62, 0.15)",
                    border: "1px solid rgba(200, 150, 62, 0.2)",
                  }}
                >
                  <ForkKnifeIcon
                    weight="fill"
                    size={18}
                    style={{ color: "#C8963E" }}
                  />
                </div>
                <h3
                  className="text-xl md:text-2xl font-bold mb-4"
                  style={{
                    fontFamily:
                      "var(--font-playfair), 'Playfair Display', serif",
                    color: "#F5F0E8",
                    letterSpacing: "-0.015em",
                  }}
                >
                  Southern Comfort, Elevated
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{
                    fontFamily:
                      "var(--font-source-sans), 'Source Sans 3', sans-serif",
                    color: "rgba(245, 240, 232, 0.65)",
                  }}
                >
                  The tour typically includes at least one stop built around the
                  interpretation of classic Southern food by a chef who&rsquo;s
                  taken it seriously. Think biscuits made with locally-milled
                  flour, pimento cheese made in-house, country ham sourced from
                  within the state. Not a nostalgia act &mdash; a genuine
                  argument that Southern cooking, done with intention, belongs
                  in the same conversation as any other serious American cuisine.
                </p>

                <div
                  className="mt-8 pt-6"
                  style={{
                    borderTop: "1px solid rgba(200, 150, 62, 0.15)",
                  }}
                >
                  <p
                    className="text-xs uppercase tracking-[0.18em] font-medium"
                    style={{
                      fontFamily:
                        "var(--font-source-sans), 'Source Sans 3', sans-serif",
                      color: "#C8963E",
                    }}
                  >
                    Sourced locally, made with intention
                  </p>
                </div>
              </div>
            </div>

            {/* Right column — four stacked stops */}
            <div className="grid grid-cols-1 gap-5 lg:gap-6">
              {/* Stop 2 — Farm to Table */}
              <div
                className="p-1.5 rounded-2xl"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(200, 150, 62, 0.15)",
                }}
              >
                <div
                  className="rounded-xl p-7 lg:p-8"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: "rgba(200, 150, 62, 0.12)",
                        color: "#C8963E",
                      }}
                    >
                      <PlantIcon weight="fill" size={15} />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-bold mb-3"
                        style={{
                          fontFamily:
                            "var(--font-playfair), 'Playfair Display', serif",
                          color: "#F5F0E8",
                          letterSpacing: "-0.015em",
                        }}
                      >
                        Farm-to-Table Franklin
                      </h3>
                      <p
                        className="text-base leading-relaxed"
                        style={{
                          fontFamily:
                            "var(--font-source-sans), 'Source Sans 3', sans-serif",
                          color: "rgba(245, 240, 232, 0.65)",
                        }}
                      >
                        Williamson County has a significant agricultural
                        tradition, and several of Franklin&rsquo;s best
                        restaurants have built their menus around direct
                        relationships with local farms. A tour stop here might
                        mean heirloom vegetables from a farm twenty minutes
                        away, heritage breed pork, or seasonal preparations
                        that change week to week based on what&rsquo;s
                        available. Diana covers the sourcing story because
                        it&rsquo;s genuinely interesting and because it
                        explains why the food tastes the way it does.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stop 3 — Bakery */}
              <div
                className="p-1.5 rounded-2xl"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(200, 150, 62, 0.15)",
                }}
              >
                <div
                  className="rounded-xl p-7 lg:p-8"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: "rgba(200, 150, 62, 0.12)",
                        color: "#C8963E",
                      }}
                    >
                      <BreadIcon weight="fill" size={15} />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-bold mb-3"
                        style={{
                          fontFamily:
                            "var(--font-playfair), 'Playfair Display', serif",
                          color: "#F5F0E8",
                          letterSpacing: "-0.015em",
                        }}
                      >
                        A Franklin Bakery
                      </h3>
                      <p
                        className="text-base leading-relaxed"
                        style={{
                          fontFamily:
                            "var(--font-source-sans), 'Source Sans 3', sans-serif",
                          color: "rgba(245, 240, 232, 0.65)",
                        }}
                      >
                        Franklin has developed a serious bakery culture over the
                        past decade. A stop at one of the downtown bakeries
                        &mdash; for something sweet, something pastry-based, or
                        something that lands somewhere in between &mdash; is a
                        regular part of the tour. The coffee pairing is worth
                        noting: Franklin&rsquo;s independent coffee program is
                        better than most cities twice its size.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second row — 2 more stops side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 mt-5 lg:mt-6">
            {/* Stop 4 — Craft Spirits */}
            <div
              className="p-1.5 rounded-2xl"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(200, 150, 62, 0.15)",
              }}
            >
              <div
                className="rounded-xl p-7 lg:p-8 h-full"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: "rgba(200, 150, 62, 0.12)",
                      color: "#C8963E",
                    }}
                  >
                    <PintGlassIcon weight="fill" size={15} />
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold mb-3"
                      style={{
                        fontFamily:
                          "var(--font-playfair), 'Playfair Display', serif",
                        color: "#F5F0E8",
                        letterSpacing: "-0.015em",
                      }}
                    >
                      Craft Spirits and Cocktails
                    </h3>
                    <p
                      className="text-base leading-relaxed"
                      style={{
                        fontFamily:
                          "var(--font-source-sans), 'Source Sans 3', sans-serif",
                        color: "rgba(245, 240, 232, 0.65)",
                      }}
                    >
                      The &ldquo;Spirits&rdquo; in Food &amp; Spirits is not
                      incidental. Tennessee has a deep tradition in distilling,
                      and Franklin&rsquo;s bar scene reflects it thoughtfully.
                      A tour stop at a craft cocktail bar &mdash; with a
                      Tennessee whiskey drink or a cocktail built around local
                      spirits &mdash; is part of the experience. Diana covers
                      the distilling tradition, what makes Tennessee whiskey
                      distinct, and how Franklin&rsquo;s bartenders are working
                      within and against that tradition. Non-alcoholic
                      alternatives are always available.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stop 5 — Hidden Gem */}
            <div
              className="p-1.5 rounded-2xl"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(200, 150, 62, 0.15)",
              }}
            >
              <div
                className="rounded-xl p-7 lg:p-8 h-full"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: "rgba(200, 150, 62, 0.12)",
                      color: "#C8963E",
                    }}
                  >
                    <StorefrontIcon weight="fill" size={15} />
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold mb-3"
                      style={{
                        fontFamily:
                          "var(--font-playfair), 'Playfair Display', serif",
                        color: "#F5F0E8",
                        letterSpacing: "-0.015em",
                      }}
                    >
                      A Neighborhood Spot You Wouldn&rsquo;t Find On Your Own
                    </h3>
                    <p
                      className="text-base leading-relaxed"
                      style={{
                        fontFamily:
                          "var(--font-source-sans), 'Source Sans 3', sans-serif",
                        color: "rgba(245, 240, 232, 0.65)",
                      }}
                    >
                      Every tour route includes at least one stop that
                      isn&rsquo;t on the first page of Google results for
                      Franklin restaurants &mdash; a neighborhood restaurant,
                      a newer spot that hasn&rsquo;t found its audience yet,
                      or a place that&rsquo;s been doing excellent work for
                      years without much outside attention. This is the stop
                      guests most often return to on their own after the tour.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          5. MORE THAN JUST EATING — cream background, editorial prose
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#F5F0E8" }}
        aria-label="The stories behind the food"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-3 lg:pt-2">
              <span
                className="inline-block text-[10px] uppercase tracking-[0.22em] font-semibold mb-4"
                style={{
                  fontFamily:
                    "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#7A5820",
                }}
              >
                More Than Just Eating
              </span>
              <div
                className="w-8 h-px"
                style={{ backgroundColor: "#C8963E" }}
                aria-hidden="true"
              />
            </div>

            <div className="lg:col-span-9">
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6"
                style={{
                  fontFamily:
                    "var(--font-playfair), 'Playfair Display', serif",
                  color: "#1B2A4A",
                  letterSpacing: "-0.02em",
                  maxWidth: "28ch",
                }}
              >
                The Stories Behind the Food
              </h2>

              <div
                className="space-y-5 text-base leading-relaxed"
                style={{
                  fontFamily:
                    "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#6b6456",
                  maxWidth: "68ch",
                }}
              >
                <p>
                  Diana treats the food tour the same way she treats every tour
                  she leads: the food is the entry point, not the whole story.
                  Behind every stop is a person who decided to build something
                  in Franklin, and those decisions were made against a backdrop
                  of a community that has been shaping its own identity
                  deliberately for a long time.
                </p>
                <p>
                  You&rsquo;ll hear about the specific ways Franklin&rsquo;s
                  residential and cultural growth has changed what the restaurant
                  scene looks like. You&rsquo;ll hear about the chefs and
                  restaurateurs who chose this town over Nashville or Nashville
                  over this town and why. And you&rsquo;ll hear about the way
                  food fits into Franklin&rsquo;s broader identity as a place
                  that values craft and quality and has the income base to
                  support it.
                </p>
                <p>
                  None of this is a lecture. It comes out in conversation, at
                  the table or the bar, over food that&rsquo;s worth talking
                  about.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          6. PERFECT FOR — warm white, prose + audience chips
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#FAFAF7" }}
        aria-label="Who the food tour is perfect for"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-3 lg:pt-2">
              <span
                className="inline-block text-[10px] uppercase tracking-[0.22em] font-semibold mb-4"
                style={{
                  fontFamily:
                    "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#7A5820",
                }}
              >
                Perfect For
              </span>
              <div
                className="w-8 h-px"
                style={{ backgroundColor: "#C8963E" }}
                aria-hidden="true"
              />
            </div>

            <div className="lg:col-span-9">
              <p
                className="text-base leading-relaxed mb-8"
                style={{
                  fontFamily:
                    "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#6b6456",
                  maxWidth: "68ch",
                }}
              >
                The Franklin Food &amp; Spirits Tour draws food-curious visitors
                who want to understand a place through its kitchens, couples on
                date nights who want something more memorable than a single
                restaurant reservation, girls&rsquo; trips and bachelorette
                weekends looking for an afternoon with substance, Nashville
                visitors who want the Franklin food scene without the
                trial-and-error of figuring it out alone, and locals who know
                the food scene exists but haven&rsquo;t made it their business
                to know it deeply.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "Food-curious visitors",
                  "Date nights",
                  "Bachelorette weekends",
                  "Girls\' trips",
                  "Nashville day-trippers",
                  "Franklin locals",
                  "Private groups",
                ].map((audience) => (
                  <span
                    key={audience}
                    className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium"
                    style={{
                      fontFamily:
                        "var(--font-source-sans), 'Source Sans 3', sans-serif",
                      backgroundColor: "#F5F0E8",
                      color: "#1B2A4A",
                      border: "1px solid rgba(27, 42, 74, 0.12)",
                    }}
                  >
                    {audience}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          7. COME PREPARED — navy background, practical grid
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#1B2A4A" }}
        aria-label="Practical information"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <span
              className="inline-block text-[10px] uppercase tracking-[0.22em] font-semibold mb-4"
              style={{
                fontFamily:
                  "var(--font-source-sans), 'Source Sans 3', sans-serif",
                color: "#C8963E",
              }}
            >
              Practical Information
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold leading-tight"
              style={{
                fontFamily:
                  "var(--font-playfair), 'Playfair Display', serif",
                color: "#F5F0E8",
                letterSpacing: "-0.02em",
                maxWidth: "22ch",
              }}
            >
              Come Prepared
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                icon: <ForkKnifeIcon weight="fill" size={20} />,
                heading: "Arrive hungry",
                body: "Eat a light breakfast if you're on a morning tour. The food portions are generous and add up to a full meal across five to six stops. Most guests describe themselves as comfortably full by the end.",
              },
              {
                icon: <ClockIcon weight="fill" size={20} />,
                heading: "Moderate walking involved",
                body: "Stops are spread across downtown Franklin, and the walk between them is part of the experience. The total distance is roughly a mile at a comfortable pace.",
              },
              {
                icon: <PlantIcon weight="fill" size={20} />,
                heading: "Dietary restrictions welcome",
                body: "Let us know about dietary restrictions when you book. Vegetarian options are available at every stop. For other needs — gluten-free, vegan, severe allergies — mention them when booking and Diana will confirm accommodations.",
              },
              {
                icon: <WineIcon weight="fill" size={20} />,
                heading: "Drinks included, alternatives available",
                body: "Alcoholic drinks are included at the spirits stops. If you prefer non-alcoholic alternatives, they are available at every stop. The food portion of the tour is fully satisfying without the drinks component.",
              },
            ].map((item) => (
              <div
                key={item.heading}
                className="p-1.5 rounded-2xl"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(200, 150, 62, 0.12)",
                }}
              >
                <div
                  className="rounded-xl p-7 h-full"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: "rgba(200, 150, 62, 0.12)",
                      color: "#C8963E",
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3
                    className="text-base font-semibold mb-2"
                    style={{
                      fontFamily:
                        "var(--font-playfair), 'Playfair Display', serif",
                      color: "#F5F0E8",
                    }}
                  >
                    {item.heading}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      fontFamily:
                        "var(--font-source-sans), 'Source Sans 3', sans-serif",
                      color: "rgba(245, 240, 232, 0.6)",
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

      {/* ════════════════════════════════════════════════════════════════════
          8. TESTIMONIALS — cream background, 3-col quote cards
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#F5F0E8" }}
        aria-label="Guest testimonials"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <span
              className="inline-block text-[10px] uppercase tracking-[0.22em] font-semibold mb-4"
              style={{
                fontFamily:
                  "var(--font-source-sans), 'Source Sans 3', sans-serif",
                color: "#7A5820",
              }}
            >
              What Guests Say
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold leading-tight"
              style={{
                fontFamily:
                  "var(--font-playfair), 'Playfair Display', serif",
                color: "#1B2A4A",
                letterSpacing: "-0.02em",
                maxWidth: "24ch",
              }}
            >
              From the guests themselves
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "I've done food tours in a lot of cities. The Franklin one is in my top three, and it's probably the most I've learned about a specific food culture on any of them. Diana knows this scene from the inside. Every stop meant something.",
                name: "Andrea S.",
                location: "Atlanta, GA",
              },
              {
                quote:
                  "We came for bachelorette weekend and this was everyone's unanimous favorite part of the trip. Five stops, each one genuinely delicious, and Diana kept the conversation going in a way that made the whole thing feel like a perfect afternoon with a very well-connected local friend.",
                name: "Stephanie K.",
                location: "Atlanta, GA",
              },
              {
                quote:
                  "The distillery stop alone was worth the price. I've lived in Tennessee my whole life and didn't know what I didn't know about the history of Tennessee whiskey. Diana's context makes everything better.",
                name: "Patrick H.",
                location: "Nashville, TN",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="p-1.5 rounded-2xl"
                style={{
                  backgroundColor: "#FAFAF7",
                  border: "1px solid rgba(27, 42, 74, 0.08)",
                }}
              >
                <div
                  className="rounded-xl p-7 h-full flex flex-col"
                  style={{
                    backgroundColor: "#FAFAF7",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,1)",
                  }}
                >
                  <QuotesIcon
                    weight="fill"
                    size={24}
                    style={{ color: "#C8963E", marginBottom: "1rem" }}
                  />
                  <p
                    className="text-base leading-relaxed mb-6 flex-1"
                    style={{
                      fontFamily:
                        "var(--font-source-sans), 'Source Sans 3', sans-serif",
                      color: "#6b6456",
                      fontStyle: "italic",
                    }}
                  >
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div
                    className="pt-5"
                    style={{
                      borderTop: "1px solid rgba(27, 42, 74, 0.08)",
                    }}
                  >
                    <p
                      className="text-sm font-semibold"
                      style={{
                        fontFamily:
                          "var(--font-source-sans), 'Source Sans 3', sans-serif",
                        color: "#1B2A4A",
                      }}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{
                        fontFamily:
                          "var(--font-source-sans), 'Source Sans 3', sans-serif",
                        color: "#7A5820",
                      }}
                    >
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          9. FAQ — warm white background, left-label + right accordion
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#FAFAF7" }}
        aria-label="Frequently asked questions"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <span
                className="inline-block text-[10px] uppercase tracking-[0.22em] font-semibold mb-4"
                style={{
                  fontFamily:
                    "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#7A5820",
                }}
              >
                Questions Answered
              </span>
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-5"
                style={{
                  fontFamily:
                    "var(--font-playfair), 'Playfair Display', serif",
                  color: "#1B2A4A",
                  letterSpacing: "-0.02em",
                }}
              >
                Food Tour Questions Answered
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{
                  fontFamily:
                    "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#6b6456",
                }}
              >
                Still have a question? Call Diana at{" "}
                <a
                  href="tel:+16612019003"
                  className="font-semibold"
                  style={{ color: "#7A5820" }}
                >
                  (661) 201-9003
                </a>
              </p>
            </div>

            <div className="lg:col-span-8">
              <TourFaqAccordion items={faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          10. BOOKING CTA — navy background, split layout
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#1B2A4A" }}
        aria-label="Book the food tour"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <span
                className="inline-block text-[10px] uppercase tracking-[0.22em] font-semibold mb-5"
                style={{
                  fontFamily:
                    "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#C8963E",
                }}
              >
                Book the Food Tour
              </span>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
                style={{
                  fontFamily:
                    "var(--font-playfair), 'Playfair Display', serif",
                  color: "#F5F0E8",
                  letterSpacing: "-0.025em",
                  maxWidth: "24ch",
                }}
              >
                Three hours. Five stops. Every one of them worth coming back for.
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{
                  fontFamily:
                    "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "rgba(245, 240, 232, 0.65)",
                  maxWidth: "52ch",
                }}
              >
                $85 per adult &mdash; 3 hours &mdash; small groups of max 12.
                Spirits included. Vegetarian-friendly. Private groups welcome.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold text-sm w-full lg:w-auto active:scale-[0.97]"
                style={{
                  fontFamily:
                    "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  backgroundColor: "#C8963E",
                  color: "#1B2A4A",
                  letterSpacing: "0.04em",
                  transition: "all 0.4s cubic-bezier(0.32, 0.72, 0, 1)",
                  boxShadow: "0 4px 28px rgba(200, 150, 62, 0.35)",
                  whiteSpace: "nowrap",
                }}
              >
                Book the Food Tour &mdash; $85
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(27, 42, 74, 0.15)" }}
                >
                  <ArrowRightIcon weight="bold" size={10} />
                </span>
              </Link>

              <a
                href="tel:+16612019003"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm w-full lg:w-auto active:scale-[0.97]"
                style={{
                  fontFamily:
                    "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  backgroundColor: "transparent",
                  color: "rgba(245, 240, 232, 0.8)",
                  letterSpacing: "0.04em",
                  border: "1px solid rgba(245, 240, 232, 0.2)",
                  transition: "all 0.4s cubic-bezier(0.32, 0.72, 0, 1)",
                  whiteSpace: "nowrap",
                }}
              >
                Call Diana at (661) 201-9003
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          11. RELATED TOURS — warm white background, 2-col cards
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#FAFAF7" }}
        aria-label="Other tours you may enjoy"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <span
              className="inline-block text-[10px] uppercase tracking-[0.22em] font-semibold mb-4"
              style={{
                fontFamily:
                  "var(--font-source-sans), 'Source Sans 3', sans-serif",
                color: "#7A5820",
              }}
            >
              Also Loved by Food Tour Guests
            </span>
            <h2
              className="text-2xl md:text-3xl font-bold leading-tight"
              style={{
                fontFamily:
                  "var(--font-playfair), 'Playfair Display', serif",
                color: "#1B2A4A",
                letterSpacing: "-0.02em",
                maxWidth: "30ch",
              }}
            >
              See more of what makes Franklin worth knowing
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {relatedTours.map((tour) => (
              <Link key={tour.href} href={tour.href} className="group block">
                <div
                  className="p-1.5 rounded-2xl"
                  style={{
                    backgroundColor: "rgba(27, 42, 74, 0.04)",
                    border: "1px solid rgba(27, 42, 74, 0.08)",
                    transition: "all 0.5s cubic-bezier(0.32, 0.72, 0, 1)",
                  }}
                >
                  <div className="rounded-xl overflow-hidden">
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={tour.image}
                        alt={tour.imageAlt}
                        fill
                        className="object-cover group-hover:scale-105"
                        style={{
                          transition:
                            "transform 0.7s cubic-bezier(0.32, 0.72, 0, 1)",
                        }}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(17,29,51,0.7) 0%, rgba(17,29,51,0.1) 50%)",
                        }}
                        aria-hidden="true"
                      />
                      <div className="absolute top-4 left-4">
                        <span
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.18em] font-semibold"
                          style={{
                            backgroundColor: "rgba(17, 29, 51, 0.75)",
                            color: "#C8963E",
                            border: "1px solid rgba(200, 150, 62, 0.25)",
                            backdropFilter: "blur(8px)",
                            WebkitBackdropFilter: "blur(8px)",
                            fontFamily:
                              "var(--font-source-sans), 'Source Sans 3', sans-serif",
                          }}
                        >
                          {tour.icon}
                          {tour.type}
                        </span>
                      </div>
                    </div>

                    <div
                      className="p-6"
                      style={{ backgroundColor: "#FAFAF7" }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3
                            className="text-lg font-bold mb-1"
                            style={{
                              fontFamily:
                                "var(--font-playfair), 'Playfair Display', serif",
                              color: "#1B2A4A",
                              letterSpacing: "-0.015em",
                            }}
                          >
                            {tour.name}
                          </h3>
                          <p
                            className="text-sm leading-relaxed mb-4"
                            style={{
                              fontFamily:
                                "var(--font-source-sans), 'Source Sans 3', sans-serif",
                              color: "#6b6456",
                            }}
                          >
                            {tour.tagline}
                          </p>
                          <div className="flex items-center gap-3">
                            <span
                              className="text-sm font-semibold"
                              style={{
                                fontFamily:
                                  "var(--font-source-sans), 'Source Sans 3', sans-serif",
                                color: "#1B2A4A",
                              }}
                            >
                              {tour.price} / adult
                            </span>
                            <span
                              style={{ color: "rgba(27, 42, 74, 0.3)" }}
                            >
                              &bull;
                            </span>
                            <span
                              className="text-sm"
                              style={{
                                fontFamily:
                                  "var(--font-source-sans), 'Source Sans 3', sans-serif",
                                color: "#6b6456",
                              }}
                            >
                              {tour.duration}
                            </span>
                          </div>
                        </div>
                        <div
                          className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                          style={{
                            backgroundColor: "rgba(200, 150, 62, 0.1)",
                            color: "#C8963E",
                          }}
                        >
                          <ArrowRightIcon weight="bold" size={14} />
                        </div>
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
