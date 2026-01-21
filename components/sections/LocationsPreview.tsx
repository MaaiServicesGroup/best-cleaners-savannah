import Link from "next/link";
import { Container, Section } from "@/components/layout";
import { Heading, Subheading, Card, Button } from "@/components/ui";

// Placeholder locations - in production, these would come from Sanity
const locations = [
  {
    id: "waters",
    name: "Waters Avenue",
    address: "2011 E. Waters Avenue",
    city: "Savannah, GA 31404",
    phone: "(912) 354-1234",
    hours: "Mon-Fri: 7am-6pm, Sat: 8am-4pm",
    isMain: true,
    mapUrl: "https://maps.google.com",
  },
  {
    id: "abercorn",
    name: "Abercorn Street",
    address: "7805 Abercorn Street",
    city: "Savannah, GA 31406",
    phone: "(912) 355-5678",
    hours: "Mon-Fri: 7am-6pm, Sat: 8am-4pm",
    isMain: false,
    mapUrl: "https://maps.google.com",
  },
];

export function LocationsPreview() {
  return (
    <Section bg="white">
      <Container>
        <div className="text-center mb-16">
          <Heading as="h2" className="mb-4">
            Visit Our Locations
          </Heading>
          <Subheading className="max-w-2xl mx-auto">
            Two convenient locations to serve you better. Drop off your garments 
            and let us take care of the rest.
          </Subheading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {locations.map((location) => (
            <Card key={location.id} className="relative">
              {location.isMain && (
                <span className="absolute -top-3 right-6 bg-charcoal text-clean-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded">
                  Main Location
                </span>
              )}
              
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-warm-cream rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-heritage-blue-soft" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                
                <div className="flex-grow">
                  <h3 className="font-display text-xl font-semibold text-charcoal mb-2">
                    {location.name}
                  </h3>
                  <address className="not-italic text-charcoal-soft text-sm space-y-1">
                    <p>{location.address}</p>
                    <p>{location.city}</p>
                  </address>
                  
                  <div className="mt-4 space-y-2 text-sm">
                    <a 
                      href={`tel:${location.phone.replace(/\D/g, "")}`}
                      className="flex items-center gap-2 text-charcoal hover:text-heritage-blue transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {location.phone}
                    </a>
                    <p className="flex items-center gap-2 text-muted">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {location.hours}
                    </p>
                  </div>
                  
                  <Link 
                    href={location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-heritage-blue-soft hover:text-charcoal transition-colors"
                  >
                    Get Directions
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/best-cleaners-savannah-locations/" variant="primary">
            View All Service Areas
          </Button>
        </div>
      </Container>
    </Section>
  );
}
