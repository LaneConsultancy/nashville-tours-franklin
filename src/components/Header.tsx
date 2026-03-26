"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  GhostIcon,
  BuildingsIcon,
  ForkKnifeIcon,
  StarIcon,
  CrownIcon,
  CaretDownIcon,
  ListIcon,
  XIcon,
} from "@phosphor-icons/react";

interface TourLink {
  label: string;
  href: string;
  description: string;
  icon: React.ReactNode;
}

const tourLinks: TourLink[] = [
  {
    label: "Ghost Tour",
    href: "/tours/ghost-tour",
    description: "Haunted history of Franklin after dark",
    icon: <GhostIcon weight="light" size={20} />,
  },
  {
    label: "Historic Walking Tour",
    href: "/tours/historic-walking-tour",
    description: "Antebellum architecture & Civil War sites",
    icon: <BuildingsIcon weight="light" size={20} />,
  },
  {
    label: "Food & Spirits Tour",
    href: "/tours/food-tour",
    description: "Franklin's finest restaurants & craft cocktails",
    icon: <ForkKnifeIcon weight="light" size={20} />,
  },
  {
    label: "Celebrity Tour",
    href: "/tours/celebrity-tour",
    description: "Celebrity homes & Hallmark filming locations",
    icon: <StarIcon weight="light" size={20} />,
  },
  {
    label: "Private Tours",
    href: "/tours/private-tours",
    description: "Fully custom experiences for your group",
    icon: <CrownIcon weight="light" size={20} />,
  },
];

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isToursOpen, setIsToursOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Detect scroll for header background transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsToursOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
    setIsToursOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        role="banner"
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
        style={{
          transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
          backgroundColor: isScrolled
            ? "rgba(27, 42, 74, 0.98)"
            : "rgba(27, 42, 74, 0.85)",
          borderBottom: isScrolled
            ? "1px solid rgba(200, 150, 62, 0.15)"
            : "1px solid transparent",
          boxShadow: isScrolled
            ? "0 4px 24px rgba(17, 29, 51, 0.18)"
            : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* ── Logo ───────────────────────────────────────────────── */}
            <Link
              href="/"
              className="flex flex-col group"
              aria-label="Nashville Tours Franklin — home"
            >
              <span
                className="text-[10px] uppercase tracking-[0.22em] font-medium transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#C8963E",
                }}
              >
                Nashville
              </span>
              <span
                className="text-xl lg:text-2xl font-bold leading-none tracking-tight transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                  color: "#F5F0E8",
                  letterSpacing: "-0.02em",
                }}
              >
                Tours Franklin
              </span>
            </Link>

            {/* ── Desktop Navigation ─────────────────────────────────── */}
            <nav
              aria-label="Main navigation"
              className="hidden lg:flex items-center gap-1"
            >
              {/* Tours dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsToursOpen((v) => !v)}
                  aria-expanded={isToursOpen}
                  aria-haspopup="true"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 group"
                  style={{
                    fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                    color: isToursOpen ? "#C8963E" : "#F5F0E8",
                    letterSpacing: "0.02em",
                    transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = "#C8963E";
                  }}
                  onMouseLeave={(e) => {
                    if (!isToursOpen) {
                      (e.currentTarget as HTMLButtonElement).style.color = "#F5F0E8";
                    }
                  }}
                >
                  Tours
                  <CaretDownIcon
                    weight="bold"
                    size={12}
                    className="transition-transform duration-300"
                    style={{
                      transform: isToursOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
                    }}
                  />
                </button>

                {/* Tours dropdown panel */}
                <div
                  className="absolute top-full left-1/2 mt-3 w-80"
                  style={{
                    transform: `translateX(-50%) translateY(${isToursOpen ? "0" : "-8px"})`,
                    opacity: isToursOpen ? 1 : 0,
                    pointerEvents: isToursOpen ? "auto" : "none",
                    transition: "all 0.35s cubic-bezier(0.32, 0.72, 0, 1)",
                  }}
                >
                  {/* Outer shell — double bezel */}
                  <div
                    className="p-1.5 rounded-2xl"
                    style={{
                      background: "rgba(17, 29, 51, 0.98)",
                      border: "1px solid rgba(200, 150, 62, 0.2)",
                      boxShadow:
                        "0 20px 48px rgba(17, 29, 51, 0.4), 0 1px 0 rgba(245, 240, 232, 0.05) inset",
                    }}
                  >
                    {/* Inner core */}
                    <div className="rounded-xl overflow-hidden">
                      {tourLinks.map((tour, i) => (
                        <Link
                          key={tour.href}
                          href={tour.href}
                          className="flex items-start gap-3 px-4 py-3.5 group/item transition-all duration-250"
                          style={{
                            transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
                            animationDelay: `${i * 40}ms`,
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                              "rgba(200, 150, 62, 0.1)";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                              "transparent";
                          }}
                        >
                          <span
                            className="mt-0.5 shrink-0 transition-colors duration-250"
                            style={{
                              color: "#C8963E",
                            }}
                          >
                            {tour.icon}
                          </span>
                          <span className="flex flex-col gap-0.5">
                            <span
                              className="text-sm font-semibold leading-tight transition-colors duration-250"
                              style={{
                                fontFamily:
                                  "var(--font-source-sans), 'Source Sans 3', sans-serif",
                                color: "#F5F0E8",
                              }}
                            >
                              {tour.label}
                            </span>
                            <span
                              className="text-xs leading-snug"
                              style={{
                                fontFamily:
                                  "var(--font-source-sans), 'Source Sans 3', sans-serif",
                                color: "rgba(245, 240, 232, 0.55)",
                              }}
                            >
                              {tour.description}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Other nav links */}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-md text-sm font-medium transition-all duration-300"
                  style={{
                    fontFamily:
                      "var(--font-source-sans), 'Source Sans 3', sans-serif",
                    color:
                      pathname === link.href ? "#C8963E" : "#F5F0E8",
                    letterSpacing: "0.02em",
                    transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#C8963E";
                  }}
                  onMouseLeave={(e) => {
                    if (pathname !== link.href) {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#F5F0E8";
                    }
                  }}
                >
                  {link.label}
                </Link>
              ))}

              {/* Book a Tour CTA — button-in-button pattern */}
              <Link
                href="/contact"
                className="ml-4 flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-400 active:scale-[0.97] group/cta"
                style={{
                  fontFamily:
                    "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  backgroundColor: "#C8963E",
                  color: "#1B2A4A",
                  letterSpacing: "0.03em",
                  transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
                  boxShadow: "0 2px 12px rgba(200, 150, 62, 0.3)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "#d9aa5a";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 4px 20px rgba(200, 150, 62, 0.45)";
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "#C8963E";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 2px 12px rgba(200, 150, 62, 0.3)";
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "translateY(0)";
                }}
              >
                Book a Tour
                {/* Nested icon circle — button-in-button */}
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-400"
                  style={{
                    backgroundColor: "rgba(27, 42, 74, 0.15)",
                    transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
                  }}
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    aria-hidden="true"
                    className="group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform duration-400"
                    style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
                  >
                    <path
                      d="M2 8L8 2M8 2H3.5M8 2V6.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </nav>

            {/* ── Mobile Hamburger ────────────────────────────────────── */}
            <button
              onClick={() => setIsMobileOpen((v) => !v)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300"
              aria-label={isMobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu"
              style={{
                backgroundColor: isMobileOpen
                  ? "rgba(200, 150, 62, 0.15)"
                  : "transparent",
                color: "#F5F0E8",
                transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
              }}
            >
              {isMobileOpen ? (
                <XIcon weight="light" size={22} />
              ) : (
                <ListIcon weight="light" size={22} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ──────────────────────────────────────────── */}
      <div
        id="mobile-menu"
        aria-hidden={!isMobileOpen}
        className="fixed inset-0 z-30 lg:hidden flex flex-col"
        style={{
          backgroundColor: "rgba(17, 29, 51, 0.98)",
          opacity: isMobileOpen ? 1 : 0,
          pointerEvents: isMobileOpen ? "auto" : "none",
          transition: "opacity 0.4s cubic-bezier(0.32, 0.72, 0, 1)",
        }}
      >
        <div className="flex flex-col justify-center flex-1 px-8 pt-20 pb-12 overflow-y-auto">

          {/* Tours section heading */}
          <div
            className="mb-2 transition-all duration-500"
            style={{
              transform: isMobileOpen ? "translateY(0)" : "translateY(16px)",
              opacity: isMobileOpen ? 1 : 0,
              transitionDelay: isMobileOpen ? "80ms" : "0ms",
              transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
            }}
          >
            <span
              className="text-[10px] uppercase tracking-[0.22em] font-medium"
              style={{
                fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                color: "#C8963E",
              }}
            >
              Our Tours
            </span>
          </div>

          {/* Tour links */}
          {tourLinks.map((tour, i) => (
            <Link
              key={tour.href}
              href={tour.href}
              className="flex items-center gap-3 py-3 border-b transition-all duration-500"
              style={{
                borderColor: "rgba(200, 150, 62, 0.12)",
                transform: isMobileOpen
                  ? "translateY(0)"
                  : "translateY(16px)",
                opacity: isMobileOpen ? 1 : 0,
                transitionDelay: isMobileOpen ? `${100 + i * 50}ms` : "0ms",
                transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
              }}
            >
              <span style={{ color: "#C8963E" }}>{tour.icon}</span>
              <span
                className="text-lg font-semibold"
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                  color: "#F5F0E8",
                }}
              >
                {tour.label}
              </span>
            </Link>
          ))}

          {/* Spacer */}
          <div className="mt-8" />

          {/* Other nav links */}
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 transition-all duration-500"
              style={{
                transform: isMobileOpen
                  ? "translateY(0)"
                  : "translateY(16px)",
                opacity: isMobileOpen ? 1 : 0,
                transitionDelay: isMobileOpen
                  ? `${380 + i * 50}ms`
                  : "0ms",
                transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
              }}
            >
              <span
                className="text-2xl font-bold"
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                  color: "#F5F0E8",
                }}
              >
                {link.label}
              </span>
            </Link>
          ))}

          {/* CTA */}
          <div
            className="mt-8 transition-all duration-500"
            style={{
              transform: isMobileOpen ? "translateY(0)" : "translateY(16px)",
              opacity: isMobileOpen ? 1 : 0,
              transitionDelay: isMobileOpen ? "500ms" : "0ms",
              transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
            }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full py-4 rounded-full font-semibold text-base transition-all duration-400 active:scale-[0.97]"
              style={{
                fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                backgroundColor: "#C8963E",
                color: "#1B2A4A",
                letterSpacing: "0.04em",
                transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
                boxShadow: "0 4px 24px rgba(200, 150, 62, 0.35)",
              }}
            >
              Book a Tour
            </Link>
          </div>

          {/* Contact info */}
          <div
            className="mt-8 transition-all duration-500"
            style={{
              transform: isMobileOpen ? "translateY(0)" : "translateY(16px)",
              opacity: isMobileOpen ? 1 : 0,
              transitionDelay: isMobileOpen ? "560ms" : "0ms",
              transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
            }}
          >
            <p
              className="text-sm"
              style={{
                fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                color: "rgba(245, 240, 232, 0.5)",
              }}
            >
              Franklin, Tennessee
            </p>
            <a
              href="tel:+16612019003"
              className="text-sm mt-1 block transition-colors duration-300 hover:text-[#C8963E]"
              style={{
                fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                color: "rgba(245, 240, 232, 0.65)",
              }}
            >
              +1 (661) 201-9003
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
