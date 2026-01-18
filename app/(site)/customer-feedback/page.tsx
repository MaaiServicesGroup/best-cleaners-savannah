import { Metadata } from "next";
import { PageHero } from "@/components/sections/Hero";
import { Container, Section } from "@/components/layout";
import { Heading } from "@/components/ui";
import { FeedbackForm } from "@/components/forms/FeedbackForm";

export const metadata: Metadata = {
  title: "Customer Feedback | Best Cleaners Savannah",
  description: "Share your experience with Best Cleaners & Laundry. Your feedback helps us continue to improve and serve Savannah better.",
};

export default function CustomerFeedbackPage() {
  return (
    <>
      <PageHero
        title="Share Your Feedback"
        description="We value your opinion. Whether you had a great experience or think we can do better, we want to hear from you."
        breadcrumb={[{ label: "Customer Feedback", href: "/customer-feedback/" }]}
      />

      <Section bg="white">
        <Container size="narrow">
          <div className="text-center mb-12">
            <Heading as="h2" className="mb-4">
              How Did We Do?
            </Heading>
            <p className="text-muted">
              Your feedback is important to us. It helps us recognize what we&apos;re doing well 
              and identify areas where we can improve. Thank you for taking the time to share 
              your thoughts.
            </p>
          </div>

          <FeedbackForm formspreeId={process.env.NEXT_PUBLIC_FORMSPREE_FEEDBACK || "placeholder"} />
        </Container>
      </Section>
    </>
  );
}
