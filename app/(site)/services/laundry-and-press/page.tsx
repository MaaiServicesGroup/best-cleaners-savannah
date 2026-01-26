import { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/Hero";
import { Container, Section } from "@/components/layout";
import { Heading, Card, Button } from "@/components/ui";
import { CTABanner } from "@/components/sections/CTABanner";
import { SameDayBanner } from "@/components/sections/SameDayBanner";

export const metadata: Metadata = {
  title: "Laundry & Press Services | Best Cleaners Savannah",
  description: "Professional shirt laundering and pressing in Savannah. Crisp, polished results for dress shirts and blouses. Two convenient locations since 1910.",
};

export default function LaundryAndPressPage() {
  return (
    <>
      <PageHero
        title="Laundry & Press"
        description="Crisp, professionally laundered and pressed shirts that make the right impression every time you wear them."
        breadcrumb={[
          { label: "Services", href: "/best-cleaners-savannah-services/" },
          { label: "Laundry & Press", href: "/services/laundry-and-press/" },
        ]}
      />

      {/* Same-Day Service Banner */}
      <SameDayBanner variant="light" />

      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading as="h2" className="mb-6">
                More Than Just Clean
              </Heading>
              <div className="prose text-muted">
                <p>
                  Anyone can wash a shirt. The difference is in the finishing. Our professional 
                  laundering process removes soil and stains effectively, but it's our expert 
                  pressing that makes your shirts look truly polished.
                </p>
                <p>
                  From button-down dress shirts to delicate blouses, we handle each garment 
                  with care, paying attention to collars, cuffs, and plackets that can make 
                  or break a shirt's appearance.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden border border-border">
              <Image
                src="/images/GeneratedPhotosBC/WhitePressedShirtImage.jpeg"
                alt="Professionally laundered and pressed shirts on a rack"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="cream">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-clean-white border border-border overflow-hidden">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/GeneratedPhotosBC/CrispWhiteShirt.jpeg"
                  alt="Close-up of professionally pressed shirt details"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-charcoal mb-3">
                  For Professionals
                </h3>
                <p className="text-muted mb-4">
                  When your job requires you to look polished every day, you need shirts you 
                  can count on. Our consistent quality means one less thing to worry about.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-charcoal">
                    <svg className="w-4 h-4 text-heritage-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Crisp collar points
                  </li>
                  <li className="flex items-center gap-2 text-charcoal">
                    <svg className="w-4 h-4 text-heritage-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Clean, pressed cuffs
                  </li>
                  <li className="flex items-center gap-2 text-charcoal">
                    <svg className="w-4 h-4 text-heritage-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Button inspection included
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-clean-white border border-border overflow-hidden">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/GeneratedPhotosBC/ExpertPressing.jpeg"
                  alt="Expert shirt pressing"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-charcoal mb-3">
                  Finishing Options
                </h3>
                <p className="text-muted mb-4">
                  We offer your shirts the way you want them—on hangers or folded, 
                  with light, medium, or heavy starch.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-charcoal">
                    <svg className="w-4 h-4 text-heritage-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Hangers or folded
                  </li>
                  <li className="flex items-center gap-2 text-charcoal">
                    <svg className="w-4 h-4 text-heritage-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Starch preferences
                  </li>
                  <li className="flex items-center gap-2 text-charcoal">
                    <svg className="w-4 h-4 text-heritage-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Special requests honored
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTABanner
        title="Try Our Laundry & Press Service"
        description="Drop off your shirts and see the difference professional finishing makes."
        primaryCta={{
          text: "Find a Location",
          href: "/best-cleaners-savannah-locations/",
        }}
        variant="default"
      />
    </>
  );
}
