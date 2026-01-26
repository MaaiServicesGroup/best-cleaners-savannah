import { Metadata } from "next";
import { GeoPageContent } from "@/components/sections/GeoPageContent";

export const metadata: Metadata = {
  title: "Dry Cleaners Victorian District Savannah | Best Cleaners",
  description: "Quality dry cleaning for Victorian District Savannah residents. Expert garment care near Forsyth Park. Serving Savannah since 1910 with two convenient locations.",
};

const pageData = {
  title: "Dry Cleaners for Savannah's Victorian District",
  neighborhood: "Victorian District",
  pageType: "district" as const,
  description: "Expert dry cleaning and laundry services for the Victorian District neighborhood. From the tree-lined streets near Forsyth Park to the charming homes along Bull Street, we serve this beautiful area with pride.",
  heroImage: "/images/collection-Best-Cleaners-zYxuPC2-xFU/savannah street homes.jpg",
  heroImageAlt: "Beautiful Victorian homes in Savannah",
  proximityStatement: "The Victorian District is perfectly situated between our two locations. Our Waters Avenue store is just minutes north, while our Abercorn Street location offers easy access from the southern end of the neighborhood.",
  content: [
    "The Victorian District, with its stunning architecture and vibrant community, deserves dry cleaning services that match its character. Since 1910, Best Cleaners has been serving the families who call this neighborhood home, understanding that the area's mix of young professionals, established families, and longtime residents all have different garment care needs.",
    "Many Victorian District homes have been lovingly restored, and we see the same care reflected in how residents treat their wardrobes. Whether it's preserving vintage finds from the local shops or maintaining everyday business attire, we provide the attention to detail that Victorian District residents expect.",
    "The neighborhood's proximity to SCAD means we also serve many artists, designers, and students who appreciate quality fabric care. From delicate textiles used in art projects to professional clothing for gallery openings and presentations, we handle it all.",
    "For the restaurants and businesses along Bull Street and the surrounding areas, we offer commercial cleaning services with the reliability and quality you need. Your staff uniforms and table linens represent your establishment—let us help you make the right impression.",
  ],
  landmarks: [
    "Forsyth Park Fountain",
    "Bull Street Corridor",
    "SCAD Buildings",
    "Sentient Bean Coffee",
    "Starland Yard",
    "Foxy Loxy Café",
  ],
  relatedAreas: [
    { name: "Historic District", href: "/dry-cleaners-historic-district-savannah/" },
    { name: "Starland District", href: "/dry-cleaning-starland-district-savannah/" },
    { name: "Ardsley Park", href: "/dry-cleaners-ardsley-park-georgia/" },
  ],
};

export default function VictorianDistrictPage() {
  return <GeoPageContent data={pageData} />;
}
