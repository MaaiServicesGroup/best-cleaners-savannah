import { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/Hero";
import { Container, Section } from "@/components/layout";
import { Heading, Card } from "@/components/ui";
import { EmploymentForm } from "@/components/forms/EmploymentForm";

export const metadata: Metadata = {
  title: "Careers at Best Cleaners | Employment Opportunities Savannah",
  description: "Join the Best Cleaners & Laundry team. We're looking for dedicated individuals who take pride in quality work. Apply today for dry cleaning jobs in Savannah.",
};

const benefits = [
  {
    title: "Competitive Pay",
    description: "We offer fair wages that reflect your skills and dedication to quality work.",
  },
  {
    title: "Flexible Scheduling",
    description: "We understand life happens. We work with our team to create schedules that fit.",
  },
  {
    title: "Growth Opportunities",
    description: "Many of our team members have built long careers with us, advancing into management roles.",
  },
  {
    title: "Family Atmosphere",
    description: "We're a family business that treats employees like family. Your wellbeing matters to us.",
  },
];

const positions = [
  {
    title: "Counter Service",
    description: "Be the face of Best Cleaners. Help customers, process orders, and ensure a positive experience.",
  },
  {
    title: "Presser / Finisher",
    description: "Master the art of garment finishing. Attention to detail is essential for this skilled position.",
  },
  {
    title: "Dry Cleaning Technician",
    description: "Work with our cleaning equipment and processes. Training provided for the right candidate.",
  },
  {
    title: "Delivery Driver",
    description: "Provide pickup and delivery service to our customers. Valid driver's license required.",
  },
];

export default function EmploymentPage() {
  return (
    <>
      <PageHero
        title="Join Our Team"
        description="For over 110 years, we've been building a team of dedicated professionals who take pride in their work. Ready to join us?"
        breadcrumb={[{ label: "Careers", href: "/dry-cleaning-employment/" }]}
      />

      {/* Staff Image */}
      <Section bg="white">
        <Container>
          <div className="relative aspect-[21/9] overflow-hidden border border-border">
            <Image
              src="/images/Staff.jpg"
              alt="The Best Cleaners team"
              fill
              className="object-cover"
            />
          </div>
        </Container>
      </Section>

      {/* Why Work Here */}
      <Section bg="cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading as="h2" className="mb-6">
                Why Work at Best Cleaners?
              </Heading>
              <div className="prose text-muted">
                <p>
                  We&apos;re not just a dry cleaning business—we&apos;re a Savannah institution that has 
                  served our community for over four generations. When you join our team, you become 
                  part of that legacy.
                </p>
                <p>
                  We believe in treating our employees with the same care and respect that we show 
                  our customers. Whether you&apos;re looking for your first job or building a career, 
                  we offer a supportive environment where you can grow.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="text-center p-6">
                  <h3 className="font-semibold text-charcoal mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Open Positions */}
      <Section bg="white">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" className="mb-4">
              Open Positions
            </Heading>
            <p className="text-muted max-w-2xl mx-auto">
              We&apos;re always looking for great people. Even if you don&apos;t see a specific opening 
              that matches your skills, we encourage you to apply.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {positions.map((position) => (
              <Card key={position.title}>
                <h3 className="font-display text-xl font-semibold text-charcoal mb-2">
                  {position.title}
                </h3>
                <p className="text-muted">{position.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Application Form */}
      <Section bg="cream">
        <Container size="narrow">
          <div className="text-center mb-12">
            <Heading as="h2" className="mb-4">
              Apply Now
            </Heading>
            <p className="text-muted">
              Fill out the form below and we&apos;ll be in touch. You can also stop by either 
              location to apply in person.
            </p>
          </div>

          <EmploymentForm formspreeId={process.env.NEXT_PUBLIC_FORMSPREE_EMPLOYMENT || "placeholder"} />
        </Container>
      </Section>
    </>
  );
}
