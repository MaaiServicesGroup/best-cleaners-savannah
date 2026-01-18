import { Metadata } from "next";
import { PageHero } from "@/components/sections/Hero";
import { Container, Section } from "@/components/layout";
import { Heading, Card, Button } from "@/components/ui";
import { CommercialForm } from "@/components/forms/CommercialForm";

export const metadata: Metadata = {
  title: "Commercial Dry Cleaning Services | Best Cleaners Savannah",
  description: "Professional commercial dry cleaning for Savannah businesses. Restaurants, hotels, medical facilities, and more. Volume pricing and reliable service since 1910.",
};

const industries = [
  {
    title: "Restaurants & Hospitality",
    description: "Tablecloths, napkins, chef coats, and server uniforms cleaned to the highest standards.",
    icon: "🍽️",
  },
  {
    title: "Hotels & Lodging",
    description: "Linens, towels, staff uniforms, and guest laundry handled with care and efficiency.",
    icon: "🏨",
  },
  {
    title: "Medical & Healthcare",
    description: "Lab coats, scrubs, and medical textiles cleaned according to strict hygiene standards.",
    icon: "🏥",
  },
  {
    title: "Spas & Salons",
    description: "Robes, towels, and capes that stay fresh and presentable for your clients.",
    icon: "💆",
  },
  {
    title: "Corporate Offices",
    description: "Executive attire, company uniforms, and office textiles professionally maintained.",
    icon: "🏢",
  },
  {
    title: "Retail Establishments",
    description: "Staff uniforms and display textiles that represent your brand at its best.",
    icon: "🛍️",
  },
];

const benefits = [
  "Volume pricing for regular accounts",
  "Scheduled pickup and delivery",
  "Dedicated account management",
  "Flexible billing and invoicing",
  "Quick turnaround times",
  "Quality guarantee on all work",
];

export default function CommercialDryCleaningPage() {
  return (
    <>
      <PageHero
        title="Commercial Dry Cleaning"
        description="Reliable, high-quality cleaning services for Savannah businesses. We understand that your business depends on presentation."
        breadcrumb={[{ label: "Commercial Services", href: "/commercial-dry-cleaning/" }]}
      />

      {/* Intro */}
      <Section bg="white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Heading as="h2" className="mb-6">
              Trusted by Savannah Businesses Since 1910
            </Heading>
            <p className="text-muted text-lg">
              For over a century, Savannah&apos;s restaurants, hotels, medical facilities, and 
              businesses have trusted Best Cleaners for their commercial cleaning needs. We 
              understand that consistent quality and reliable service are essential for your operations.
            </p>
          </div>
        </Container>
      </Section>

      {/* Industries */}
      <Section bg="cream">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" className="mb-4">
              Industries We Serve
            </Heading>
            <p className="text-muted max-w-2xl mx-auto">
              We have experience serving businesses across many industries. Whatever your 
              commercial cleaning needs, we can help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Card key={industry.title}>
                <span className="text-4xl mb-4 block">{industry.icon}</span>
                <h3 className="font-display text-xl font-semibold text-charcoal mb-2">
                  {industry.title}
                </h3>
                <p className="text-muted text-sm">{industry.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading as="h2" className="mb-6">
                Why Partner With Us
              </Heading>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-heritage-blue shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-charcoal">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-warm-cream p-8 border border-border">
              <h3 className="font-display text-2xl font-semibold text-charcoal mb-4">
                Get a Custom Quote
              </h3>
              <p className="text-muted mb-6">
                Every business is different. Let us create a custom solution that fits your 
                volume, schedule, and budget.
              </p>
              <Button href="#inquiry-form">
                Request Quote
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Inquiry Form */}
      <Section bg="cream" id="inquiry-form">
        <Container size="narrow">
          <div className="text-center mb-12">
            <Heading as="h2" className="mb-4">
              Commercial Inquiry
            </Heading>
            <p className="text-muted">
              Tell us about your business and cleaning needs. We&apos;ll contact you within 
              1-2 business days to discuss how we can help.
            </p>
          </div>

          <div className="bg-clean-white p-8 border border-border">
            <CommercialForm formspreeId={process.env.NEXT_PUBLIC_FORMSPREE_COMMERCIAL || "placeholder"} />
          </div>
        </Container>
      </Section>
    </>
  );
}
