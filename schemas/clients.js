export default {
  name: 'clients',
  title: 'Clients',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'description',
      type: 'string'
    },
    {
      name: 'multiImage',
      title: 'Multi Image',
      type: 'array',
      of: [
        {
          type: 'document',
          fields: [
            {
              name: 'clientImage',
              title: 'Client image',
              type: 'image',
              options: {
                hotspot: true
              }
            },
            {
              name: 'clientImageHover',
              title: 'Client image Hover',
              type: 'image',
              options: {
                hotspot: true
              }
            }
          ],
          preview: {
            select: {
              media: 'clientImage'
            }
          }
        }
      ]
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string'
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'clientImage'
    }
  }
}
