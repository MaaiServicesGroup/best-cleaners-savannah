import { defineType, defineField } from "sanity";

export const seoFields = defineType({
  name: "seoFields",
  title: "SEO Settings",
  type: "object",
  fields: [
    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      description: "Override the default page title for search engines (50-60 characters recommended)",
      validation: (Rule) => Rule.max(70).warning("Meta titles should be under 70 characters"),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      description: "Brief description for search results (150-160 characters recommended)",
      validation: (Rule) => Rule.max(170).warning("Meta descriptions should be under 170 characters"),
    }),
    defineField({
      name: "ogImage",
      title: "Social Share Image",
      type: "image",
      description: "Image displayed when shared on social media (1200x630 recommended)",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "noIndex",
      title: "Hide from Search Engines",
      type: "boolean",
      description: "Enable to prevent this page from being indexed",
      initialValue: false,
    }),
    defineField({
      name: "canonicalUrl",
      title: "Canonical URL",
      type: "url",
      description: "Override the default canonical URL if this content exists elsewhere",
    }),
  ],
});
