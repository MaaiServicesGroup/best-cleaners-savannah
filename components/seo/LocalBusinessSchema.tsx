interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  telephone?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
  };
}

export function LocalBusinessSchema({
  name = "Best Cleaners & Laundry",
  description = "Savannah's premier dry cleaning and laundry service since 1910. Expert garment care with over a century of trusted experience.",
  telephone = "(912) 354-1234",
  address = {
    streetAddress: "2011 E. Waters Avenue",
    addressLocality: "Savannah",
    addressRegion: "GA",
    postalCode: "31404",
  },
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "DryCleaningOrLaundry",
    name,
    description,
    url: "https://bestcleanerssavannah.com",
    telephone,
    foundingDate: "1910",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      ...address,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.0286,
      longitude: -81.0912,
    },
    areaServed: {
      "@type": "City",
      name: "Savannah",
      addressRegion: "GA",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "16:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/bestcleanerssavannah",
      "https://www.yelp.com/biz/best-cleaners-savannah",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
