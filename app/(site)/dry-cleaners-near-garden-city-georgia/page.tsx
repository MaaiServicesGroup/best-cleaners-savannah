import { Metadata } from "next";
import { GeoPageContent } from "@/components/sections/GeoPageContent";

export const metadata: Metadata = {
  title: "Dry Cleaners Near Garden City Georgia | Best Cleaners",
  description: "Quality dry cleaning near Garden City, GA. Best Cleaners Savannah offers convenient access and expert garment care. Trusted since 1910.",
};

const pageData = {
  title: "Dry Cleaners Near Garden City, Georgia",
  neighborhood: "Garden City",
  pageType: "near-city" as const,
  description: "Professional dry cleaning services accessible from Garden City. Our Waters Avenue location is conveniently located for Garden City residents looking for quality garment care.",
  heroImage: "/images/GeneratedPhotosBC/HomepageImage.jpeg",
  heroImageAlt: "Gorgeous view of Savannah, Georgia",
  proximityStatement: "Garden City residents can reach our Waters Avenue location in about 10 minutes. We're right off the main routes into Savannah, making it easy to stop by on your way to work or errands.",
  content: [
    "Garden City residents who value quality dry cleaning don't have to settle for less. Best Cleaners on Waters Avenue is just a short drive away, offering the same exceptional service we've provided Savannah for over 110 years.",
    "Many Garden City families have been coming to us for years, appreciating the consistency and care we bring to every garment. Whether you need your work clothes pressed, special occasion attire cleaned, or household items freshened, we're here to help.",
    "The working families of Garden City have busy schedules, and we respect your time. We offer reliable turnaround times so you can plan accordingly, and our extended hours make pickup and dropoff convenient for most schedules.",
    "If you work in the Savannah or industrial areas near Garden City, our location makes us an easy stop on your daily commute. Quality dry cleaning doesn't have to be inconvenient—let us prove it to you.",
  ],
  landmarks: [
    "Garden City shopping",
    "Savannah-Hilton Head International Airport",
    "Industrial parks",
    "Dean Forest Road",
    "Highway 21",
    "Local schools",
  ],
  relatedAreas: [
    { name: "Pooler", href: "/dry-cleaners-near-pooler-georgia/" },
    { name: "Thunderbolt", href: "/dry-cleaners-near-thunderbolt-georgia/" },
    { name: "Historic District", href: "/dry-cleaners-historic-district-savannah/" },
  ],
};

export default function GardenCityPage() {
  return <GeoPageContent data={pageData} />;
}
