import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'directoryListing',
  title: 'Directory Listing',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Business Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),

    defineField({
      name: 'blurb',
      title: 'Short Description',
      type: 'text',
    }),

    defineField({
      name: 'url',
      title: 'Website / External Link',
      type: 'url',
    }),

    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),

    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),

    defineField({
      name: 'logo',
      title: 'Logo Image',
      type: 'image',
      options: { hotspot: true },
    }),

    defineField({
      name: 'featureImage',
      title: 'Feature Image (Hero Banner)',
      type: 'image',
      options: { hotspot: true },
    }),

    defineField({
      name: 'tier',
      title: 'Tier Level',
      type: 'string',
      initialValue: 'basic',
      options: {
        list: [
          { title: 'Hero (Top Banner)', value: 'hero' },
          { title: 'Pro (Large Highlight)', value: 'pro' },
          { title: 'Standard', value: 'standard' },
          { title: 'Basic', value: 'basic' },
          { title: 'Free (Community)', value: 'free' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),

    defineField({
      name: 'start',
      title: 'Start Date (optional)',
      type: 'datetime',
    }),

    defineField({
      name: 'end',
      title: 'End Date (optional)',
      type: 'datetime',
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'tier',
      media: 'logo',
    },
  },
})
