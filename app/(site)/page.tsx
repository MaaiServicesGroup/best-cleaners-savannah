import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { ServiceHighlights } from "@/components/sections/ServiceHighlights";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { LocationsPreview } from "@/components/sections/LocationsPreview";
import { CTABanner } from "@/components/sections/CTABanner";
import { SameDayBanner } from "@/components/sections/SameDayBanner";

export const metadata: Metadata = {
  title: "Best Cleaners & Laundry | Savannah's Trusted Dry Cleaners Since 1910",
  description: "Savannah's premier dry cleaning and laundry service since 1910. Expert garment care, wedding dress preservation, and household cleaning. Two convenient locations.",
  openGraph: {
    title: "Best Cleaners & Laundry | Savannah's Trusted Dry Cleaners Since 1910",
    description: "Savannah's premier dry cleaning and laundry service since 1910. Expert garment care with over a century of trusted experience.",
    type: "website",
  },
};

// JSON-LD Schema for LocalBusiness
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DryCleaningOrLaundry",
  name: "Best Cleaners & Laundry",
  description: "Savannah's premier dry cleaning and laundry service since 1910. Expert garment care, professional pressing, and household cleaning services.",
  url: "https://bestcleanerssavannah.com",
  telephone: "(912) 232-1171",
  foundingDate: "1910",
  areaServed: {
    "@type": "City",
    name: "Savannah",
    addressRegion: "GA",
  },
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "1002 Waters Ave",
      addressLocality: "Savannah",
      addressRegion: "GA",
      postalCode: "31404",
      addressCountry: "US",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "11434 Abercorn St. STE B",
      addressLocality: "Savannah",
      addressRegion: "GA",
      postalCode: "31419",
      addressCountry: "US",
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "250",
  },
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <Hero
        title="Experience the difference that over a century of expertise makes."
        description="Savannah's trusted choice for exceptional garment care since 1910."
        primaryCta={{
          text: "Find a Location",
          href: "/best-cleaners-savannah-locations/",
        }}
        secondaryCta={{
          text: "Our Services",
          href: "/best-cleaners-savannah-services/",
        }}
        showBadge={true}
        variant="home"
        backgroundImage="/images/GeneratedPhotosBC/HomepageImage.jpeg"
      />

      {/* Same-Day Service Banner */}
      <SameDayBanner />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Services Grid */}
      <ServiceGrid />

      {/* Service Highlights */}
      <ServiceHighlights />

      {/* Testimonials */}
      <Testimonials />

      {/* Locations Preview */}
      <LocationsPreview />

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Experience the Best?"
        description="Drop off your garments today and see why Savannah has trusted us for over 110 years."
        primaryCta={{
          text: "Contact Us",
          href: "/contact-best-dry-cleaners/",
        }}
        secondaryCta={{
          text: "View Locations",
          href: "/best-cleaners-savannah-locations/",
        }}
        variant="default"
      />
    </>
  );
}
