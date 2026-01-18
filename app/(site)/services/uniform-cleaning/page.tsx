import { Metadata } from "next";
import { PageHero } from "@/components/sections/Hero";
import { Container, Section } from "@/components/layout";
import { Heading, Card, Button } from "@/components/ui";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Uniform Cleaning Services | Best Cleaners Savannah",
  description: "Professional uniform cleaning in Savannah. Medical scrubs, restaurant uniforms, corporate attire cleaned with care. Volume discounts available since 1910.",
};

export default function UniformCleaningPage() {
  return (
    <>
      <PageHero
        title="Uniform Cleaning"
        description="Keep your work uniforms looking professional and fresh. We clean uniforms for individuals and businesses across Savannah."
        breadcrumb={[
          { label: "Services", href: "/best-cleaners-savannah-services/" },
          { label: "Uniform Cleaning", href: "/services/uniform-cleaning/" },
        ]}
      />

      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading as="h2" className="mb-6">
                Your Uniform Represents You
              </Heading>
              <div className="prose text-muted">
                <p>
                  Whether you're a healthcare professional in scrubs, a chef in whites, or 
                  a corporate employee in branded attire, your uniform is part of your 
                  professional image.
                </p>
                <p>
                  We understand that uniforms take a beating—stains, odors, and daily wear 
                  can make even the best uniforms look tired. Our cleaning process removes 
                  tough stains while being gentle enough for repeated cleaning.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6">
                <div className="text-3xl mb-2">🏥</div>
                <h3 className="font-semibold text-charcoal">Medical</h3>
                <p className="text-sm text-muted">Scrubs, lab coats</p>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl mb-2">🍽️</div>
                <h3 className="font-semibold text-charcoal">Restaurant</h3>
                <p className="text-sm text-muted">Chef coats, aprons</p>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl mb-2">🏢</div>
                <h3 className="font-semibold text-charcoal">Corporate</h3>
                <p className="text-sm text-muted">Branded uniforms</p>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl mb-2">💆</div>
                <h3 className="font-semibold text-charcoal">Salon/Spa</h3>
                <p className="text-sm text-muted">Tunics, smocks</p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="cream">
        <Container size="narrow">
          <div className="text-center">
            <Heading as="h2" size="md" className="mb-4">
              Need Commercial Uniform Service?
            </Heading>
            <p className="text-muted mb-8">
              For businesses with multiple employees, we offer volume discounts, scheduled 
              pickup and delivery, and dedicated account management.
            </p>
            <Button href="/commercial-dry-cleaning/">
              Commercial Services
            </Button>
          </div>
        </Container>
      </Section>

      <CTABanner
        title="Keep Your Team Looking Professional"
        description="Drop off your uniforms or inquire about commercial accounts."
        primaryCta={{
          text: "Contact Us",
          href: "/contact-best-dry-cleaners/",
        }}
        variant="default"
      />
    </>
  );
}
