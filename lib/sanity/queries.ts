import { groq } from "next-sanity";

// ============================================
// SITE SETTINGS
// ============================================
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    businessName,
    tagline,
    description,
    phone,
    email,
    "logo": logo.asset->url,
    "logoAlt": logoAlt.asset->url,
    socialLinks,
    announcementBar,
    "defaultOgImage": defaultOgImage.asset->url
  }
`;

// ============================================
// LOCATIONS
// ============================================
export const allLocationsQuery = groq`
  *[_type == "location"] | order(isMainLocation desc) {
    _id,
    name,
    address,
    city,
    state,
    zipCode,
    phone,
    email,
    coordinates,
    hours,
    isMainLocation,
    "image": image.asset->url,
    googleMapsUrl
  }
`;

export const mainLocationQuery = groq`
  *[_type == "location" && isMainLocation == true][0] {
    _id,
    name,
    address,
    city,
    state,
    zipCode,
    phone,
    coordinates,
    hours,
    googleMapsUrl
  }
`;

// ============================================
// BLOG POSTS
// ============================================
export const allBlogPostsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "featuredImage": featuredImage.asset->url,
    "featuredImageAlt": featuredImage.alt,
    publishedAt,
    "author": author->{name, "image": image.asset->url},
    "categories": categories[]->title
  }
`;

export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    body,
    featuredImage,
    "featuredImageAlt": featuredImage.alt,
    publishedAt,
    "author": author->{name, role, bio, image},
    "categories": categories[]->title,
    seo {
      metaTitle,
      metaDescription,
      ogImage
    }
  }
`;

export const blogPostSlugsQuery = groq`
  *[_type == "blogPost" && defined(slug.current)].slug.current
`;

// ============================================
// SERVICE PAGES
// ============================================
export const allServicePagesQuery = groq`
  *[_type == "servicePage"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    tagline,
    "heroImage": heroImage.asset->url,
    "heroImageAlt": heroImage.alt
  }
`;

export const servicePageBySlugQuery = groq`
  *[_type == "servicePage" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    tagline,
    "heroImage": heroImage.asset->url,
    "heroImageAlt": heroImage.alt,
    overview,
    whoItsFor,
    whatToExpect,
    benefits,
    process,
    whyBestCleaners,
    "relatedServices": relatedServices[]->{
      _id,
      title,
      "slug": slug.current,
      tagline
    },
    "faqs": faqs[]->{
      _id,
      question,
      answer
    },
    seo {
      metaTitle,
      metaDescription,
      ogImage
    }
  }
`;

// ============================================
// GEO PAGES (Local SEO)
// ============================================
export const allGeoPagesQuery = groq`
  *[_type == "geoPage"] | order(neighborhood asc) {
    _id,
    title,
    "slug": slug.current,
    neighborhood,
    pageType,
    "heroImage": heroImage.asset->url
  }
`;

export const geoPageBySlugQuery = groq`
  *[_type == "geoPage" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    neighborhood,
    pageType,
    coordinates,
    "heroImage": heroImage.asset->url,
    "heroImageAlt": heroImage.alt,
    content,
    proximityStatement,
    nearbyLandmarks,
    "servicesHighlighted": servicesHighlighted[]->{
      _id,
      title,
      "slug": slug.current,
      tagline
    },
    "relatedGeoPages": relatedGeoPages[]->{
      _id,
      title,
      "slug": slug.current,
      neighborhood
    },
    seo {
      metaTitle,
      metaDescription,
      ogImage
    }
  }
`;

export const geoPageSlugsQuery = groq`
  *[_type == "geoPage" && defined(slug.current)].slug.current
`;

// ============================================
// TESTIMONIALS
// ============================================
export const featuredTestimonialsQuery = groq`
  *[_type == "testimonial" && isFeatured == true] | order(date desc)[0...6] {
    _id,
    customerName,
    location,
    quote,
    rating,
    source,
    date,
    "serviceUsed": serviceUsed->title,
    "customerImage": customerImage.asset->url
  }
`;

export const allTestimonialsQuery = groq`
  *[_type == "testimonial"] | order(date desc) {
    _id,
    customerName,
    location,
    quote,
    rating,
    source,
    date,
    "serviceUsed": serviceUsed->title
  }
`;

// ============================================
// FAQS
// ============================================
export const faqsByCategoryQuery = groq`
  *[_type == "faq" && category == $category] | order(order asc) {
    _id,
    question,
    answer
  }
`;

export const allFaqsQuery = groq`
  *[_type == "faq"] | order(category asc, order asc) {
    _id,
    question,
    answer,
    category
  }
`;

// ============================================
// POLICIES
// ============================================
export const policyBySlugQuery = groq`
  *[_type == "policy" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    content,
    lastUpdated,
    seo {
      metaTitle,
      metaDescription,
      ogImage
    }
  }
`;
