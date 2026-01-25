import { defineType, defineField } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "customerName",
      title: "Customer Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Customer Location",
      type: "string",
      description: "e.g., 'Savannah, GA' or neighborhood name",
    }),
    defineField({
      name: "quote",
      title: "Testimonial Quote",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      description: "Star rating (1-5)",
      validation: (Rule) => Rule.min(1).max(5),
      options: {
        list: [
          { title: "5 Stars", value: 5 },
          { title: "4 Stars", value: 4 },
          { title: "3 Stars", value: 3 },
          { title: "2 Stars", value: 2 },
          { title: "1 Star", value: 1 },
        ],
      },
    }),
    defineField({
      name: "source",
      title: "Review Source",
      type: "string",
      options: {
        list: [
          { title: "Google", value: "google" },
          { title: "Facebook", value: "facebook" },
          { title: "Direct", value: "direct" },
        ],
      },
    }),
    defineField({
      name: "date",
      title: "Review Date",
      type: "date",
    }),
    defineField({
      name: "serviceUsed",
      title: "Service Used",
      type: "reference",
      to: [{ type: "servicePage" }],
      description: "Which service did the customer use?",
    }),
    defineField({
      name: "isFeatured",
      title: "Featured",
      type: "boolean",
      description: "Show on homepage and key pages",
      initialValue: false,
    }),
    defineField({
      name: "customerImage",
      title: "Customer Photo",
      type: "image",
      description: "Optional customer photo",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      name: "customerName",
      quote: "quote",
      rating: "rating",
      featured: "isFeatured",
    },
    prepare({ name, quote, rating, featured }) {
      const stars = rating ? "⭐".repeat(rating) : "";
      return {
        title: `${featured ? "✨ " : ""}${name}`,
        subtitle: `${stars} "${quote?.substring(0, 50)}..."`,
      };
    },
  },
});
