import { defineType, defineField } from "sanity";

export const servicePage = defineType({
  name: "servicePage",
  title: "Service Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Service Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "URL path (e.g., 'dry-cleaning' for /services/dry-cleaning/)",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Short, memorable description for headers",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
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
      name: "overview",
      title: "Overview",
      type: "blockContent",
      description: "What this service is",
    }),
    defineField({
      name: "whoItsFor",
      title: "Who It's For",
      type: "blockContent",
      description: "Target customers for this service",
    }),
    defineField({
      name: "whatToExpect",
      title: "What to Expect",
      type: "blockContent",
      description: "The customer experience and process",
    }),
    defineField({
      name: "benefits",
      title: "Benefits",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Benefit Title" },
            { name: "description", type: "text", title: "Description" },
          ],
        },
      ],
    }),
    defineField({
      name: "process",
      title: "Our Process",
      type: "blockContent",
      description: "How we deliver this service",
    }),
    defineField({
      name: "whyBestCleaners",
      title: "Why Best Cleaners",
      type: "blockContent",
      description: "What makes us different",
    }),
    defineField({
      name: "relatedServices",
      title: "Related Services",
      type: "array",
      of: [{ type: "reference", to: [{ type: "servicePage" }] }],
    }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [{ type: "reference", to: [{ type: "faq" }] }],
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
      tagline: "tagline",
      media: "heroImage",
    },
    prepare({ title, tagline, media }) {
      return {
        title,
        subtitle: tagline,
        media,
      };
    },
  },
});
