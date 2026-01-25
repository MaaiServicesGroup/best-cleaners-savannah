import Link from "next/link";
import { Container, Section } from "@/components/layout";
import { Heading, Subheading, Card, CardTitle, CardDescription, Button } from "@/components/ui";

const services = [
  {
    title: "Dry Cleaning",
    description: "Expert care for your finest garments, suits, dresses, and delicate fabrics using eco-friendly solvents.",
    href: "/services/dry-cleaning/",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
  },
  {
    title: "Laundry & Press",
    description: "Professional laundering and pressing for shirts, blouses, and everyday garments with attention to detail.",
    href: "/services/laundry-and-press/",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: "Wash & Fold",
    description: "Convenient drop-off laundry service. We wash, dry, and neatly fold your everyday items.",
    href: "/services/wash-and-fold/",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
  },
  {
    title: "Uniform Cleaning",
    description: "Specialized care for work uniforms, medical scrubs, and professional attire.",
    href: "/services/uniform-cleaning/",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Wedding Dress Care",
    description: "Preservation and cleaning for wedding gowns and formal wear, keeping memories beautiful.",
    href: "/services/wedding-dress-cleaning-preservation/",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Household Items",
    description: "From comforters to curtains, we clean household textiles with the same care as your wardrobe.",
    href: "/services/household-items/",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
];

interface ServiceGridProps {
  showTitle?: boolean;
  limit?: number;
}

export function ServiceGrid({ showTitle = true, limit }: ServiceGridProps) {
  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <Section bg="white">
      <Container>
        {showTitle && (
          <div className="text-center mb-16">
            <Heading as="h2" className="mb-4">
              Our Services
            </Heading>
            <Subheading className="max-w-2xl mx-auto">
              From everyday laundry to delicate garment care, we offer comprehensive cleaning services 
              backed by over a century of expertise.
            </Subheading>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service) => (
            <Link key={service.href} href={service.href} className="group">
              <Card className="h-full">
                <div className="text-charcoal-soft mb-4 transition-transform duration-300 group-hover:scale-105">
                  {service.icon}
                </div>
                <CardTitle className="group-hover:text-charcoal transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="mt-2 text-charcoal-soft">
                  {service.description}
                </CardDescription>
                <div className="mt-4 text-sm font-semibold text-charcoal group-hover:text-charcoal-soft transition-colors flex items-center gap-1">
                  Learn more
                  <svg className="w-4 h-4 card-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <Button href="/best-cleaners-savannah-services/" variant="primary" size="lg">
            View All Services
          </Button>
          <Button href="/how-our-process-works/" variant="outline" size="lg">
            Learn About Our Process
          </Button>
          <Button href="/faq/" variant="outline" size="lg">
            FAQs
          </Button>
        </div>
      </Container>
    </Section>
  );
}
