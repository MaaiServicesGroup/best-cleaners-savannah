import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/sections/Hero";
import { Container, Section } from "@/components/layout";
import { Heading, Card, Button } from "@/components/ui";
import { SameDayBanner } from "@/components/sections/SameDayBanner";

export const metadata: Metadata = {
  title: "Locations & Service Areas | Best Cleaners Savannah",
  description: "Visit Best Cleaners at our Waters Avenue or Abercorn Street locations. Serving Savannah, Pooler, Garden City, Thunderbolt, and surrounding areas since 1910.",
};

const locations = [
  {
    id: "waters",
    name: "Waters Avenue",
    address: "1002 Waters Ave",
    city: "Savannah, GA 31404",
    phone: "(912) 232-1171",
    isMain: true,
    hours: [
      { days: "Monday - Friday", time: "7:00 AM - 6:30 PM" },
      { days: "Saturday", time: "9:00 AM - 2:00 PM" },
      { days: "Sunday", time: "Closed" },
    ],
    directions: "Located on Waters Avenue, serving Savannah's east side community.",
    mapUrl: "https://maps.google.com",
  },
  {
    id: "abercorn",
    name: "Abercorn Street",
    address: "11434 Abercorn St. STE B",
    city: "Savannah, GA 31419",
    phone: "(912) 335-8811",
    isMain: false,
    hours: [
      { days: "Monday - Friday", time: "7:30 AM - 6:00 PM" },
      { days: "Saturday", time: "9:00 AM - 2:00 PM" },
      { days: "Sunday", time: "Closed" },
    ],
    directions: "Located on Abercorn Street in the Southside, with convenient parking.",
    mapUrl: "https://maps.google.com",
  },
];

const serviceAreas = [
  {
    category: "Savannah Neighborhoods",
    areas: [
      { name: "Historic District", href: "/dry-cleaners-historic-district-savannah/" },
      { name: "Victorian District", href: "/dry-cleaners-victorian-district-savannah/" },
      { name: "Ardsley Park", href: "/dry-cleaners-ardsley-park-georgia/" },
      { name: "Midtown", href: "/dry-cleaners-midtown-savannah-ga/" },
      { name: "Starland District", href: "/dry-cleaning-starland-district-savannah/" },
      { name: "Georgetown", href: "/dry-cleaners-georgetown-savannah-georgia/" },
      { name: "Near Forsyth Park", href: "/dry-cleaning-near-forsyth-park-savannah/" },
    ],
  },
  {
    category: "Nearby Cities",
    areas: [
      { name: "Pooler", href: "/dry-cleaners-near-pooler-georgia/" },
      { name: "Garden City", href: "/dry-cleaners-near-garden-city-georgia/" },
      { name: "Thunderbolt", href: "/dry-cleaners-near-thunderbolt-georgia/" },
      { name: "Bluffton", href: "/dry-cleaners-bluffton-georgia/" },
    ],
  },
];

export default function LocationsPage() {
  return (
    <>
      <PageHero
        title="Our Locations"
        description="Two convenient Savannah locations to serve you. Both offer our full range of dry cleaning and laundry services."
        breadcrumb={[{ label: "Locations", href: "/best-cleaners-savannah-locations/" }]}
      />

      {/* Same-Day Service Banner */}
      <SameDayBanner variant="light" />

      {/* Locations */}
      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locations.map((location) => (
              <Card key={location.id} className="relative">
                {location.isMain && (
                  <span className="absolute -top-3 right-6 bg-heritage-blue text-clean-white text-xs font-semibold uppercase tracking-wider px-3 py-1">
                    Main Location
                  </span>
                )}
                
                <Heading as="h2" size="sm" className="mb-4">
                  {location.name}
                </Heading>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-heritage-blue shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <address className="not-italic text-charcoal">
                      {location.address}<br />
                      {location.city}
                    </address>
                  </div>
                  
                  <a 
                    href={`tel:${location.phone.replace(/\D/g, "")}`}
                    className="flex items-center gap-3 text-charcoal hover:text-best-red transition-colors"
                  >
                    <svg className="w-5 h-5 text-heritage-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {location.phone}
                  </a>
                </div>
                
                <div className="border-t border-border pt-4 mb-6">
                  <h4 className="font-semibold text-charcoal mb-2">Hours</h4>
                  <div className="space-y-1">
                    {location.hours.map((h) => (
                      <div key={h.days} className="flex justify-between text-sm">
                        <span className="text-muted">{h.days}</span>
                        <span className="text-charcoal">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <p className="text-sm text-muted mb-6">
                  {location.directions}
                </p>
                
                <a 
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn btn-outline text-sm"
                >
                  Get Directions
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Savannah Image Banner */}
      <Section bg="cream">
        <Container>
          <div className="grid grid-cols-2 gap-4 mb-12">
            <div className="relative aspect-square overflow-hidden border border-border">
              <Image
                src="/images/GeneratedPhotosBC/Pickup&dropoffatstore.jpeg"
                alt="Convenient pickup and dropoff at our store"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square overflow-hidden border border-border">
              <Image
                src="/images/GeneratedPhotosBC/Clean&foldedInStore.jpeg"
                alt="Clean and folded clothes ready for pickup"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="text-center mb-12">
            <Heading as="h2" className="mb-4">
              Areas We Serve
            </Heading>
            <p className="text-muted max-w-2xl mx-auto">
              Our two locations make it easy for residents throughout Savannah and surrounding 
              communities to access our professional cleaning services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {serviceAreas.map((category) => (
              <div key={category.category}>
                <h3 className="font-display text-xl font-semibold text-charcoal mb-4">
                  {category.category}
                </h3>
                <ul className="grid grid-cols-2 gap-2">
                  {category.areas.map((area) => (
                    <li key={area.href}>
                      <Link
                        href={area.href}
                        className="text-heritage-blue hover:text-best-red transition-colors"
                      >
                        {area.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact CTA */}
      <Section bg="white">
        <Container size="narrow">
          <div className="text-center">
            <Heading as="h2" size="md" className="mb-4">
              Questions? Get in Touch
            </Heading>
            <p className="text-muted mb-8">
              Have questions about our services, hours, or which location is closest to you? 
              We&apos;re here to help.
            </p>
            <Button href="/contact-best-dry-cleaners/">
              Contact Us
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
