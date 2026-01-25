import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
    title: "Tourism & Hospitality",
    description: "Supporting Savannah's thriving tourism industry with linen services for hotels, Airbnb hosts, vacation rentals, and bed-and-breakfasts. We also handle restaurant and catering linens for hospitality events.",
    image: "/images/collection-Best-Cleaners-zYxuPC2-xFU/wedding table setting.jpg",
    imageAlt: "Elegant table setting with clean linens",
  },
  {
    title: "Uniform Services",
    description: "Professional uniform cleaning for corporate offices, restaurants, and service industries. Consistent quality to keep your team looking sharp.",
    image: "/images/collection-Best-Cleaners-zYxuPC2-xFU/mens uniform shirts.jpg",
    imageAlt: "Professional uniform shirts",
  },
  {
    title: "Military & Government",
    description: "Trusted by Hunter Army Airfield and local government offices. We understand the standards required for military dress uniforms and official attire.",
    image: "/images/collection-Best-Cleaners-zYxuPC2-xFU/military uniform.jpg",
    imageAlt: "Military uniform care",
  },
  {
    title: "Restaurants & Food Service",
    description: "Tablecloths, napkins, chef coats, and server uniforms cleaned to the highest standards for Savannah's dining establishments.",
    image: "/images/collection-Best-Cleaners-zYxuPC2-xFU/restaurant.jpg",
    imageAlt: "Restaurant dining setting",
  },
  {
    title: "Medical, Spa & Wellness",
    description: "Lab coats, scrubs, medical textiles, spa linens, salon towels, and gym towels cleaned according to strict hygiene standards.",
    image: "/images/collection-Best-Cleaners-zYxuPC2-xFU/clean suit.jpg",
    imageAlt: "Clean professional attire",
  },
  {
    title: "Schools & Organizations",
    description: "Band uniforms, sports attire, and event clothing for schools and community groups.",
    image: "/images/collection-Best-Cleaners-zYxuPC2-xFU/school band.jpg",
    imageAlt: "School band uniforms",
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
              For over a century, Savannah&apos;s hotels, uniform-dependent businesses, and military 
              personnel have trusted Best Cleaners for their commercial cleaning needs. We 
              understand that consistent quality and reliable service are essential for your operations, 
              and our efficient, modern processes help reduce waste while delivering exceptional results.
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
              <div key={industry.title} className="bg-clean-white border border-border overflow-hidden">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={industry.image}
                    alt={industry.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-charcoal mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-muted text-sm">{industry.description}</p>
                </div>
              </div>
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

      {/* Service Model */}
      <Section bg="cream">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" className="mb-4">
              How We Work With You
            </Heading>
            <p className="text-muted max-w-2xl mx-auto">
              We build lasting partnerships with Savannah businesses through reliable, scalable service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="w-12 h-12 mx-auto bg-heritage-blue/10 text-heritage-blue rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Recurring Contracts</h3>
              <p className="text-sm text-muted">
                Monthly service agreements with predictable billing and priority scheduling.
              </p>
            </Card>
            <Card className="text-center">
              <div className="w-12 h-12 mx-auto bg-heritage-blue/10 text-heritage-blue rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Reliable Turnaround</h3>
              <p className="text-sm text-muted">
                Consistent delivery schedules you can count on, with rush options when needed.
              </p>
            </Card>
            <Card className="text-center">
              <div className="w-12 h-12 mx-auto bg-heritage-blue/10 text-heritage-blue rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Scalable Volume</h3>
              <p className="text-sm text-muted">
                From small businesses to enterprise accounts, we grow with your needs.
              </p>
            </Card>
          </div>

          {/* FAQ CTA */}
          <p className="text-center mt-10">
            <Link
              href="/faq/"
              className="text-heritage-blue hover:text-heritage-blue-hover transition-colors text-sm"
            >
              See common commercial questions →
            </Link>
          </p>
        </Container>
      </Section>

      {/* Inquiry Form */}
      <Section bg="white" id="inquiry-form">
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
