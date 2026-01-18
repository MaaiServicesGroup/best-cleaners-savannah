import { Metadata } from "next";
import { PageHero } from "@/components/sections/Hero";
import { Container, Section } from "@/components/layout";
import { Heading, Card } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our Policies | Best Cleaners Savannah",
  description: "Best Cleaners & Laundry policies on garment care, liability, and customer service. Transparent policies from Savannah's trusted cleaner since 1910.",
};

const policies = [
  {
    title: "Garment Care",
    items: [
      "We follow all care label instructions. If there's no label, we use our best professional judgment.",
      "Stain removal is never guaranteed, as some stains are permanent depending on fabric and stain type.",
      "We inspect garments upon receipt and note any existing damage or concerns.",
      "Special items (wedding dresses, leather, etc.) may require additional processing time.",
    ],
  },
  {
    title: "Pickup & Delivery",
    items: [
      "Garments are typically ready within 2-3 business days for standard service.",
      "Rush service is available for an additional fee when possible.",
      "Unclaimed items held over 30 days may be subject to storage fees.",
      "We'll notify you via your preferred contact method when items are ready.",
    ],
  },
  {
    title: "Payment",
    items: [
      "Payment is due at time of pickup.",
      "We accept cash, credit cards, and debit cards.",
      "Commercial accounts may qualify for invoicing arrangements.",
      "Pricing is determined by garment type and any special treatments needed.",
    ],
  },
  {
    title: "Liability",
    items: [
      "We take every precaution to protect your garments, but liability is limited.",
      "Claims must be made within 24 hours of pickup with original receipt.",
      "Maximum liability is typically 10x the cleaning cost or fair market value, whichever is less.",
      "We're not responsible for damage resulting from normal wear, manufacturing defects, or improper prior care.",
    ],
  },
  {
    title: "Customer Satisfaction",
    items: [
      "If you're not satisfied with our work, please let us know immediately.",
      "We'll re-clean items at no charge if the original service didn't meet expectations.",
      "Feedback helps us improve—we take all comments seriously.",
      "Our goal is to make every customer a repeat customer.",
    ],
  },
];

export default function PoliciesPage() {
  return (
    <>
      <PageHero
        title="Our Policies"
        description="We believe in transparency. Here are our policies on garment care, payment, and customer service."
        breadcrumb={[{ label: "Policies", href: "/policies/" }]}
      />

      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policies.map((policy) => (
              <Card key={policy.title}>
                <Heading as="h2" size="sm" className="mb-4">
                  {policy.title}
                </Heading>
                <ul className="space-y-3">
                  {policy.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted">
                      <svg className="w-5 h-5 text-heritage-blue shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="cream">
        <Container size="narrow">
          <div className="text-center">
            <Heading as="h2" size="md" className="mb-4">
              Questions About Our Policies?
            </Heading>
            <p className="text-muted">
              We're happy to explain any of our policies in more detail. Just ask our staff 
              at either location, or{" "}
              <a href="/contact-best-dry-cleaners/" className="text-heritage-blue hover:text-best-red">
                contact us
              </a>
              .
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
