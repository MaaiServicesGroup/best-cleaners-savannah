import { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/Hero";
import { Container, Section } from "@/components/layout";
import { Heading, Card, Button } from "@/components/ui";
import { CTABanner, SoftCTA } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Professional Dry Cleaning Services | Best Cleaners Savannah",
  description: "Expert dry cleaning in Savannah since 1910. Suits, dresses, delicates, and specialty garments cleaned with care. Eco-friendly methods, experienced staff.",
};

const whatWeDryCLean = [
  "Suits & Blazers",
  "Dresses & Gowns",
  "Silk & Cashmere",
  "Wool & Fine Knits",
  "Leather & Suede",
  "Formal Wear",
  "Vintage Garments",
  "Designer Items",
];

const process = [
  {
    step: "1",
    title: "Inspection",
    description: "Every garment is carefully inspected for stains, damage, and special care requirements.",
  },
  {
    step: "2",
    title: "Pre-Treatment",
    description: "Stains are pre-treated with specialized solutions matched to the stain type and fabric.",
  },
  {
    step: "3",
    title: "Cleaning",
    description: "Garments are cleaned using eco-friendly solvents that protect fabrics while removing soil.",
  },
  {
    step: "4",
    title: "Finishing",
    description: "Expert pressing and steaming restore the garment's shape and appearance.",
  },
  {
    step: "5",
    title: "Final Check",
    description: "A final quality inspection ensures every piece meets our standards before it's ready for pickup.",
  },
];

export default function DryCLeaningPage() {
  return (
    <>
      <PageHero
        title="Professional Dry Cleaning"
        description="Expert care for your finest garments. From everyday suits to delicate fabrics, we treat every piece with the respect it deserves."
        breadcrumb={[
          { label: "Services", href: "/best-cleaners-savannah-services/" },
          { label: "Dry Cleaning", href: "/services/dry-cleaning/" },
        ]}
      />

      {/* Overview */}
      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading as="h2" className="mb-6">
                What is Dry Cleaning?
              </Heading>
              <div className="prose text-muted">
                <p>
                  Dry cleaning is a professional garment cleaning process that uses specialized 
                  solvents instead of water. This method is essential for fabrics that would be 
                  damaged by water, including silk, wool, cashmere, and many synthetic blends.
                </p>
                <p>
                  At Best Cleaners, we've perfected our dry cleaning process over four generations. 
                  We combine traditional craftsmanship with modern, eco-friendly methods to deliver 
                  exceptional results that protect your garments and the environment.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden border border-border">
              <Image
                src="/images/collection-Best-Cleaners-zYxuPC2-xFU/dry cleaning clothes on rack.jpg"
                alt="Professional dry cleaning - freshly cleaned clothes on a rack"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* What We Clean */}
      <Section bg="cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading as="h2" className="mb-6">
                What We Dry Clean
              </Heading>
              <p className="text-muted mb-8">
                If it says "dry clean only" on the label, we can handle it. But we also 
                recommend dry cleaning for many items that could technically be washed at 
                home—the results are simply superior.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {whatWeDryCLean.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-heritage-blue shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-charcoal">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative aspect-[4/3] overflow-hidden border border-border">
                <Image
                  src="/images/collection-Best-Cleaners-zYxuPC2-xFU/man in clean suit.jpg"
                  alt="Man wearing a professionally dry cleaned suit"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-clean-white border border-border p-6">
                <h3 className="font-display text-lg font-semibold text-charcoal mb-3">
                  Not Sure If Your Item Needs Dry Cleaning?
                </h3>
                <p className="text-muted mb-4 text-sm">
                  Bring it in and we'll take a look. We're always happy to advise on the best 
                  cleaning method for any garment—there's no obligation.
                </p>
                <Button href="/contact-best-dry-cleaners/" variant="outline" size="sm">
                  Ask Us
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            <div className="lg:col-span-2">
              <Heading as="h2" className="mb-4">
                Our Dry Cleaning Process
              </Heading>
              <p className="text-muted">
                Every garment goes through our careful, multi-step process to ensure the best results. 
                Our experienced team combines time-tested techniques with modern equipment to deliver 
                exceptional care for your clothing.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden border border-border">
              <Image
                src="/images/collection-Best-Cleaners-zYxuPC2-xFU/expert process.jpg"
                alt="Expert dry cleaning process in action"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {process.map((step, index) => (
              <div key={step.step} className="text-center relative">
                <div className="w-12 h-12 mx-auto bg-heritage-blue text-clean-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {step.step}
                </div>
                <h3 className="font-semibold text-charcoal mb-2">{step.title}</h3>
                <p className="text-sm text-muted">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Choose Us */}
      <Section bg="cream">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" className="mb-4">
              Why Choose Best Cleaners
            </Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-clean-white border border-border overflow-hidden">
              <div className="relative aspect-[3/2]">
                <Image
                  src="/images/collection-Best-Cleaners-zYxuPC2-xFU/dry cleaning equipment.jpg"
                  alt="Professional dry cleaning equipment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-charcoal mb-3">
                  110+ Years Experience
                </h3>
                <p className="text-muted">
                  We've been dry cleaning in Savannah since 1910. That experience shows in 
                  the quality of our work and our ability to handle any garment.
                </p>
              </div>
            </div>
            <div className="bg-clean-white border border-border overflow-hidden">
              <div className="relative aspect-[3/2]">
                <Image
                  src="/images/collection-Best-Cleaners-zYxuPC2-xFU/special fabrics.jpg"
                  alt="Special fabric care"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-charcoal mb-3">
                  Eco-Friendly Methods
                </h3>
                <p className="text-muted">
                  We use modern, environmentally responsible solvents that are gentle on 
                  your clothes and the planet, without sacrificing cleaning power.
                </p>
              </div>
            </div>
            <div className="bg-clean-white border border-border overflow-hidden">
              <div className="relative aspect-[3/2]">
                <Image
                  src="/images/collection-Best-Cleaners-zYxuPC2-xFU/expert pressing.jpg"
                  alt="Expert garment pressing"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-charcoal mb-3">
                  Expert Finishing
                </h3>
                <p className="text-muted">
                  Cleaning is only half the job. Our skilled pressers bring garments back 
                  to life with detailed pressing that makes everything look brand new.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <SoftCTA
        title="Ready to Experience the Difference?"
        description="Drop off your garments at either of our Savannah locations."
        cta={{
          text: "Find a Location",
          href: "/best-cleaners-savannah-locations/",
        }}
      />

      <CTABanner
        title="Questions About Dry Cleaning?"
        description="We're happy to answer any questions about our process, pricing, or specific garments."
        primaryCta={{
          text: "Contact Us",
          href: "/contact-best-dry-cleaners/",
        }}
        variant="dark"
      />
    </>
  );
}
