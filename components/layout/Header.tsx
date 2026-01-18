"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Container } from "./Container";
import { Button } from "@/components/ui";

const navigation = [
  { name: "About", href: "/best-cleaners-savannah/" },
  {
    name: "Services",
    href: "/best-cleaners-savannah-services/",
    children: [
      { name: "Dry Cleaning", href: "/services/dry-cleaning/" },
      { name: "Laundry & Press", href: "/services/laundry-and-press/" },
      { name: "Wash & Fold", href: "/services/wash-and-fold/" },
      { name: "Uniform Cleaning", href: "/services/uniform-cleaning/" },
      { name: "Wedding Dress", href: "/services/wedding-dress-cleaning-preservation/" },
      { name: "Household Items", href: "/services/household-items/" },
    ],
  },
  { name: "Locations", href: "/best-cleaners-savannah-locations/" },
  { name: "Reviews", href: "/reviews/" },
  { name: "Blog", href: "/best-dry-cleaning-blog/" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="bg-clean-white border-b border-border sticky top-0 z-50">
      <Container>
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/BCLOGO (2).png"
              alt="Best Cleaners & Laundry"
              width={60}
              height={60}
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <span className="font-display text-xl font-bold text-charcoal">
                Best Cleaners
              </span>
              <span className="block text-xs text-muted tracking-wide">
                Since 1910
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-charcoal font-medium text-sm hover:text-best-red transition-colors py-2"
                >
                  {item.name}
                  {item.children && (
                    <svg
                      className="inline-block ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                
                {/* Dropdown */}
                {item.children && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-0 pt-2">
                    <div className="bg-clean-white border border-border shadow-lg py-2 min-w-[200px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-charcoal hover:bg-warm-cream hover:text-best-red transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button href="/contact-best-dry-cleaners/" size="sm">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-charcoal"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-2 text-charcoal font-medium hover:text-best-red transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-4 border-l-2 border-border ml-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-1.5 text-sm text-muted hover:text-best-red transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 mt-2 border-t border-border">
                <Button href="/contact-best-dry-cleaners/" className="w-full">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
