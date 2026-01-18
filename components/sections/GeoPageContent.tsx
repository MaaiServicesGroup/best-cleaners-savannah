import Link from "next/link";
import { Container, Section } from "@/components/layout";
import { Heading, Card, Button, HeritageBadge } from "@/components/ui";
import { CTABanner } from "./CTABanner";

interface GeoPageData {
  title: string;
  neighborhood: string;
  pageType: "near-city" | "neighborhood" | "district";
  description: string;
  proximityStatement: string;
  content: string[];
  landmarks?: string[];
  relatedAreas: {
    name: string;
    href: string;
  }[];
}

interface GeoPageContentProps {
  data: GeoPageData;
}

const services = [
  { name: "Dry Cleaning", href: "/services/dry-cleaning/" },
  { name: "Laundry & Press", href: "/services/laundry-and-press/" },
  { name: "Wash & Fold", href: "/services/wash-and-fold/" },
  { name: "Wedding Dress Preservation", href: "/services/wedding-dress-cleaning-preservation/" },
  { name: "Uniform Cleaning", href: "/services/uniform-cleaning/" },
  { name: "Household Items", href: "/services/household-items/" },
];

export function GeoPageContent({ data }: GeoPageContentProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-clean-white border-b border-border py-12 md:py-16">
        <Container>
          <div className="max-w-3xl">
            <HeritageBadge className="mb-4" />
            <Heading as="h1" size="lg" className="mb-4">
              {data.title}
            </Heading>
            <p className="text-muted text-lg">
              {data.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <Section bg="cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Content Column */}
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                {data.content.map((paragraph, index) => (
                  <p key={index} className="text-charcoal leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Proximity Statement */}
              <div className="bg-heritage-blue/10 border-l-4 border-heritage-blue p-6 my-8">
                <p className="text-charcoal font-medium">
                  {data.proximityStatement}
                </p>
              </div>

              {/* Services Available */}
              <div className="mt-12">
                <Heading as="h2" size="sm" className="mb-6">
                  Services Available Near {data.neighborhood}
                </Heading>
                <div className="grid grid-cols-2 gap-4">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="flex items-center gap-2 p-4 bg-clean-white border border-border hover:border-heritage-blue transition-colors group"
                    >
                      <svg className="w-5 h-5 text-heritage-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-charcoal group-hover:text-heritage-blue transition-colors">
                        {service.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Locations Card */}
              <Card hover={false}>
                <h3 className="font-display text-lg font-semibold text-charcoal mb-4">
                  Our Locations
                </h3>
                <div className="space-y-4">
                  <div className="pb-4 border-b border-border">
                    <h4 className="font-semibold text-charcoal">Waters Avenue</h4>
                    <p className="text-sm text-muted">2011 E. Waters Avenue</p>
                    <p className="text-sm text-muted">Savannah, GA 31404</p>
                    <a href="tel:9123541234" className="text-sm text-heritage-blue hover:text-best-red">
                      (912) 354-1234
                    </a>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal">Abercorn Street</h4>
                    <p className="text-sm text-muted">7805 Abercorn Street</p>
                    <p className="text-sm text-muted">Savannah, GA 31406</p>
                    <a href="tel:9123555678" className="text-sm text-heritage-blue hover:text-best-red">
                      (912) 355-5678
                    </a>
                  </div>
                </div>
                <div className="mt-6">
                  <Button href="/best-cleaners-savannah-locations/" variant="outline" className="w-full text-sm">
                    Get Directions
                  </Button>
                </div>
              </Card>

              {/* Landmarks */}
              {data.landmarks && data.landmarks.length > 0 && (
                <Card hover={false}>
                  <h3 className="font-display text-lg font-semibold text-charcoal mb-4">
                    Near {data.neighborhood}
                  </h3>
                  <ul className="space-y-2">
                    {data.landmarks.map((landmark) => (
                      <li key={landmark} className="flex items-start gap-2 text-sm text-muted">
                        <svg className="w-4 h-4 text-heritage-blue shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {landmark}
                      </li>
                    ))}
                  </ul>
                </Card>
              )}

              {/* Related Areas */}
              <Card hover={false}>
                <h3 className="font-display text-lg font-semibold text-charcoal mb-4">
                  We Also Serve
                </h3>
                <ul className="space-y-2">
                  {data.relatedAreas.map((area) => (
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
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <CTABanner
        title={`Ready to Experience the Best in ${data.neighborhood}?`}
        description="Visit one of our two convenient Savannah locations and see why we've been trusted for over 110 years."
        primaryCta={{
          text: "Find a Location",
          href: "/best-cleaners-savannah-locations/",
        }}
        secondaryCta={{
          text: "Contact Us",
          href: "/contact-best-dry-cleaners/",
        }}
        variant="default"
      />
    </>
  );
}
