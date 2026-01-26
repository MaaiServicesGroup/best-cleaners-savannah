import { Metadata } from "next";
import { GeoPageContent } from "@/components/sections/GeoPageContent";

export const metadata: Metadata = {
  title: "Dry Cleaners Midtown Savannah GA | Best Cleaners",
  description: "Professional dry cleaning in Midtown Savannah. Convenient locations, expert service, and over 110 years of trusted garment care for Midtown residents.",
};

const pageData = {
  title: "Dry Cleaners in Midtown Savannah, GA",
  neighborhood: "Midtown Savannah",
  pageType: "neighborhood" as const,
  description: "Quality dry cleaning services for Midtown Savannah. Whether you work in the medical district, shop at the mall, or call Midtown home, we're conveniently located to serve you.",
  heroImage: "/images/GeneratedPhotosBC/HomepageImage.jpeg",
  heroImageAlt: "Downtown Savannah cityscape",
  proximityStatement: "Our Abercorn Street location sits right in the heart of Midtown, making us incredibly convenient for anyone in this bustling area of Savannah.",
  content: [
    "Midtown Savannah is a hub of activity—home to Memorial Health, St. Joseph's Hospital, numerous medical offices, shopping centers, and thriving neighborhoods. Best Cleaners has been serving this dynamic area since long before it developed into the bustling district it is today.",
    "Healthcare professionals throughout Midtown trust us with their lab coats, scrubs, and professional attire. We understand the demands of the medical field and offer quick turnaround times to keep you looking professional. Many local practices have commercial accounts with us for their staff uniforms.",
    "The Midtown area is also home to busy families who appreciate our convenient location and reliable service. Whether you're picking up dry cleaning after a shopping trip or dropping off on your way to work, we make it easy to keep your wardrobe in top shape.",
    "Local businesses in Midtown—from restaurants to retail shops—rely on our commercial services. We offer volume pricing, scheduled pickups, and the consistent quality that helps your business maintain its professional image.",
  ],
  landmarks: [
    "Memorial Health University Medical Center",
    "St. Joseph's Hospital",
    "Oglethorpe Mall",
    "Abercorn Street Corridor",
    "Eisenhower Drive",
    "DeRenne Avenue",
  ],
  relatedAreas: [
    { name: "Near Ardsley Park", href: "/dry-cleaners-near-ardsley-park/" },
    { name: "Georgetown", href: "/dry-cleaners-georgetown-savannah-georgia/" },
    { name: "Pooler", href: "/dry-cleaners-near-pooler-georgia/" },
  ],
};

export default function MidtownPage() {
  return <GeoPageContent data={pageData} />;
}
