import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ClockIcon,
  CurrencyDollarIcon,
  UsersIcon,
  MapPinIcon,
  RoadHorizonIcon,
  CalendarIcon,
  ArrowRightIcon,
  QuotesIcon,
  SneakerIcon,
  ThermometerIcon,
  CameraIcon,
  BrainIcon,
  GhostIcon,
  BuildingsIcon,
  ForkKnifeIcon,
  WarningIcon,
} from "@phosphor-icons/react/dist/ssr";
import TourFaqAccordion from "@/components/TourFaqAccordion";
import type { TourFaqItem } from "@/components/TourFaqAccordion";

export const metadata: Metadata = {
  title: "Ghost Tour Franklin TN | Haunted History Walking Tour",
  description:
    "Join Franklin's most spine-chilling ghost tour. Walk haunted Civil War sites, hear dark stories of the Carter House, Carnton & more. Nightly departures.",
  alternates: {
    canonical: "https://nashvilletoursfranklin.com/tours/ghost-tour",
  },
  openGraph: {
    title: "Ghost Tour Franklin TN | Haunted History Walking Tour",
    description:
      "Join Franklin's most spine-chilling ghost tour. Walk haunted Civil War sites, hear dark stories of the Carter House, Carnton & more. Nightly departures.",
    url: "https://nashvilletoursfranklin.com/tours/ghost-tour",
    type: "website",
  },
  twitter: {
    title: "Ghost Tour Franklin TN | Haunted History Walking Tour",
    description:
      "Join Franklin's most spine-chilling ghost tour. Walk haunted Civil War sites, hear dark stories of the Carter House, Carnton & more. Nightly departures.",
  },
};

// JSON-LD: TouristTrip schema — static, no XSS risk
const ghostTourSchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "@id": "https://nashvilletoursfranklin.com/tours/ghost-tour#trip",
  name: "Ghost & Haunted History Tour",
  description:
    "Evening walking tour through Franklin's most haunted Civil War sites. Covers the Battle of Franklin (1864), the Carter House, Carnton Plantation, and documented paranormal accounts. 90 minutes, nightly departures from downtown Franklin, TN.",
  url: "https://nashvilletoursfranklin.com/tours/ghost-tour",
  touristType: "Ghost Tour, History Tour",
  duration: "PT1H30M",
  provider: {
    "@type": "TourOperator",
    "@id": "https://nashvilletoursfranklin.com/#organization",
    name: "Nashville Tours Franklin",
  },
  offers: {
    "@type": "Offer",
    price: "35",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://nashvilletoursfranklin.com/contact",
  },
  itinerary: {
    "@type": "ItemList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Downtown Franklin meeting point" },
      { "@type": "ListItem", position: 2, name: "Carter House — Civil War epicenter, original bullet holes" },
      { "@type": "ListItem", position: 3, name: "Carnton Plantation — field hospital and paranormal accounts" },
      { "@type": "ListItem", position: 4, name: "Historic district haunted sites" },
    ],
  },
};

// JSON-LD: FAQPage for ghost tour — static, no XSS risk
const ghostTourFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the ghost tour scary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is genuinely atmospheric and historically intense, not a jump-scare attraction. Most guests describe it as unsettling in the best possible way, particularly when the Civil War history sinks in. It is appropriate for people who enjoy a well-told ghost story; it is not a horror experience.",
      },
    },
    {
      "@type": "Question",
      name: "Is it suitable for children?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We recommend ages 12 and up. The content is historically mature — the Battle of Franklin involved mass casualties, and the tour does not sanitize that. Younger children who are sensitive to dark historical content may find it overwhelming.",
      },
    },
    {
      "@type": "Question",
      name: "Do you use actors or jump scares?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Nashville Tours Franklin ghost tours are storytelling experiences, not theatrical productions. Everything Diana tells you is drawn from documented historical accounts and recorded paranormal reports.",
      },
    },
    {
      "@type": "Question",
      name: "What is the most haunted building in Franklin, Tennessee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Carter House is the most extensively documented haunted site in Franklin. The building stood at the epicenter of the battle, has original bullet holes still visible in the walls, and has generated paranormal accounts from multiple independent sources over decades. Carnton Plantation is a close second.",
      },
    },
    {
      "@type": "Question",
      name: "What if it rains?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tours run in light rain. We cancel only for lightning, tornado warnings, or temperatures that are genuinely unsafe. If we cancel on our end, you receive a full refund or rebooking at no charge.",
      },
    },
    {
      "@type": "Question",
      name: "Can I take photographs during the tour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Photography is encouraged. Diana will point out locations that have produced interesting photographic results for previous guests.",
      },
    },
  ],
};

// JSON-LD: BreadcrumbList for ghost tour page
const ghostTourBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nashvilletoursfranklin.com" },
    { "@type": "ListItem", position: 2, name: "Ghost & Haunted History Tour", item: "https://nashvilletoursfranklin.com/tours/ghost-tour" },
  ],
};

/* ─── Tour-specific FAQ data ─────────────────────────────────────────────── */
const faqs: TourFaqItem[] = [
  {
    question: "Is the ghost tour scary?",
    answer:
      "It's genuinely atmospheric and historically intense — not a jump-scare attraction. Most guests describe it as unsettling in the best possible way, particularly when the Civil War history sinks in. It's appropriate for people who enjoy a well-told ghost story; it is not a horror experience.",
  },
  {
    question: "Is it suitable for children?",
    answer:
      "We recommend ages 12 and up. The content is historically mature — the Battle of Franklin involved mass casualties, and the tour doesn't sanitize that. Younger children who are sensitive to dark historical content may find it overwhelming. Teenagers who are interested in history typically love it.",
  },
  {
    question: "Do you use actors or jump scares?",
    answer:
      "No. Nashville Tours Franklin ghost tours are storytelling experiences, not theatrical productions. Everything Diana tells you is drawn from documented historical accounts and recorded paranormal reports. The tour format is conversational, not performative.",
  },
  {
    question: "What is the most haunted building in Franklin, Tennessee?",
    answer:
      "The Carter House is the most extensively documented haunted site in Franklin. The building stood at the epicenter of the battle, has original bullet holes still visible in the walls, and has generated paranormal accounts from multiple independent sources over decades. Carnton Plantation is a close second, with particularly well-documented accounts from the period immediately following the battle.",
  },
  {
    question: "What if it rains?",
    answer:
      "Tours run in light rain. We cancel only for lightning, tornado warnings, or temperatures that are genuinely unsafe. If we cancel on our end, you receive a full refund or rebooking at no charge. Honestly, some guests say the rain makes the whole thing more atmospheric.",
  },
  {
    question: "Can I take photographs during the tour?",
    answer:
      "Absolutely. Photography is encouraged. Diana will point out locations that have produced interesting photographic results for previous guests.",
  },
];

/* ─── Related tours ──────────────────────────────────────────────────────── */
const relatedTours = [
  {
    name: "Historic Franklin Walking Tour",
    tagline: "The same sites — in daylight, with two centuries of context.",
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
    name: "Franklin Food & Spirits Tour",
    tagline: "Five to six stops through Franklin's best kitchens and bars.",
    price: "$85",
    duration: "3 hours",
    href: "/tours/food-tour",
    image: "/images/hero-food-tour.png",
    imageAlt:
      "Artisanal Southern food spread with craft bourbon cocktails in a warm Franklin restaurant",
    icon: <ForkKnifeIcon weight="light" size={16} />,
    type: "5–6 stops",
  },
];

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function GhostTourPage() {
  return (
    <>
      {/* TouristTrip, FAQPage, BreadcrumbList structured data — static JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ghostTourSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ghostTourFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ghostTourBreadcrumbSchema) }} />
    <div style={{ backgroundColor: "#FAFAF7" }}>

      {/* ════════════════════════════════════════════════════════════════════
          1. HERO — Full-width twilight image, editorial left-anchored overlay
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-[100dvh] flex items-end"
        aria-label="Ghost Tour Hero"
      >
        <Image
          src="/images/hero-ghost-tour.png"
          alt="Historic antebellum mansion at twilight, illuminated windows glowing warm amber against a deep purple sky, ancient oak trees with Spanish moss"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Rich multi-layer dark overlay — night atmosphere */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,16,35,0.45) 0%, rgba(10,16,35,0.55) 40%, rgba(10,16,35,0.88) 100%)",
          }}
          aria-hidden="true"
        />
        {/* Left-side darkening for text legibility */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(10,16,35,0.55) 0%, transparent 60%)",
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
                    backgroundColor: "rgba(200, 150, 62, 0.15)",
                    color: "#C8963E",
                    border: "1px solid rgba(200, 150, 62, 0.3)",
                    fontFamily:
                      "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  }}
                >
                  <GhostIcon weight="fill" size={10} />
                  Evening Tour
                </span>
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[10px] uppercase tracking-[0.22em] font-semibold"
                  style={{
                    backgroundColor: "rgba(245, 240, 232, 0.1)",
                    color: "rgba(245, 240, 232, 0.7)",
                    border: "1px solid rgba(245, 240, 232, 0.15)",
                    fontFamily:
                      "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  }}
                >
                  90 minutes
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
                Franklin, Tennessee{" "}
                <em className="not-italic" style={{ color: "#C8963E" }}>
                  Ghost &amp; Haunted History Tour
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
                On the evening of November 30, 1864, more than 9,000 men fell
                at the Battle of Franklin in five hours. Some, by all accounts,
                never left.
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
                    $35 / adult
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          2. QUICK-REFERENCE STATS — cream background, horizontal pill row
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
                label: "$35 / adult",
              },
              {
                icon: <ClockIcon weight="fill" size={14} />,
                label: "90 minutes",
              },
              {
                icon: <MapPinIcon weight="fill" size={14} />,
                label: "Downtown Franklin",
              },
              {
                icon: <RoadHorizonIcon weight="fill" size={14} />,
                label: "~0.75 miles",
              },
              {
                icon: <UsersIcon weight="fill" size={14} />,
                label: "Max 15 guests",
              },
              {
                icon: <CalendarIcon weight="fill" size={14} />,
                label: "Evening departures",
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
            {/* Left label column */}
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

            {/* Right editorial column */}
            <div className="lg:col-span-9">
              <p
                className="text-2xl md:text-3xl font-bold leading-snug mb-8"
                style={{
                  fontFamily:
                    "var(--font-playfair), 'Playfair Display', serif",
                  color: "#1B2A4A",
                  letterSpacing: "-0.02em",
                  maxWidth: "26ch",
                }}
              >
                Franklin carries that night with it. It always has.
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
                  On the evening of November 30, 1864, more than 9,000 men fell
                  at the Battle of Franklin in five hours of close-quarters
                  combat. The fighting was so savage, so compressed, and so
                  complete that the town couldn&rsquo;t recover its dead for
                  days. Soldiers were buried where they fell. Houses became
                  hospitals, then morgues. The Carter House &mdash; still
                  standing at the center of Franklin &mdash; sat directly in the
                  path of the Confederate charge, and the bullet holes in its
                  walls have never been repaired, because nobody could bring
                  themselves to.
                </p>
                <p>
                  The Nashville Tours Franklin ghost and haunted history tour
                  doesn&rsquo;t rely on theatrical scares or costumed actors
                  jumping out of doorways. What we offer is something that holds
                  up better than theater: the actual history. When you
                  understand what happened in these buildings, on these streets,
                  in this exact ground under your feet &mdash; that&rsquo;s when
                  Franklin gets genuinely unsettling in the best possible way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          4. HAUNTED SITES — navy background, 2-col asymmetric double-bezel cards
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#1B2A4A" }}
        aria-label="Haunted locations on the tour"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Section header */}
          <div className="mb-14">
            <span
              className="inline-block text-[10px] uppercase tracking-[0.22em] font-semibold mb-4"
              style={{
                fontFamily:
                  "var(--font-source-sans), 'Source Sans 3', sans-serif",
                color: "#C8963E",
              }}
            >
              The Haunted Heart of Franklin
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
              What You&rsquo;ll Experience
            </h2>
            <p
              className="mt-4 text-base"
              style={{
                fontFamily:
                  "var(--font-source-sans), 'Source Sans 3', sans-serif",
                color: "rgba(245, 240, 232, 0.6)",
                maxWidth: "52ch",
              }}
            >
              Diana Berry has spent years researching the history and documented
              encounters at each location, drawing on firsthand accounts, archive
              research, and conversations with staff at the historic properties.
            </p>
          </div>

          {/* Asymmetric grid — Carter House spans full height on left on desktop */}
          {/* items-start prevents the left card from stretching to match all three right-column cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 items-start">

            {/* Carter House — featured card, tall */}
            <div
              className="p-1.5 rounded-2xl"
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
                  <WarningIcon
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
                  The Carter House
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{
                    fontFamily:
                      "var(--font-source-sans), 'Source Sans 3', sans-serif",
                    color: "rgba(245, 240, 232, 0.65)",
                  }}
                >
                  The Carter family sheltered in their basement while
                  Confederate and Union forces fought the bloodiest close-range
                  combat of the war directly outside &mdash; and in some cases
                  through &mdash; their home. The facade is still pocked with
                  original bullet holes. Multiple accounts from staff, guides,
                  and overnight guests over the years describe sounds,
                  movements, and presences that don&rsquo;t have easy
                  explanations. The Carter House is the most documented haunted
                  site in Franklin, and the stories associated with it are among
                  the most substantiated you&rsquo;ll find anywhere in the
                  South.
                </p>

                {/* Gold rule footnote */}
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
                    Most documented haunted site in Franklin
                  </p>
                </div>
              </div>
            </div>

            {/* Right column — three stacked cards */}
            <div className="grid grid-cols-1 gap-5 lg:gap-6">
              {/* Carnton Plantation */}
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
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{
                      fontFamily:
                        "var(--font-playfair), 'Playfair Display', serif",
                      color: "#F5F0E8",
                      letterSpacing: "-0.015em",
                    }}
                  >
                    Carnton Plantation
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{
                      fontFamily:
                        "var(--font-source-sans), 'Source Sans 3', sans-serif",
                      color: "rgba(245, 240, 232, 0.65)",
                    }}
                  >
                    Three miles from Carter House, Carnton served as the
                    Confederate field hospital for the battle&rsquo;s aftermath.
                    Four Confederate generals were laid out on the back porch.
                    The house absorbed so much loss &mdash; soldiers died in
                    nearly every room &mdash; that the McGavock family
                    eventually established the largest private Confederate
                    cemetery in the country on their grounds. Documented
                    paranormal accounts have been reported by staff and visitors
                    for decades.
                  </p>
                </div>
              </div>

              {/* Downtown Historic District */}
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
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{
                      fontFamily:
                        "var(--font-playfair), 'Playfair Display', serif",
                      color: "#F5F0E8",
                      letterSpacing: "-0.015em",
                    }}
                  >
                    The Downtown Historic District
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{
                      fontFamily:
                        "var(--font-source-sans), 'Source Sans 3', sans-serif",
                      color: "rgba(245, 240, 232, 0.65)",
                    }}
                  >
                    Several buildings along Franklin&rsquo;s Main Street carry
                    their own histories &mdash; structures that served military
                    functions during and after the battle, private homes where
                    the aftermath played out for weeks, and establishments with
                    stories that have passed through generations of Franklin
                    families. Diana covers the buildings you&rsquo;d walk past
                    without a second glance and gives them back their weight.
                  </p>
                </div>
              </div>

              {/* Cherry Manor */}
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
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{
                      fontFamily:
                        "var(--font-playfair), 'Playfair Display', serif",
                      color: "#F5F0E8",
                      letterSpacing: "-0.015em",
                    }}
                  >
                    Cherry Manor
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{
                      fontFamily:
                        "var(--font-source-sans), 'Source Sans 3', sans-serif",
                      color: "rgba(245, 240, 232, 0.65)",
                    }}
                  >
                    Cherry Manor appears in accounts of Franklin&rsquo;s
                    haunted reputation more consistently than almost anywhere
                    else. The history of the property, its role in the
                    community, and the nature of the encounters reported there
                    give the tour one of its most lingering stories &mdash; one
                    that visitors tend to bring up when describing the tour
                    afterward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          5. YOUR GUIDE — warm white background, editorial 2-col
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#FAFAF7" }}
        aria-label="About your guide"
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
                Your Guide
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
                Why Diana Tells This Story Well
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
                  Diana Berry approaches Franklin&rsquo;s ghost history the
                  same way she approaches all of Franklin&rsquo;s history:
                  through original research, primary sources, and genuine
                  respect for the weight of what happened here. She
                  doesn&rsquo;t embellish because she doesn&rsquo;t need to.
                  The documented history of the Battle of Franklin and its
                  aftermath provides more material than any fictional ghost
                  story could.
                </p>
                <p>
                  She&rsquo;s also clear about what she knows and what is
                  legend versus documented account &mdash; which, paradoxically,
                  makes the documented encounters more powerful when she shares
                  them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          6. WHO LOVES THIS TOUR — cream background, prose + callout
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#F5F0E8" }}
        aria-label="Who this tour suits"
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
                Is This Tour Right for You
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
                  maxWidth: "26ch",
                }}
              >
                Who Loves the Ghost Tour
              </h2>

              <div
                className="space-y-5 text-base leading-relaxed mb-10"
                style={{
                  fontFamily:
                    "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#6b6456",
                  maxWidth: "68ch",
                }}
              >
                <p>
                  This tour draws a wide range of guests: Civil War history
                  enthusiasts who appreciate the haunted angle, visitors
                  who&rsquo;ve done ghost tours in Charleston or Savannah and
                  want to compare, couples looking for an atmospheric evening
                  out, and groups of friends who want something genuinely
                  interesting rather than another bar crawl.
                </p>
                <p>
                  It is{" "}
                  <strong style={{ color: "#1B2A4A" }}>not</strong> a horror
                  experience. There are no actors, no jump scares, and no
                  theatrical fog machines. The scare level is approximately that
                  of a well-told ghost story around a fire &mdash; unsettling if
                  you let it be, historically gripping regardless.
                </p>
              </div>

              {/* October callout card */}
              <div
                className="p-1.5 rounded-2xl"
                style={{
                  backgroundColor: "#FAFAF7",
                  border: "1px solid rgba(200, 150, 62, 0.2)",
                  maxWidth: "520px",
                }}
              >
                <div
                  className="rounded-xl px-7 py-6"
                  style={{
                    backgroundColor: "rgba(200, 150, 62, 0.06)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8)",
                  }}
                >
                  <p
                    className="text-xs uppercase tracking-[0.18em] font-semibold mb-2"
                    style={{
                      fontFamily:
                        "var(--font-source-sans), 'Source Sans 3', sans-serif",
                      color: "#7A5820",
                    }}
                  >
                    Popular in October
                  </p>
                  <p
                    className="text-base leading-relaxed"
                    style={{
                      fontFamily:
                        "var(--font-source-sans), 'Source Sans 3', sans-serif",
                      color: "#1B2A4A",
                    }}
                  >
                    Spots fill weeks ahead during the fall season. If
                    you&rsquo;re planning an October visit to Franklin, book
                    early.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          7. WHAT TO BRING — navy background, practical grid
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
              What to Expect and What to Bring
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: <SneakerIcon weight="fill" size={20} />,
                heading: "Comfortable shoes",
                body: "The tour covers about three-quarters of a mile on sidewalks and paved paths. Franklin's terrain is flat and accessible.",
              },
              {
                icon: <ThermometerIcon weight="fill" size={20} />,
                heading: "A layer in cooler months",
                body: "Evening tours in fall and winter can be brisk. October — Franklin's busiest ghost tour month — is beautiful but cool after dark.",
              },
              {
                icon: <CameraIcon weight="fill" size={20} />,
                heading: "Your phone or camera",
                body: "Photos are encouraged throughout the tour. Some guests report unusual results; most report excellent ones.",
              },
              {
                icon: <BrainIcon weight="fill" size={20} />,
                heading: "An open mind",
                body: "This is not a haunted house attraction with jump scares. It's a history tour that takes the paranormal seriously. Guests who come for the history almost always leave satisfied.",
              },
              {
                icon: <GhostIcon weight="fill" size={20} />,
                heading: "No food or drinks required",
                body: "The tour is 90 minutes at a leisurely pace. There's no physical challenge involved — come exactly as you are.",
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
                  className="rounded-xl p-6"
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
                  "I've done ghost tours in Charleston, New Orleans, and Savannah. The Franklin tour is different — the Civil War context gives everything a weight those others don't have. Diana knows exactly how to use the history. We were spooked and educated in equal measure.",
                name: "James P.",
                location: "Charlotte, NC",
              },
              {
                quote:
                  "My husband thought he was humoring me by agreeing to this. He talked about it for three days afterward. The story of the Carter House alone is worth the price of the tour.",
                name: "Rachel B.",
                location: "Nashville, TN",
              },
              {
                quote:
                  "Not what I expected — way better. The history is real, the stories are documented, and Diana tells them in a way that makes you feel the weight of 1864 all over again. One of the best things we did in Tennessee.",
                name: "Connor M.",
                location: "Chicago, IL",
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
            {/* Left heading col */}
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
                Ghost Tour Questions Answered
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{
                  fontFamily:
                    "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#6b6456",
                }}
              >
                Still wondering something? Call Diana directly at{" "}
                <a
                  href="tel:+16612019003"
                  className="font-semibold"
                  style={{ color: "#7A5820" }}
                >
                  (661) 201-9003
                </a>
              </p>
            </div>

            {/* Right accordion col */}
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
        aria-label="Book the ghost tour"
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
                Book the Ghost Tour
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
                Franklin at night. History that refuses to stay buried.
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
                $35 per adult &mdash; 90 minutes &mdash; small groups of max 15.
                Evening departures from downtown Franklin.
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
                Book the Ghost Tour &mdash; $35
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
                Questions? Call Diana
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
              Also Loved by Ghost Tour Guests
            </span>
            <h2
              className="text-2xl md:text-3xl font-bold leading-tight"
              style={{
                fontFamily:
                  "var(--font-playfair), 'Playfair Display', serif",
                color: "#1B2A4A",
                letterSpacing: "-0.02em",
                maxWidth: "28ch",
              }}
            >
              After dark, Franklin reveals one face. In daylight, another.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {relatedTours.map((tour) => (
              <Link key={tour.href} href={tour.href} className="group block">
                {/* Outer bezel */}
                <div
                  className="p-1.5 rounded-2xl"
                  style={{
                    backgroundColor: "rgba(27, 42, 74, 0.04)",
                    border: "1px solid rgba(27, 42, 74, 0.08)",
                    transition: "all 0.5s cubic-bezier(0.32, 0.72, 0, 1)",
                  }}
                >
                  {/* Inner core */}
                  <div className="rounded-xl overflow-hidden">
                    {/* Image */}
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
                      {/* Type badge */}
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

                    {/* Card body */}
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
