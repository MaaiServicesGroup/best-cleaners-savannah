import { Metadata } from "next";
import { GeoPageContent } from "@/components/sections/GeoPageContent";

export const metadata: Metadata = {
  title: "Dry Cleaning Starland District Savannah | Best Cleaners",
  description: "Professional dry cleaning for Starland District Savannah. Serving artists, professionals, and residents with quality garment care since 1910.",
};

const pageData = {
  title: "Dry Cleaning for Savannah's Starland District",
  neighborhood: "Starland District",
  pageType: "district" as const,
  description: "Expert dry cleaning services for the vibrant Starland District. We understand the creative community's unique needs and provide quality care for everything from vintage finds to professional attire.",
  heroImage: "/images/AreaImages/StarlandDistrict.jpeg",
  heroImageAlt: "Beautiful Savannah street with Spanish moss",
  proximityStatement: "The Starland District is conveniently located between our two stores. Our Waters Avenue location is just north, while Abercorn Street is a quick drive south—perfect for stopping by during your Starland adventures.",
  content: [
    "The Starland District has transformed into one of Savannah's most exciting neighborhoods, blending artistic energy with local businesses and a strong residential community. Best Cleaners is proud to serve this creative hub with the same quality we've provided Savannah for over a century.",
    "We know the Starland community values authenticity and craftsmanship. That's exactly what we bring to dry cleaning. Whether you've found a vintage treasure at one of the local shops or need to maintain your professional wardrobe, we treat every garment with the respect it deserves.",
    "Many Starland residents are young professionals and artists who appreciate both quality and value. We offer competitive pricing without cutting corners on care. From delicate textiles to everyday items, we provide the same meticulous service to everyone who walks through our doors.",
    "The local businesses that make Starland special—the restaurants, boutiques, and galleries—also benefit from our commercial services. We help maintain the professional image that makes Starland a destination while keeping things affordable for small business budgets.",
  ],
  landmarks: [
    "Starland Yard",
    "Two Tides Brewing",
    "Bull Street Labs",
    "The Florence",
    "Foxy Loxy Print Gallery",
    "Local vintage shops",
  ],
  relatedAreas: [
    { name: "Victorian District", href: "/dry-cleaners-victorian-district-savannah/" },
    { name: "Historic District", href: "/dry-cleaners-historic-district-savannah/" },
    { name: "Ardsley Park", href: "/dry-cleaners-ardsley-park-georgia/" },
  ],
};

export default function StarlandDistrictPage() {
  return <GeoPageContent data={pageData} />;
}
