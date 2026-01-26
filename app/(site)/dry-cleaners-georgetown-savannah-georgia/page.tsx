import { Metadata } from "next";
import { GeoPageContent } from "@/components/sections/GeoPageContent";

export const metadata: Metadata = {
  title: "Dry Cleaners Georgetown Savannah Georgia | Best Cleaners",
  description: "Trusted dry cleaning for Georgetown Savannah residents. Convenient location on Abercorn Street. Quality garment care from Savannah's trusted cleaner since 1910.",
};

const pageData = {
  title: "Dry Cleaners Serving Georgetown, Savannah",
  neighborhood: "Georgetown",
  pageType: "neighborhood" as const,
  description: "Professional dry cleaning services for the Georgetown community. Our Abercorn Street location puts us right in your neighborhood, making quality garment care convenient.",
  heroImage: "/images/AreaImages/Georgetown.jpeg",
  heroImageAlt: "Beautiful tree-lined streets of Savannah",
  proximityStatement: "Georgetown residents are just minutes from our Abercorn Street location. We're right on your way to and from the neighborhood, making it easy to fit dry cleaning into your routine.",
  content: [
    "Georgetown is a wonderful Savannah neighborhood that combines suburban comfort with city convenience. The community's tree-lined streets, quality schools, and active neighborhood association make it a great place to raise a family or enjoy retirement. Best Cleaners is proud to be a trusted service provider for Georgetown families.",
    "Many Georgetown residents are busy professionals who commute to downtown Savannah or the surrounding business areas. Our location on Abercorn Street makes it easy to drop off dry cleaning on your way to work and pick up on your way home. We're here to make your life a little easier.",
    "Families in Georgetown appreciate our care for children's clothing, from school uniforms to sports gear to special occasion outfits. We understand that kids are hard on clothes, and we work to extend the life of garments that might otherwise need replacing.",
    "Whether you're preparing for a neighborhood gathering, keeping up with your professional wardrobe, or just need reliable laundry service, Georgetown residents can count on Best Cleaners. We've been serving this area for years and look forward to continuing that relationship.",
  ],
  landmarks: [
    "Georgetown Shopping Center",
    "Local schools",
    "Savannah Country Day",
    "Windsor Forest area",
    "Abercorn corridor",
    "Nearby parks",
  ],
  relatedAreas: [
    { name: "Midtown", href: "/dry-cleaners-midtown-savannah-ga/" },
    { name: "Near Ardsley Park", href: "/dry-cleaners-near-ardsley-park/" },
    { name: "Pooler", href: "/dry-cleaners-near-pooler-georgia/" },
  ],
};

export default function GeorgetownPage() {
  return <GeoPageContent data={pageData} />;
}
