import { defineType, defineField } from "sanity";

export const policy = defineType({
  name: "policy",
  title: "Policy Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Policy Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      title: "Policy Content",
      type: "blockContent",
    }),
    defineField({
      name: "lastUpdated",
      title: "Last Updated",
      type: "datetime",
      description: "When was this policy last revised?",
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
      updated: "lastUpdated",
    },
    prepare({ title, updated }) {
      return {
        title,
        subtitle: updated ? `Updated: ${new Date(updated).toLocaleDateString()}` : "",
      };
    },
  },
});
