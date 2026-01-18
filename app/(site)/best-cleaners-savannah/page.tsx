import { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/Hero";
import { Container, Section } from "@/components/layout";
import { Button, Heading, Card } from "@/components/ui";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About Best Cleaners & Laundry | Savannah's Heritage Dry Cleaner",
  description: "Learn about Best Cleaners & Laundry's 110+ year history serving Savannah. Family-owned, community-focused, and committed to exceptional garment care since 1910.",
};

const timeline = [
  {
    year: "1910",
    title: "Founded in Savannah",
    description: "Best Cleaners opens its doors, beginning a legacy of quality garment care in the heart of Savannah.",
  },
  {
    year: "1940s",
    title: "Serving Through War",
    description: "During WWII, we helped families care for cherished garments while loved ones served overseas.",
  },
  {
    year: "1960s",
    title: "Expansion & Growth",
    description: "Second generation takes the helm, expanding services and opening our Abercorn location.",
  },
  {
    year: "1990s",
    title: "Modernization",
    description: "Investing in state-of-the-art equipment while maintaining traditional craftsmanship standards.",
  },
  {
    year: "2020s",
    title: "Fourth Generation",
    description: "Today, we blend a century of expertise with modern, eco-friendly practices for exceptional results.",
  },
];

const values = [
  {
    title: "Craftsmanship",
    description: "Every garment receives individual attention from trained professionals who understand fabrics, construction, and care.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Integrity",
    description: "We're honest about what we can do, fair in our pricing, and accountable for our work. Your trust matters.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Community",
    description: "Savannah isn't just where we work—it's home. We're proud to serve our neighbors and support local causes.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Sustainability",
    description: "We've evolved our practices to protect the environment while delivering exceptional cleaning results.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Best Cleaners & Laundry"
        description="For over 110 years, our family has served Savannah with pride, professionalism, and a passion for exceptional garment care."
        breadcrumb={[{ label: "About", href: "/best-cleaners-savannah/" }]}
      />

      {/* Mission Section */}
      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest font-semibold text-best-red mb-4">
                Our Story
              </p>
              <Heading as="h2" className="mb-6">
                A Savannah Institution Since 1910
              </Heading>
              <div className="prose text-muted">
                <p>
                  When Best Cleaners opened its doors in 1910, Savannah was a different city. 
                  Horse-drawn carriages still dotted the streets, and the concept of dry cleaning 
                  was relatively new. What hasn&apos;t changed is our commitment to exceptional 
                  garment care.
                </p>
                <p>
                  Four generations later, we continue to serve the families, businesses, and 
                  institutions that make Savannah special. We&apos;ve pressed suits for weddings, 
                  preserved gowns for future generations, and cared for the everyday garments 
                  that fill your closets.
                </p>
                <p>
                  Our longevity isn&apos;t just about surviving—it&apos;s about consistently delivering 
                  quality that earns trust, generation after generation.
                </p>
              </div>
              <div className="mt-8">
                <Button href="/best-cleaners-savannah-is-the-top-choice/" variant="secondary">
                  Why Choose Us
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] bg-warm-cream">
              <Image
                src="/images/The Best Cleaners Cover.jpg"
                alt="Best Cleaners & Laundry storefront"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Timeline */}
      <Section bg="cream">
        <Container>
          <div className="text-center mb-16">
            <Heading as="h2" className="mb-4">
              Our Journey Through Time
            </Heading>
            <p className="text-muted max-w-2xl mx-auto">
              From our founding to today, each decade has brought new challenges and opportunities 
              to serve Savannah better.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-heritage-blue text-clean-white flex items-center justify-center font-display text-lg font-bold shrink-0">
                    {item.year.slice(0, 4)}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-px h-full bg-border mt-4" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-display text-xl font-semibold text-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section bg="white">
        <Container>
          <div className="text-center mb-16">
            <Heading as="h2" className="mb-4">
              Our Values
            </Heading>
            <p className="text-muted max-w-2xl mx-auto">
              These principles have guided us for over a century—and they continue to shape 
              everything we do today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="flex gap-6">
                <div className="text-heritage-blue shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-charcoal mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CTABanner
        title="Experience the Best Difference"
        description="Visit one of our two Savannah locations and see why families have trusted us for generations."
        primaryCta={{
          text: "Find a Location",
          href: "/best-cleaners-savannah-locations/",
        }}
        variant="dark"
      />
    </>
  );
}
