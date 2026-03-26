import Link from "next/link";
import { PhoneIcon, EnvelopeSimpleIcon, MapPinIcon } from "@phosphor-icons/react/dist/ssr";

// Server Component — no client-side event handlers.
// Hover states are handled via CSS classes injected in globals.css.

const tourLinks = [
  { label: "Ghost Tour", href: "/tours/ghost-tour" },
  { label: "Historic Walking Tour", href: "/tours/historic-walking-tour" },
  { label: "Food & Spirits Tour", href: "/tours/food-tour" },
  { label: "Celebrity Tour", href: "/tours/celebrity-tour" },
  { label: "Private Tours", href: "/tours/private-tours" },
];

const siteLinks = [
  { label: "About Diana", href: "/about" },
  { label: "Book a Tour", href: "/contact" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer
      role="contentinfo"
      className="footer-root"
    >
      {/* ── Main Footer Grid ─────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* ── Brand Column ──────────────────────────────────────────────── */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="mb-6">
              <p className="text-[10px] uppercase tracking-[0.22em] font-medium mb-0.5 footer-gold-text">
                Nashville
              </p>
              <h2 className="text-2xl font-bold leading-none footer-heading">
                Tours Franklin
              </h2>
            </div>

            {/* Tagline */}
            <p className="text-sm max-w-xs mb-8 footer-muted-text" style={{ lineHeight: "1.75" }}>
              Story-driven walking tours, ghost experiences, and private
              guided adventures in historic Franklin, Tennessee. Twenty miles
              south of Nashville &mdash; and worth every mile.
            </p>

            {/* Contact details */}
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:+16612019003"
                  className="flex items-center gap-2.5 text-sm footer-contact-link"
                >
                  <PhoneIcon
                    weight="light"
                    size={16}
                    className="footer-icon shrink-0"
                  />
                  <span>+1 (661) 201-9003</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:dberry017@icloud.com"
                  className="flex items-center gap-2.5 text-sm footer-contact-link"
                >
                  <EnvelopeSimpleIcon
                    weight="light"
                    size={16}
                    className="footer-icon shrink-0"
                  />
                  <span>dberry017@icloud.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2.5 text-sm footer-muted-text">
                  <MapPinIcon
                    weight="light"
                    size={16}
                    className="footer-icon shrink-0"
                  />
                  <span>Downtown Franklin, TN &mdash; tours depart on-site</span>
                </div>
              </li>
            </ul>
          </div>

          {/* ── Tours Column ──────────────────────────────────────────────── */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-5 footer-gold-text">
              Our Tours
            </h3>
            <ul className="flex flex-col gap-3">
              {tourLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm footer-nav-link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Site Links Column ─────────────────────────────────────────── */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-5 footer-gold-text">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {siteLinks.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <Link
                    href={link.href}
                    className="text-sm footer-nav-link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Trust markers */}
            <div className="mt-8 pt-8 footer-trust-border">
              <p
                className="text-xs footer-trust-text"
                style={{ lineHeight: "1.6" }}
              >
                Licensed tour operator.
                <br />
                Locally owned and operated
                <br />
                in Franklin, TN.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ──────────────────────────────────────────────────────── */}
      <div className="footer-bottom-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs footer-copyright">
            &copy; {currentYear} Nashville Tours Franklin. All rights reserved.
          </p>
          <p className="text-xs footer-copyright">
            Franklin, Tennessee &mdash; Williamson County
          </p>
        </div>
      </div>
    </footer>
  );
}
