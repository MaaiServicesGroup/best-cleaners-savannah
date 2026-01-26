import { Metadata } from "next";
import { GeoPageContent } from "@/components/sections/GeoPageContent";

export const metadata: Metadata = {
  title: "Dry Cleaners Near Pooler Georgia | Best Cleaners Savannah",
  description: "Quality dry cleaning for Pooler, GA residents. Best Cleaners offers convenient Savannah locations accessible from Pooler. Trusted service since 1910.",
};

const pageData = {
  title: "Dry Cleaners Near Pooler, Georgia",
  neighborhood: "Pooler",
  pageType: "near-city" as const,
  description: "Looking for quality dry cleaning near Pooler? While we're based in Savannah, many Pooler residents make the short trip to Best Cleaners for our exceptional service and over a century of expertise.",
  heroImage: "/images/AreaImages/pooler.jpeg",
  heroImageAlt: "Beautiful Savannah, Georgia scenery",
  proximityStatement: "Pooler residents can easily reach our Waters Avenue location via I-16, typically just a 15-20 minute drive. Many customers stop by on their way to or from Savannah.",
  content: [
    "Pooler has grown tremendously over the years, but quality dry cleaning options can still be limited in newer communities. That's why many Pooler residents choose to make the short trip to Best Cleaners in Savannah, where they know they'll receive exceptional service backed by over 110 years of experience.",
    "Whether you work in Savannah and can stop by during your commute, or you're heading into town for shopping or entertainment, our Waters Avenue location is conveniently accessible from I-16. The drive is worth it for the quality and reliability we provide.",
    "Pooler families with busy schedules appreciate that we get things done right the first time. From professional attire to children's clothes to household items, you can trust us with your garments and not worry about making return trips for redo work.",
    "We also serve businesses in the Pooler area that need commercial dry cleaning. If you're looking for reliable service for staff uniforms, linens, or other business needs, we offer pickup and delivery options to make it even more convenient.",
  ],
  landmarks: [
    "Pooler shopping centers",
    "Godley Station",
    "I-16 corridor",
    "Savannah Airport",
    "Tanger Outlets",
    "Local restaurants",
  ],
  relatedAreas: [
    { name: "Garden City", href: "/dry-cleaners-near-garden-city-georgia/" },
    { name: "Midtown Savannah", href: "/dry-cleaners-midtown-savannah-ga/" },
    { name: "Georgetown", href: "/dry-cleaners-georgetown-savannah-georgia/" },
  ],
};

export default function PoolerPage() {
  return <GeoPageContent data={pageData} />;
}
