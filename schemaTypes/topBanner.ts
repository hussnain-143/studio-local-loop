import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'topBanner',
  title: 'Top Ad Banner',
  type: 'document',
  fields: [
      defineField({
      name: 'title',
      title: 'Banner Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Banner Text',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'url',
      description: 'URL where the button will redirect',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      description: 'Date and time when the banner was created',
      validation: Rule => Rule.required(),
      initialValue: () => new Date().toISOString(),
    }),
  ],
});
