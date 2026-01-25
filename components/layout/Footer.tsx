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
              <Link href="/" className="inline-flex items-center gap-4 mb-6 group">
                <Image
                  src="/images/BCLOGO (2).png"
                  alt="Best Cleaners & Laundry"
                  width={60}
                  height={60}
                  className="h-14 w-auto object-contain"
                />
                <div>
                  <span className="font-display text-xl font-bold text-clean-white">
                    Best Cleaners
                  </span>
                  <span className="block text-xs text-clean-white/60 tracking-wide">
                    & Laundry
                  </span>
                </div>
              </Link>
              <p className="text-clean-white/70 text-sm leading-relaxed mb-8 max-w-sm">
                Serving Savannah and the surrounding areas since 1910. Over a century of 
                trusted garment care, professional cleaning, and exceptional service.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/2373671256198544"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-clean-white/5 text-clean-white/60 hover:text-clean-white hover:bg-clean-white/10 transition-all duration-200"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/bestcleanerssavannah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-clean-white/5 text-clean-white/60 hover:text-clean-white hover:bg-clean-white/10 transition-all duration-200"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://x.com/bestsavannahga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-clean-white/5 text-clean-white/60 hover:text-clean-white hover:bg-clean-white/10 transition-all duration-200"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-display font-semibold text-sm text-clean-white/90 mb-5 uppercase tracking-wider">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-clean-white/60 hover:text-clean-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-display font-semibold text-sm text-clean-white/90 mb-5 uppercase tracking-wider">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-clean-white/60 hover:text-clean-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-display font-semibold text-sm text-clean-white/90 mb-5 uppercase tracking-wider">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-clean-white/60 hover:text-clean-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Neighborhoods */}
            <div>
              <h3 className="font-display font-semibold text-sm text-clean-white/90 mb-5 uppercase tracking-wider">We Serve</h3>
              <ul className="space-y-3">
                {footerLinks.neighborhoods.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-clean-white/60 hover:text-clean-white transition-colors duration-200"
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
      <div className="border-t border-clean-white/10 py-6">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-clean-white/50">
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
