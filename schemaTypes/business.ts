import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'business',
  title: 'Business',
  type: 'document',

  fields: [
    // 🏢 Business Name
    defineField({
      name: 'name',
      title: 'Business Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),

    // 🔗 Slug (auto from name)
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
      validation: Rule => Rule.required(),
    }),

    // 🏷️ Category
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),

    // 📝 Short Description
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
    }),

    // 🌐 Website URL
    defineField({
      name: 'website',
      title: 'Website URL',
      type: 'url',
    }),

    // 📧 Email
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),

    // 📞 Phone
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),

    // 🖼️ Logo or Image
    defineField({
      name: 'logo',
      title: 'Logo / Image',
      type: 'image',
      options: { hotspot: true },
    }),

    // 🏅 Tier (Gold, Silver, Bronze)
    defineField({
      name: 'tier',
      title: 'Tier',
      type: 'string',
      initialValue: 'bronze',
      options: {
        list: [
          { title: 'Gold (Featured)', value: 'gold' },
          { title: 'Silver (Standard)', value: 'silver' },
          { title: 'Bronze (Basic)', value: 'bronze' },
        ],
        layout: 'radio',
      },
    }),

    // 🌟 Feature Image
    defineField({
      name: 'featureImage',
      title: 'Feature Image (Gold Banner)',
      type: 'image',
      options: { hotspot: true },
    }),

    // 🔗 Optional Banner Link
    defineField({
      name: 'adLinkUrl',
      title: 'Banner Link URL (Optional)',
      type: 'url',
    }),

    // ⚡ Active Toggle
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),

    // 📅 Start / End Dates
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
    }),

    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'datetime',
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'logo',
    },
  },
})
