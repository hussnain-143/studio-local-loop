import { defineField, defineType } from "sanity";

export default defineType({
  name: "pricingPlan",
  title: "Pricing Plan",
  type: "document",
  fields: [
    // 🔹 Key used in frontend logic (founders | professional | standard | basic)
    defineField({
      name: "key",
      title: "Plan Key",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: "Founders", value: "founders" },
          { title: "Professional", value: "professional" },
          { title: "Standard", value: "standard" },
          { title: "Basic", value: "basic" },
        ],
        layout: "dropdown",
      },
      description:
        "Unique key used by the frontend to identify this plan (founders | professional | standard | basic).",
    }),

    // 🔹 Display name
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    // 🔹 Optional short description / subtitle
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),

    // 🔹 Price (used for display)
    defineField({
      name: "price",
      title: "Price per month",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
      description: "Price displayed in USD (must match Stripe for accuracy).",
    }),

    // 🔹 Stripe price ID — the one you copy from Stripe Dashboard
    defineField({
      name: "stripePriceId",
      title: "Stripe Price ID",
      type: "string",
      validation: (Rule) => Rule.required(),
      description:
        "Paste the Stripe price ID (e.g., price_1PQxxxxxx). Used for checkout redirection.",
    }),

    // 🔹 Optional badge (like 'Most Popular', 'Limited', etc.)
    defineField({
      name: "highlight",
      title: "Highlight Badge",
      type: "string",
      description: "Optional label shown on the plan card (e.g., 'Most Popular').",
    }),

    // 🔹 List of plan features
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
      description: "List of included features for this plan.",
    }),

    // 🔹 Visibility toggle
    defineField({
      name: "enabled",
      title: "Enabled",
      type: "boolean",
      initialValue: true,
      description: "Toggle visibility in frontend.",
    }),

    // 🔹 Founders-specific settings
    defineField({
      name: "founderSettings",
      title: "Founders Settings (optional)",
      type: "object",
      hidden: ({ parent }) => parent?.key !== "founders",
      fields: [
        defineField({
          name: "totalSlots",
          title: "Total Slots Available",
          type: "number",
          initialValue: 4,
          validation: (Rule) => Rule.min(1),
        }),
        defineField({
          name: "remainingSlots",
          title: "Remaining Slots",
          type: "number",
          initialValue: 4,
          validation: (Rule) => Rule.min(0),
        }),
        defineField({
          name: "showWhenSoldOut",
          title: "Show When Sold Out",
          type: "boolean",
          initialValue: true,
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "key",
      enabled: "enabled",
    },
    prepare({ title, subtitle, enabled }) {
      return {
        title: `${title} ${enabled === false ? "(disabled)" : ""}`,
        subtitle,
      };
    },
  },
});
