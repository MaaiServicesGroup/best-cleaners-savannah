import Image from "next/image";
import { Container, Section } from "@/components/layout";
import { Heading, Subheading } from "@/components/ui";

const serviceHighlights = [
  {
    label: "Same-Day Service",
    tagline: "In by 9, out by 5",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "Laundry & Press",
    tagline: "Expert finishing",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    label: "Button Repair",
    tagline: "Complimentary",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

const reasons = [
  {
    number: "110+",
    label: "Years of Service",
    description: "Serving Savannah since 1910, we've built our reputation on quality and trust across generations.",
  },
  {
    number: "2",
    label: "Convenient Locations",
    description: "Visit us on Waters Avenue or Abercorn Street—both locations offer the same exceptional service.",
  },
  {
    number: "100%",
    label: "Satisfaction Guarantee",
    description: "We stand behind our work. If you're not completely satisfied, we'll make it right.",
  },
  {
    number: "Eco",
    label: "Friendly Practices",
    description: "We use environmentally responsible cleaning methods that are gentle on your clothes and the planet.",
  },
];

export function WhyChooseUs() {
  return (
    <Section bg="cream">
      <Container>
        {/* Service Highlights Strip */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-16 pb-12 border-b border-border">
          {serviceHighlights.map((highlight) => (
            <div
              key={highlight.label}
              className="flex items-center gap-3 text-charcoal"
            >
              <span className="text-heritage-blue">{highlight.icon}</span>
              <div className="flex flex-col">
                <span className="font-semibold text-sm">{highlight.label}</span>
                <span className="text-xs text-muted">{highlight.tagline}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-sm uppercase tracking-widest font-semibold text-best-red mb-4">
              Why Choose Best Cleaners
            </p>
            <Heading as="h2" className="mb-6">
              A Century of Excellence in Garment Care
            </Heading>
            <Subheading className="mb-8">
              Since 1910, we&apos;ve combined time-tested techniques with modern innovations 
              to deliver the finest dry cleaning and laundry services in Savannah.
            </Subheading>
            <p className="text-muted leading-relaxed mb-8">
              Our family has been caring for Savannah&apos;s finest garments for over four generations. 
              We understand that every piece of clothing tells a story—whether it&apos;s a cherished 
              wedding dress, a trusted work suit, or your favorite everyday shirt. That&apos;s why we 
              treat every garment with the respect and attention it deserves.
            </p>
            <div className="relative aspect-[16/9] overflow-hidden border border-border rounded-lg">
              <Image
                src="/images/collection-Best-Cleaners-zYxuPC2-xFU/dry cleaning equipment.jpg"
                alt="Professional dry cleaning equipment at Best Cleaners"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {reasons.map((reason) => (
              <div
                key={reason.label}
                className="bg-clean-white border border-border rounded-lg p-6 text-center hover:shadow-md hover:border-charcoal/20 transition-all"
              >
                <span className="block font-display text-4xl md:text-5xl font-bold text-charcoal mb-2">
                  {reason.number}
                </span>
                <span className="block font-semibold text-charcoal mb-2">
                  {reason.label}
                </span>
                <p className="text-sm text-charcoal-soft leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
