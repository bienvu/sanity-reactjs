export default {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'heroImage',
      title: 'Hero image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'multilink',
      title: 'Multi Link',
      type: 'array',
      of: [
        {
          type: 'document',
          fields: [
            {
              name: 'linkTitle',
              title: 'LinkTitle',
              type: 'string'
            },
            {
              name: 'linkUrl',
              title: 'Link Url',
              type: 'string'
            }
          ]
        }
      ]
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'heroImage'
    }
  }
}
