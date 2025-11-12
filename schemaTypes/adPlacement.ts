import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'adPlacement',
  title: 'Ad Placement',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'href',
      title: 'Link',
      type: 'url',
    }),
    defineField({
      name: 'tier',
      title: 'Tier',
      type: 'string',
      options: {
        list: [
          { title: 'Featured', value: 'featured' },
          { title: 'Grid', value: 'grid' },
          { title: 'Rail', value: 'rail' },
          { title: 'Banner Top', value: 'banner-top' },
          { title: 'Banner Bottom', value: 'banner-bottom' },
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'start',
      title: 'Start Date',
      type: 'datetime',
    }),
    defineField({
      name: 'end',
      title: 'End Date',
      type: 'datetime',
    }),
  ],
});
