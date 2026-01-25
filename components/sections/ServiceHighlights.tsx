import { Container, Section } from "@/components/layout";

const serviceHighlights = [
  {
    label: "Same-Day Service",
    tagline: "In by 9, out by 5",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "Laundry & Press",
    tagline: "Expert finishing",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    label: "Button Repair",
    tagline: "Complimentary",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export function ServiceHighlights() {
  return (
    <Section bg="cream">
      <Container>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 py-4">
          {serviceHighlights.map((highlight) => (
            <div
              key={highlight.label}
              className="flex items-center gap-3 text-charcoal"
            >
              <span className="text-heritage-blue">{highlight.icon}</span>
              <div className="flex flex-col">
                <span className="font-semibold text-sm">{highlight.label}</span>
                <span className="text-xs text-muted">{highlight.tagline}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
