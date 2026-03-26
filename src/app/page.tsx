import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  GhostIcon,
  BuildingsIcon,
  ForkKnifeIcon,
  StarIcon,
  CrownIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ArrowRightIcon,
  CheckIcon,
  QuotesIcon,
  MapPinIcon,
  PhoneIcon,
} from "@phosphor-icons/react/dist/ssr";
import FaqAccordion from "@/components/FaqAccordion";
import AnimateOnScroll from "@/components/AnimateOnScroll";

/* ─── Section divider — decorative gold hairline between sections ─────────── */
function SectionDivider({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={`section-divider ${dark ? "section-divider-dark" : ""}`}
      aria-hidden="true"
    >
      <div className="section-divider-rule" />
      <div className="section-divider-ornament" />
      <div className="section-divider-ornament" style={{ opacity: 0.6 }} />
      <div className="section-divider-ornament" />
      <div className="section-divider-rule" />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Guided Tours of Franklin TN | Nashville Tours Franklin",
  description:
    "Explore Franklin, TN with expert local guides. Ghost tours, historic walks, food experiences, celebrity homes & private tours. Book today.",
  alternates: {
    canonical: "https://nashvilletoursfranklin.com",
  },
  openGraph: {
    title: "Guided Tours of Franklin TN | Nashville Tours Franklin",
    description:
      "Explore Franklin, TN with expert local guides. Ghost tours, historic walks, food experiences, celebrity homes & private tours. Book today.",
    url: "https://nashvilletoursfranklin.com",
    type: "website",
  },
  twitter: {
    title: "Guided Tours of Franklin TN | Nashville Tours Franklin",
    description:
      "Explore Franklin, TN with expert local guides. Ghost tours, historic walks, food experiences, celebrity homes & private tours. Book today.",
  },
};

/* ─── Tour data ──────────────────────────────────────────────────────────── */
const tours = [
  {
    slug: "ghost-tour",
    name: "Ghost & Haunted History Tour",
    tagline: "The weight of 1864, after dark",
    description:
      "Franklin sits on one of the Civil War's bloodiest battlefields. More than 9,000 men fell on a single November night — and some, by all accounts, never left. Walk the haunted heart of downtown, from the Carter House to Carnton Plantation.",
    price: "$35",
    priceUnit: "adult",
    duration: "90 minutes",
    type: "Evening tour",
    image: "/images/hero-ghost-tour.png",
    imageAlt:
      "Historic antebellum mansion at twilight, illuminated windows glowing warm amber against a deep purple sky",
    icon: <GhostIcon weight="light" size={18} />,
    href: "/tours/ghost-tour",
  },
  {
    slug: "historic-walking-tour",
    name: "Historic Franklin Walking Tour",
    tagline: "Founded 1799. Nearly destroyed 1864. Rebuilt magnificently.",
    description:
      "Six city blocks, two centuries of history. The founding families, antebellum architecture, the Civil War battle that touched every building, and the community that chose to remember rather than forget.",
    price: "$30",
    priceUnit: "adult",
    duration: "2 hours",
    type: "Daytime tour",
    image: "/images/hero-historic-tour.png",
    imageAlt:
      "Historic Franklin Tennessee Main Street on a sunny day, preserved 19th-century brick storefronts and the Franklin Theatre",
    icon: <BuildingsIcon weight="light" size={18} />,
    href: "/tours/historic-walking-tour",
  },
  {
    slug: "food-tour",
    name: "Franklin Food & Spirits Tour",
    tagline: "Southern cooking treated seriously",
    description:
      "Five to six of the best spots in downtown Franklin, with generous tastings at each stop and the stories behind the kitchens. Come hungry — portions add up to a full meal.",
    price: "$85",
    priceUnit: "adult",
    duration: "3 hours",
    type: "5–6 stops",
    image: "/images/hero-food-tour.png",
    imageAlt:
      "Artisanal Southern food spread including fried chicken, cornbread skillet, biscuits and two craft bourbon cocktails in a warm Franklin restaurant",
    icon: <ForkKnifeIcon weight="light" size={18} />,
    href: "/tours/food-tour",
  },
  {
    slug: "celebrity-tour",
    name: "Celebrity Homes & Filming Locations Tour",
    tagline: "Where country music's biggest names go to be left alone",
    description:
      "Keith Urban. Nicole Kidman. Carrie Underwood. Reese Witherspoon. Brad Paisley. Kenny Chesney. Franklin is one of the most celebrity-dense zip codes in America — and the only tour that covers it with real context.",
    price: "$55",
    priceUnit: "adult",
    duration: "2.5 hours",
    type: "Small group van tour",
    image: "/images/hero-celebrity-tour.png",
    imageAlt:
      "Elegant estate home surrounded by rolling green Tennessee hills and white horse fencing in Williamson County at golden hour",
    icon: <StarIcon weight="light" size={18} />,
    href: "/tours/celebrity-tour",
  },
  {
    slug: "private-tours",
    name: "Private Custom Tours",
    tagline: "No strangers. No fixed schedule. No rushing.",
    description:
      "Built around your occasion, your interests, your pace. Bachelorette parties, family reunions, anniversary weekends, corporate outings. Diana designs the tour around what you want to see and do.",
    price: "From $150",
    priceUnit: "group up to 6",
    duration: "2–4 hours",
    type: "Your group only",
    image: "/images/hero-private-tours.png",
    imageAlt:
      "Female tour guide in a navy blazer pointing out historic details to a small private group of four guests on a Franklin Tennessee sidewalk",
    icon: <CrownIcon weight="light" size={18} />,
    href: "/tours/private-tours",
  },
];

/* ─── Why section differentiators ───────────────────────────────────────── */
const differentiators = [
  {
    number: "01",
    heading: "Local knowledge that's genuinely local.",
    body: "Diana Berry has lived in and around Franklin for years. She knows the stories that don't appear on the historical markers, the family histories that explain why certain buildings still stand, and the back-channels of a community that takes its history seriously.",
  },
  {
    number: "02",
    heading: "Story-first, not fact-first.",
    body: "Facts are on Wikipedia. Stories are what make you remember a place. Every tour is built around narrative — real people, real moments, real consequences. You'll leave knowing what happened here, not just when.",
  },
  {
    number: "03",
    heading: "Small groups by design.",
    body: "Tours stay small so you can actually hear, ask questions, and have a real conversation rather than straining to listen to someone with a loudspeaker. Private tours are just your group.",
  },
  {
    number: "04",
    heading: "Every tour type in one place.",
    body: "Ghost history, walking history, food, celebrity homes, private custom experiences — Nashville Tours Franklin is the only operator in Franklin with dedicated tours across all of these categories.",
  },
  {
    number: "05",
    heading: "Transparent pricing, no surprises.",
    body: "Everything is listed clearly. What you pay is what the tour costs. No upsells at the end, no add-on fees, no ambiguity.",
  },
];

/* ─── Testimonials ───────────────────────────────────────────────────────── */
const testimonials = [
  {
    quote:
      "The ghost tour genuinely surprised me. I came expecting something cheesy and got something genuinely moving — the Civil War history behind the hauntings is real, and Diana tells it with care. Best thing I did in Tennessee.",
    name: "Marcus T.",
    location: "Nashville",
    tour: "Ghost Tour",
  },
  {
    quote:
      "We did the walking tour as a family — kids aged 10 and 14 — and both of them were completely engaged the whole two hours. Diana has a gift for finding the details that catch young people's attention. We learned more about the Civil War in that morning than in years of school.",
    name: "Heather & David R.",
    location: "Chicago",
    tour: "Historic Walking Tour",
  },
  {
    quote:
      "I'm a local. I've lived in Franklin for six years. I did the food tour with my sister who was visiting and discovered three restaurants I'd never been to. Diana knows this food scene like she helped build it.",
    name: "Lauren M.",
    location: "Franklin, TN",
    tour: "Food & Spirits Tour",
  },
  {
    quote:
      "For our bachelorette weekend, we booked a private tour combining the celebrity homes and the historic district. Diana was funny, warm, incredibly knowledgeable, and completely flexible when we wanted to linger somewhere. The whole group talked about it the rest of the trip.",
    name: "Stephanie K.",
    location: "Atlanta",
    tour: "Private Tour",
  },
  {
    quote:
      "I've done ghost tours in New Orleans, Charleston, and Savannah. The Franklin ghost tour is the one I still think about. The Battle of Franklin history gives it a weight that the Southern ghost tour circuit doesn't usually have.",
    name: "James P.",
    location: "Charlotte",
    tour: "Ghost Tour",
  },
];


// JSON-LD: FAQPage schema — static content, no XSS risk
const homepageFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where do tours meet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All tours depart from downtown Franklin, Tennessee. The exact meeting point is confirmed in your booking confirmation along with parking guidance. Downtown Franklin has free parking in both garages and street spaces.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if it rains?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tours run in light rain. We cancel only for lightning, tornado warnings, or below-freezing temperatures. If we cancel, you will receive a full refund or rescheduling at no charge.",
      },
    },
    {
      "@type": "Question",
      name: "Are the tours suitable for children?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The historic walking tour and food tour are great for families with children aged 8 and up. The ghost tour is best for ages 12 and up. The celebrity tour works for all ages. Private tours can be adjusted for any group composition.",
      },
    },
    {
      "@type": "Question",
      name: "How far in advance should I book?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We recommend booking at least 48 hours in advance, especially on weekends and in October when the ghost tour in particular sells out quickly. Private tours should be booked at least a week out to allow time for customization.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer gift certificates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Tours make excellent gifts, and gift certificates can be purchased for any tour or as a dollar amount toward a private booking. Contact us at dberry017@icloud.com or call (661) 201-9003 to arrange one.",
      },
    },
    {
      "@type": "Question",
      name: "Is Franklin, Tennessee worth visiting from Nashville?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Without question. Franklin consistently ranks among the most charming small towns in America, and the historic district, food scene, and overall atmosphere are genuinely different from Nashville's tourist center. Most visitors from Nashville say they wish they had budgeted more time. A half-day is enough for a single tour; a full day lets you pair a tour with lunch or dinner on Main Street.",
      },
    },
  ],
};

// JSON-LD: BreadcrumbList for homepage — static, no XSS risk
const homepageBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://nashvilletoursfranklin.com",
    },
  ],
};

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* FAQPage + BreadcrumbList structured data — static JSON-LD, no XSS risk */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageBreadcrumbSchema) }} />
      {/* ════════════════════════════════════════════════════════════════════
          1. HERO — full-bleed image with left-anchored editorial overlay
          Not a centered headline. Not a floating text block.
          Asymmetric split: darkened image fills the screen, editorial
          content sits hard-left with a vertical accent line.
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-[100dvh] flex items-end lg:items-center overflow-hidden"
        aria-label="Hero"
      >
        {/* Background image — fills full section */}
        <Image
          src="/images/hero-homepage.png"
          alt="Historic downtown Franklin Tennessee Main Street at golden hour, couples strolling past beautifully preserved brick storefronts"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Dark overlay — heavier at left, lighter at right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(17,29,51,0.88) 0%, rgba(17,29,51,0.72) 50%, rgba(17,29,51,0.35) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Bottom vignette for breathing room */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background:
              "linear-gradient(to top, rgba(17,29,51,0.5) 0%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        {/* Content — hard left, vertically centred on desktop / bottom on mobile */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pb-16 pt-36 lg:py-0">
          <div className="flex items-start gap-6 lg:gap-8">
            {/* Vertical gold rule — decorative, desktop only */}
            <div
              className="hidden lg:block shrink-0 w-px self-stretch"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, #C8963E 20%, #C8963E 80%, transparent 100%)",
                minHeight: "220px",
              }}
              aria-hidden="true"
            />

            {/* Editorial text column */}
            <div style={{ maxWidth: "620px" }}>
              {/* Eyebrow */}
              <div className="mb-5">
                <span
                  className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[10px] uppercase tracking-[0.22em] font-semibold"
                  style={{
                    backgroundColor: "rgba(200, 150, 62, 0.15)",
                    color: "#C8963E",
                    border: "1px solid rgba(200, 150, 62, 0.3)",
                    fontFamily:
                      "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  }}
                >
                  <MapPinIcon weight="fill" size={10} />
                  Franklin, Tennessee
                </span>
              </div>

              {/* H1 — from content spec */}
              <h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] font-bold leading-[1.08] mb-5"
                style={{
                  fontFamily:
                    "var(--font-playfair), 'Playfair Display', serif",
                  color: "#F5F0E8",
                  letterSpacing: "-0.025em",
                }}
              >
                Franklin&rsquo;s Stories.{" "}
                <em
                  className="not-italic"
                  style={{ color: "#C8963E" }}
                >
                  Told By Someone Who Lives Them.
                </em>
              </h1>

              {/* Subheadline — exact copy from spec */}
              <p
                className="text-base md:text-lg leading-relaxed mb-9"
                style={{
                  fontFamily:
                    "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "rgba(245, 240, 232, 0.75)",
                  maxWidth: "52ch",
                  lineHeight: "1.8",
                }}
              >
                Diana Berry has spent years uncovering Franklin&rsquo;s
                best-kept secrets &mdash; the Civil War ghosts, the celebrity
                neighbors, the restaurants only locals know. Join a guided
                tour just 30 minutes from Nashville.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Primary */}
                <Link
                  href="/contact"
                  className="btn-gold inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm group/primary"
                  style={{
                    fontFamily:
                      "var(--font-source-sans), 'Source Sans 3', sans-serif",
                    backgroundColor: "#C8963E",
                    color: "#1B2A4A",
                    letterSpacing: "0.04em",
                    boxShadow: "0 4px 24px rgba(200, 150, 62, 0.4)",
                  }}
                >
                  Browse Our Tours
                  {/* Button-in-button icon */}
                  <span
                    className="btn-arrow-icon w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(27, 42, 74, 0.15)" }}
                  >
                    <ArrowRightIcon weight="bold" size={10} />
                  </span>
                </Link>

                {/* Secondary */}
                <Link
                  href="/tours/private-tours"
                  className="btn-outline-cream inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-400"
                  style={{
                    fontFamily:
                      "var(--font-source-sans), 'Source Sans 3', sans-serif",
                    backgroundColor: "transparent",
                    color: "#F5F0E8",
                    letterSpacing: "0.04em",
                    border: "1px solid rgba(245, 240, 232, 0.3)",
                    transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
                  }}
                >
                  Book a Private Tour
                </Link>
              </div>

              {/* Small trust note */}
              <p
                className="mt-8 text-xs uppercase tracking-[0.18em] font-medium"
                style={{
                  fontFamily:
                    "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "rgba(245, 240, 232, 0.3)",
                }}
              >
                Licensed tour operator &mdash; locally owned &amp; operated
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          2. INTRO SECTION — antique cream background, generous whitespace
          Left-aligned pull-quote style, not centered prose dump.
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#F5F0E8" }}
        aria-label="About Franklin"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimateOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            {/* Left — label column */}
            <div className="lg:col-span-3 lg:pt-2">
              <span
                className="inline-block text-[10px] uppercase tracking-[0.22em] font-semibold mb-4"
                style={{
                  fontFamily:
                    "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#7A5820",
                }}
              >
                Franklin, Tennessee
              </span>
              {/* Gold rule */}
              <div
                className="w-8 h-px"
                style={{ backgroundColor: "#C8963E" }}
                aria-hidden="true"
              />
            </div>

            {/* Right — editorial paragraphs */}
            <div className="lg:col-span-9">
              {/* Pull quote paragraph */}
              <p
                className="text-2xl md:text-3xl font-bold leading-snug mb-8"
                style={{
                  fontFamily:
                    "var(--font-playfair), 'Playfair Display', serif",
                  color: "#1B2A4A",
                  letterSpacing: "-0.02em",
                  maxWidth: "24ch",
                }}
              >
                Twenty miles south of Nashville, quietly captivating visitors
                for generations.
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
                  It&rsquo;s the kind of town where a single afternoon on Main
                  Street turns into three hours because there&rsquo;s always
                  one more building with a story, one more doorway that leads
                  somewhere interesting, one more local who wants to tell you
                  something you didn&rsquo;t know.
                </p>
                <p>
                  Franklin has one of the best-preserved historic districts in
                  America. It sits on a Civil War battlefield that shaped the
                  war&rsquo;s final months. Country music royalty calls it
                  home. And for the past few years, it&rsquo;s been quietly
                  appearing in Hallmark movies because it simply looks like the
                  kind of town people dream about.
                </p>
                <p>
                  The best way to experience Franklin is not with a map.
                  It&rsquo;s with a guide who was here before the tourists
                  found it &mdash; one who knows which buildings have hidden
                  histories, which street corners carry the weight of 1864, and
                  where to find the best biscuits in Williamson County.
                </p>
                <p
                  className="font-semibold"
                  style={{ color: "#1B2A4A" }}
                >
                  That&rsquo;s Nashville Tours Franklin.
                </p>
              </div>
            </div>
          </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Section divider — cream to navy transition */}
      <div
        className="py-6"
        style={{ backgroundColor: "#1B2A4A" }}
        aria-hidden="true"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionDivider dark />
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          3. TOUR CARDS SECTION — navy background, asymmetric grid
          2-column on desktop. Cards use the double-bezel technique.
          NOT a uniform 3-column card row.
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-16 lg:py-24"
        style={{ backgroundColor: "#1B2A4A" }}
        aria-label="Our tours"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Section header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <span
                className="inline-block text-[10px] uppercase tracking-[0.22em] font-semibold mb-4"
                style={{
                  fontFamily:
                    "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#C8963E",
                }}
              >
                Our Tours
              </span>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                style={{
                  fontFamily:
                    "var(--font-playfair), 'Playfair Display', serif",
                  color: "#F5F0E8",
                  letterSpacing: "-0.02em",
                  maxWidth: "18ch",
                }}
              >
                Our Franklin, Tennessee Tours
              </h2>
              <p
                className="mt-4 text-base"
                style={{
                  fontFamily:
                    "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "rgba(245, 240, 232, 0.6)",
                  maxWidth: "44ch",
                }}
              >
                Whether you have two hours or a full afternoon, we have a tour
                built around what you love most.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold shrink-0"
              style={{
                fontFamily:
                  "var(--font-source-sans), 'Source Sans 3', sans-serif",
                backgroundColor: "#C8963E",
                color: "#1B2A4A",
                letterSpacing: "0.04em",
                boxShadow: "0 4px 20px rgba(200, 150, 62, 0.3)",
              }}
            >
              Book a Tour
            </Link>
          </div>

          {/* Tour cards grid — 2 columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {tours.map((tour, i) => (
              <AnimateOnScroll key={tour.slug} delay={i * 60}>
              <Link
                href={tour.href}
                className="group block h-full"
              >
                {/* Outer shell — double bezel + CSS hover class */}
                <div
                  className="tour-card-shell p-1.5 rounded-2xl relative"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(200, 150, 62, 0.12)",
                  }}
                >
                  {/* Gold accent line — animates 0 → 100% on hover */}
                  <div className="tour-card-accent-line rounded-bl-2xl rounded-br-2xl" aria-hidden="true" />

                  {/* Inner core */}
                  <div
                    className="rounded-xl overflow-hidden"
                    style={{ backgroundColor: "rgba(17, 29, 51, 0.8)" }}
                  >
                    {/* Image */}
                    <div className="relative h-52 md:h-60 overflow-hidden">
                      <Image
                        src={tour.image}
                        alt={tour.imageAlt}
                        fill
                        className="tour-card-image object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {/* Subtle dark overlay on image */}
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

                    {/* Content */}
                    <div className="p-6">
                      {/* Name */}
                      <h3
                        className="text-lg md:text-xl font-bold leading-snug mb-2 transition-colors duration-300"
                        style={{
                          fontFamily:
                            "var(--font-playfair), 'Playfair Display', serif",
                          color: "#F5F0E8",
                          letterSpacing: "-0.01em",
                          transitionTimingFunction:
                            "cubic-bezier(0.32, 0.72, 0, 1)",
                        }}
                      >
                        {tour.name}
                      </h3>

                      {/* Tagline */}
                      <p
                        className="text-xs uppercase tracking-[0.14em] font-medium mb-3"
                        style={{
                          fontFamily:
                            "var(--font-source-sans), 'Source Sans 3', sans-serif",
                          color: "#C8963E",
                        }}
                      >
                        {tour.tagline}
                      </p>

                      {/* Description — text-base (16px) for readability */}
                      <p
                        className="text-base leading-relaxed mb-5"
                        style={{
                          fontFamily:
                            "var(--font-source-sans), 'Source Sans 3', sans-serif",
                          color: "rgba(245, 240, 232, 0.6)",
                          lineHeight: "1.75",
                        }}
                      >
                        {tour.description}
                      </p>

                      {/* Footer row — price, duration, CTA */}
                      <div
                        className="flex items-center justify-between pt-4"
                        style={{
                          borderTop: "1px solid rgba(200, 150, 62, 0.12)",
                        }}
                      >
                        {/* Price + duration */}
                        <div className="flex items-center gap-5">
                          <div className="flex items-center gap-1.5">
                            <CurrencyDollarIcon
                              weight="light"
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
                              {tour.price}
                              <span
                                className="font-normal text-xs ml-0.5"
                                style={{
                                  /* Raised from 0.45 to 0.65 — passes WCAG AA against dark navy card background */
                                  color: "rgba(245, 240, 232, 0.65)",
                                }}
                              >
                                /{tour.priceUnit}
                              </span>
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <ClockIcon
                              weight="light"
                              size={14}
                              style={{ color: "#C8963E" }}
                            />
                            <span
                              className="text-xs"
                              style={{
                                fontFamily:
                                  "var(--font-source-sans), 'Source Sans 3', sans-serif",
                                color: "rgba(245, 240, 232, 0.5)",
                              }}
                            >
                              {tour.duration}
                            </span>
                          </div>
                        </div>

                        {/* Arrow CTA */}
                        <span
                          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-300"
                          style={{
                            fontFamily:
                              "var(--font-source-sans), 'Source Sans 3', sans-serif",
                            color: "#C8963E",
                            transitionTimingFunction:
                              "cubic-bezier(0.32, 0.72, 0, 1)",
                          }}
                        >
                          Details
                          <ArrowRightIcon weight="bold" size={11} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Section divider — navy to warm-white */}
      <div
        className="py-6"
        style={{ backgroundColor: "#FAFAF7" }}
        aria-hidden="true"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionDivider />
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          4. WHY NASHVILLE TOURS FRANKLIN — warm white background
          Numbered list layout — editorial, not a grid of icon cards.
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-16 lg:py-24"
        style={{ backgroundColor: "#FAFAF7" }}
        aria-label="Why choose us"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            {/* Left — sticky label */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <span
                className="inline-block text-[10px] uppercase tracking-[0.22em] font-semibold mb-4"
                style={{
                  fontFamily:
                    "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#7A5820",
                }}
              >
                Why Us
              </span>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
                style={{
                  fontFamily:
                    "var(--font-playfair), 'Playfair Display', serif",
                  color: "#1B2A4A",
                  letterSpacing: "-0.02em",
                }}
              >
                Why Visitors Choose Nashville Tours Franklin
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{
                  fontFamily:
                    "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#6b6456",
                  maxWidth: "38ch",
                }}
              >
                Five things that genuinely separate a Nashville Tours Franklin
                experience from everything else in the area.
              </p>
            </div>

            {/* Right — numbered differentiators */}
            <div className="lg:col-span-8">
              <div
                className="divide-y"
                style={{ borderColor: "rgba(27, 42, 74, 0.1)" }}
              >
                {differentiators.map((item, i) => (
                  <AnimateOnScroll key={i} delay={i * 50}>
                  <div
                    className="grid grid-cols-12 gap-6 py-8 lg:py-10 items-start"
                  >
                    {/* Number */}
                    <div className="col-span-2 lg:col-span-2">
                      <span
                        className="text-4xl lg:text-5xl font-bold leading-none"
                        style={{
                          fontFamily:
                            "var(--font-playfair), 'Playfair Display', serif",
                          color: "rgba(200, 150, 62, 0.2)",
                          letterSpacing: "-0.03em",
                        }}
                      >
                        {item.number}
                      </span>
                    </div>
                    {/* Content */}
                    <div className="col-span-10">
                      <h3
                        className="text-lg font-bold leading-snug mb-3"
                        style={{
                          fontFamily:
                            "var(--font-playfair), 'Playfair Display', serif",
                          color: "#1B2A4A",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {item.heading}
                      </h3>
                      <p
                        className="text-base leading-relaxed"
                        style={{
                          fontFamily:
                            "var(--font-source-sans), 'Source Sans 3', sans-serif",
                          color: "#6b6456",
                          maxWidth: "60ch",
                          lineHeight: "1.75",
                        }}
                      >
                        {item.body}
                      </p>
                    </div>
                  </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section divider — warm-white to cream */}
      <div
        className="py-6"
        style={{ backgroundColor: "#F5F0E8" }}
        aria-hidden="true"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionDivider />
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          5. TESTIMONIALS — antique cream, editorial layout
          Large pull-quote format. NOT the 5-star + avatar chip pattern.
          Staggered two-column masonry on desktop.
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 lg:py-32 overflow-hidden"
        style={{ backgroundColor: "#F5F0E8" }}
        aria-label="Guest testimonials"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Header */}
          <div className="mb-14">
            <span
              className="inline-block text-[10px] uppercase tracking-[0.22em] font-semibold mb-4"
              style={{
                fontFamily:
                  "var(--font-source-sans), 'Source Sans 3', sans-serif",
                color: "#7A5820",
              }}
            >
              Guest Voices
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              style={{
                fontFamily:
                  "var(--font-playfair), 'Playfair Display', serif",
                color: "#1B2A4A",
                letterSpacing: "-0.02em",
                maxWidth: "18ch",
              }}
            >
              What Our Guests Say
            </h2>
          </div>

          {/* Testimonials — asymmetric 2-col grid on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {testimonials.map((t, i) => (
              <AnimateOnScroll key={i} delay={i * 70}>
              <div
                /* Offset alternate cards downward on desktop */
                className={`${i % 2 !== 0 ? "md:mt-10" : ""}`}
              >
                {/* Outer bezel + testimonial hover class */}
                <div
                  className="testimonial-card-shell p-1.5 rounded-2xl h-full"
                  style={{
                    backgroundColor: "rgba(27, 42, 74, 0.04)",
                    border: "1px solid rgba(27, 42, 74, 0.1)",
                  }}
                >
                  {/* Inner */}
                  <div
                    className="rounded-xl p-7 lg:p-8 h-full flex flex-col"
                    style={{ backgroundColor: "#FAFAF7" }}
                  >
                    {/* Large decorative quote mark */}
                    <div className="mb-5" aria-hidden="true">
                      <QuotesIcon
                        weight="fill"
                        size={36}
                        style={{ color: "rgba(200, 150, 62, 0.25)" }}
                      />
                    </div>

                    {/* Quote text */}
                    <blockquote
                      className="text-base md:text-lg leading-relaxed flex-1 mb-6"
                      style={{
                        fontFamily:
                          "var(--font-playfair), 'Playfair Display', serif",
                        color: "#1B2A4A",
                        fontStyle: "italic",
                        lineHeight: "1.75",
                      }}
                    >
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>

                    {/* Attribution */}
                    <div
                      className="pt-5 flex items-center justify-between"
                      style={{
                        borderTop: "1px solid rgba(27, 42, 74, 0.1)",
                      }}
                    >
                      <div>
                        <p
                          className="text-sm font-semibold"
                          style={{
                            fontFamily:
                              "var(--font-source-sans), 'Source Sans 3', sans-serif",
                            color: "#1B2A4A",
                          }}
                        >
                          {t.name}
                        </p>
                        <p
                          className="text-xs mt-0.5"
                          style={{
                            fontFamily:
                              "var(--font-source-sans), 'Source Sans 3', sans-serif",
                            color: "#6b6456",
                          }}
                        >
                          {t.location}
                        </p>
                      </div>
                      <span
                        className="inline-flex items-center px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.14em] font-semibold"
                        style={{
                          backgroundColor: "rgba(200, 150, 62, 0.1)",
                          color: "#7A5820",
                          fontFamily:
                            "var(--font-source-sans), 'Source Sans 3', sans-serif",
                        }}
                      >
                        {t.tour}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Section divider — cream to warm-white */}
      <div
        className="py-6"
        style={{ backgroundColor: "#FAFAF7" }}
        aria-hidden="true"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionDivider />
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          6. ABOUT DIANA PREVIEW — warm white, image right / text left
          Alternating layout. Image in double-bezel frame.
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-16 lg:py-24"
        style={{ backgroundColor: "#FAFAF7" }}
        aria-label="About your guide"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimateOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left — text */}
            <div>
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
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
                style={{
                  fontFamily:
                    "var(--font-playfair), 'Playfair Display', serif",
                  color: "#1B2A4A",
                  letterSpacing: "-0.02em",
                }}
              >
                Your Guide to Franklin, Tennessee
              </h2>

              <div
                className="space-y-5 text-base leading-relaxed mb-10"
                style={{
                  fontFamily:
                    "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#6b6456",
                  lineHeight: "1.8",
                }}
              >
                <p>
                  Diana Berry has been telling Franklin&rsquo;s stories for
                  years &mdash; and she still finds new ones. A Franklin local
                  with deep roots in Williamson County&rsquo;s history, Diana
                  built Nashville Tours Franklin on a simple conviction: the
                  best tours are the ones where you forget you&rsquo;re on a
                  tour and feel like you&rsquo;re just talking to someone who
                  knows everything about a place they love.
                </p>
                <p>
                  She has spent years researching Franklin&rsquo;s Civil War
                  history, interviewing long-time residents, and building
                  relationships with the restaurants, historians, and community
                  figures who make this town what it is. Every tour reflects
                  that work.
                </p>
              </div>

              {/* Credentials list */}
              <ul className="space-y-3 mb-10">
                {[
                  "Franklin local with deep Williamson County roots",
                  "Years of Civil War research and community relationships",
                  "Licensed tour operator, locally owned and operated",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ backgroundColor: "rgba(200, 150, 62, 0.15)" }}
                    >
                      <CheckIcon
                        weight="bold"
                        size={10}
                        style={{ color: "#C8963E" }}
                      />
                    </span>
                    <span
                      className="text-sm"
                      style={{
                        fontFamily:
                          "var(--font-source-sans), 'Source Sans 3', sans-serif",
                        color: "#6b6456",
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/about"
                className="btn-gold inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm"
                style={{
                  fontFamily:
                    "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  backgroundColor: "#1B2A4A",
                  color: "#F5F0E8",
                  letterSpacing: "0.04em",
                  boxShadow: "0 4px 20px rgba(27, 42, 74, 0.2)",
                }}
              >
                Read Diana&rsquo;s Story
                <span
                  className="btn-arrow-icon w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(245, 240, 232, 0.12)" }}
                >
                  <ArrowRightIcon weight="bold" size={10} />
                </span>
              </Link>
            </div>

            {/* Right — portrait in double bezel */}
            <div className="order-first lg:order-last">
              {/* Outer shell */}
              <div
                className="p-2 rounded-3xl"
                style={{
                  backgroundColor: "rgba(200, 150, 62, 0.08)",
                  border: "1px solid rgba(200, 150, 62, 0.18)",
                }}
              >
                {/* Inner core */}
                <div className="rounded-2xl overflow-hidden relative aspect-[4/5]">
                  <Image
                    src="/images/about-diana.png"
                    alt="Diana Berry, founder and lead guide of Nashville Tours Franklin, standing on historic Main Street in Franklin Tennessee"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Section divider — warm-white to cream */}
      <div
        className="py-6"
        style={{ backgroundColor: "#F5F0E8" }}
        aria-hidden="true"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionDivider />
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          7. FAQ SECTION — cream background, accordion interaction
          Client component handles open/close state.
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-16 lg:py-24"
        style={{ backgroundColor: "#F5F0E8" }}
        aria-label="Frequently asked questions"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            {/* Left label */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <span
                className="inline-block text-[10px] uppercase tracking-[0.22em] font-semibold mb-4"
                style={{
                  fontFamily:
                    "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#7A5820",
                }}
              >
                Questions
              </span>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
                style={{
                  fontFamily:
                    "var(--font-playfair), 'Playfair Display', serif",
                  color: "#1B2A4A",
                  letterSpacing: "-0.02em",
                }}
              >
                Frequently Asked Questions
              </h2>
              <p
                className="text-base leading-relaxed mb-8"
                style={{
                  fontFamily:
                    "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#6b6456",
                  maxWidth: "36ch",
                }}
              >
                Can&rsquo;t find what you&rsquo;re looking for? Reach out
                directly.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+16612019003"
                  className="inline-flex items-center gap-2.5 text-sm font-medium transition-colors duration-300"
                  style={{
                    fontFamily:
                      "var(--font-source-sans), 'Source Sans 3', sans-serif",
                    color: "#1B2A4A",
                  }}
                >
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(200, 150, 62, 0.15)" }}
                  >
                    <PhoneIcon
                      weight="fill"
                      size={13}
                      style={{ color: "#C8963E" }}
                    />
                  </span>
                  (661) 201-9003
                </a>
                <a
                  href="mailto:dberry017@icloud.com"
                  className="inline-flex items-center gap-2.5 text-sm font-medium transition-colors duration-300"
                  style={{
                    fontFamily:
                      "var(--font-source-sans), 'Source Sans 3', sans-serif",
                    color: "#1B2A4A",
                    wordBreak: "break-all",
                  }}
                >
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(200, 150, 62, 0.15)" }}
                  >
                    <MapPinIcon
                      weight="fill"
                      size={13}
                      style={{ color: "#C8963E" }}
                    />
                  </span>
                  dberry017@icloud.com
                </a>
              </div>
            </div>

            {/* Right — accordion */}
            <div className="lg:col-span-8">
              <FaqAccordion />
            </div>
          </div>
        </div>
      </section>

      {/* Section divider — cream to navy */}
      <div
        className="py-6"
        style={{ backgroundColor: "#1B2A4A" }}
        aria-hidden="true"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionDivider dark />
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          8. FINAL CTA — navy background, full-width, gold CTA
          Strong editorial presence. Not a floating card in white space.
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative py-20 lg:py-32 overflow-hidden"
        style={{ backgroundColor: "#1B2A4A" }}
        aria-label="Call to action"
      >
        {/* Subtle warm texture — right side image bleed */}
        <div
          className="absolute right-0 top-0 bottom-0 w-1/3 lg:w-2/5 hidden lg:block opacity-20"
          aria-hidden="true"
        >
          <Image
            src="/images/hero-homepage.png"
            alt=""
            fill
            className="object-cover object-center"
            sizes="40vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #1B2A4A 0%, transparent 60%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <AnimateOnScroll>
          <div style={{ maxWidth: "640px" }}>
            {/* Eyebrow */}
            <span
              className="inline-block text-[10px] uppercase tracking-[0.22em] font-semibold mb-6"
              style={{
                fontFamily:
                  "var(--font-source-sans), 'Source Sans 3', sans-serif",
                color: "#C8963E",
              }}
            >
              Ready to explore
            </span>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6"
              style={{
                fontFamily:
                  "var(--font-playfair), 'Playfair Display', serif",
                color: "#F5F0E8",
                letterSpacing: "-0.025em",
              }}
            >
              Ready to See Franklin Properly?
            </h2>

            <p
              className="text-base md:text-lg leading-relaxed mb-10"
              style={{
                fontFamily:
                  "var(--font-source-sans), 'Source Sans 3', sans-serif",
                color: "rgba(245, 240, 232, 0.68)",
                maxWidth: "52ch",
                lineHeight: "1.8",
              }}
            >
              Franklin, Tennessee has more history, more stories, and more to
              discover than most people realize until they&rsquo;ve had someone
              show them. Browse the full tour lineup, or reach out directly to
              start planning a private experience.
            </p>

            {/* CTA group */}
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              {/* Primary */}
              <Link
                href="/contact"
                className="btn-gold inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold text-sm"
                style={{
                  fontFamily:
                    "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  backgroundColor: "#C8963E",
                  color: "#1B2A4A",
                  letterSpacing: "0.04em",
                  boxShadow: "0 4px 28px rgba(200, 150, 62, 0.45)",
                }}
              >
                View All Tours
                <span
                  className="btn-arrow-icon w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(27, 42, 74, 0.18)" }}
                >
                  <ArrowRightIcon weight="bold" size={10} />
                </span>
              </Link>

              {/* Secondary */}
              <Link
                href="/tours/private-tours"
                className="btn-outline-cream inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-400"
                style={{
                  fontFamily:
                    "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  backgroundColor: "transparent",
                  color: "#F5F0E8",
                  letterSpacing: "0.04em",
                  border: "1px solid rgba(245, 240, 232, 0.25)",
                  transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
                }}
              >
                Book a Private Tour
              </Link>

              {/* Tertiary phone */}
              <a
                href="tel:+16612019003"
                className="inline-flex items-center gap-2 px-5 py-4 rounded-full text-sm transition-all duration-400 active:scale-[0.97]"
                style={{
                  fontFamily:
                    "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "rgba(245, 240, 232, 0.55)",
                  letterSpacing: "0.02em",
                  transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
                }}
              >
                <PhoneIcon weight="light" size={14} />
                (661) 201-9003
              </a>
            </div>
          </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
