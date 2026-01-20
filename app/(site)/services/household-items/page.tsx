import { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/Hero";
import { Container, Section } from "@/components/layout";
import { Heading, Card } from "@/components/ui";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Household Items Cleaning | Best Cleaners Savannah",
  description: "Professional cleaning for comforters, drapes, linens, and more in Savannah. Refresh your home textiles with expert care since 1910.",
};

const items = [
  "Comforters & Duvets",
  "Bedspreads & Quilts",
  "Blankets & Throws",
  "Pillows",
  "Drapes & Curtains",
  "Table Linens",
  "Area Rugs (small)",
  "Slipcovers",
];

export default function HouseholdItemsPage() {
  return (
    <>
      <PageHero
        title="Household Items Cleaning"
        description="From comforters to curtains, we clean the textiles that make your house a home."
        breadcrumb={[
          { label: "Services", href: "/best-cleaners-savannah-services/" },
          { label: "Household Items", href: "/services/household-items/" },
        ]}
      />

      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading as="h2" className="mb-6">
                Refresh Your Home
              </Heading>
              <div className="prose text-muted">
                <p>
                  Your home's textiles collect dust, allergens, and odors over time. Regular 
                  professional cleaning keeps them fresh, extends their life, and contributes 
                  to a healthier living environment.
                </p>
                <p>
                  Many household items are too large or delicate for home washing machines. 
                  Our equipment can handle king-size comforters, heavy drapes, and delicate 
                  antique linens with equal care.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden border border-border">
              <Image
                src="/images/collection-Best-Cleaners-zYxuPC2-xFU/spring cleaning blankets.jpg"
                alt="Fresh clean blankets and comforters"
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
          <div className="text-center mb-12">
            <Heading as="h2" className="mb-4">
              What We Clean
            </Heading>
          </div>
          <div className="max-w-3xl mx-auto bg-clean-white border border-border p-8">
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-charcoal">
                  <svg className="w-4 h-4 text-heritage-blue shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <h3 className="font-display text-xl font-semibold text-charcoal mb-3">
                Seasonal Cleaning
              </h3>
              <p className="text-muted">
                Spring and fall are perfect times to clean comforters, blankets, and drapes. 
                Start each season fresh.
              </p>
            </Card>
            <Card>
              <h3 className="font-display text-xl font-semibold text-charcoal mb-3">
                Allergen Removal
              </h3>
              <p className="text-muted">
                Professional cleaning removes dust mites, pet dander, and other allergens 
                that accumulate in household textiles.
              </p>
            </Card>
            <Card>
              <h3 className="font-display text-xl font-semibold text-charcoal mb-3">
                Heirloom Care
              </h3>
              <p className="text-muted">
                Antique quilts, vintage linens, and heirloom textiles require special care. 
                We have the expertise to clean them safely.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <CTABanner
        title="Time to Freshen Up Your Home?"
        description="Bring in your household items for professional cleaning."
        primaryCta={{
          text: "Find a Location",
          href: "/best-cleaners-savannah-locations/",
        }}
        variant="default"
      />
    </>
  );
}
