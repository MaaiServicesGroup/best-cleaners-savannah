import { Metadata } from "next";
import { GeoPageContent } from "@/components/sections/GeoPageContent";

export const metadata: Metadata = {
  title: "Dry Cleaners Historic District Savannah | Best Cleaners Since 1910",
  description: "Professional dry cleaning near Savannah's Historic District. Trusted garment care for residents and businesses in downtown Savannah. Two convenient locations.",
};

const pageData = {
  title: "Dry Cleaners Serving Savannah's Historic District",
  neighborhood: "Historic District",
  pageType: "district" as const,
  description: "Professional dry cleaning and laundry services for residents, businesses, and visitors in Savannah's beloved Historic District. We've been caring for fine garments in this area since we first opened our doors in 1910.",
  proximityStatement: "Our Waters Avenue location is just a short drive from the Historic District, making it easy to drop off your garments on your way to work or during lunch. We're also accessible via Abercorn Street from the southern parts of downtown.",
  content: [
    "The Historic District is the heart of Savannah, where elegant architecture meets Southern charm. Whether you're a resident maintaining a professional wardrobe, a business owner with staff uniforms, or an innkeeper with guest linens, Best Cleaners understands the unique needs of this historic neighborhood.",
    "Many of our Historic District customers have been with us for decades—some for generations. We've cleaned everything from period costumes for historic tours to wedding gowns destined for ceremonies in the city's famous squares. We understand that garments in this area often have historical or sentimental significance, and we treat each piece accordingly.",
    "Living or working in the Historic District means maintaining a certain standard. Whether it's a lawyer's suit on Bull Street, a restaurant's table linens, or the uniforms at one of the area's boutique hotels, we deliver the quality that matches the district's elegance.",
    "We also serve the many bed and breakfasts and small inns in the Historic District. Our commercial services include pickup and delivery for businesses that need reliable, high-volume cleaning without sacrificing quality.",
  ],
  landmarks: [
    "Forsyth Park",
    "River Street",
    "City Market",
    "Savannah College of Art and Design",
    "Cathedral of St. John the Baptist",
    "Chippewa Square",
  ],
  relatedAreas: [
    { name: "Victorian District", href: "/dry-cleaners-victorian-district-savannah/" },
    { name: "Near Forsyth Park", href: "/dry-cleaning-near-forsyth-park-savannah/" },
    { name: "Starland District", href: "/dry-cleaning-starland-district-savannah/" },
  ],
};

export default function HistoricDistrictPage() {
  return <GeoPageContent data={pageData} />;
}
