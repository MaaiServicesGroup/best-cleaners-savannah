import { Metadata } from "next";
import { GeoPageContent } from "@/components/sections/GeoPageContent";

export const metadata: Metadata = {
  title: "Dry Cleaners Bluffton Georgia Area | Best Cleaners Savannah",
  description: "Professional dry cleaning accessible from Bluffton. Best Cleaners Savannah offers quality garment care worth the trip. Over 110 years of trusted service.",
};

const pageData = {
  title: "Dry Cleaners for the Bluffton Area",
  neighborhood: "Bluffton Area",
  pageType: "near-city" as const,
  description: "Quality dry cleaning services accessible from Bluffton and the surrounding Lowcountry area. While we're based in Savannah, many Bluffton residents make us their preferred dry cleaner.",
  heroImage: "/images/GeneratedPhotosBC/morefamilytimebecauseclothesareclean.jpeg",
  heroImageAlt: "Beautiful scenery near Savannah",
  proximityStatement: "For Bluffton residents who frequently travel to Savannah for work, shopping, or entertainment, our two locations offer convenient stopping points. Our Abercorn Street store is particularly accessible from Highway 204.",
  content: [
    "Bluffton's growth has brought many new residents to the Lowcountry, but quality dry cleaning options in newer areas can be limited. Many Bluffton residents who work or shop in Savannah have discovered Best Cleaners and make us a regular stop on their trips.",
    "Whether you're commuting to Savannah for work, visiting for shopping or dining, or just passing through, our locations are easy to access. The quality we provide makes the trip worthwhile—we've had customers tell us they won't trust anyone else with their fine garments.",
    "Bluffton families who appreciate Southern tradition and quality craftsmanship feel right at home at Best Cleaners. We've been serving the Lowcountry region since 1910, and we understand the value of doing things right.",
    "For those who prefer pickup and delivery, we may be able to accommodate customers in the Bluffton area for larger or commercial orders. Contact us to discuss your needs—we're always looking for ways to better serve our extended community.",
  ],
  landmarks: [
    "Old Town Bluffton",
    "Highway 278",
    "Tanger Outlets Savannah",
    "Savannah shopping",
    "Cross Creek area",
    "May River",
  ],
  relatedAreas: [
    { name: "Pooler", href: "/dry-cleaners-near-pooler-georgia/" },
    { name: "Georgetown", href: "/dry-cleaners-georgetown-savannah-georgia/" },
    { name: "Midtown", href: "/dry-cleaners-midtown-savannah-ga/" },
  ],
};

export default function BlufftonPage() {
  return <GeoPageContent data={pageData} />;
}
