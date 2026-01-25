import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "businessName",
      title: "Business Name",
      type: "string",
      initialValue: "Best Cleaners & Laundry",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Short tagline for the business",
    }),
    defineField({
      name: "description",
      title: "Site Description",
      type: "text",
      rows: 3,
      description: "Default meta description for the site",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "logoAlt",
      title: "Logo (Alternate/Dark)",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "phone",
      title: "Main Phone Number",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Main Email",
      type: "string",
    }),
    defineField({
      name: "socialLinks",
      title: "Social Media Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "platform",
              title: "Platform",
              type: "string",
              options: {
                list: [
                  { title: "Facebook", value: "facebook" },
                  { title: "Instagram", value: "instagram" },
                  { title: "Twitter/X", value: "twitter" },
                  { title: "LinkedIn", value: "linkedin" },
                  { title: "Google Business", value: "google" },
                ],
              },
            },
            {
              name: "url",
              title: "URL",
              type: "url",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "footerText",
      title: "Footer Text",
      type: "blockContent",
      description: "Text shown in the footer area",
    }),
    defineField({
      name: "announcementBar",
      title: "Announcement Bar",
      type: "object",
      fields: [
        {
          name: "enabled",
          title: "Show Announcement",
          type: "boolean",
          initialValue: false,
        },
        {
          name: "message",
          title: "Message",
          type: "string",
        },
        {
          name: "link",
          title: "Link URL",
          type: "string",
        },
        {
          name: "linkText",
          title: "Link Text",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "defaultOgImage",
      title: "Default Social Share Image",
      type: "image",
      description: "Default image used when sharing pages on social media",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Site Settings",
      };
    },
  },
});
