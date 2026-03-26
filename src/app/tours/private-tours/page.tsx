import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ClockIcon,
  UsersIcon,
  MapPinIcon,
  CrownIcon,
  PhoneIcon,
  ArrowRightIcon,
  CurrencyDollarIcon,
  CheckIcon,
  QuotesIcon,
  CalendarIcon,
  ChatCircleIcon,
  PencilSimpleIcon,
  HeartIcon,
  StarIcon,
  BuildingsIcon,
  SuitcaseIcon,
  CameraIcon,
  GhostIcon,
  WarningCircleIcon,
} from "@phosphor-icons/react/dist/ssr";
import TourFaqAccordion from "@/components/TourFaqAccordion";

export const metadata: Metadata = {
  title: "Private Tours Franklin TN | Custom Group Experiences",
  description:
    "Book a private guided tour of Franklin, TN for your group. Bachelorettes, corporate events, family reunions & more. Fully customisable from $150/group.",
  alternates: {
    canonical: "https://nashvilletoursfranklin.com/tours/private-tours",
  },
  openGraph: {
    title: "Private Tours Franklin TN | Custom Group Experiences",
    description:
      "Book a private guided tour of Franklin, TN for your group. Bachelorettes, corporate events, family reunions & more. Fully customisable from $150/group.",
    url: "https://nashvilletoursfranklin.com/tours/private-tours",
    type: "website",
  },
  twitter: {
    title: "Private Tours Franklin TN | Custom Group Experiences",
    description:
      "Book a private guided tour of Franklin, TN for your group. Bachelorettes, corporate events, family reunions & more. Fully customisable from $150/group.",
  },
};

// JSON-LD: TouristTrip schema — static, no XSS risk
const privateTourSchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "@id": "https://nashvilletoursfranklin.com/tours/private-tours#trip",
  name: "Private Custom Tours — Franklin, Tennessee",
  description:
    "Fully customizable private guided experiences for couples, families, bachelorette parties, and corporate groups in Franklin, TN. Choose your theme, pace, and interests. From $150 per group, 2–4 hours.",
  url: "https://nashvilletoursfranklin.com/tours/private-tours",
  touristType: "Private Tour, Custom Tour",
  provider: {
    "@type": "TourOperator",
    "@id": "https://nashvilletoursfranklin.com/#organization",
    name: "Nashville Tours Franklin",
  },
  offers: {
    "@type": "Offer",
    price: "150",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://nashvilletoursfranklin.com/contact",
    description: "From $150 per group (up to 6 guests)",
  },
};

// JSON-LD: FAQPage for private tours — static, no XSS risk
const privateTourFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far in advance do I need to book a private tour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A week's advance notice is ideal for most private tours — it gives Diana time to build the itinerary and make any necessary arrangements. For large groups or complex multi-component tours, two weeks or more is preferred.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum group size for a private tour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no minimum. Couples book private tours regularly. The minimum pricing is per group, not per person, so a tour for two works out more economically than it might appear.",
      },
    },
    {
      "@type": "Question",
      name: "Can I request specific themes or topics for my private tour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — that is the point of a private tour. If you have a particular interest in the Carter House, in the celebrity homes, in Franklin's food scene, in the architectural history, in the haunted sites, or in any combination thereof, Diana will build around it.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cancellation policy for private tours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Private tours cancelled 72 hours or more before the tour receive a full refund. Cancellations within 72 hours are non-refundable, but we will do our best to reschedule if possible.",
      },
    },
    {
      "@type": "Question",
      name: "Can you accommodate accessibility requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Let Diana know about any accessibility needs when booking — she will design the tour route and format to accommodate them.",
      },
    },
  ],
};

// JSON-LD: BreadcrumbList for private tours
const privateTourBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nashvilletoursfranklin.com" },
    { "@type": "ListItem", position: 2, name: "Private Custom Tours", item: "https://nashvilletoursfranklin.com/tours/private-tours" },
  ],
};

/* ─── Occasions data ────────────────────────────────────────────────────────── */
const occasions = [
  {
    icon: <HeartIcon weight="light" size={22} />,
    title: "Bachelorette Parties & Girls' Trips",
    body: "Franklin has become one of the South's most popular bachelorette destinations. Diana can build an evening ghost tour, a celebrity homes and food combination, or a full-afternoon history immersion — whatever fits the group and the tone of the weekend.",
  },
  {
    icon: <StarIcon weight="light" size={22} />,
    title: "Couples & Anniversary Celebrations",
    body: "An anniversary, a honeymoon, a milestone birthday — occasions that deserve more than a generic group experience. A private tour can be shaped around what matters to you specifically, including spots in Franklin that have personal significance.",
  },
  {
    icon: <UsersIcon weight="light" size={22} />,
    title: "Family Reunions",
    body: "Multi-generational groups are one of Diana's favorite private tour clients. She's experienced with groups ranging from grandparents to grandchildren and knows how to find the level of detail that works across a wide age range.",
  },
  {
    icon: <SuitcaseIcon weight="light" size={22} />,
    title: "Corporate Team Outings",
    body: "A private Franklin tour is a genuinely different corporate experience — one that gives a team shared context about a remarkable place rather than a ropes course or a bowling alley. Works well for groups who want something with real conversation.",
  },
  {
    icon: <BuildingsIcon weight="light" size={22} />,
    title: "Out-of-Town Guests",
    body: "When you have visitors who deserve to see Franklin properly — not the tourist version, but the real version — a private tour is the most efficient way to make that happen. Diana covers in two hours what would take most people days to discover.",
  },
  {
    icon: <CameraIcon weight="light" size={22} />,
    title: "Photographers & Content Creators",
    body: "Franklin's historic district, architecture, and residential areas are visually exceptional. A private tour can be paced around photographic opportunities, with Diana positioning the group at the right spots at the right times.",
  },
];

/* ─── How it works steps ────────────────────────────────────────────────────── */
const steps = [
  {
    number: "01",
    icon: <ChatCircleIcon weight="light" size={22} />,
    title: "Reach out",
    body: "Contact Diana via phone or email with the basics: occasion, approximate group size, date, and what interests you. A five-minute conversation is usually enough to establish the shape of the tour.",
  },
  {
    number: "02",
    icon: <PencilSimpleIcon weight="light" size={22} />,
    title: "Diana designs your itinerary",
    body: "Based on your interests and the time available, Diana puts together a proposed tour route and focus. She'll suggest the combination of stops, themes, and experiences that makes most sense for your group.",
  },
  {
    number: "03",
    icon: <CalendarIcon weight="light" size={22} />,
    title: "Confirm and prepare",
    body: "Once you've agreed on the itinerary, Diana confirms the booking, sends practical information about meeting points and what to bring, and handles any special arrangements.",
  },
  {
    number: "04",
    icon: <MapPinIcon weight="light" size={22} />,
    title: "Your tour",
    body: "No other guests, no competing agendas, no rushing. Diana guides your group at your pace through the Franklin she knows best.",
  },
];

/* ─── Sample itineraries ────────────────────────────────────────────────────── */
const itineraries = [
  {
    title: "The Complete History + Haunted Evening",
    duration: "~4 hours",
    popular: "History groups & couples",
    icon: <GhostIcon weight="light" size={18} />,
    stops: [
      "Afternoon historic walking tour of downtown Franklin",
      "The founding, the Civil War, and the antebellum architecture",
      "Private ghost tour as the sun goes down",
      "Franklin's most haunted sites with full historical context",
    ],
  },
  {
    title: "Celebrity Homes + Food & Spirits",
    duration: "~4 hours",
    popular: "Bachelorette parties & girls' trips",
    icon: <StarIcon weight="light" size={18} />,
    stops: [
      "Van tour through Franklin's celebrity neighborhoods",
      "Hallmark filming locations in the historic district",
      "Private version of the food and spirits tour",
      "4–5 food and drink stops with Diana's commentary",
    ],
  },
  {
    title: "The Family Franklin Experience",
    duration: "~2.5 hours",
    popular: "Family reunions & multi-generational groups",
    icon: <UsersIcon weight="light" size={18} />,
    stops: [
      "Walking and van combination format",
      "Franklin's history, architecture, and contemporary culture",
      "Paced for all ages — grandparents to grandchildren",
      "The highlights of Franklin in a single afternoon",
    ],
  },
  {
    title: "Corporate Discovery Tour",
    duration: "~2 hours",
    popular: "Corporate groups & retreats",
    icon: <SuitcaseIcon weight="light" size={18} />,
    stops: [
      "Franklin's founding and Civil War history",
      "The town's reinvention and current identity",
      "Architecture and the stories behind the storefronts",
      "Room for the discussion that tends to follow",
    ],
  },
];

/* ─── Testimonials ──────────────────────────────────────────────────────────── */
const testimonials = [
  {
    quote:
      "We did a private bachelorette tour that combined the celebrity homes with a ghost tour finish in the evening. Diana was funny, warm, completely unflappable when we wanted to linger, and somehow managed to keep six women with different interests equally engaged for four hours. Remarkable.",
    name: "Stephanie K.",
    location: "Atlanta, GA",
    occasion: "Bachelorette party",
  },
  {
    quote:
      "We booked a private tour for a family reunion — 5 adults, ages 35 to 78, with very different interests. Diana found the version of Franklin that worked for all of us simultaneously. I still don't fully understand how she did that.",
    name: "Patricia L.",
    location: "Birmingham, AL",
    occasion: "Family reunion",
  },
  {
    quote:
      "Our company brought a team of ten to Franklin for a retreat and Diana split them across two private tours. The conversation at dinner that evening was all about what they'd learned. It worked better than anything we could have planned ourselves.",
    name: "Robert M.",
    location: "Nashville, TN",
    occasion: "Corporate retreat",
  },
];

/* ─── FAQ items ─────────────────────────────────────────────────────────────── */
const faqItems = [
  {
    question: "How far in advance do I need to book?",
    answer:
      "A week's advance notice is ideal for most private tours — it gives Diana time to build the itinerary and make any necessary arrangements. For large groups or complex multi-component tours, two weeks or more is preferred. For simpler tours with shorter notice, get in touch and we'll see what's possible.",
  },
  {
    question: "What is the minimum group size?",
    answer:
      "There is no minimum. Couples book private tours regularly. The minimum pricing is per group, not per person, so a tour for two works out more economically than it might appear.",
  },
  {
    question: "Can I request specific themes or topics?",
    answer:
      "Yes — that's the point of a private tour. If you have a particular interest in the Carter House, in the celebrity homes, in Franklin's food scene, in the architectural history, in the haunted sites, or in any combination thereof, Diana will build around it.",
  },
  {
    question: "What is the cancellation policy for private tours?",
    answer:
      "Private tours cancelled 72 hours or more before the tour receive a full refund. Cancellations within 72 hours are non-refundable, but we will do our best to reschedule if possible.",
  },
  {
    question: "Can you accommodate accessibility requirements?",
    answer:
      "Yes. Let Diana know about any accessibility needs when booking — she'll design the tour route and format to accommodate them.",
  },
  {
    question: "Is there a minimum booking duration?",
    answer:
      "Private tours are available from two hours. For bespoke experiences that combine multiple tour types, plan for three to four hours.",
  },
];

/* ─── Related tours ─────────────────────────────────────────────────────────── */
const relatedTours = [
  {
    name: "Celebrity Homes & Filming Locations",
    tagline: "The most popular private tour add-on",
    price: "$55",
    href: "/tours/celebrity-tour",
    image: "/images/hero-celebrity-tour.png",
    imageAlt: "Williamson County estate at golden hour",
  },
  {
    name: "Ghost & Haunted History Tour",
    tagline: "A favourite for bachelorette evenings",
    price: "$35",
    href: "/tours/ghost-tour",
    image: "/images/hero-ghost-tour.png",
    imageAlt: "Historic antebellum mansion at twilight",
  },
  {
    name: "Historic Franklin Walking Tour",
    tagline: "The foundation for every Franklin visit",
    price: "$30",
    href: "/tours/historic-walking-tour",
    image: "/images/hero-historic-tour.png",
    imageAlt: "Historic Franklin Tennessee Main Street on a sunny day",
  },
];

/* ─── Page ───────────────────────────────────────────────────────────────────── */
export default function PrivateToursPage() {
  return (
    <>
      {/* TouristTrip, FAQPage, BreadcrumbList structured data — static JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(privateTourSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(privateTourFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(privateTourBreadcrumbSchema) }} />
    <div style={{ backgroundColor: "#FAFAF7" }}>

      {/* ══════════════════════════════════════════════════════════════════════
          1. HERO — split layout: left editorial content, right image fill
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "92dvh" }}
        aria-label="Private Tours Hero"
      >
        <Image
          src="/images/hero-private-tours.png"
          alt="Female tour guide in a navy blazer pointing out historic details to a small private group of four guests on a Franklin Tennessee sidewalk"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Overlay — heavier at bottom, preserves mid-image visibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(170deg, rgba(17,29,51,0.3) 0%, rgba(17,29,51,0.65) 50%, rgba(17,29,51,0.9) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Bottom blend */}
        <div
          className="absolute bottom-0 left-0 right-0 h-28"
          style={{
            background: "linear-gradient(to top, #FAFAF7 0%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        {/* Hero content */}
        <div
          className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-end pb-20 pt-40"
          style={{ minHeight: "92dvh" }}
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
              <CrownIcon weight="bold" size={11} />
              Private &amp; Custom Experience
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
            Private &amp; Custom Tours of Franklin, Tennessee
          </h1>

          {/* Sub */}
          <p
            className="mb-8 leading-relaxed"
            style={{
              fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
              color: "rgba(245, 240, 232, 0.78)",
              fontSize: "1.1rem",
              maxWidth: "44ch",
            }}
          >
            No strangers. No fixed itinerary you didn&apos;t agree to. No moving on from a building you actually wanted to spend more time with.
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
                From $150 / group
              </span>
            </div>
          </div>

          {/* Quick stats row */}
          <div className="flex flex-wrap gap-3">
            {[
              { icon: <ClockIcon weight="bold" size={11} />, label: "2–4 hours flexible" },
              { icon: <UsersIcon weight="bold" size={11} />, label: "Up to 6 guests" },
              { icon: <MapPinIcon weight="bold" size={11} />, label: "Your group only" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: "rgba(245, 240, 232, 0.1)",
                  border: "1px solid rgba(245, 240, 232, 0.2)",
                  color: "rgba(245, 240, 232, 0.85)",
                  fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  backdropFilter: "blur(4px)",
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

            {/* Left: editorial opening */}
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
                Your group. Your pace. Your Franklin.
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
                  A private tour with Nashville Tours Franklin is exactly what it sounds like: your group, your interests, your pace. Diana Berry builds the tour around what you genuinely want to see and do in Franklin — whether that&apos;s a deep dive into Civil War history, an evening of ghost stories and haunted sites, a combination of the celebrity homes and the downtown food scene, or something that doesn&apos;t fit neatly into any category.
                </p>
                <p>
                  The private tour is also Nashville Tours Franklin&apos;s most flexible product. Duration, theme, timing, focus, group composition — all of it is worked out in advance through a brief conversation with Diana. You tell her what the occasion is and what your group cares about; she builds a Franklin experience around that.
                </p>
              </div>
            </div>

            {/* Right: pricing card */}
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
                  <div
                    className="space-y-0 divide-y mb-8"
                    style={{ borderColor: "rgba(27, 42, 74, 0.08)" }}
                  >
                    {[
                      { label: "Price", value: "From $150 / group (up to 6)" },
                      { label: "Duration", value: "2–4 hours (flexible)" },
                      { label: "Group size", value: "Up to 6 (larger by arrangement)" },
                      { label: "Format", value: "Private — your group only" },
                      { label: "Customisation", value: "Full — theme, focus, pace, duration" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-start justify-between gap-4 py-3.5"
                      >
                        <span
                          className="text-sm font-medium shrink-0"
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

                  {/* Pricing note */}
                  <div
                    className="rounded-xl p-4 mb-6"
                    style={{
                      backgroundColor: "rgba(200, 150, 62, 0.07)",
                      border: "1px solid rgba(200, 150, 62, 0.15)",
                    }}
                  >
                    <p
                      className="text-xs leading-relaxed"
                      style={{
                        fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                        color: "#6b6456",
                      }}
                    >
                      Longer tours, larger groups, or multi-component experiences are priced accordingly. Diana provides a clear quote as part of the planning conversation — no ambiguity, no surprises.
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm"
                    style={{
                      fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                      backgroundColor: "#1B2A4A",
                      color: "#F5F0E8",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Enquire Now
                    <ArrowRightIcon weight="bold" size={13} />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════
          3. PERFECT FOR — navy background, occasion cards
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#1B2A4A" }}
        aria-labelledby="occasions-heading"
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
              Perfect For
            </p>
            <h2
              id="occasions-heading"
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                color: "#F5F0E8",
                lineHeight: 1.18,
                letterSpacing: "-0.02em",
                maxWidth: "28ch",
              }}
            >
              Every occasion that deserves more than a generic group experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {occasions.map((occasion) => (
              <div
                key={occasion.title}
                className="rounded-2xl p-1"
                style={{
                  backgroundColor: "rgba(245, 240, 232, 0.04)",
                  border: "1px solid rgba(245, 240, 232, 0.08)",
                }}
              >
                <div
                  className="rounded-xl p-7 h-full"
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
                    {occasion.icon}
                  </div>
                  <h3
                    className="mb-3 font-semibold text-base"
                    style={{
                      fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                      color: "#F5F0E8",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {occasion.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                      color: "rgba(245, 240, 232, 0.62)",
                    }}
                  >
                    {occasion.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════
          4. HOW CUSTOMISATION WORKS — warm white, timeline steps
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#FAFAF7" }}
        aria-labelledby="process-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-14">
            <p
              className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-4"
              style={{
                fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                color: "#7A5820",
              }}
            >
              How It Works
            </p>
            <h2
              id="process-heading"
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                color: "#1B2A4A",
                lineHeight: 1.18,
                letterSpacing: "-0.02em",
              }}
            >
              Building Your Tour
            </h2>
            <p
              className="mt-4 text-base leading-relaxed"
              style={{
                fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                color: "#6b6456",
              }}
            >
              The process is a conversation, not a form.
            </p>
          </div>

          {/* Steps — vertical timeline on mobile, horizontal on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex flex-col"
              >
                {/* Connector line — desktop only, between cards */}
                {index < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-9 left-[calc(100%+0.75rem)] w-6 h-px"
                    style={{
                      backgroundColor: "rgba(200, 150, 62, 0.3)",
                      zIndex: 1,
                    }}
                    aria-hidden="true"
                  />
                )}
                <div
                  className="rounded-2xl p-1"
                  style={{
                    backgroundColor: "rgba(27, 42, 74, 0.04)",
                    border: "1px solid rgba(27, 42, 74, 0.08)",
                  }}
                >
                  <div
                    className="rounded-xl p-7 h-full"
                    style={{
                      backgroundColor: "#FAFAF7",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9)",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{
                          backgroundColor: "rgba(27, 42, 74, 0.06)",
                          border: "1px solid rgba(27, 42, 74, 0.1)",
                          color: "#1B2A4A",
                        }}
                      >
                        {step.icon}
                      </div>
                      <span
                        className="text-2xl font-bold"
                        style={{
                          fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                          color: "rgba(139, 106, 42, 0.2)",
                          letterSpacing: "-0.04em",
                        }}
                      >
                        {step.number}
                      </span>
                    </div>
                    <h3
                      className="mb-3 font-semibold"
                      style={{
                        fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                        color: "#1B2A4A",
                        fontSize: "1rem",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                        color: "#6b6456",
                      }}
                    >
                      {step.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════
          5. SAMPLE ITINERARIES — cream background
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#F5F0E8" }}
        aria-labelledby="itineraries-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-14">
            <p
              className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-4"
              style={{
                fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                color: "#7A5820",
              }}
            >
              Sample Itineraries
            </p>
            <h2
              id="itineraries-heading"
              className="mb-4"
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                color: "#1B2A4A",
                lineHeight: 1.18,
                letterSpacing: "-0.02em",
              }}
            >
              Private Tour Starting Points
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{
                fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                color: "#6b6456",
              }}
            >
              These are examples, not fixed menus — every private tour is built fresh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {itineraries.map((itinerary) => (
              <div
                key={itinerary.title}
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
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9)",
                  }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div
                        className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center mt-0.5"
                        style={{
                          backgroundColor: "rgba(27, 42, 74, 0.06)",
                          border: "1px solid rgba(27, 42, 74, 0.1)",
                          color: "#1B2A4A",
                        }}
                      >
                        {itinerary.icon}
                      </div>
                      <div>
                        <h3
                          className="font-semibold"
                          style={{
                            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                            color: "#1B2A4A",
                            fontSize: "1.1rem",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {itinerary.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Meta pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: "rgba(27, 42, 74, 0.06)",
                        border: "1px solid rgba(27, 42, 74, 0.1)",
                        color: "#1B2A4A",
                        fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                      }}
                    >
                      <ClockIcon weight="bold" size={11} />
                      {itinerary.duration}
                    </span>
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: "rgba(200, 150, 62, 0.08)",
                        border: "1px solid rgba(200, 150, 62, 0.15)",
                        color: "#7A5820",
                        fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                      }}
                    >
                      Popular with {itinerary.popular}
                    </span>
                  </div>

                  {/* Stop list */}
                  <div className="space-y-3">
                    {itinerary.stops.map((stop) => (
                      <div key={stop} className="flex items-start gap-3">
                        <div
                          className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                          style={{
                            backgroundColor: "rgba(200, 150, 62, 0.1)",
                            color: "#7A5820",
                          }}
                        >
                          <CheckIcon weight="bold" size={10} />
                        </div>
                        <p
                          className="text-sm leading-relaxed"
                          style={{
                            fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                            color: "#6b6456",
                          }}
                        >
                          {stop}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note below itineraries */}
          <div
            className="mt-8 flex items-start gap-4 rounded-2xl p-6 max-w-3xl"
            style={{
              backgroundColor: "rgba(27, 42, 74, 0.04)",
              border: "1px solid rgba(27, 42, 74, 0.08)",
            }}
          >
            <WarningCircleIcon weight="light" size={20} style={{ color: "#7A5820", flexShrink: 0, marginTop: "2px" }} />
            <p
              className="text-sm leading-relaxed"
              style={{
                fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                color: "#6b6456",
              }}
            >
              If your group has specific interests not reflected in these examples — a deep focus on the Battle of Franklin, the Carter House, specific architectural periods, the food scene, or a combination you have in mind — Diana will build around it. These are starting points, not limits.
            </p>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════
          6. PRICING TRANSPARENCY — warm white, clear rate breakdown
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#FAFAF7" }}
        aria-labelledby="pricing-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            <div className="lg:col-span-5">
              <p
                className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-4"
                style={{
                  fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#7A5820",
                }}
              >
                Pricing
              </p>
              <h2
                id="pricing-heading"
                className="mb-5"
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                  color: "#1B2A4A",
                  lineHeight: 1.18,
                  letterSpacing: "-0.02em",
                }}
              >
                Private Tour Rates
              </h2>
              <p
                className="text-base leading-relaxed mb-8"
                style={{
                  fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#6b6456",
                  maxWidth: "40ch",
                }}
              >
                Private tours start from <strong style={{ color: "#1B2A4A" }}>$150 for a group of up to 6 guests</strong>. Longer tours, larger groups, or multi-component experiences are priced accordingly. Diana will provide a clear quote as part of the planning conversation — no ambiguity, no surprises.
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{
                  fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#6b6456",
                  maxWidth: "40ch",
                }}
              >
                For groups larger than 6, or for corporate or event inquiries, contact Diana directly to discuss logistics and pricing.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  {
                    label: "Standard group (up to 6)",
                    price: "From $150",
                    note: "2-hour base experience",
                  },
                  {
                    label: "Extended tour (3–4 hours)",
                    price: "Quoted on request",
                    note: "Multi-component experiences",
                  },
                  {
                    label: "Corporate or event groups",
                    price: "Contact for rates",
                    note: "Groups larger than 6",
                  },
                  {
                    label: "Cancellation (72h+ notice)",
                    price: "Full refund",
                    note: "Within 72h — non-refundable",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl p-1"
                    style={{
                      backgroundColor: "rgba(27, 42, 74, 0.04)",
                      border: "1px solid rgba(27, 42, 74, 0.08)",
                    }}
                  >
                    <div
                      className="rounded-xl p-6"
                      style={{
                        backgroundColor: "#FAFAF7",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9)",
                      }}
                    >
                      <p
                        className="text-xs font-medium mb-2"
                        style={{
                          fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                          color: "#6b6456",
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                        }}
                      >
                        {item.label}
                      </p>
                      <p
                        className="font-bold mb-1"
                        style={{
                          fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                          color: "#1B2A4A",
                          fontSize: "1.3rem",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {item.price}
                      </p>
                      <p
                        className="text-xs"
                        style={{
                          fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                          color: "rgba(107, 100, 86, 0.65)",
                        }}
                      >
                        {item.note}
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
          7. TESTIMONIALS — navy background
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
              What private tour guests say
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
                  <div className="flex items-start justify-between gap-2">
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
                    <span
                      className="text-[10px] uppercase tracking-[0.15em] font-medium px-3 py-1.5 rounded-full"
                      style={{
                        backgroundColor: "rgba(200, 150, 62, 0.12)",
                        color: "#C8963E",
                        fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {t.occasion}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════
          8. FAQ — warm white background
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#FAFAF7" }}
        aria-labelledby="faq-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

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
                Private Tour Questions Answered
              </h2>
              <p
                className="text-sm leading-relaxed"
                style={{
                  fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#6b6456",
                  maxWidth: "32ch",
                }}
              >
                From booking windows to accessibility — everything you need to know before reaching out.
              </p>
              <div className="mt-8">
                <a
                  href="mailto:dberry017@icloud.com"
                  className="inline-flex items-center gap-2 text-sm font-medium"
                  style={{
                    fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                    color: "#7A5820",
                  }}
                >
                  Email Diana directly
                  <ArrowRightIcon weight="bold" size={13} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-8">
              <TourFaqAccordion items={faqItems} />
            </div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════
          9. BOOKING CTA — deep navy, primary close
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#111d33" }}
        aria-label="Enquire about a private tour"
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
                Enquire About a Private Tour
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
                Tell Diana the occasion. She&apos;ll build the rest.
              </h2>
              <p
                className="mb-8 text-base leading-relaxed"
                style={{
                  fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "rgba(245, 240, 232, 0.65)",
                  maxWidth: "52ch",
                }}
              >
                From $150 for a group of up to 6. Flexible duration, theme, and focus. Reach out to start the conversation — a five-minute call is usually all it takes to shape the tour.
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
                  Enquire Now
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
                <a
                  href="mailto:dberry017@icloud.com"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-medium text-sm"
                  style={{
                    fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                    backgroundColor: "rgba(245, 240, 232, 0.08)",
                    border: "1px solid rgba(245, 240, 232, 0.15)",
                    color: "rgba(245, 240, 232, 0.8)",
                    letterSpacing: "0.02em",
                  }}
                >
                  dberry017@icloud.com
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="space-y-4">
                {[
                  "Fully private — only your group on the tour",
                  "Theme, focus, and duration built around you",
                  "No minimum group size — couples book regularly",
                  "A five-minute call shapes the entire experience",
                  "Clear quote, no surprises — confirmed before booking",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div
                      className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{
                        backgroundColor: "rgba(200, 150, 62, 0.15)",
                        color: "#C8963E",
                      }}
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
          10. RELATED TOURS — cream background
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
              Popular Private Tour Add-Ons
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
              Tours to combine with a private experience
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
                  className="rounded-2xl p-1.5"
                  style={{
                    backgroundColor: "rgba(27, 42, 74, 0.06)",
                    border: "1px solid rgba(27, 42, 74, 0.1)",
                  }}
                >
                  <div
                    className="rounded-xl overflow-hidden"
                    style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8)" }}
                  >
                    <div className="relative overflow-hidden" style={{ aspectRatio: "3/2" }}>
                      <Image
                        src={tour.image}
                        alt={tour.imageAlt}
                        fill
                        className="object-cover object-center"
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
                        {tour.price} / adult
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
