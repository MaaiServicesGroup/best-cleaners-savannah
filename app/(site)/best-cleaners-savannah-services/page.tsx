import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/Hero";
import { Container, Section } from "@/components/layout";
import { Heading, Card, CardTitle, CardDescription, Button } from "@/components/ui";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Dry Cleaning & Laundry Services | Best Cleaners Savannah",
  description: "Complete dry cleaning and laundry services in Savannah. Professional garment care, wedding dress preservation, wash & fold, uniform cleaning, and more. Since 1910.",
};

const services = [
  {
    category: "Garment Care",
    items: [
      {
        title: "Professional Dry Cleaning",
        description: "Expert care for suits, dresses, silk, wool, and delicate fabrics using eco-friendly solvents and meticulous attention to detail.",
        href: "/services/dry-cleaning/",
        features: ["Delicate fabric expertise", "Stain treatment", "Hand finishing", "Same-week service"],
      },
      {
        title: "Laundry & Press",
        description: "Professional laundering and pressing for dress shirts, blouses, and everyday garments that need a polished finish.",
        href: "/services/laundry-and-press/",
        features: ["Crisp pressing", "Button inspection", "Collar & cuff care", "Folded or on hangers"],
      },
      {
        title: "Wash & Fold",
        description: "Convenient drop-off laundry service for everyday items. We wash, dry, and neatly fold—ready for your closet.",
        href: "/services/wash-and-fold/",
        features: ["By-the-pound pricing", "Sorted by color", "Folded neatly", "Quick turnaround"],
      },
    ],
  },
  {
    category: "Specialty Services",
    items: [
      {
        title: "Wedding Dress Cleaning & Preservation",
        description: "Expert cleaning and archival preservation for wedding gowns, ensuring your memories stay beautiful for generations.",
        href: "/services/wedding-dress-cleaning-preservation/",
        features: ["Heirloom preservation", "Museum-quality materials", "Hand cleaning", "Sealed protection"],
      },
      {
        title: "Uniform Cleaning",
        description: "Specialized care for work uniforms, medical scrubs, restaurant attire, and professional clothing.",
        href: "/services/uniform-cleaning/",
        features: ["Volume discounts", "Scheduled pickup", "Quick turnaround", "Stain removal"],
      },
      {
        title: "Household Items",
        description: "From comforters and blankets to drapes and table linens, we clean the textiles that make your house a home.",
        href: "/services/household-items/",
        features: ["Comforters & duvets", "Curtains & drapes", "Table linens", "Rugs & throws"],
      },
    ],
  },
];

const processSteps = [
  {
    step: 1,
    title: "Drop Off",
    description: "Bring your items to either of our two convenient Savannah locations.",
  },
  {
    step: 2,
    title: "Inspection",
    description: "We carefully inspect each garment, noting any stains, damage, or special requirements.",
  },
  {
    step: 3,
    title: "Cleaning",
    description: "Your items are cleaned using the appropriate method for their fabric and construction.",
  },
  {
    step: 4,
    title: "Finishing",
    description: "Expert pressing, steaming, and final inspection ensure every piece looks its best.",
  },
  {
    step: 5,
    title: "Pickup",
    description: "Your clean, fresh garments are ready for pickup—typically within 2-3 business days.",
  },
];

export default function ServicesHubPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        description="From everyday laundry to specialty garment care, we offer comprehensive cleaning services backed by over a century of expertise."
        breadcrumb={[{ label: "Services", href: "/best-cleaners-savannah-services/" }]}
      />

      {/* Services Grid */}
      {services.map((category) => (
        <Section key={category.category} bg="white">
          <Container>
            <Heading as="h2" size="md" className="mb-8">
              {category.category}
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {category.items.map((service) => (
                <Link key={service.href} href={service.href} className="group">
                  <Card className="h-full flex flex-col">
                    <CardTitle className="group-hover:text-best-red transition-colors text-xl">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="mt-2 flex-grow">
                      {service.description}
                    </CardDescription>
                    <ul className="mt-4 space-y-1">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted">
                          <svg className="w-4 h-4 text-heritage-blue shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-4 border-t border-border">
                      <span className="text-sm font-semibold text-heritage-blue group-hover:text-best-red transition-colors flex items-center gap-1">
                        Learn more
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      ))}

      {/* Process Section */}
      <Section bg="cream">
        <Container>
          <div className="text-center mb-16">
            <Heading as="h2" className="mb-4">
              Our Process
            </Heading>
            <p className="text-muted max-w-2xl mx-auto">
              Simple, straightforward, and designed around your convenience.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-4">
            {processSteps.map((step, index) => (
              <div key={step.step} className="flex-1 relative">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto bg-heritage-blue text-clean-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2">{step.title}</h3>
                  <p className="text-sm text-muted">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-px bg-border" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/how-our-process-works/" variant="outline">
              Learn More About Our Process
            </Button>
            <p className="mt-4">
              <Link
                href="/faq/"
                className="text-heritage-blue hover:text-heritage-blue-hover transition-colors text-sm"
              >
                Or browse common questions
              </Link>
            </p>
          </div>
        </Container>
      </Section>

      {/* Commercial CTA */}
      <Section bg="white">
        <Container size="narrow">
          <div className="text-center">
            <Heading as="h2" size="md" className="mb-4">
              Need Commercial Cleaning Services?
            </Heading>
            <p className="text-muted mb-8">
              We serve businesses across Savannah with reliable, high-volume cleaning services. 
              From restaurants to hotels to medical facilities, we have the capacity and expertise 
              to meet your commercial needs.
            </p>
            <Button href="/commercial-dry-cleaning/">
              Commercial Services
            </Button>
          </div>
        </Container>
      </Section>

      <CTABanner
        title="Ready to Get Started?"
        description="Visit one of our two convenient Savannah locations or contact us to learn more about our services."
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
