import { Metadata } from "next";
import { GeoPageContent } from "@/components/sections/GeoPageContent";

export const metadata: Metadata = {
  title: "Dry Cleaners Near Ardsley Park | Best Cleaners Savannah",
  description: "Looking for dry cleaners near Ardsley Park? Best Cleaners offers convenient locations and expert service for the Ardsley Park area since 1910.",
};

const pageData = {
  title: "Dry Cleaners Near Ardsley Park",
  neighborhood: "Ardsley Park Area",
  pageType: "neighborhood" as const,
  description: "Searching for reliable dry cleaners near Ardsley Park? Best Cleaners has served this area of Savannah for over a century, providing convenient access and exceptional garment care.",
  heroImage: "/images/collection-Best-Cleaners-zYxuPC2-xFU/savannah historic.jpg",
  heroImageAlt: "Historic Savannah neighborhood",
  proximityStatement: "Whether you're on the north side of Ardsley Park near Victory Drive or the south side toward DeRenne Avenue, both of our locations are easily accessible within 10-15 minutes.",
  content: [
    "If you live near Ardsley Park and need quality dry cleaning, you don't have to look far. Best Cleaners has been a trusted name in Savannah since 1910, and our two locations make it convenient for residents throughout the Ardsley Park area to access our services.",
    "The neighborhoods surrounding Ardsley Park—including areas along Victory Drive, Washington Avenue, and toward Habersham Village—are all within easy reach of our Waters Avenue and Abercorn Street locations. Many customers stop by on their daily commute or while running errands in the area.",
    "We understand that convenience matters as much as quality. That's why we offer same-week service for most items, with rush service available when you need it. Our extended hours make it easy to drop off and pick up on your schedule.",
    "For busy families and professionals in the Ardsley Park area, we also offer seasonal services like comforter cleaning in the fall and spring, wedding dress preservation, and volume discounts for households with larger cleaning needs.",
  ],
  landmarks: [
    "Habersham Village Shopping",
    "Victory Drive",
    "Bull Street",
    "DeRenne Avenue",
    "Daffin Park",
    "Savannah Mall Area",
  ],
  relatedAreas: [
    { name: "Ardsley Park", href: "/dry-cleaners-ardsley-park-georgia/" },
    { name: "Midtown", href: "/dry-cleaners-midtown-savannah-ga/" },
    { name: "Georgetown", href: "/dry-cleaners-georgetown-savannah-georgia/" },
  ],
};

export default function NearArdsleyParkPage() {
  return <GeoPageContent data={pageData} />;
}
