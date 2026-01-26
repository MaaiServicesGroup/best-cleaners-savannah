import { Metadata } from "next";
import Image from "next/image";
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
            <div className="relative aspect-[4/3] overflow-hidden border border-border">
              <Image
                src="/images/GeneratedPhotosBC/CorporateUniforms.jpeg"
                alt="Professional uniform shirts cleaned and pressed"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Industries We Serve */}
      <Section bg="cream">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" className="mb-4">
              Industries We Serve
            </Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-clean-white border border-border overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/GeneratedPhotosBC/Chefcoatuniform.jpeg"
                  alt="Restaurant uniforms"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-charcoal">Restaurant</h3>
                <p className="text-sm text-muted">Chef coats, aprons</p>
              </div>
            </div>
            <div className="bg-clean-white border border-border overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/GeneratedPhotosBC/MilitaryUniform.jpeg"
                  alt="Military uniforms"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-charcoal">Military</h3>
                <p className="text-sm text-muted">Dress uniforms, BDUs</p>
              </div>
            </div>
            <div className="bg-clean-white border border-border overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/GeneratedPhotosBC/BandUniforms.jpeg"
                  alt="School band uniforms"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-charcoal">School Bands</h3>
                <p className="text-sm text-muted">Band uniforms, capes</p>
              </div>
            </div>
            <div className="bg-clean-white border border-border overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/GeneratedPhotosBC/ProfessionalWorkuniform.jpeg"
                  alt="Corporate uniforms"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-charcoal">Corporate</h3>
                <p className="text-sm text-muted">Branded uniforms</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="white">
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
