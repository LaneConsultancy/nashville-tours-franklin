import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MapPinIcon,
  BookOpenIcon,
  UsersThreeIcon,
  MagnifyingGlassIcon,
  ChatTeardropTextIcon,
  CalendarCheckIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the expert local guides behind Nashville Tours Franklin — the definitive Franklin, TN tour experience.",
  alternates: {
    canonical: "https://nashvilletoursfranklin.com/about",
  },
  openGraph: {
    title: "About Us | Nashville Tours Franklin",
    description:
      "Meet the expert local guides behind Nashville Tours Franklin — the definitive Franklin, TN tour experience.",
    url: "https://nashvilletoursfranklin.com/about",
    type: "website",
  },
  twitter: {
    title: "About Us | Nashville Tours Franklin",
    description:
      "Meet the expert local guides behind Nashville Tours Franklin — the definitive Franklin, TN tour experience.",
  },
};

const differentiators = [
  {
    icon: BookOpenIcon,
    heading: "Primary Sources, Not Mythology",
    body: "Every story is grounded in archive research and conversations with local historians at the Carter House and Carnton — not tour-guide lore passed down from previous operators.",
  },
  {
    icon: UsersThreeIcon,
    heading: "Groups Small Enough to Ask Questions",
    body: "Questions are not an interruption. A small group means the tour goes where the conversation leads. That's a deliberate choice, not a capacity constraint.",
  },
  {
    icon: MagnifyingGlassIcon,
    heading: "Five Distinct Curiosities",
    body: "Ghost and haunted history, historic walking, food and spirits, celebrity homes and filming locations, and fully private custom experiences — each built around a specific kind of interest.",
  },
  {
    icon: ChatTeardropTextIcon,
    heading: "Conversation, Not Lecture",
    body: "Most operators give you facts with a narrative arc. The aim here is something closer to genuinely meeting the place — knowing when a story needs the full version and when one detail is enough.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Page Header ──────────────────────────────────────────────────────── */}
      <section
        className="pt-36 pb-20 md:pt-44 md:pb-28"
        style={{ backgroundColor: "#F5F0E8" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <p
              className="text-[10px] uppercase tracking-[0.22em] font-medium mb-5"
              style={{
                fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                color: "#7A5820",
              }}
            >
              About Nashville Tours Franklin
            </p>

            {/* H1 */}
            <h1
              className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6"
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                color: "#1B2A4A",
                letterSpacing: "-0.02em",
              }}
            >
              Franklin, Tennessee's
              <br />
              <em className="font-normal" style={{ color: "#C8963E" }}>
                Premium Guided Tour
              </em>
              <br />
              Experience
            </h1>

            {/* Intro line */}
            <p
              className="text-lg md:text-xl leading-relaxed max-w-[60ch]"
              style={{
                fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                color: "#6b6456",
              }}
            >
              The more you look at Franklin, the more you find. A building that
              looks like a pleasant Victorian storefront turns out to have served
              as a Confederate field hospital. The town&rsquo;s founder is buried
              under one of the most picturesque public squares in the South.
              None of it is secret — nobody&rsquo;s just pointed it out yet.
            </p>
          </div>
        </div>
      </section>

      {/* ── Diana's Story — Split Layout ─────────────────────────────────────── */}
      <section
        className="py-24 md:py-36"
        style={{ backgroundColor: "#FAFAF7" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Image — double-bezel treatment */}
            <div className="relative">
              <div
                className="p-2 rounded-[2rem]"
                style={{
                  background: "rgba(245, 240, 232, 0.8)",
                  border: "1px solid rgba(200, 150, 62, 0.15)",
                  boxShadow: "0 24px 60px rgba(27, 42, 74, 0.08)",
                }}
              >
                <div
                  className="overflow-hidden rounded-[calc(2rem-0.5rem)] relative"
                  style={{
                    boxShadow: "inset 0 1px 1px rgba(255,255,255,0.6)",
                  }}
                >
                  <Image
                    src="/images/about-diana.png"
                    alt="Diana Berry, founder and lead guide of Nashville Tours Franklin, standing on historic Main Street in Franklin Tennessee"
                    width={800}
                    height={1000}
                    className="w-full object-cover"
                    style={{ aspectRatio: "4 / 5" }}
                    priority
                  />
                  {/* Warm fade at bottom */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                    aria-hidden="true"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(245, 240, 232, 0.35), transparent)",
                    }}
                  />
                </div>
              </div>

              {/* Floating credential badge */}
              <div
                className="absolute -bottom-5 -right-2 md:right-6 px-4 py-3 rounded-xl"
                style={{
                  backgroundColor: "#1B2A4A",
                  border: "1px solid rgba(200, 150, 62, 0.2)",
                  boxShadow: "0 8px 32px rgba(27, 42, 74, 0.25)",
                }}
              >
                <p
                  className="text-[10px] uppercase tracking-[0.18em] font-medium mb-0.5"
                  style={{
                    fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                    color: "#C8963E",
                  }}
                >
                  Licensed Operator
                </p>
                <p
                  className="text-sm font-semibold leading-tight"
                  style={{
                    fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                    color: "#F5F0E8",
                  }}
                >
                  Locally Owned &amp; Operated
                  <br />
                  Franklin, Tennessee
                </p>
              </div>
            </div>

            {/* Story text */}
            <div className="lg:pt-4">
              {/* Section label */}
              <p
                className="text-[10px] uppercase tracking-[0.22em] font-medium mb-4"
                style={{
                  fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#7A5820",
                }}
              >
                Why I Started Nashville Tours Franklin
              </p>

              <h2
                className="text-3xl md:text-4xl font-bold mb-8 leading-[1.15]"
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                  color: "#1B2A4A",
                  letterSpacing: "-0.02em",
                }}
              >
                Diana Berry
              </h2>

              <div
                className="space-y-5 text-base leading-relaxed"
                style={{
                  fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#4a4540",
                }}
              >
                <p>
                  I&rsquo;ve been showing people around Franklin for years —
                  friends who came to visit, relatives passing through Nashville,
                  colleagues from out of state who&rsquo;d heard the town was
                  worth a detour. At some point I realized I was doing it anyway,
                  so I might as well do it properly.
                </p>
                <p>
                  Franklin is the kind of place that rewards attention. A quiet
                  residential street runs alongside the ground where two armies
                  tore each other apart on a November night in 1864. The
                  town&rsquo;s founder is buried under one of the most
                  picturesque public squares in the South. None of this is
                  secret — it&rsquo;s all documented — but most visitors walk
                  right past it because nobody&rsquo;s pointed it out yet.
                </p>
                <p>
                  That&rsquo;s the gap I wanted to fill.
                </p>
                <p
                  className="text-lg font-medium italic"
                  style={{
                    color: "#1B2A4A",
                    borderLeft: "3px solid #C8963E",
                    paddingLeft: "1.25rem",
                  }}
                >
                  Nashville Tours Franklin started as a simple conviction:
                  Franklin deserves guides who treat it seriously. Not as a
                  charming backdrop for a photo opportunity, but as a place with
                  real history, real people, and stories that actually matter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── My Connection to Franklin ─────────────────────────────────────────── */}
      <section
        className="py-24 md:py-36"
        style={{ backgroundColor: "#F5F0E8" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">

            {/* Left — heading + location marker */}
            <div className="lg:sticky lg:top-32">
              <p
                className="text-[10px] uppercase tracking-[0.22em] font-medium mb-4"
                style={{
                  fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#7A5820",
                }}
              >
                Roots in the Community
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold leading-[1.15] mb-8"
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                  color: "#1B2A4A",
                  letterSpacing: "-0.02em",
                }}
              >
                My Connection
                <br />
                to Franklin
              </h2>

              <div
                className="flex items-center gap-2.5"
                style={{ color: "#6b6456" }}
              >
                <MapPinIcon weight="light" size={18} style={{ color: "#C8963E", flexShrink: 0 }} />
                <span
                  className="text-sm"
                  style={{
                    fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  }}
                >
                  Williamson County, Tennessee
                </span>
              </div>
            </div>

            {/* Right — body text */}
            <div
              className="space-y-6 text-base leading-relaxed"
              style={{
                fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                color: "#4a4540",
              }}
            >
              <p>
                I&rsquo;ve lived in and around Williamson County long enough to
                remember Franklin before it made the national lists of best small
                towns. I&rsquo;ve watched the food scene develop from a handful
                of places to something genuinely remarkable. I&rsquo;ve talked
                to long-time residents who remember the town before the
                restoration of Main Street, and to historians at the Carter
                House and Carnton who&rsquo;ve spent decades piecing together
                what happened here in November 1864.
              </p>
              <p>
                That accumulation of conversations, research, and time is what
                I bring to every tour.
              </p>
              <p>
                Franklin&rsquo;s history isn&rsquo;t just the Civil War, though
                that alone could fill a dozen tours. It&rsquo;s also the
                founding families who built this town on the frontier in 1799.
                The antebellum architecture that survived because the community
                decided it mattered. The music industry that quietly relocated
                here over the past three decades, filling the old estates and
                new builds with some of the biggest names in country music. The
                food scene that grew up around all of it.
              </p>
              <p
                className="text-lg font-semibold"
                style={{ color: "#1B2A4A" }}
              >
                I love this town. That&rsquo;s probably the most important thing
                to know about me as a guide — the enthusiasm is not a
                performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Nashville Tours Franklin Difference ──────────────────────────── */}
      <section
        className="py-24 md:py-36"
        style={{ backgroundColor: "#1B2A4A" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Section header */}
          <div className="max-w-2xl mb-16 md:mb-20">
            <p
              className="text-[10px] uppercase tracking-[0.22em] font-medium mb-4"
              style={{
                fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                color: "#C8963E",
              }}
            >
              What Makes the Difference
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold leading-[1.1] mb-6"
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                color: "#F5F0E8",
                letterSpacing: "-0.02em",
              }}
            >
              A Nashville Tours Franklin
              <br />
              <em className="font-normal" style={{ color: "#C8963E" }}>
                Experience
              </em>
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{
                fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                color: "rgba(245, 240, 232, 0.65)",
                maxWidth: "54ch",
              }}
            >
              Most tour operators give you facts with a narrative arc. The aim
              here is something closer to a conversation — one where you feel
              like you&rsquo;ve genuinely met the place.
            </p>
          </div>

          {/* Differentiators — asymmetric 2-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px"
            style={{ background: "rgba(200, 150, 62, 0.12)" }}
          >
            {differentiators.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="p-8 md:p-10"
                  style={{ backgroundColor: "#1B2A4A" }}
                >
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
                    style={{
                      backgroundColor: "rgba(200, 150, 62, 0.12)",
                      border: "1px solid rgba(200, 150, 62, 0.2)",
                    }}
                  >
                    <Icon
                      weight="light"
                      size={22}
                      style={{ color: "#C8963E" }}
                    />
                  </div>

                  <h3
                    className="text-xl font-bold mb-3 leading-snug"
                    style={{
                      fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                      color: "#F5F0E8",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.heading}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                      color: "rgba(245, 240, 232, 0.6)",
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── A Note on Private Tours ───────────────────────────────────────────── */}
      <section
        className="py-24 md:py-32"
        style={{ backgroundColor: "#FAFAF7" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16 items-center">

            {/* Text content */}
            <div>
              <p
                className="text-[10px] uppercase tracking-[0.22em] font-medium mb-4"
                style={{
                  fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#7A5820",
                }}
              >
                The Purest Experience
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold leading-[1.15] mb-6"
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                  color: "#1B2A4A",
                  letterSpacing: "-0.02em",
                }}
              >
                A Note on Private Tours
              </h2>
              <div
                className="space-y-5 text-base leading-relaxed max-w-[58ch]"
                style={{
                  fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#4a4540",
                }}
              >
                <p>
                  The private custom tour is, in many ways, the purest version
                  of what I do. A small group, no fixed schedule, and the
                  freedom to go wherever the conversation leads.
                </p>
                <p>
                  Bachelorette weekends, family reunions, anniversary
                  celebrations, corporate outings, out-of-town guests who
                  deserve the full treatment — every private tour is different
                  because every group is different.
                </p>
                <p>
                  If you&rsquo;re planning something specific, reach out
                  directly. I&rsquo;ll build an experience around what you
                  actually want.
                </p>
              </div>
            </div>

            {/* Private tour detail card */}
            <div
              className="p-2 rounded-[1.75rem]"
              style={{
                background: "rgba(245, 240, 232, 0.9)",
                border: "1px solid rgba(200, 150, 62, 0.15)",
                boxShadow: "0 16px 48px rgba(27, 42, 74, 0.07)",
              }}
            >
              <div
                className="rounded-[calc(1.75rem-0.5rem)] p-8"
                style={{
                  backgroundColor: "#F5F0E8",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7)",
                }}
              >
                <CalendarCheckIcon
                  weight="light"
                  size={32}
                  style={{ color: "#C8963E", marginBottom: "1.25rem" }}
                />
                <h3
                  className="text-xl font-bold mb-2 leading-snug"
                  style={{
                    fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                    color: "#1B2A4A",
                  }}
                >
                  Private Custom Tours
                </h3>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{
                    fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                    color: "#6b6456",
                  }}
                >
                  From $150 per group &bull; Up to 6 guests
                  <br />
                  2–4 hours &bull; Fully flexible itinerary
                </p>

                {/* Occasion tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    "Bachelorette Parties",
                    "Family Reunions",
                    "Anniversary Trips",
                    "Corporate Groups",
                    "Out-of-Town Guests",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-[11px] font-medium"
                      style={{
                        fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                        backgroundColor: "rgba(27, 42, 74, 0.06)",
                        color: "#1B2A4A",
                        border: "1px solid rgba(27, 42, 74, 0.1)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full font-semibold text-sm w-full justify-center transition-all duration-300 active:scale-[0.98]"
                  style={{
                    fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                    backgroundColor: "#1B2A4A",
                    color: "#F5F0E8",
                    letterSpacing: "0.03em",
                    transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
                  }}
                >
                  Book a Private Tour
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(245, 240, 232, 0.12)" }}
                  >
                    <ArrowRightIcon weight="bold" size={11} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Section ──────────────────────────────────────────────────────── */}
      <section
        className="py-24 md:py-32"
        style={{ backgroundColor: "#F5F0E8" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div
            className="p-2 rounded-[2rem]"
            style={{
              background: "#1B2A4A",
              border: "1px solid rgba(200, 150, 62, 0.18)",
              boxShadow: "0 24px 64px rgba(27, 42, 74, 0.18)",
            }}
          >
            <div
              className="rounded-[calc(2rem-0.5rem)] px-8 py-16 md:px-16 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-10"
              style={{
                background:
                  "linear-gradient(135deg, #1B2A4A 0%, #243558 100%)",
                boxShadow: "inset 0 1px 0 rgba(245, 240, 232, 0.06)",
              }}
            >
              <div className="max-w-xl">
                <p
                  className="text-[10px] uppercase tracking-[0.22em] font-medium mb-4"
                  style={{
                    fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                    color: "#C8963E",
                  }}
                >
                  Your Franklin Story Starts Here.
                </p>
                <h2
                  className="text-3xl md:text-4xl font-bold leading-[1.15] mb-4"
                  style={{
                    fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                    color: "#F5F0E8",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Five tours. One guide who
                  <br />
                  actually knows this town.
                </h2>
                <p
                  className="text-base leading-relaxed"
                  style={{
                    fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                    color: "rgba(245, 240, 232, 0.6)",
                    maxWidth: "48ch",
                  }}
                >
                  Start with the tour that fits your visit, or call Diana
                  directly to put together something custom. Most guests come
                  back for a second tour.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
                <Link
                  href="/tours/ghost-tour"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 active:scale-[0.98]"
                  style={{
                    fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                    backgroundColor: "#C8963E",
                    color: "#1B2A4A",
                    letterSpacing: "0.03em",
                    transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
                    boxShadow: "0 2px 16px rgba(200, 150, 62, 0.35)",
                  }}
                >
                  Browse Our Tours
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(27, 42, 74, 0.15)" }}
                  >
                    <ArrowRightIcon weight="bold" size={10} />
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 active:scale-[0.98]"
                  style={{
                    fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                    color: "#F5F0E8",
                    border: "1px solid rgba(245, 240, 232, 0.2)",
                    letterSpacing: "0.03em",
                    transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
                  }}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
