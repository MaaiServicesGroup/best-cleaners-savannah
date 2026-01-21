import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";

const footerLinks = {
  services: [
    { name: "Dry Cleaning", href: "/services/dry-cleaning/" },
    { name: "Laundry & Press", href: "/services/laundry-and-press/" },
    { name: "Wash & Fold", href: "/services/wash-and-fold/" },
    { name: "Uniform Cleaning", href: "/services/uniform-cleaning/" },
    { name: "Wedding Dress", href: "/services/wedding-dress-cleaning-preservation/" },
    { name: "Household Items", href: "/services/household-items/" },
    { name: "Commercial", href: "/commercial-dry-cleaning/" },
  ],
  company: [
    { name: "About Us", href: "/best-cleaners-savannah/" },
    { name: "Why Choose Us", href: "/best-cleaners-savannah-is-the-top-choice/" },
    { name: "Locations", href: "/best-cleaners-savannah-locations/" },
    { name: "Our Process", href: "/how-our-process-works/" },
    { name: "Community", href: "/community/" },
    { name: "Careers", href: "/dry-cleaning-employment/" },
  ],
  support: [
    { name: "Contact Us", href: "/contact-best-dry-cleaners/" },
    { name: "Customer Reviews", href: "/reviews/" },
    { name: "Customer Feedback", href: "/customer-feedback/" },
    { name: "Request Pickup", href: "/request-pickup-delivery/" },
    { name: "Policies", href: "/policies/" },
    { name: "Privacy Policy", href: "/privacy-policy/" },
  ],
  neighborhoods: [
    { name: "Historic District", href: "/dry-cleaners-historic-district-savannah/" },
    { name: "Victorian District", href: "/dry-cleaners-victorian-district-savannah/" },
    { name: "Ardsley Park", href: "/dry-cleaners-ardsley-park-georgia/" },
    { name: "Midtown", href: "/dry-cleaners-midtown-savannah-ga/" },
    { name: "Pooler", href: "/dry-cleaners-near-pooler-georgia/" },
    { name: "View All Areas", href: "/best-cleaners-savannah-locations/" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-charcoal text-clean-white">
      {/* Main Footer */}
      <div className="py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-flex items-center gap-3 mb-6">
                <Image
                  src="/images/BCLOGO (2).png"
                  alt="Best Cleaners & Laundry"
                  width={60}
                  height={60}
                  className="h-14 w-auto"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                <div>
                  <span className="font-display text-xl font-bold text-clean-white">
                    Best Cleaners
                  </span>
                  <span className="block text-xs text-clean-white/70 tracking-wide">
                    & Laundry
                  </span>
                </div>
              </Link>
              <p className="text-clean-white/80 text-sm leading-relaxed mb-6 max-w-sm">
                Serving Savannah and the surrounding areas since 1910. Over a century of 
                trusted garment care, professional cleaning, and exceptional service.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-clean-white/30 rounded-md text-clean-white/70 hover:text-clean-white hover:border-clean-white/50 hover:bg-clean-white/10 transition-all"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-clean-white/30 rounded-md text-clean-white/70 hover:text-clean-white hover:border-clean-white/50 hover:bg-clean-white/10 transition-all"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-clean-white/30 rounded-md text-clean-white/70 hover:text-clean-white hover:border-clean-white/50 hover:bg-clean-white/10 transition-all"
                  aria-label="Yelp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 011.596-.206 9.194 9.194 0 011.67 4.711zm-6.063 2.547l4.98 1.528c.96.295 1.204 1.546.368 1.885a9.223 9.223 0 01-4.933.675c-.848-.095-1.195-1.14-.665-1.77l2.25-2.318zm-1.3-9.452V.5c0-.276-.224-.5-.5-.5h-2.59c-.277 0-.5.224-.5.5v5.19c0 4.62 2.045 6.968 3.59 8.338.276.246.69.232.95-.028l.948-.948a.672.672 0 00-.046-.977c-1.255-1.07-1.852-2.63-1.852-5.384zm-2.318 9.5l-4.1-3c-.78-.57-1.787.11-1.52 1.03a9.206 9.206 0 002.59 4.222c.606.523 1.543.176 1.71-.568l.86-3.792a.672.672 0 00-.54-.892zm-1.07-4.3l-4.53-1.41c-.938-.29-1.76.75-1.24 1.57a9.22 9.22 0 003.8 3.24c.78.4 1.66-.28 1.46-1.12l-1.02-4.28a.672.672 0 00-1.47 0z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-display font-semibold text-base text-clean-white mb-5 tracking-wide">Services</h3>
              <ul className="space-y-2.5">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-clean-white/75 hover:text-clean-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-display font-semibold text-base text-clean-white mb-5 tracking-wide">Company</h3>
              <ul className="space-y-2.5">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-clean-white/75 hover:text-clean-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-display font-semibold text-base text-clean-white mb-5 tracking-wide">Support</h3>
              <ul className="space-y-2.5">
                {footerLinks.support.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-clean-white/75 hover:text-clean-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Neighborhoods */}
            <div>
              <h3 className="font-display font-semibold text-base text-clean-white mb-5 tracking-wide">We Serve</h3>
              <ul className="space-y-2.5">
                {footerLinks.neighborhoods.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-clean-white/75 hover:text-clean-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-clean-white/15 py-6">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-clean-white/60">
            <p>
              © {currentYear} Best Cleaners & Laundry. All rights reserved.
            </p>
            <p>
              Proudly serving Savannah, Georgia since 1910.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
