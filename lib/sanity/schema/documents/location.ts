import { defineType, defineField } from "sanity";

export const location = defineType({
  name: "location",
  title: "Store Location",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Location Name",
      type: "string",
      description: "e.g., 'Waters Avenue' or 'Abercorn Street'",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "address",
      title: "Street Address",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "city",
      title: "City",
      type: "string",
      initialValue: "Savannah",
    }),
    defineField({
      name: "state",
      title: "State",
      type: "string",
      initialValue: "GA",
    }),
    defineField({
      name: "zipCode",
      title: "ZIP Code",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "coordinates",
      title: "Map Coordinates",
      type: "geopoint",
    }),
    defineField({
      name: "hours",
      title: "Business Hours",
      type: "array",
      of: [{ type: "businessHours" }],
    }),
    defineField({
      name: "isMainLocation",
      title: "Main Location",
      type: "boolean",
      description: "Is this the primary/flagship location?",
      initialValue: false,
    }),
    defineField({
      name: "image",
      title: "Location Photo",
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
      name: "googleMapsUrl",
      title: "Google Maps URL",
      type: "url",
      description: "Direct link to Google Maps listing",
    }),
    defineField({
      name: "googlePlaceId",
      title: "Google Place ID",
      type: "string",
      description: "For Google reviews integration",
    }),
  ],
  preview: {
    select: {
      title: "name",
      address: "address",
      isMain: "isMainLocation",
      media: "image",
    },
    prepare({ title, address, isMain, media }) {
      return {
        title: isMain ? `⭐ ${title}` : title,
        subtitle: address,
        media,
      };
    },
  },
});
