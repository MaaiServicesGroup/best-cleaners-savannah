import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/Hero";
import { Container, Section } from "@/components/layout";
import { Heading } from "@/components/ui";
import { FAQSchema } from "@/components/seo";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Best Cleaners Savannah",
  description:
    "Find answers to common questions about dry cleaning, laundry services, turnaround times, and more at Best Cleaners & Laundry in Savannah.",
  openGraph: {
    title: "Frequently Asked Questions | Best Cleaners Savannah",
    description:
      "Find answers to common questions about dry cleaning, laundry services, turnaround times, and more at Best Cleaners & Laundry in Savannah.",
    type: "website",
  },
};

// FAQ data organized by category
const faqData = {
  general: {
    title: "General Process",
    faqs: [
      {
        question: "How does Best Cleaners work?",
        answer:
          "Our process is straightforward and designed for your convenience. When you drop off your items, we inspect each garment, check pockets, and note any stains or damage. Your items are then sorted, tagged, and cleaned using the appropriate method for the fabric. After cleaning, we carefully press and finish each piece before a final quality check. Your clean garments are packaged and ready for pickup, typically within 2-3 business days.",
      },
      {
        question: "What should I expect when dropping off my clothes?",
        answer:
          "When you arrive, our team will greet you and carefully inspect each garment. We check pockets for personal items, document any existing damage or wear, and identify stains that may need special treatment. Each item receives a unique tag so it stays with your order throughout the cleaning process. We'll let you know the estimated completion time and any special considerations for your garments.",
      },
      {
        question: "How long does cleaning usually take?",
        answer:
          "Standard service typically takes 2-3 business days. For those who need faster turnaround, we offer same-day service at our Waters Avenue location—drop off by 9am and pick up by 5pm. Rush service is also available for an additional fee when possible. Specialty items like wedding dresses or leather goods may require additional processing time.",
      },
    ],
  },
  garmentCare: {
    title: "Garment Care & Best Practices",
    faqs: [
      {
        question: "How should I prepare clothes for dry cleaning?",
        answer:
          "Before bringing your items in, check all pockets and remove personal belongings, tissues, and loose change. Point out any stains you're aware of—the more we know about what caused a stain, the better we can treat it. Remove detachable accessories like belts or decorative pins. If there's any damage you want us to know about, let us know at drop-off so we can document it.",
      },
      {
        question: "How do you care for delicate or specialty garments?",
        answer:
          "We use eco-friendly solvents and fabric-specific cleaning methods tailored to each garment's needs. Silk, cashmere, wool, and other delicate fabrics receive gentle treatment with temperature-controlled processes. Our finishing includes hand pressing and steaming where appropriate. For vintage garments, designer items, and heirloom pieces, we take extra care to preserve the integrity and appearance of the fabric.",
      },
      {
        question: "Do you offer button repair or minor fixes?",
        answer:
          "Yes, we include complimentary button inspection with every order. If we notice a loose or missing button, we'll secure or replace it as part of our standard service. For more extensive repairs or alterations, we can discuss options when you drop off your items.",
      },
    ],
  },
  services: {
    title: "Our Services",
    faqs: [
      {
        question: "What services do you offer?",
        answer:
          "We offer a full range of garment care services including professional dry cleaning for suits, dresses, and delicate fabrics; laundry and press for dress shirts and blouses; wash and fold for everyday items; uniform cleaning for businesses and organizations; wedding dress cleaning and museum-quality preservation; and household item cleaning for comforters, drapes, and linens. Visit our services page for detailed information on each offering.",
      },
      {
        question: "What is Laundry & Press?",
        answer:
          "Laundry & Press is our professional laundering service for items like dress shirts, blouses, and everyday garments that need a polished finish. We wash your items, then expertly press them for crisp collars, smooth cuffs, and a professional appearance. You can choose to have items returned on hangers or folded, and we offer starch preferences to match your style.",
      },
      {
        question: "Do you clean household items?",
        answer:
          "Yes, we clean a variety of household textiles including comforters and duvets, bedspreads and quilts, blankets and throws, pillows, drapes and curtains, table linens, small area rugs, and slipcovers. Regular cleaning of these items helps remove allergens, extend their life, and keep your home fresh. We recommend seasonal cleaning for bedding and annual cleaning for drapes.",
      },
    ],
  },
  turnaround: {
    title: "Pickup, Delivery & Turnaround",
    faqs: [
      {
        question: "Do you offer same-day service?",
        answer:
          "Yes, same-day service is available at our Waters Avenue location. Simply drop off your items by 9am and they'll be ready for pickup by 5pm the same day. This service is perfect for unexpected events or last-minute needs. Standard pricing applies for most items; some specialty items may not be eligible for same-day turnaround.",
      },
      {
        question: "Do you offer pickup and delivery?",
        answer:
          "We offer scheduled pickup and delivery for commercial accounts. If you're a business interested in this service, please contact us or fill out our commercial inquiry form to discuss your needs. For residential customers, we have two convenient Savannah locations—Waters Avenue and Abercorn Street—with ample parking and easy access.",
      },
      {
        question: "How does turnaround time work?",
        answer:
          "Our standard turnaround is 2-3 business days from drop-off. You'll receive notification when your items are ready. Rush service is available for an additional fee when our schedule permits. Wedding dresses, leather goods, and other specialty items may require longer processing times, which we'll communicate at drop-off. Unclaimed items held over 30 days may be subject to storage fees.",
      },
    ],
  },
  commercial: {
    title: "Commercial & Specialty",
    faqs: [
      {
        question: "Do you work with hotels, restaurants, or commercial accounts?",
        answer:
          "Yes, we've served Savannah businesses since 1910. We work with hotels, vacation rentals, and bed-and-breakfasts for linen services; restaurants and catering companies for tablecloths, napkins, and chef coats; medical facilities and spas for lab coats, scrubs, and towels; and corporate offices for uniform programs. We offer volume pricing, scheduled service, and flexible billing options.",
      },
      {
        question: "How do commercial laundry contracts work?",
        answer:
          "Commercial accounts typically operate on monthly service agreements with predictable billing and priority scheduling. We work with you to establish a pickup and delivery schedule that fits your operations. Volume discounts apply based on your regular order size. Each account receives dedicated support to ensure consistent quality and reliable turnaround. Contact us for a custom quote based on your specific needs.",
      },
      {
        question: "Do you clean uniforms or specialty garments?",
        answer:
          "We specialize in uniform cleaning for a variety of industries including medical scrubs, restaurant and hospitality uniforms, corporate attire, military dress uniforms, and school band uniforms. We also clean specialty garments like wedding dresses (with museum-quality preservation options), leather and suede items, vintage and designer pieces, and formal wear. Our expertise ensures each item receives the appropriate care.",
      },
    ],
  },
};

// Flatten FAQs for schema
const allFaqs = Object.values(faqData).flatMap((category) =>
  category.faqs.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }))
);

export default function FAQPage() {
  return (
    <>
      {/* FAQPage Schema for structured data */}
      <FAQSchema faqs={allFaqs} />

      <PageHero
        title="Frequently Asked Questions"
        description="Find answers to common questions about our dry cleaning and laundry services, turnaround times, garment care, and more."
        breadcrumb={[{ label: "FAQ", href: "/faq/" }]}
      />

      {/* FAQ Sections */}
      {Object.entries(faqData).map(([key, category], index) => (
        <Section key={key} bg={index % 2 === 0 ? "white" : "cream"}>
          <Container>
            <Heading as="h2" size="md" className="mb-8">
              {category.title}
            </Heading>

            <div className="space-y-6">
              {category.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group bg-clean-white border border-border rounded-lg overflow-hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-semibold text-charcoal hover:text-heritage-blue transition-colors">
                    <span className="pr-4">{faq.question}</span>
                    <svg
                      className="w-5 h-5 shrink-0 text-heritage-blue transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-muted leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </Container>
        </Section>
      ))}

      {/* Contact CTA */}
      <Section bg="charcoal">
        <Container size="narrow">
          <div className="text-center">
            <Heading as="h2" size="md" className="text-clean-white mb-4">
              Still Have Questions?
            </Heading>
            <p className="text-clean-white/80 mb-8">
              Our team is happy to help. Reach out and we&apos;ll get back to you
              promptly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-best-dry-cleaners/"
                className="btn-premium inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wide rounded-lg bg-clean-white hover:bg-warm-cream transition-all duration-200"
                style={{ color: '#2B2B2B' }}
              >
                Contact Us
              </Link>
              <Link
                href="/best-cleaners-savannah-locations/"
                className="btn-premium inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wide rounded-lg border border-clean-white/30 text-clean-white hover:bg-clean-white/10 transition-all duration-200"
              >
                Find a Location
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
