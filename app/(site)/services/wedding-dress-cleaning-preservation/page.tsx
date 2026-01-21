import { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/Hero";
import { Container, Section } from "@/components/layout";
import { Heading, Card } from "@/components/ui";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Wedding Dress Cleaning & Preservation | Best Cleaners Savannah",
  description: "Expert wedding dress cleaning and preservation in Savannah. Museum-quality preservation keeps your gown beautiful for generations. Trusted since 1910.",
};

export default function WeddingDressPage() {
  return (
    <>
      <PageHero
        title="Wedding Dress Cleaning & Preservation"
        description="Your wedding dress holds precious memories. Our expert preservation ensures it stays beautiful for generations to come."
        breadcrumb={[
          { label: "Services", href: "/best-cleaners-savannah-services/" },
          { label: "Wedding Dress", href: "/services/wedding-dress-cleaning-preservation/" },
        ]}
      />

      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading as="h2" className="mb-6">
                Preserving Your Most Special Garment
              </Heading>
              <div className="prose text-muted">
                <p>
                  Your wedding dress isn't just a garment—it's a keepsake that holds the memories 
                  of one of the most important days of your life. Whether you want to preserve it 
                  for a future daughter, as a family heirloom, or simply to keep the memories safe, 
                  proper preservation is essential.
                </p>
                <p>
                  At Best Cleaners, we've preserved thousands of wedding gowns over our 110+ year 
                  history. We understand the emotional significance of these garments and treat 
                  each one with the utmost care and respect.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden border border-border">
              <Image
                src="/images/collection-Best-Cleaners-zYxuPC2-xFU/wedding.jpg"
                alt="Beautiful wedding dress ready for preservation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="cream">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" className="mb-4">
              Our Preservation Process
            </Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <div className="w-12 h-12 mx-auto bg-heritage-blue text-clean-white rounded-full flex items-center justify-center font-bold mb-4">1</div>
              <h3 className="font-semibold text-charcoal mb-2">Inspection</h3>
              <p className="text-sm text-muted">
                We carefully inspect your gown, noting all stains, damage, and areas needing special attention.
              </p>
            </Card>
            <Card className="text-center">
              <div className="w-12 h-12 mx-auto bg-heritage-blue text-clean-white rounded-full flex items-center justify-center font-bold mb-4">2</div>
              <h3 className="font-semibold text-charcoal mb-2">Cleaning</h3>
              <p className="text-sm text-muted">
                Hand cleaning and spot treatment removes visible and invisible stains safely.
              </p>
            </Card>
            <Card className="text-center">
              <div className="w-12 h-12 mx-auto bg-heritage-blue text-clean-white rounded-full flex items-center justify-center font-bold mb-4">3</div>
              <h3 className="font-semibold text-charcoal mb-2">Pressing</h3>
              <p className="text-sm text-muted">
                Careful steaming and pressing restores your gown's original shape and beauty.
              </p>
            </Card>
            <Card className="text-center">
              <div className="w-12 h-12 mx-auto bg-heritage-blue text-clean-white rounded-full flex items-center justify-center font-bold mb-4">4</div>
              <h3 className="font-semibold text-charcoal mb-2">Preservation</h3>
              <p className="text-sm text-muted">
                Your gown is wrapped in acid-free materials and sealed in a museum-quality box.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Wedding Gallery */}
      <Section bg="white">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" className="mb-4">
              We Care for Your Special Day
            </Heading>
            <p className="text-muted max-w-2xl mx-auto">
              From wedding gowns to groomsmen attire, we help preserve the memories of your celebration.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square overflow-hidden border border-border">
              <Image
                src="/images/collection-Best-Cleaners-zYxuPC2-xFU/happy couple wedding.jpg"
                alt="Happy couple on their wedding day"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square overflow-hidden border border-border">
              <Image
                src="/images/collection-Best-Cleaners-zYxuPC2-xFU/tuxedo groomsman.jpg"
                alt="Groomsman in tuxedo"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square overflow-hidden border border-border">
              <Image
                src="/images/collection-Best-Cleaners-zYxuPC2-xFU/wedding venue.jpg"
                alt="Beautiful wedding venue"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square overflow-hidden border border-border">
              <Image
                src="/images/collection-Best-Cleaners-zYxuPC2-xFU/wedding table setting.jpg"
                alt="Elegant wedding table setting"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] overflow-hidden border border-border">
              <Image
                src="/images/collection-Best-Cleaners-zYxuPC2-xFU/wedding dress.jpg"
                alt="Beautiful wedding dress"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <Heading as="h2" size="md" className="mb-4">
                When to Bring Your Dress In
              </Heading>
              <p className="text-muted mb-4">
                The sooner you bring your wedding dress for preservation, the better. Stains—even 
                invisible ones like champagne or perspiration—can set over time and become impossible 
                to remove.
              </p>
              <p className="text-muted">
                We recommend bringing your dress within 4-6 weeks of your wedding for best results. 
                However, we can work with gowns at any stage—including vintage dresses that have been 
                stored for years.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <CTABanner
        title="Preserve Your Wedding Memories"
        description="Trust your wedding dress to Savannah's most experienced garment care professionals."
        primaryCta={{
          text: "Contact Us",
          href: "/contact-best-dry-cleaners/",
        }}
        variant="default"
      />
    </>
  );
}
