import { Metadata } from "next";
import { PageHero } from "@/components/sections/Hero";
import { Container, Section } from "@/components/layout";
import { Heading, Card, Button } from "@/components/ui";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Community Involvement | Best Cleaners Savannah",
  description: "Best Cleaners & Laundry's commitment to Savannah. Supporting local causes and organizations since 1910. Part of the Savannah community.",
};

const involvements = [
  {
    title: "Local Schools",
    description: "We're proud to support Savannah's schools through uniform care partnerships and donations to school programs.",
    icon: "🎓",
  },
  {
    title: "Small Businesses",
    description: "As a family business ourselves, we understand the challenges small businesses face. We support local entrepreneurs whenever we can.",
    icon: "🏪",
  },
  {
    title: "Nonprofits",
    description: "We partner with local nonprofits to provide clothing cleaning services for those in need, job interview preparation, and more.",
    icon: "💝",
  },
  {
    title: "Historic Preservation",
    description: "Savannah's history matters to us. We support efforts to preserve the city's architectural and cultural heritage.",
    icon: "🏛️",
  },
];

export default function CommunityPage() {
  return (
    <>
      <PageHero
        title="Part of the Savannah Community"
        description="For over 110 years, we've been more than a business in Savannah—we've been neighbors, supporters, and friends."
        breadcrumb={[{ label: "Community", href: "/community/" }]}
      />

      <Section bg="white">
        <Container>
          <div className="max-w-3xl">
            <Heading as="h2" className="mb-6">
              Savannah Is Home
            </Heading>
            <div className="prose text-muted">
              <p>
                When you've been in business for over a century, you become part of the fabric 
                of your community. We've watched Savannah grow, change, and evolve—and we've 
                grown with it.
              </p>
              <p>
                Our success depends on Savannah's success. That's why we invest in our community, 
                support local causes, and treat our neighbors like family. It's not just good 
                business—it's who we are.
              </p>
              <p>
                Over the years, we've cleaned garments for every major milestone in Savannah 
                life: graduations, weddings, job interviews, funerals. We understand that what 
                we do matters to people, and we take that responsibility seriously.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="cream">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" className="mb-4">
              How We Give Back
            </Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {involvements.map((item) => (
              <Card key={item.title}>
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="font-display text-xl font-semibold text-charcoal mb-3">
                  {item.title}
                </h3>
                <p className="text-muted">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="white">
        <Container size="narrow">
          <div className="text-center">
            <Heading as="h2" size="md" className="mb-4">
              Partner With Us
            </Heading>
            <p className="text-muted mb-8">
              If you represent a Savannah nonprofit, school, or community organization and 
              would like to explore a partnership, we'd love to hear from you.
            </p>
            <Button href="/contact-best-dry-cleaners/">
              Get in Touch
            </Button>
          </div>
        </Container>
      </Section>

      <CTABanner
        title="Thank You, Savannah"
        description="We're grateful for over 110 years of trust and support from our community."
        primaryCta={{
          text: "Visit Our Locations",
          href: "/best-cleaners-savannah-locations/",
        }}
        variant="dark"
      />
    </>
  );
}
