import { Metadata } from "next";
import { GeoPageContent } from "@/components/sections/GeoPageContent";

export const metadata: Metadata = {
  title: "Dry Cleaning Near Forsyth Park Savannah | Best Cleaners",
  description: "Looking for dry cleaning near Forsyth Park? Best Cleaners offers convenient service for the Forsyth Park area with expert garment care since 1910.",
};

const pageData = {
  title: "Dry Cleaning Near Forsyth Park Savannah",
  neighborhood: "Forsyth Park Area",
  pageType: "neighborhood" as const,
  description: "Convenient dry cleaning services for residents and workers near iconic Forsyth Park. From the elegant homes surrounding the park to the businesses along Bull Street, we serve the entire area.",
  heroImage: "/images/AreaImages/Near Forsyth Park.jpeg",
  heroImageAlt: "Iconic Forsyth Park Fountain in Savannah",
  proximityStatement: "The Forsyth Park area is easily accessible from both of our locations. Head north on Bull Street to reach our Waters Avenue store, or south on Abercorn for our second location—both just minutes away.",
  content: [
    "Forsyth Park is the heart of historic Savannah—a gathering place for joggers, families, tourists, and locals alike. The neighborhoods surrounding the park are among the city's most desirable, home to beautiful historic properties and a community that appreciates quality in all things.",
    "Living near Forsyth Park often means hosting guests, attending social events, and maintaining a wardrobe that reflects the area's elegance. Best Cleaners helps residents look their best, whether it's preparing for a garden party in the park or ensuring everyday attire is impeccable.",
    "Many Forsyth Park area residents work in the nearby business districts and need reliable garment care they can count on. We offer consistent quality and turnaround times that fit busy professional schedules. Drop off in the morning, pick up after your afternoon walk in the park.",
    "We also serve the many inns, bed and breakfasts, and vacation rentals in the area. If you manage property near Forsyth Park and need linens, towels, or other items professionally cleaned, we offer commercial services designed for hospitality businesses.",
  ],
  landmarks: [
    "Forsyth Park Fountain",
    "Fragrant Garden",
    "Confederate Monument",
    "Bull Street Corridor",
    "Whitefield Square",
    "Monterey Square",
  ],
  relatedAreas: [
    { name: "Historic District", href: "/dry-cleaners-historic-district-savannah/" },
    { name: "Victorian District", href: "/dry-cleaners-victorian-district-savannah/" },
    { name: "Starland District", href: "/dry-cleaning-starland-district-savannah/" },
  ],
};

export default function NearForsythParkPage() {
  return <GeoPageContent data={pageData} />;
}
