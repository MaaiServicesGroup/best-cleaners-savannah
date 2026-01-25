import { Metadata } from "next";
import { PageHero } from "@/components/sections/Hero";
import { Container, Section } from "@/components/layout";
import { Heading, Card } from "@/components/ui";
import { ServiceInterestForm } from "@/components/forms/ServiceInterestForm";

export const metadata: Metadata = {
  title: "Request Pickup & Delivery | Best Cleaners Savannah",
  description: "Request pickup and delivery dry cleaning service in Savannah. Let us know your needs and we'll contact you to arrange convenient service.",
};

const features = [
  {
    title: "Convenient Scheduling",
    description: "We work around your schedule to find pickup and delivery times that work for you. Set up weekly or recurring service for hands-off convenience.",
  },
  {
    title: "Professional Handling",
    description: "Your garments are treated with the same care whether you drop off or we pick up.",
  },
  {
    title: "Service Area",
    description: "We serve Savannah and surrounding areas including Pooler, Garden City, and more.",
  },
];

export default function RequestPickupDeliveryPage() {
  return (
    <>
      <PageHero
        title="Request Pickup & Delivery"
        description="Too busy to drop off? Let us come to you. Tell us about your dry cleaning needs and we'll arrange convenient pickup and delivery."
        breadcrumb={[{ label: "Request Pickup & Delivery", href: "/request-pickup-delivery/" }]}
      />

      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center">
                <h3 className="font-semibold text-charcoal mb-2">{feature.title}</h3>
                <p className="text-sm text-muted">{feature.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="cream">
        <Container size="narrow">
          <div className="text-center mb-12">
            <Heading as="h2" className="mb-4">
              Tell Us About Your Needs
            </Heading>
            <p className="text-muted">
              Fill out the form below and we&apos;ll contact you to discuss pickup and delivery 
              options that work for your schedule—whether it&apos;s a one-time service or a 
              recurring arrangement that takes laundry off your to-do list for good.
            </p>
          </div>

          <div className="bg-clean-white p-8 border border-border">
            <ServiceInterestForm formspreeId={process.env.NEXT_PUBLIC_FORMSPREE_SERVICE_INTEREST || "placeholder"} />
          </div>
        </Container>
      </Section>
    </>
  );
}
