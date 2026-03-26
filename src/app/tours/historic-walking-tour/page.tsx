import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ClockIcon,
  CurrencyDollarIcon,
  UsersIcon,
  MapPinIcon,
  RoadHorizonIcon,
  ArrowRightIcon,
  QuotesIcon,
  SneakerIcon,
  SunIcon,
  CameraIcon,
  WheelchairIcon,
  BuildingsIcon,
  GhostIcon,
  ForkKnifeIcon,
} from "@phosphor-icons/react/dist/ssr";
import TourFaqAccordion from "@/components/TourFaqAccordion";
import type { TourFaqItem } from "@/components/TourFaqAccordion";

export const metadata: Metadata = {
  title: "Historic Walking Tour Franklin TN",
  description:
    "Explore Franklin's Civil War battlefield, antebellum mansions & Main Street on our expert-guided historic walking tour. Book online today.",
  alternates: {
    canonical: "https://nashvilletoursfranklin.com/tours/historic-walking-tour",
  },
  openGraph: {
    title: "Historic Walking Tour Franklin TN | Nashville Tours Franklin",
    description:
      "Explore Franklin's Civil War battlefield, antebellum mansions & Main Street on our expert-guided historic walking tour. Book online today.",
    url: "https://nashvilletoursfranklin.com/tours/historic-walking-tour",
    type: "website",
  },
  twitter: {
    title: "Historic Walking Tour Franklin TN | Civil War & Antebellum History",
    description:
      "Explore Franklin's Civil War battlefield, antebellum mansions & Main Street on our expert-guided historic walking tour. Book online today.",
  },
};

// JSON-LD: TouristTrip schema — static, no XSS risk
const historicTourSchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "@id": "https://nashvilletoursfranklin.com/tours/historic-walking-tour#trip",
  name: "Historic Franklin Walking Tour",
  description:
    "Daytime walking tour of Franklin's nationally recognized Main Street, preserved 19th-century architecture, the Franklin Theatre, and key Civil War sites. Covers the town's founding in 1799, the Battle of Franklin, and its transformation into one of America's most charming small towns. 2 hours, downtown Franklin, TN.",
  url: "https://nashvilletoursfranklin.com/tours/historic-walking-tour",
  touristType: "History Tour, Walking Tour",
  duration: "PT2H",
  provider: {
    "@type": "TourOperator",
    "@id": "https://nashvilletoursfranklin.com/#organization",
    name: "Nashville Tours Franklin",
  },
  offers: {
    "@type": "Offer",
    price: "30",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://nashvilletoursfranklin.com/contact",
  },
  itinerary: {
    "@type": "ItemList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Downtown Franklin meeting point — Main Street" },
      { "@type": "ListItem", position: 2, name: "Franklin Theatre and antebellum architecture" },
      { "@type": "ListItem", position: 3, name: "Civil War battle sites and historic district" },
      { "@type": "ListItem", position: 4, name: "Carter House historic site" },
      { "@type": "ListItem", position: 5, name: "19th-century founding landmarks" },
    ],
  },
};

// JSON-LD: FAQPage for historic walking tour — static, no XSS risk
const historicTourFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much walking is involved?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Approximately six city blocks over two hours, at a leisurely pace with frequent stops. Almost anyone with reasonable mobility can manage it comfortably. There are no hills, steps, or rough terrain on the route.",
      },
    },
    {
      "@type": "Question",
      name: "Is the tour wheelchair accessible?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The entire route uses Franklin's downtown sidewalks, which are flat and well-maintained. The tour is accessible for wheelchairs and strollers throughout.",
      },
    },
    {
      "@type": "Question",
      name: "Can children join the walking tour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Families with children aged 8 and up typically have a great time. Diana is experienced with mixed-age groups and knows how to find the details that resonate with younger guests without losing the adults.",
      },
    },
    {
      "@type": "Question",
      name: "Is downtown Franklin, TN walkable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Franklin's historic downtown district is entirely walkable — flat, well-maintained sidewalks, no major hills, and the most historically significant sites are concentrated within a few blocks of Main Street.",
      },
    },
    {
      "@type": "Question",
      name: "Where does the tour start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The exact meeting point is confirmed in your booking confirmation. It is within easy walking distance of Main Street in downtown Franklin, near free public parking.",
      },
    },
    {
      "@type": "Question",
      name: "Can I combine the walking tour with the ghost tour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely, and many guests do. The historic walking tour in the morning and the ghost tour that evening is a popular pairing — you get the full Civil War history in daylight and then experience the same landscape after dark.",
      },
    },
  ],
};

// JSON-LD: BreadcrumbList for historic walking tour
const historicTourBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nashvilletoursfranklin.com" },
    { "@type": "ListItem", position: 2, name: "Historic Franklin Walking Tour", item: "https://nashvilletoursfranklin.com/tours/historic-walking-tour" },
  ],
};

/* ─── Tour-specific FAQ data ─────────────────────────────────────────────── */
const faqs: TourFaqItem[] = [
  {
    question: "How much walking is involved?",
    answer:
      "Approximately six city blocks over two hours, at a leisurely pace with frequent stops. Almost anyone with reasonable mobility can manage it comfortably. There are no hills, steps, or rough terrain on the route.",
  },
  {
    question: "Is the tour wheelchair accessible?",
    answer:
      "Yes. The entire route uses Franklin's downtown sidewalks, which are flat and well-maintained. The tour is accessible for wheelchairs and strollers throughout.",
  },
  {
    question: "Can children join the walking tour?",
    answer:
      "Families with children aged 8 and up typically have a great time. Diana is experienced with mixed-age groups and knows how to find the details that resonate with younger guests without losing the adults. The Battle of Franklin material is historically serious but presented appropriately.",
  },
  {
    question: "Where does the tour start?",
    answer:
      "The exact meeting point is confirmed in your booking confirmation. It's within easy walking distance of Main Street in downtown Franklin, near free public parking.",
  },
  {
    question: "Do you go inside any buildings?",
    answer:
      "The walking tour is an exterior tour of the historic district. Diana's commentary on each building is comprehensive, but the tour does not include interior access to the Carter House, the churches, or private properties. We recommend the Carter House Museum as a complementary visit — Diana can advise on the best timing to combine it with the tour.",
  },
  {
    question: "Can I combine the walking tour with the ghost tour?",
    answer:
      "Absolutely, and many guests do. The historic walking tour in the morning and the ghost tour that evening is a popular pairing — you get the full Civil War history in daylight and then experience the same landscape after dark. Let us know when booking if you'd like to do both and we'll make sure the timing works.",
  },
];

/* ─── Related tours ──────────────────────────────────────────────────────── */
const relatedTours = [
  {
    name: "Ghost & Haunted History Tour",
    tagline: "The same streets, after dark. History that refuses to stay buried.",
    price: "$35",
    duration: "90 minutes",
    href: "/tours/ghost-tour",
    image: "/images/hero-ghost-tour.png",
    imageAlt:
      "Historic antebellum mansion at twilight, illuminated windows glowing warm amber against a deep purple sky",
    icon: <GhostIcon weight="light" size={16} />,
    type: "Evening tour",
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
export default function HistoricWalkingTourPage() {
  return (
    <>
      {/* TouristTrip, FAQPage, BreadcrumbList structured data — static JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(historicTourSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(historicTourFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(historicTourBreadcrumbSchema) }} />
    <div style={{ backgroundColor: "#FAFAF7" }}>

      {/* ════════════════════════════════════════════════════════════════════
          1. HERO — bright Main Street image, left-aligned editorial overlay
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-[65vh] flex items-end"
        aria-label="Historic Walking Tour Hero"
      >
        <Image
          src="/images/hero-historic-tour.png"
          alt="Historic Franklin Tennessee Main Street on a sunny day, preserved 19th-century brick storefronts and the Franklin Theatre"
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
              "linear-gradient(135deg, rgba(17,29,51,0.82) 0%, rgba(17,29,51,0.5) 50%, rgba(17,29,51,0.18) 100%)",
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
                  <BuildingsIcon weight="fill" size={10} />
                  Daytime Tour
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
                  2 hours
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
                Historic Franklin Walking Tour:{" "}
                <em className="not-italic" style={{ color: "#C8963E" }}>
                  250 Years of History in Two Hours
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
                Six city blocks. Two and a half centuries. The founding,
                the battle, the destruction, and the town that chose to
                rebuild every single time.
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
                    $30 / adult
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
                label: "$30 / adult",
              },
              {
                icon: <ClockIcon weight="fill" size={14} />,
                label: "2 hours",
              },
              {
                icon: <MapPinIcon weight="fill" size={14} />,
                label: "Downtown Franklin",
              },
              {
                icon: <RoadHorizonIcon weight="fill" size={14} />,
                label: "~6 city blocks",
              },
              {
                icon: <UsersIcon weight="fill" size={14} />,
                label: "Max 15 guests",
              },
              {
                icon: <WheelchairIcon weight="fill" size={14} />,
                label: "Wheelchair accessible",
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
                  maxWidth: "28ch",
                }}
              >
                Founded 1799. Nearly destroyed 1864. Rebuilt magnificently.
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
                  Franklin, Tennessee was founded in 1799, named after Benjamin
                  Franklin by the Masonic lodge that laid out its streets. By
                  the mid-1800s it had grown into one of the most prosperous
                  market towns in Middle Tennessee &mdash; fine homes, a
                  thriving public square, churches with genuine architectural
                  ambition, and a community that had been building something
                  together for two generations.
                </p>
                <p>
                  Then November 30, 1864 arrived, and the Battle of Franklin
                  left almost nothing untouched.
                </p>
                <p>
                  In five hours of close-quarters combat &mdash; one of the
                  deadliest of the entire Civil War by nearly any measure
                  &mdash; the town became a battlefield, then a hospital, then a
                  burial ground. When it was over, the community had a choice:
                  abandon what had been built or begin again. They chose to
                  begin again, and the town they rebuilt is largely the one
                  you&rsquo;ll walk through today.
                </p>
                <p>
                  That&rsquo;s the story the Historic Franklin Walking Tour
                  tells. Not just the battle, but the full arc: the founding,
                  the antebellum prosperity, the destruction, the
                  reconstruction, and the careful preservation effort that made
                  Franklin one of the best-preserved 19th-century historic
                  districts in America. You&rsquo;ll cover six city blocks and
                  two and a half centuries in two hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          4. THE TOUR ROUTE — navy background, 5 stops as stacked items
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#1B2A4A" }}
        aria-label="Tour route stops"
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
              The Tour Route
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              style={{
                fontFamily:
                  "var(--font-playfair), 'Playfair Display', serif",
                color: "#F5F0E8",
                letterSpacing: "-0.02em",
                maxWidth: "22ch",
              }}
            >
              What You&rsquo;ll See
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
              Diana Berry has spent years developing a walking route that covers
              the maximum depth of Franklin&rsquo;s history in a distance that
              never becomes a slog. Every step is loaded with documented history.
            </p>
          </div>

          {/* Route stops — numbered list with double-bezel cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">

            {/* Stop 1 — Main Street, full width on desktop */}
            <div
              className="p-1.5 rounded-2xl lg:col-span-2"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(200, 150, 62, 0.15)",
              }}
            >
              <div
                className="rounded-xl p-8 lg:p-10"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
                }}
              >
                <div className="flex items-start gap-6">
                  <span
                    className="shrink-0 text-4xl font-bold leading-none"
                    style={{
                      fontFamily:
                        "var(--font-playfair), 'Playfair Display', serif",
                      color: "rgba(200, 150, 62, 0.25)",
                    }}
                  >
                    01
                  </span>
                  <div>
                    <h3
                      className="text-xl md:text-2xl font-bold mb-3"
                      style={{
                        fontFamily:
                          "var(--font-playfair), 'Playfair Display', serif",
                        color: "#F5F0E8",
                        letterSpacing: "-0.015em",
                      }}
                    >
                      Main Street and the Public Square
                    </h3>
                    <p
                      className="text-base leading-relaxed"
                      style={{
                        fontFamily:
                          "var(--font-source-sans), 'Source Sans 3', sans-serif",
                        color: "rgba(245, 240, 232, 0.65)",
                        maxWidth: "72ch",
                      }}
                    >
                      Franklin&rsquo;s Main Street is regularly cited as one of
                      the most beautiful in America &mdash; and it earns that
                      description through architecture, not just atmosphere. The
                      buildings span from antebellum originals through late-Victorian
                      commercial blocks, and many of them have histories that start
                      before the Civil War. Diana covers the families that built
                      these buildings, the businesses that occupied them across
                      generations, and the specific events of 1864 that left marks
                      still visible if you know where to look. The public square has
                      anchored downtown Franklin since the town&rsquo;s founding.
                      The Confederate monument &mdash; one of the most photographed
                      landmarks in Franklin &mdash; stands here, as does the old
                      courthouse. The history of this space tracks the full history
                      of the town.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stop 2 — Carter House */}
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
                <div className="flex items-start gap-5">
                  <span
                    className="shrink-0 text-3xl font-bold leading-none"
                    style={{
                      fontFamily:
                        "var(--font-playfair), 'Playfair Display', serif",
                      color: "rgba(200, 150, 62, 0.25)",
                    }}
                  >
                    02
                  </span>
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
                      The Carter family&rsquo;s Federal-style home, built in
                      1830, sat directly in the path of the Confederate charge
                      at the Battle of Franklin. The family sheltered in their
                      basement while the fighting raged outside and through
                      their property. The bullet holes in the exterior walls and
                      outbuildings have never been repaired &mdash; they remain
                      as they were in November 1864, which makes the Carter
                      House one of the most viscerally honest Civil War sites
                      anywhere in the country. It&rsquo;s one thing to read
                      about the battle; it&rsquo;s another to put your hand near
                      a hole in a wall made by a minie ball in 1864.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stop 3 — Historic Churches */}
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
                <div className="flex items-start gap-5">
                  <span
                    className="shrink-0 text-3xl font-bold leading-none"
                    style={{
                      fontFamily:
                        "var(--font-playfair), 'Playfair Display', serif",
                      color: "rgba(200, 150, 62, 0.25)",
                    }}
                  >
                    03
                  </span>
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
                      The Historic Churches
                    </h3>
                    <p
                      className="text-base leading-relaxed"
                      style={{
                        fontFamily:
                          "var(--font-source-sans), 'Source Sans 3', sans-serif",
                        color: "rgba(245, 240, 232, 0.65)",
                      }}
                    >
                      Franklin&rsquo;s antebellum churches survived the battle
                      better than most buildings, partly because they served as
                      hospitals during and after the fighting, and partly because
                      they were too central to the community to allow to fall.
                      Several of them are among the oldest continuously
                      operating church congregations in Middle Tennessee, and
                      their architecture tells its own story about the ambitions
                      of Franklin&rsquo;s founders.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stop 4 — Franklin Theatre */}
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
                <div className="flex items-start gap-5">
                  <span
                    className="shrink-0 text-3xl font-bold leading-none"
                    style={{
                      fontFamily:
                        "var(--font-playfair), 'Playfair Display', serif",
                      color: "rgba(200, 150, 62, 0.25)",
                    }}
                  >
                    04
                  </span>
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
                      The Franklin Theatre
                    </h3>
                    <p
                      className="text-base leading-relaxed"
                      style={{
                        fontFamily:
                          "var(--font-source-sans), 'Source Sans 3', sans-serif",
                        color: "rgba(245, 240, 232, 0.65)",
                      }}
                    >
                      The Franklin Theatre, built in 1937, is a lovingly
                      restored Art Deco cinema that now serves as a performance
                      and film venue at the center of Main Street. It represents
                      the post-Civil War arc of Franklin&rsquo;s story &mdash;
                      the town that kept rebuilding, kept investing, kept
                      believing in itself across difficult decades. Diana covers
                      the theatre&rsquo;s history and its role in Franklin&rsquo;s
                      present as much as its past.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stop 5 — Residential Architecture, full width */}
            <div
              className="p-1.5 rounded-2xl lg:col-span-2"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(200, 150, 62, 0.15)",
              }}
            >
              <div
                className="rounded-xl p-8 lg:p-10"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
                }}
              >
                <div className="flex items-start gap-6">
                  <span
                    className="shrink-0 text-4xl font-bold leading-none"
                    style={{
                      fontFamily:
                        "var(--font-playfair), 'Playfair Display', serif",
                      color: "rgba(200, 150, 62, 0.25)",
                    }}
                  >
                    05
                  </span>
                  <div>
                    <h3
                      className="text-xl md:text-2xl font-bold mb-3"
                      style={{
                        fontFamily:
                          "var(--font-playfair), 'Playfair Display', serif",
                        color: "#F5F0E8",
                        letterSpacing: "-0.015em",
                      }}
                    >
                      Residential Architecture Along Second and Third Avenues
                    </h3>
                    <p
                      className="text-base leading-relaxed"
                      style={{
                        fontFamily:
                          "var(--font-source-sans), 'Source Sans 3', sans-serif",
                        color: "rgba(245, 240, 232, 0.65)",
                        maxWidth: "72ch",
                      }}
                    >
                      The residential streets immediately behind Main Street
                      preserve some of Franklin&rsquo;s most significant
                      antebellum and Victorian-era homes. Walking these blocks
                      gives a sense of the town that existed before the battle
                      &mdash; the scale of ambition in the homes, the density
                      of the community, and the specific families who shaped
                      Williamson County&rsquo;s history in the decades between
                      Franklin&rsquo;s founding and the Civil War.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          5. BATTLE CONTEXT — cream background, editorial deep-dive
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#F5F0E8" }}
        aria-label="Battle of Franklin historical context"
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
                Historical Context
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
                  maxWidth: "30ch",
                }}
              >
                Why November 30, 1864 Still Defines This Town
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
                  The Battle of Franklin was, by any measure, one of the most
                  extraordinary engagements of the Civil War. Confederate
                  General John Bell Hood ordered a frontal assault against
                  entrenched Union positions across two miles of open ground
                  &mdash; a decision that cost the Confederacy more than 7,000
                  casualties in a single afternoon and evening. Six Confederate
                  generals were killed in the fighting, more than in any other
                  engagement of the war.
                </p>
                <p>
                  The Union army, under General John Schofield, held the line
                  and slipped away in the night toward Nashville. But Franklin
                  bore the aftermath: the dead, the wounded, the destroyed
                  buildings, the shattered community. It took years to bury all
                  the soldiers properly. It took decades to fully comprehend
                  what had happened.
                </p>
                <p>
                  Understanding the battle is essential to understanding
                  Franklin. Diana doesn&rsquo;t just cover what happened
                  &mdash; she covers why it happened, what it meant for the men
                  who fought it, and what it meant for the civilian community
                  that watched it from inside their own homes.
                </p>
              </div>

              {/* Battle stat callout */}
              <div
                className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4"
                style={{ maxWidth: "580px" }}
              >
                {[
                  { number: "7,000+", label: "Confederate casualties in one evening" },
                  { number: "6", label: "Confederate generals killed in battle" },
                  { number: "5 hrs", label: "Duration of the engagement" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-1.5 rounded-xl"
                    style={{
                      backgroundColor: "#FAFAF7",
                      border: "1px solid rgba(27, 42, 74, 0.1)",
                    }}
                  >
                    <div
                      className="rounded-lg px-5 py-4"
                      style={{
                        backgroundColor: "rgba(27, 42, 74, 0.04)",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9)",
                      }}
                    >
                      <p
                        className="text-2xl font-bold mb-1"
                        style={{
                          fontFamily:
                            "var(--font-playfair), 'Playfair Display', serif",
                          color: "#1B2A4A",
                        }}
                      >
                        {stat.number}
                      </p>
                      <p
                        className="text-xs leading-snug"
                        style={{
                          fontFamily:
                            "var(--font-source-sans), 'Source Sans 3', sans-serif",
                          color: "#6b6456",
                        }}
                      >
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          6. YOUR GUIDE — warm white background
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
                  maxWidth: "26ch",
                }}
              >
                History Through a Local&rsquo;s Eyes
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
                  Diana Berry&rsquo;s approach to Franklin&rsquo;s history is
                  grounded in primary sources and genuine curiosity. She&rsquo;s
                  spent time in archives, in conversations with historians at
                  the Carter House and Carnton, and in the kind of sustained
                  engagement with a place that produces the details you
                  don&rsquo;t get from reading a historical marker.
                </p>
                <p>
                  What she brings to the walking tour, specifically, is the
                  ability to make the historical geography legible &mdash; to
                  stand on a street corner and explain what you&rsquo;re
                  standing in the middle of, who stood there before you, and
                  what it meant. Franklin&rsquo;s history is layered in its
                  physical landscape. The tour makes that visible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          7. PERFECT FOR — cream background, prose + audience callout
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#F5F0E8" }}
        aria-label="Who this tour is perfect for"
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
                The Historic Franklin Walking Tour works for first-time visitors
                who want a proper orientation to the town, history enthusiasts
                with a specific interest in the Civil War or Southern
                architecture, families with older children, couples on a day
                trip from Nashville, and locals who&rsquo;ve lived in Franklin
                for years but have never had someone put the pieces together for
                them.
              </p>

              {/* Audience chips */}
              <div className="flex flex-wrap gap-3">
                {[
                  "First-time visitors to Franklin",
                  "Civil War history enthusiasts",
                  "Families with children 8+",
                  "Day-trippers from Nashville",
                  "Architecture & design lovers",
                  "Long-time locals",
                ].map((audience) => (
                  <span
                    key={audience}
                    className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium"
                    style={{
                      fontFamily:
                        "var(--font-source-sans), 'Source Sans 3', sans-serif",
                      backgroundColor: "#FAFAF7",
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
          8. WHAT TO EXPECT — navy background, practical grid
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
              What to Expect
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: <SneakerIcon weight="fill" size={20} />,
                heading: "Comfortable walking shoes",
                body: "The tour covers approximately six city blocks on flat, paved sidewalks. The pace is leisurely — there's no rushing, and questions are welcome throughout.",
              },
              {
                icon: <SunIcon weight="fill" size={20} />,
                heading: "Dress for the weather",
                body: "Daytime Franklin can be warm in summer and cool in fall and winter. Layers are always a good idea. Sun protection in summer — parts of the route pass through open plaza without significant shade.",
              },
              {
                icon: <WheelchairIcon weight="fill" size={20} />,
                heading: "Fully accessible",
                body: "The tour is fully wheelchair and stroller accessible. Franklin's downtown sidewalks are smooth and level throughout the entire tour route.",
              },
              {
                icon: <CameraIcon weight="fill" size={20} />,
                heading: "Photography welcome",
                body: "Franklin's historic district is one of the most photogenic in the South. Photography is welcome and encouraged throughout the tour.",
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
                  className="rounded-xl p-6 h-full"
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
          9. TESTIMONIALS — cream background, 3-col quote cards
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
                  "My husband and I spent a long weekend in Franklin and did the walking tour on our first morning. It completely changed how we experienced the rest of the trip — every building meant something different after Diana explained the history. Two hours that paid for themselves ten times over.",
                name: "Catherine W.",
                location: "Memphis, TN",
              },
              {
                quote:
                  "We brought our kids (10 and 13) and I was genuinely surprised how engaged they both were the entire time. Diana finds the specific details that catch younger people's attention without dumbing anything down. The part about the Carter House family sheltering in their basement during the battle was something our kids talked about for days.",
                name: "David & Heather R.",
                location: "Chicago, IL",
              },
              {
                quote:
                  "I've lived in Franklin for four years and never knew half of what Diana covered on this tour. Embarrassing to admit, but it's true. She knows things about this town that most long-time residents don't.",
                name: "Tom B.",
                location: "Franklin, TN",
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
          10. FAQ — warm white background, left-label + right accordion
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
                Walking Tour Questions Answered
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
          11. BOOKING CTA — navy background, split layout
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#1B2A4A" }}
        aria-label="Book the historic walking tour"
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
                Book the Walking Tour
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
                Two hours. Two and a half centuries. One town that refused to be forgotten.
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
                $30 per adult &mdash; 2 hours &mdash; small groups of max 15.
                Daytime departures from downtown Franklin.
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
                Book the Walking Tour &mdash; $30
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
          12. RELATED TOURS — warm white background, 2-col cards
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
              Two more ways to know Franklin
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
              More ways to experience Franklin with Diana
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
                            backgroundColor: "rgba(17, 29, 51, 0.85)",
                            color: "#C8963E",
                            border: "1px solid rgba(200, 150, 62, 0.25)",
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
