import { Metadata } from "next";
import { PageHero } from "@/components/sections/Hero";
import { Container, Section } from "@/components/layout";
import { Heading, Card } from "@/components/ui";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Best Cleaners Savannah",
  description: "Contact Best Cleaners & Laundry in Savannah. Call us, visit our locations, or send a message. We're here to help with your dry cleaning and laundry needs.",
};

const locations = [
  {
    name: "Waters Avenue",
    address: "1002 Waters Ave, Savannah, GA 31404",
    phone: "(912) 232-1171",
    hours: "Mon-Fri: 7am-6:30pm, Sat: 9am-2pm",
  },
  {
    name: "Abercorn Street",
    address: "11434 Abercorn St. STE B, Savannah, GA 31419",
    phone: "(912) 335-8811",
    hours: "Mon-Fri: 7:30am-6pm, Sat: 9am-2pm",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="Have questions? We'd love to hear from you. Reach out by phone, visit us in person, or send us a message."
        breadcrumb={[{ label: "Contact", href: "/contact-best-dry-cleaners/" }]}
      />

      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Heading as="h2" size="sm" className="mb-6">
                Send Us a Message
              </Heading>
              <ContactForm formspreeId={process.env.NEXT_PUBLIC_FORMSPREE_CONTACT || "placeholder"} />
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <Card hover={false}>
                <h3 className="font-display text-lg font-semibold text-charcoal mb-4">
                  Our Locations
                </h3>
                <div className="space-y-6">
                  {locations.map((loc) => (
                    <div key={loc.name} className="pb-4 border-b border-border last:border-0 last:pb-0">
                      <h4 className="font-semibold text-charcoal">{loc.name}</h4>
                      <p className="text-sm text-muted mt-1">{loc.address}</p>
                      <a
                        href={`tel:${loc.phone.replace(/\D/g, "")}`}
                        className="block text-sm text-heritage-blue hover:text-best-red mt-1"
                      >
                        {loc.phone}
                      </a>
                      <p className="text-sm text-muted mt-1">{loc.hours}</p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card hover={false}>
                <h3 className="font-display text-lg font-semibold text-charcoal mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/best-cleaners-savannah-services/" className="text-heritage-blue hover:text-best-red text-sm">
                      View Our Services
                    </a>
                  </li>
                  <li>
                    <a href="/best-cleaners-savannah-locations/" className="text-heritage-blue hover:text-best-red text-sm">
                      Get Directions
                    </a>
                  </li>
                  <li>
                    <a href="/request-pickup-delivery/" className="text-heritage-blue hover:text-best-red text-sm">
                      Request Pickup & Delivery
                    </a>
                  </li>
                  <li>
                    <a href="/commercial-dry-cleaning/" className="text-heritage-blue hover:text-best-red text-sm">
                      Commercial Services
                    </a>
                  </li>
                </ul>
              </Card>

              <Card hover={false} className="bg-warm-cream">
                <h3 className="font-display text-lg font-semibold text-charcoal mb-2">
                  Looking for Employment?
                </h3>
                <p className="text-sm text-muted mb-4">
                  We&apos;re always looking for dedicated team members to join our family.
                </p>
                <a
                  href="/dry-cleaning-employment/"
                  className="text-sm font-semibold text-heritage-blue hover:text-best-red"
                >
                  View Open Positions →
                </a>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
