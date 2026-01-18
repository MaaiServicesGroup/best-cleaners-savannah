import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bestcleanerssavannah.com";
  
  // Core pages
  const corePages = [
    "",
    "/best-cleaners-savannah/",
    "/best-cleaners-savannah-is-the-top-choice/",
    "/best-cleaners-savannah-services/",
    "/best-cleaners-savannah-locations/",
    "/contact-best-dry-cleaners/",
    "/reviews/",
    "/privacy-policy/",
    "/dry-cleaning-employment/",
  ];
  
  // Service pages
  const servicePages = [
    "/services/dry-cleaning/",
    "/services/laundry-and-press/",
    "/services/wash-and-fold/",
    "/services/uniform-cleaning/",
    "/services/wedding-dress-cleaning-preservation/",
    "/services/household-items/",
    "/commercial-dry-cleaning/",
  ];
  
  // New pages
  const newPages = [
    "/policies/",
    "/how-our-process-works/",
    "/community/",
    "/request-pickup-delivery/",
    "/customer-feedback/",
  ];
  
  // Local SEO / Geo pages
  const geoPages = [
    "/dry-cleaners-near-garden-city-georgia/",
    "/dry-cleaners-near-pooler-georgia/",
    "/dry-cleaners-near-thunderbolt-georgia/",
    "/dry-cleaners-bluffton-georgia/",
    "/dry-cleaners-georgetown-savannah-georgia/",
    "/dry-cleaners-ardsley-park-georgia/",
    "/dry-cleaners-near-ardsley-park/",
    "/dry-cleaning-starland-district-savannah/",
    "/dry-cleaners-victorian-district-savannah/",
    "/dry-cleaners-historic-district-savannah/",
    "/dry-cleaners-midtown-savannah-ga/",
    "/dry-cleaning-near-forsyth-park-savannah/",
  ];
  
  // Blog pages
  const blogPages = [
    "/best-dry-cleaning-blog/",
    "/guide-to-keeping-your-clothes-looking-new/",
    "/dry-cleaning-tips-every-local-should-know/",
    "/2026-dry-cleaning-laundry-trends/",
    "/serving-all-savannah-districts-since-1910/",
    "/what-is-detailed-pressing-dry-cleaning/",
    "/insane-stains-removal-guide/",
    "/5-key-questions-to-ask/",
    "/how-to-find-the-best-dry-cleaners/",
    "/your-closet-could-use-a-dry-cleaning/",
    "/maintain-your-style-with-dry-cleaning/",
    "/difference-in-dry-cleaner-and-laundromat/",
    "/your-go-to-dry-cleaning/",
  ];
  
  const allPages = [
    ...corePages,
    ...servicePages,
    ...newPages,
    ...geoPages,
    ...blogPages,
  ];
  
  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page.includes("blog") ? "weekly" : "monthly",
    priority: page === "" ? 1 : page.includes("services") ? 0.8 : 0.6,
  }));
}
