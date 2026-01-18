import { defineType, defineField } from "sanity";

export const geoPage = defineType({
  name: "geoPage",
  title: "Local SEO Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      description: "Full page title including location",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "MUST match existing URL exactly (e.g., 'dry-cleaners-near-pooler-georgia')",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "neighborhood",
      title: "Neighborhood/Area Name",
      type: "string",
      description: "e.g., 'Pooler', 'Ardsley Park', 'Historic District'",
    }),
    defineField({
      name: "pageType",
      title: "Page Type",
      type: "string",
      options: {
        list: [
          { title: "Near Me (City)", value: "near-city" },
          { title: "Neighborhood", value: "neighborhood" },
          { title: "District", value: "district" },
        ],
      },
    }),
    defineField({
      name: "coordinates",
      title: "Location Coordinates",
      type: "geopoint",
      description: "Center point of this service area",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      description: "Local landmark or area image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "content",
      title: "Main Content",
      type: "blockContent",
      description: "Unique content for this location (avoid duplicate copy)",
    }),
    defineField({
      name: "proximityStatement",
      title: "Proximity Statement",
      type: "text",
      rows: 2,
      description: "How this area relates to our locations (e.g., 'Just 10 minutes from our Waters Ave location')",
    }),
    defineField({
      name: "nearbyLandmarks",
      title: "Nearby Landmarks",
      type: "array",
      of: [{ type: "string" }],
      description: "Notable landmarks, businesses, or areas nearby",
    }),
    defineField({
      name: "servicesHighlighted",
      title: "Highlighted Services",
      type: "array",
      of: [{ type: "reference", to: [{ type: "servicePage" }] }],
      description: "Services to emphasize for this area",
    }),
    defineField({
      name: "relatedGeoPages",
      title: "Related Locations",
      type: "array",
      of: [{ type: "reference", to: [{ type: "geoPage" }] }],
      description: "Link to 2-3 nearby location pages",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seoFields",
    }),
  ],
  preview: {
    select: {
      title: "title",
      neighborhood: "neighborhood",
      pageType: "pageType",
      media: "heroImage",
    },
    prepare({ title, neighborhood, pageType, media }) {
      return {
        title: neighborhood || title,
        subtitle: pageType ? `${pageType} page` : "",
        media,
      };
    },
  },
});
