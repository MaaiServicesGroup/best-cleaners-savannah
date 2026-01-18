import { defineType, defineField } from "sanity";

export const businessHours = defineType({
  name: "businessHours",
  title: "Business Hours",
  type: "object",
  fields: [
    defineField({
      name: "day",
      title: "Day",
      type: "string",
      options: {
        list: [
          { title: "Monday", value: "monday" },
          { title: "Tuesday", value: "tuesday" },
          { title: "Wednesday", value: "wednesday" },
          { title: "Thursday", value: "thursday" },
          { title: "Friday", value: "friday" },
          { title: "Saturday", value: "saturday" },
          { title: "Sunday", value: "sunday" },
        ],
      },
    }),
    defineField({
      name: "openTime",
      title: "Opening Time",
      type: "string",
      description: "e.g., 7:00 AM",
    }),
    defineField({
      name: "closeTime",
      title: "Closing Time",
      type: "string",
      description: "e.g., 6:00 PM",
    }),
    defineField({
      name: "isClosed",
      title: "Closed",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      day: "day",
      open: "openTime",
      close: "closeTime",
      closed: "isClosed",
    },
    prepare({ day, open, close, closed }) {
      const dayFormatted = day ? day.charAt(0).toUpperCase() + day.slice(1) : "Day";
      return {
        title: dayFormatted,
        subtitle: closed ? "Closed" : `${open} - ${close}`,
      };
    },
  },
});
