import { defineField, defineType } from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Insight / Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'Vanessa Sierra, LMFT',
    }),
    defineField({
      name: 'authorBio',
      title: 'Author Bio',
      type: 'text',
      rows: 3,
      description: 'A short biography of the author.',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'A short summary of the post for the listing page.',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image' }
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      subtitle: 'publishedAt',
    },
  },
})
