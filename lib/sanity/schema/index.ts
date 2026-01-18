// Document types
import { blogPost } from "./documents/blogPost";
import { servicePage } from "./documents/servicePage";
import { geoPage } from "./documents/geoPage";
import { location } from "./documents/location";
import { testimonial } from "./documents/testimonial";
import { faq } from "./documents/faq";
import { policy } from "./documents/policy";
import { siteSettings } from "./documents/siteSettings";
import { author } from "./documents/author";
import { category } from "./documents/category";

// Object types
import { seoFields } from "./objects/seoFields";
import { blockContent } from "./objects/blockContent";
import { businessHours } from "./objects/businessHours";

export const schemaTypes = [
  // Documents
  blogPost,
  servicePage,
  geoPage,
  location,
  testimonial,
  faq,
  policy,
  siteSettings,
  author,
  category,
  // Objects
  seoFields,
  blockContent,
  businessHours,
];
