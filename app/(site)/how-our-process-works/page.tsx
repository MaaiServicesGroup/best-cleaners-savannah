import { Metadata } from "next";
import { PageHero } from "@/components/sections/Hero";
import { Container, Section } from "@/components/layout";
import { Heading, Card, Button } from "@/components/ui";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "How Our Process Works | Best Cleaners Savannah",
  description: "Learn how Best Cleaners & Laundry handles your garments. From inspection to finishing, see our professional dry cleaning process.",
};

const steps = [
  {
    number: "01",
    title: "Drop Off & Inspection",
    description: "When you bring your garments in, our staff carefully inspects each item. We note any stains, damage, or special care requirements, and discuss your preferences and concerns.",
    details: [
      "Every pocket checked and emptied",
      "Existing damage documented",
      "Stains identified and discussed",
      "Special instructions recorded",
    ],
  },
  {
    number: "02",
    title: "Sorting & Tagging",
    description: "Items are sorted by cleaning method, color, and fabric type. Each piece receives a unique tag that stays with it through the entire process, ensuring nothing gets lost or mixed up.",
    details: [
      "Unique identification tag assigned",
      "Grouped by cleaning method",
      "Separated by color/fabric",
      "Special items flagged",
    ],
  },
  {
    number: "03",
    title: "Pre-Treatment",
    description: "Before cleaning, our technicians treat specific stains with appropriate solutions. Different stains require different approaches—oil-based stains, protein stains, and tannin stains all get specialized treatment.",
    details: [
      "Stain type identified",
      "Appropriate solution selected",
      "Spot treatment applied",
      "Delicate areas protected",
    ],
  },
  {
    number: "04",
    title: "Cleaning",
    description: "Garments are cleaned using the appropriate method—dry cleaning solvent for delicates, professional laundering for washable items. Our modern equipment and eco-friendly solutions provide thorough cleaning while protecting fabrics.",
    details: [
      "Method matched to fabric",
      "Eco-friendly solvents used",
      "Temperature controlled",
      "Gentle agitation for delicates",
    ],
  },
  {
    number: "05",
    title: "Finishing",
    description: "This is where craftsmanship really matters. Our skilled pressers use professional equipment to restore each garment's shape and appearance. Every collar, cuff, pleat, and seam receives individual attention.",
    details: [
      "Professional steam pressing",
      "Hand finishing where needed",
      "Buttons checked and tightened",
      "Minor repairs if needed",
    ],
  },
  {
    number: "06",
    title: "Quality Check",
    description: "Before packaging, every item goes through a final inspection. We check that stains are removed, pressing is perfect, and the garment meets our standards—and yours.",
    details: [
      "Stain removal verified",
      "Pressing inspected",
      "Overall appearance checked",
      "Ready for packaging",
    ],
  },
  {
    number: "07",
    title: "Packaging & Ready",
    description: "Clean items are carefully packaged—on hangers with protective bags, or folded and wrapped—and organized for easy pickup. You'll receive notification when your order is ready.",
    details: [
      "Protective packaging",
      "Organized by customer",
      "Pickup notification sent",
      "Items held for your convenience",
    ],
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        title="How Our Process Works"
        description="Transparency matters. Here's exactly what happens to your garments from the moment you drop them off until you pick them up."
        breadcrumb={[{ label: "Our Process", href: "/how-our-process-works/" }]}
      />

      <Section bg="white">
        <Container>
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.number} className={`grid grid-cols-1 lg:grid-cols-12 gap-8 ${index !== steps.length - 1 ? "pb-12 border-b border-border" : ""}`}>
                <div className="lg:col-span-2">
                  <span className="font-display text-5xl font-bold text-heritage-blue/20">
                    {step.number}
                  </span>
                </div>
                <div className="lg:col-span-5">
                  <Heading as="h2" size="sm" className="mb-4">
                    {step.title}
                  </Heading>
                  <p className="text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-3 text-charcoal">
                        <svg className="w-5 h-5 text-heritage-blue shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="cream">
        <Container size="narrow">
          <div className="text-center">
            <Heading as="h2" size="md" className="mb-4">
              Questions About Our Process?
            </Heading>
            <p className="text-muted mb-8">
              We're always happy to explain our methods or discuss special requirements. 
              Just ask when you drop off, or contact us anytime.
            </p>
            <Button href="/contact-best-dry-cleaners/" variant="secondary">
              Contact Us
            </Button>
          </div>
        </Container>
      </Section>

      <CTABanner
        title="Ready to See Our Process in Action?"
        description="Drop off your garments at either of our Savannah locations."
        primaryCta={{
          text: "Find a Location",
          href: "/best-cleaners-savannah-locations/",
        }}
        variant="default"
      />
    </>
  );
}
