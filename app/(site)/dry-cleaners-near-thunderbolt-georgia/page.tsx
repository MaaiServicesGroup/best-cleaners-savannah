import { Metadata } from "next";
import { GeoPageContent } from "@/components/sections/GeoPageContent";

export const metadata: Metadata = {
  title: "Dry Cleaners Near Thunderbolt Georgia | Best Cleaners",
  description: "Professional dry cleaning near Thunderbolt, GA. Best Cleaners offers quality garment care accessible from the Thunderbolt area. Serving Savannah since 1910.",
};

const pageData = {
  title: "Dry Cleaners Near Thunderbolt, Georgia",
  neighborhood: "Thunderbolt",
  pageType: "near-city" as const,
  description: "Quality dry cleaning services for Thunderbolt residents. Our Waters Avenue location provides easy access for the Thunderbolt community with the quality and expertise Best Cleaners is known for.",
  proximityStatement: "Thunderbolt residents are just 5-10 minutes from our Waters Avenue location. Head down Victory Drive and you're practically at our door—making us one of the most convenient options for the Thunderbolt area.",
  content: [
    "Thunderbolt's maritime heritage and tight-knit community deserve a dry cleaner that understands small-town values backed by big-city expertise. Best Cleaners has been serving the greater Savannah area since 1910, and we're proud to count Thunderbolt families among our loyal customers.",
    "Whether you work on the water, in the Savannah business district, or anywhere in between, we can help keep your wardrobe in top condition. From professional attire to casual clothing, we treat every item with care and attention to detail.",
    "The Thunderbolt community values local businesses and personal relationships. When you come to Best Cleaners, you'll be greeted by name and treated like a neighbor—because that's what you are. We're not a faceless chain; we're a family business serving families.",
    "Living on the eastern edge of Savannah means you might have fewer options nearby, but the short drive to Waters Avenue is worth it for the quality we provide. Many Thunderbolt residents have made us their regular dry cleaner for decades.",
  ],
  landmarks: [
    "Thunderbolt Marina",
    "Bonaventure Cemetery",
    "Victory Drive",
    "Isle of Hope nearby",
    "Savannah State University",
    "Local seafood restaurants",
  ],
  relatedAreas: [
    { name: "Historic District", href: "/dry-cleaners-historic-district-savannah/" },
    { name: "Midtown", href: "/dry-cleaners-midtown-savannah-ga/" },
    { name: "Garden City", href: "/dry-cleaners-near-garden-city-georgia/" },
  ],
};

export default function ThunderboltPage() {
  return <GeoPageContent data={pageData} />;
}
