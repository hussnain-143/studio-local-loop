import {defineType, defineField} from 'sanity';

export default defineType({
  name: 'spotlight',
  title: 'Spotlight Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'offerText',
      title: 'Offer Text',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'websiteUrl',
      title: 'Website URL',
      type: 'url',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publish Date',
      type: 'date',
      validation: Rule => Rule.required(),
      initialValue: new Date().toISOString().split('T')[0],
    }),
    defineField({
      name: 'category',
      title: 'Spotlight Category',
      type: 'reference',
      to: [{ type: 'spotlightCategory' }],
      validation: Rule => Rule.required(),
    }),
  ],
});
