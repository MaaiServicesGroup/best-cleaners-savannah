import { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/Hero";
import { Container, Section } from "@/components/layout";
import { Heading, Card } from "@/components/ui";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Wash & Fold Laundry Service | Best Cleaners Savannah",
  description: "Convenient wash and fold laundry service in Savannah. Drop off your laundry, we'll wash, dry, and fold it. Affordable by-the-pound pricing since 1910.",
};

export default function WashAndFoldPage() {
  return (
    <>
      <PageHero
        title="Wash & Fold Service"
        description="Too busy for laundry day? Drop off your everyday items and let us handle the washing, drying, and folding."
        breadcrumb={[
          { label: "Services", href: "/best-cleaners-savannah-services/" },
          { label: "Wash & Fold", href: "/services/wash-and-fold/" },
        ]}
      />

      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading as="h2" className="mb-6">
                Laundry Day, Done for You
              </Heading>
              <div className="prose text-muted">
                <p>
                  Life is busy. Between work, family, and everything else, laundry can pile up 
                  faster than you can fold it. Our wash and fold service takes that burden off 
                  your shoulders.
                </p>
                <p>
                  Simply drop off your everyday laundry—towels, sheets, casual clothes, and 
                  more—and we'll return it clean, fresh, and neatly folded. It's like having 
                  your own laundry staff without the overhead. Our wash and fold service is 
                  especially popular with busy students at SCAD and Savannah State, seniors 
                  looking for convenience, and anyone who'd rather spend their weekends elsewhere.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden border border-border">
              <Image
                src="/images/FoldedClothes.jpg"
                alt="Neatly folded clothes from our wash and fold service"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="cream">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="w-16 h-16 mx-auto bg-heritage-blue/10 text-heritage-blue rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Drop Off</h3>
              <p className="text-sm text-muted">
                Bring your laundry in any bag or basket. We'll weigh it and give you a quote.
              </p>
            </Card>
            <Card className="text-center">
              <div className="w-16 h-16 mx-auto bg-heritage-blue/10 text-heritage-blue rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="font-semibold text-charcoal mb-2">We Clean</h3>
              <p className="text-sm text-muted">
                We wash, dry, and fold your items with care, sorting by color and fabric type.
              </p>
            </Card>
            <Card className="text-center">
              <div className="w-16 h-16 mx-auto bg-heritage-blue/10 text-heritage-blue rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Pick Up</h3>
              <p className="text-sm text-muted">
                Pick up your neatly folded laundry, ready to put away. Typically within 24-48 hours.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section bg="white">
        <Container size="narrow">
          <div className="text-center">
            <Heading as="h2" size="md" className="mb-4">
              Simple, Affordable Pricing
            </Heading>
            <p className="text-muted mb-8">
              Our wash and fold service is priced by the pound—you only pay for what you 
              bring in. No minimums, no complicated pricing tiers. Just fair, straightforward pricing.
            </p>
            <p className="text-sm text-muted">
              Contact us or stop by for current rates.
            </p>
          </div>
        </Container>
      </Section>

      <CTABanner
        title="Ready to Reclaim Your Weekends?"
        description="Let us handle the laundry while you focus on what matters."
        primaryCta={{
          text: "Find a Location",
          href: "/best-cleaners-savannah-locations/",
        }}
        variant="default"
      />
    </>
  );
}
