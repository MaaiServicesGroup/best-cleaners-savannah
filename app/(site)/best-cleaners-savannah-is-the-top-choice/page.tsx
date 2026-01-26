import { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/Hero";
import { Container, Section } from "@/components/layout";
import { Heading, Card, Button } from "@/components/ui";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Why Best Cleaners is Savannah's Top Choice | Since 1910",
  description: "Discover why Best Cleaners & Laundry is Savannah's most trusted dry cleaner. 110+ years of experience, eco-friendly practices, and exceptional customer service.",
};

const reasons = [
  {
    title: "110+ Years of Experience",
    description: "Over a century of expertise means we've seen it all. From vintage fabrics to modern materials, we know how to care for every garment.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Eco-Friendly Practices",
    description: "We use environmentally responsible solvents and processes that are gentle on your clothes and the planet.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Expert Stain Removal",
    description: "Our technicians are trained to tackle even the toughest stains, saving garments that others might give up on.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Fair, Transparent Pricing",
    description: "No hidden fees or surprises. We provide upfront pricing and honest assessments of what your garments need.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Two Convenient Locations",
    description: "With locations on Waters Avenue and Abercorn Street, we're accessible from anywhere in Savannah.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      </svg>
    ),
  },
  {
    title: "Satisfaction Guarantee",
    description: "We stand behind our work. If you're not completely satisfied, we'll make it right.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "110+", label: "Years in Business" },
  { value: "1910", label: "Est." },
  { value: "250+", label: "5-Star Reviews" },
  { value: "2", label: "Locations" },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        title="Why Best Cleaners is Savannah's Top Choice"
        description="When you choose Best Cleaners, you're choosing over a century of expertise, modern eco-friendly practices, and a team that truly cares about your garments."
        breadcrumb={[{ label: "Why Choose Us", href: "/best-cleaners-savannah-is-the-top-choice/" }]}
      />

      {/* Stats */}
      <Section bg="heritage-blue" padding="sm">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-clean-white text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-4xl md:text-5xl font-bold">{stat.value}</div>
                <div className="text-clean-white/80 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Reasons Grid */}
      <Section bg="white">
        <Container>
          <div className="text-center mb-16">
            <Heading as="h2" className="mb-4">
              What Sets Us Apart
            </Heading>
            <p className="text-muted max-w-2xl mx-auto">
              There are many dry cleaners in Savannah. Here&apos;s why discerning customers 
              choose Best Cleaners for their garment care needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason) => (
              <Card key={reason.title}>
                <div className="text-heritage-blue mb-4">
                  {reason.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-charcoal mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted">{reason.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Trust Section */}
      <Section bg="cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              <Image
                src="/images/The Best Cleaners.png"
                alt="Best Cleaners & Laundry"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <Heading as="h2" className="mb-6">
                Trusted by Savannah for Over a Century
              </Heading>
              <div className="prose text-muted">
                <p>
                  When Savannah residents brought their Sunday best to Best Cleaners in the 1950s, 
                  they expected quality and care. Today, their grandchildren bring their garments 
                  to us with the same expectations—and we deliver.
                </p>
                <p>
                  That kind of trust isn&apos;t built overnight. It&apos;s earned through consistent 
                  quality, honest service, and a genuine commitment to treating every customer 
                  with care.
                </p>
                <p>
                  We&apos;ve cleaned wedding dresses that have been passed down through generations. 
                  We&apos;ve restored vintage garments that hold irreplaceable memories. We&apos;ve cared 
                  for the everyday clothes that make up your life.
                </p>
              </div>
              <div className="mt-8">
                <Button href="/reviews/">
                  Read Customer Reviews
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Testimonials 
        title="Don't Just Take Our Word For It"
        subtitle="Here's what our customers say about their experience with Best Cleaners."
      />

      <CTABanner
        title="Experience the Difference"
        description="Visit one of our two Savannah locations and see why we've been the top choice for over a century."
        primaryCta={{
          text: "Find a Location",
          href: "/best-cleaners-savannah-locations/",
        }}
        variant="dark"
      />
    </>
  );
}
