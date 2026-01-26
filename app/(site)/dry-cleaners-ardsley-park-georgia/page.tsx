import { Metadata } from "next";
import { GeoPageContent } from "@/components/sections/GeoPageContent";

export const metadata: Metadata = {
  title: "Dry Cleaners Ardsley Park Georgia | Best Cleaners Savannah",
  description: "Premium dry cleaning for Ardsley Park residents. Trusted by Savannah families since 1910. Expert care for fine garments, wedding dresses, and household items.",
};

const pageData = {
  title: "Dry Cleaners Serving Ardsley Park, Georgia",
  neighborhood: "Ardsley Park",
  pageType: "neighborhood" as const,
  description: "Dedicated dry cleaning services for the Ardsley Park neighborhood. Known for its beautiful homes and tree-canopied streets, Ardsley Park deserves garment care that matches its elegance.",
  heroImage: "/images/AreaImages/ArdsleyPark.jpeg",
  heroImageAlt: "Beautiful park in Savannah with tree-lined paths",
  proximityStatement: "Ardsley Park residents enjoy quick access to both of our locations. Our Abercorn Street store is particularly convenient, located just minutes south along the Abercorn corridor.",
  content: [
    "Ardsley Park is one of Savannah's most sought-after neighborhoods, and for good reason. The stately homes, manicured gardens, and strong sense of community make it a wonderful place to live. Best Cleaners has been serving Ardsley Park since 1910, and we understand the neighborhood's appreciation for quality.",
    "Many Ardsley Park residents lead busy professional lives while maintaining beautiful homes and active social calendars. We help make that easier by providing reliable, high-quality garment care. From your everyday work wardrobe to special occasion attire, we treat every piece with the care it deserves.",
    "The neighborhood's many families appreciate our attention to children's clothing as well. School uniforms, sports attire, and those special outfits for holidays and events—we handle it all. And when it's time for that first communion dress or graduation suit, you can trust us to make it look perfect.",
    "Ardsley Park is also home to many retirees who've called Savannah home for decades. Some have been our customers since before they moved to the neighborhood. We value these long relationships and the trust our customers place in us.",
  ],
  landmarks: [
    "Daffin Park",
    "Grayson Stadium",
    "Bull Street Academy",
    "Washington Avenue",
    "Victory Drive Corridor",
    "Habersham Village",
  ],
  relatedAreas: [
    { name: "Near Ardsley Park", href: "/dry-cleaners-near-ardsley-park/" },
    { name: "Midtown", href: "/dry-cleaners-midtown-savannah-ga/" },
    { name: "Victorian District", href: "/dry-cleaners-victorian-district-savannah/" },
  ],
};

export default function ArdsleyParkPage() {
  return <GeoPageContent data={pageData} />;
}
