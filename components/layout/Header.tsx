"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Container } from "./Container";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

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
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll-aware header: adds subtle background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Check initial scroll position
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header 
      className={cn(
        "header-base bg-clean-white border-b border-border sticky top-0 z-50",
        isScrolled && "header-scrolled"
      )}
    >
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

          {/* Desktop Navigation - shifted right with more spacing */}
          <div className="hidden lg:flex items-center gap-10 ml-auto">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="nav-link text-charcoal font-medium text-sm hover:text-charcoal-soft transition-colors py-2"
                >
                  {item.name}
                  {item.children && (
                    <svg
                      className={cn(
                        "inline-block ml-1 w-4 h-4 transition-transform duration-200",
                        activeDropdown === item.name && "rotate-180"
                      )}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                
                {/* Dropdown with animation */}
                {item.children && (
                  <div className="absolute top-full left-0 mt-0 pt-2">
                    <div 
                      className={cn(
                        "dropdown-menu bg-clean-white border border-border shadow-lg py-2 min-w-[200px] rounded-lg overflow-hidden",
                        activeDropdown === item.name && "open"
                      )}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-charcoal-soft hover:bg-warm-cream hover:text-charcoal transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Careers Link - inside nav container for proper alignment */}
            <Link
              href="/dry-cleaning-employment/"
              className="nav-link text-charcoal font-medium text-sm hover:text-charcoal-soft transition-colors py-2"
            >
              Careers
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block ml-6">
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

      </Container>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "mobile-menu-overlay fixed inset-0 bg-charcoal/50 z-40 lg:hidden",
          mobileMenuOpen && "open"
        )}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Slide-in Panel */}
      <div 
        className={cn(
          "mobile-menu fixed top-0 left-0 h-full w-[300px] bg-clean-white z-50 lg:hidden shadow-xl rounded-r-xl",
          mobileMenuOpen && "open"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <Image
                src="/images/BCLOGO (2).png"
                alt="Best Cleaners & Laundry"
                width={48}
                height={48}
                className="h-10 w-auto"
              />
            </Link>
            <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-charcoal hover:text-charcoal-soft transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Navigation */}
          <div className="flex-1 overflow-y-auto py-4">
            <div className="flex flex-col gap-1 px-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-3 text-charcoal font-medium hover:text-charcoal-soft transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-4 border-l-2 border-border ml-2 mb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 text-sm text-muted hover:text-charcoal transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {/* Careers link */}
              <Link
                href="/dry-cleaning-employment/"
                className="block py-3 text-charcoal font-medium hover:text-charcoal-soft transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Careers
              </Link>
            </div>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-4 border-t border-border">
            <Button 
              href="/contact-best-dry-cleaners/" 
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
