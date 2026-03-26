import type { Metadata } from "next";
import Link from "next/link";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  GiftIcon,
  UsersThreeIcon,
  ClockIcon,
  CalendarCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from "@phosphor-icons/react/dist/ssr";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Book a Tour in Franklin TN",
  description:
    "Book your Franklin, TN tour online. Guided ghost tours, historic walks, food tours, celebrity homes & private groups. Easy online booking.",
  alternates: {
    canonical: "https://nashvilletoursfranklin.com/contact",
  },
  openGraph: {
    title: "Book a Tour in Franklin TN | Nashville Tours Franklin",
    description:
      "Book your Franklin, TN tour online. Guided ghost tours, historic walks, food tours, celebrity homes & private groups. Easy online booking.",
    url: "https://nashvilletoursfranklin.com/contact",
    type: "website",
  },
  twitter: {
    title: "Book a Tour in Franklin TN | Nashville Tours Franklin",
    description:
      "Book your Franklin, TN tour online. Guided ghost tours, historic walks, food tours, celebrity homes & private groups. Easy online booking.",
  },
};

const steps = [
  {
    number: "01",
    heading: "Choose Your Tour",
    body: "Browse five tour options — ghost and haunted history, historic walking, food and spirits, celebrity homes and filming locations, and private custom. Check pricing, duration, and what each tour covers, then pick the one (or two) that fits your visit.",
  },
  {
    number: "02",
    heading: "Select Date and Group Size",
    body: "Use the enquiry form to choose your preferred date and let us know how many people are in your group. Tours run on a regular schedule; private tours run by arrangement.",
  },
  {
    number: "03",
    heading: "Confirm and Prepare",
    body: "You'll receive a confirmation with your exact meeting point in downtown Franklin, parking guidance, and any notes on what to bring. Show up, meet Diana, and let Franklin do the rest.",
  },
];

const faqs = [
  {
    question: "How far in advance should I book?",
    answer:
      "For weekend tours and any tour in October, we recommend booking at least 72 hours ahead — they fill quickly. For private tours, a week's notice is ideal so Diana can build your itinerary. Weekday tours during off-peak months can sometimes be booked with 24 hours' notice.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Cancellations made 48 hours or more before the tour start time receive a full refund. Cancellations within 48 hours are non-refundable, but we'll do our best to reschedule if possible. If we cancel due to weather or circumstances on our end, you'll receive a full refund.",
  },
  {
    question: "Can I pay on the day?",
    answer:
      "We prefer advance payment to hold your spot, but if you're in town and want to join a tour that has availability, call us and we'll sort it out.",
  },
  {
    question: "Do you accommodate dietary restrictions on the food tour?",
    answer:
      "Yes — let us know when you book and Diana will make sure each stop on the food tour can accommodate your needs. Vegetarian options are available at every stop.",
  },
  {
    question: "Can I book as a gift?",
    answer:
      "Absolutely. Gift certificates are available for any tour or as a dollar-amount credit toward any experience, including private tours. Contact us directly to arrange.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Page Header ──────────────────────────────────────────────────────── */}
      <section
        className="pt-36 pb-20 md:pt-44 md:pb-28"
        style={{ backgroundColor: "#1B2A4A" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <p
              className="text-[10px] uppercase tracking-[0.22em] font-medium mb-5"
              style={{
                fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                color: "#C8963E",
              }}
            >
              Book a Tour
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6"
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                color: "#F5F0E8",
                letterSpacing: "-0.02em",
              }}
            >
              Book Your Franklin,
              <br />
              <em className="font-normal" style={{ color: "#C8963E" }}>
                Tennessee Tour
              </em>
            </h1>
            <p
              className="text-lg leading-relaxed"
              style={{
                fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                color: "rgba(245, 240, 232, 0.65)",
                maxWidth: "56ch",
              }}
            >
              No lengthy process, no hidden fees. Choose your tour, pick a
              date, and we&rsquo;ll take care of the rest. For private or
              custom group tours, get in touch to discuss what you have in
              mind.
            </p>
          </div>
        </div>
      </section>

      {/* ── How to Book Steps ─────────────────────────────────────────────────── */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "#F5F0E8" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p
            className="text-[10px] uppercase tracking-[0.22em] font-medium mb-4"
            style={{
              fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
              color: "#7A5820",
            }}
          >
            Three Steps to Your Franklin Tour
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold mb-12 leading-snug"
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', serif",
              color: "#1B2A4A",
              letterSpacing: "-0.02em",
            }}
          >
            How Booking Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-px"
            style={{ background: "rgba(200, 150, 62, 0.15)" }}
          >
            {steps.map((step, i) => (
              <div
                key={i}
                className="p-8 md:p-10"
                style={{ backgroundColor: "#F5F0E8" }}
              >
                <span
                  className="block text-4xl font-bold mb-4 leading-none"
                  style={{
                    fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                    color: "rgba(200, 150, 62, 0.35)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {step.number}
                </span>
                <h3
                  className="text-lg font-bold mb-3 leading-snug"
                  style={{
                    fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                    color: "#1B2A4A",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {step.heading}
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
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Content: Form + Contact Info ─────────────────────────────────── */}
      <section
        className="py-24 md:py-36"
        style={{ backgroundColor: "#FAFAF7" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-16 lg:gap-20 items-start">

            {/* Left — Enquiry Form */}
            <div>
              <p
                className="text-[10px] uppercase tracking-[0.22em] font-medium mb-4"
                style={{
                  fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#7A5820",
                }}
              >
                Enquiry Form
              </p>
              <h2
                className="text-2xl md:text-3xl font-bold mb-8 leading-snug"
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                  color: "#1B2A4A",
                  letterSpacing: "-0.02em",
                }}
              >
                Tell us about your visit
              </h2>
              <ContactForm />
            </div>

            {/* Right — Contact Info, Meeting Point, Gift Certs, Groups */}
            <div className="lg:sticky lg:top-32 space-y-8">

              {/* Get in Touch */}
              <div
                className="p-2 rounded-[1.5rem]"
                style={{
                  background: "rgba(245, 240, 232, 0.8)",
                  border: "1px solid rgba(200, 150, 62, 0.15)",
                  boxShadow: "0 12px 40px rgba(27, 42, 74, 0.06)",
                }}
              >
                <div
                  className="rounded-[calc(1.5rem-0.5rem)] p-7"
                  style={{
                    backgroundColor: "#F5F0E8",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7)",
                  }}
                >
                  <p
                    className="text-[10px] uppercase tracking-[0.22em] font-medium mb-5"
                    style={{
                      fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                      color: "#7A5820",
                    }}
                  >
                    Get in Touch
                  </p>

                  <div className="space-y-5">
                    <a
                      href="tel:+16612019003"
                      className="flex items-center gap-3.5 group"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-250"
                        style={{
                          backgroundColor: "rgba(27, 42, 74, 0.07)",
                          transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
                        }}
                      >
                        <PhoneIcon weight="light" size={18} style={{ color: "#1B2A4A" }} />
                      </div>
                      <div>
                        <p
                          className="text-xs uppercase tracking-[0.12em] font-medium mb-0.5"
                          style={{
                            fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                            color: "#6b6456",
                          }}
                        >
                          Phone
                        </p>
                        <p
                          className="text-base font-semibold"
                          style={{
                            fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                            color: "#1B2A4A",
                          }}
                        >
                          +1 (661) 201-9003
                        </p>
                      </div>
                    </a>

                    <a
                      href="mailto:dberry017@icloud.com"
                      className="flex items-center gap-3.5 group"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: "rgba(27, 42, 74, 0.07)" }}
                      >
                        <EnvelopeIcon weight="light" size={18} style={{ color: "#1B2A4A" }} />
                      </div>
                      <div>
                        <p
                          className="text-xs uppercase tracking-[0.12em] font-medium mb-0.5"
                          style={{
                            fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                            color: "#6b6456",
                          }}
                        >
                          Email
                        </p>
                        <p
                          className="text-base font-semibold break-all"
                          style={{
                            fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                            color: "#1B2A4A",
                          }}
                        >
                          dberry017@icloud.com
                        </p>
                      </div>
                    </a>

                    <div className="flex items-center gap-3.5">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: "rgba(27, 42, 74, 0.07)" }}
                      >
                        <ClockIcon weight="light" size={18} style={{ color: "#1B2A4A" }} />
                      </div>
                      <div>
                        <p
                          className="text-xs uppercase tracking-[0.12em] font-medium mb-0.5"
                          style={{
                            fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                            color: "#6b6456",
                          }}
                        >
                          Response Time
                        </p>
                        <p
                          className="text-base font-semibold"
                          style={{
                            fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                            color: "#1B2A4A",
                          }}
                        >
                          Within a few hours
                        </p>
                      </div>
                    </div>
                  </div>

                  <p
                    className="mt-5 text-sm leading-relaxed"
                    style={{
                      fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                      color: "#6b6456",
                      borderTop: "1px solid rgba(200, 150, 62, 0.15)",
                      paddingTop: "1.25rem",
                    }}
                  >
                    Diana handles all bookings personally — which means
                    you&rsquo;re talking to the person who&rsquo;ll actually
                    be leading your tour.
                  </p>
                </div>
              </div>

              {/* Meeting Point */}
              <div
                className="p-2 rounded-[1.5rem]"
                style={{
                  background: "rgba(245, 240, 232, 0.8)",
                  border: "1px solid rgba(200, 150, 62, 0.15)",
                  boxShadow: "0 12px 40px rgba(27, 42, 74, 0.06)",
                }}
              >
                <div
                  className="rounded-[calc(1.5rem-0.5rem)] p-7"
                  style={{
                    backgroundColor: "#F5F0E8",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7)",
                  }}
                >
                  <div className="flex items-center gap-2.5 mb-4">
                    <MapPinIcon weight="light" size={20} style={{ color: "#7A5820" }} />
                    <p
                      className="text-[10px] uppercase tracking-[0.22em] font-medium"
                      style={{
                        fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                        color: "#7A5820",
                      }}
                    >
                      Where We Meet
                    </p>
                  </div>
                  <h3
                    className="text-lg font-bold mb-3"
                    style={{
                      fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                      color: "#1B2A4A",
                    }}
                  >
                    Downtown Franklin, Tennessee
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                      color: "#6b6456",
                    }}
                  >
                    All tours depart from downtown Franklin. The exact meeting
                    point is included in your booking confirmation. Free
                    parking is available in the public garages and street
                    spaces throughout the historic district.
                  </p>
                  <p
                    className="mt-3 text-sm leading-relaxed"
                    style={{
                      fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                      color: "#6b6456",
                    }}
                  >
                    Coming from Nashville? Franklin is about 30 minutes south
                    on I-65 — most hotel concierges know the route well.
                  </p>
                </div>
              </div>

              {/* Gift Certificates */}
              <div
                className="p-2 rounded-[1.5rem]"
                style={{
                  background: "rgba(245, 240, 232, 0.8)",
                  border: "1px solid rgba(200, 150, 62, 0.15)",
                  boxShadow: "0 12px 40px rgba(27, 42, 74, 0.06)",
                }}
              >
                <div
                  className="rounded-[calc(1.5rem-0.5rem)] p-7"
                  style={{
                    backgroundColor: "#F5F0E8",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7)",
                  }}
                >
                  <div className="flex items-center gap-2.5 mb-4">
                    <GiftIcon weight="light" size={20} style={{ color: "#7A5820" }} />
                    <p
                      className="text-[10px] uppercase tracking-[0.22em] font-medium"
                      style={{
                        fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                        color: "#7A5820",
                      }}
                    >
                      Gift Certificates
                    </p>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                      color: "#6b6456",
                    }}
                  >
                    Tours make excellent gifts. Gift certificates are available
                    for a specific tour or as a dollar-amount credit toward
                    any experience, including private tours. Contact us
                    directly to arrange.
                  </p>
                </div>
              </div>

              {/* Groups */}
              <div
                className="p-2 rounded-[1.5rem]"
                style={{
                  background: "rgba(245, 240, 232, 0.8)",
                  border: "1px solid rgba(200, 150, 62, 0.15)",
                  boxShadow: "0 12px 40px rgba(27, 42, 74, 0.06)",
                }}
              >
                <div
                  className="rounded-[calc(1.5rem-0.5rem)] p-7"
                  style={{
                    backgroundColor: "#F5F0E8",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7)",
                  }}
                >
                  <div className="flex items-center gap-2.5 mb-4">
                    <UsersThreeIcon weight="light" size={20} style={{ color: "#7A5820" }} />
                    <p
                      className="text-[10px] uppercase tracking-[0.22em] font-medium"
                      style={{
                        fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                        color: "#7A5820",
                      }}
                    >
                      Group &amp; Private Bookings
                    </p>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                      color: "#6b6456",
                    }}
                  >
                    For groups of 8 or more, or for any private or custom tour,
                    please call or email rather than using the standard
                    booking form. A brief conversation is always the fastest
                    route to getting the right experience planned.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Google Maps Embed ────────────────────────────────────────────────── */}
      <section
        className="pb-24 md:pb-32"
        style={{ backgroundColor: "#FAFAF7" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between gap-6 mb-8">
            <div>
              <p
                className="text-[10px] uppercase tracking-[0.22em] font-medium mb-2"
                style={{
                  fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#7A5820",
                }}
              >
                Meeting Area
              </p>
              <h2
                className="text-2xl md:text-3xl font-bold leading-snug"
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                  color: "#1B2A4A",
                  letterSpacing: "-0.02em",
                }}
              >
                Downtown Franklin, TN
              </h2>
            </div>
            <a
              href="https://www.google.com/maps/place/Franklin,+TN"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-sm font-medium flex items-center gap-1.5 transition-colors duration-250"
              style={{
                fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                color: "#C8963E",
                transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
              }}
            >
              Open in Maps
              <ArrowRightIcon weight="bold" size={13} />
            </a>
          </div>

          {/* Map double-bezel */}
          <div
            className="p-2 rounded-[1.5rem] overflow-hidden"
            style={{
              background: "rgba(245, 240, 232, 0.9)",
              border: "1px solid rgba(200, 150, 62, 0.15)",
              boxShadow: "0 16px 48px rgba(27, 42, 74, 0.08)",
            }}
          >
            <div
              className="rounded-[calc(1.5rem-0.5rem)] overflow-hidden"
              style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.5)" }}
            >
              <iframe
                title="Downtown Franklin, Tennessee — Nashville Tours Franklin meeting area"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.7!2d-86.8689!3d35.9251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864c3c4fdeb4a05%3A0x3e1b46b7c6c1dc6a!2sFranklin%2C%20TN!5e0!3m2!1sen!2sus!4v1711483200000!5m2!1sen!2sus"
                width="100%"
                height="440"
                style={{ border: 0, display: "block" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── What to Expect / FAQ ─────────────────────────────────────────────── */}
      <section
        className="py-24 md:py-36"
        style={{ backgroundColor: "#F5F0E8" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-16 lg:gap-24 items-start">

            {/* Left — heading */}
            <div className="lg:sticky lg:top-32">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{
                  backgroundColor: "rgba(200, 150, 62, 0.12)",
                  border: "1px solid rgba(200, 150, 62, 0.2)",
                }}
              >
                <CalendarCheckIcon weight="light" size={24} style={{ color: "#C8963E" }} />
              </div>
              <p
                className="text-[10px] uppercase tracking-[0.22em] font-medium mb-4"
                style={{
                  fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#7A5820",
                }}
              >
                Before You Book
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold leading-[1.15]"
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                  color: "#1B2A4A",
                  letterSpacing: "-0.02em",
                }}
              >
                Common
                <br />
                Questions
              </h2>
            </div>

            {/* Right — FAQ accordion-style */}
            <div className="space-y-0 divide-y" style={{ borderColor: "rgba(200, 150, 62, 0.18)" }}>
              {faqs.map((faq, i) => (
                <div key={i} className="py-7">
                  <div className="flex items-start gap-4">
                    <CheckCircleIcon
                      weight="light"
                      size={20}
                      className="shrink-0 mt-0.5"
                      style={{ color: "#C8963E" }}
                    />
                    <div>
                      <h3
                        className="text-base font-bold mb-2 leading-snug"
                        style={{
                          fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                          color: "#1B2A4A",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {faq.question}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{
                          fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                          color: "#6b6456",
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA Strip ──────────────────────────────────────────────────── */}
      <section
        className="py-20 md:py-24"
        style={{ backgroundColor: "#1B2A4A", borderTop: "1px solid rgba(200, 150, 62, 0.15)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p
                className="text-2xl md:text-3xl font-bold leading-snug"
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                  color: "#F5F0E8",
                  letterSpacing: "-0.02em",
                }}
              >
                Call Diana directly — she&rsquo;ll sort it.
              </p>
              <p
                className="mt-2 text-base"
                style={{
                  fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "rgba(245, 240, 232, 0.55)",
                }}
              >
                +1 (661) 201-9003 &nbsp;&bull;&nbsp; dberry017@icloud.com
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="tel:+16612019003"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 active:scale-[0.97]"
                style={{
                  fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  backgroundColor: "#C8963E",
                  color: "#1B2A4A",
                  letterSpacing: "0.03em",
                  transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
                  boxShadow: "0 2px 16px rgba(200, 150, 62, 0.3)",
                }}
              >
                <PhoneIcon weight="bold" size={15} />
                Call Diana
              </a>
              <Link
                href="/tours/private-tours"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 active:scale-[0.97]"
                style={{
                  fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#F5F0E8",
                  border: "1px solid rgba(245, 240, 232, 0.2)",
                  letterSpacing: "0.03em",
                  transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
                }}
              >
                Private Tour Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
