import { defineType, defineField } from "sanity";

export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Question",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "General", value: "general" },
          { title: "Services", value: "services" },
          { title: "Pricing", value: "pricing" },
          { title: "Process", value: "process" },
          { title: "Pickup & Delivery", value: "pickup-delivery" },
          { title: "Commercial", value: "commercial" },
        ],
      },
    }),
    defineField({
      name: "relatedService",
      title: "Related Service",
      type: "reference",
      to: [{ type: "servicePage" }],
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
    }),
  ],
  preview: {
    select: {
      title: "question",
      category: "category",
    },
    prepare({ title, category }) {
      return {
        title,
        subtitle: category ? category.charAt(0).toUpperCase() + category.slice(1) : "",
      };
    },
  },
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
