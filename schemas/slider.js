export default {
  name: 'slider',
  title: 'Slider',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slideritem',
      title: 'Slider Item',
      type: 'array',
      of: [
        {
          type: 'document',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string'
            },
            {
              name: 'link',
              title: 'Link',
              type: 'document',
              fields: [
                {
                  name: 'linkTitle',
                  title: 'Link Title',
                  type: 'string'
                },
                {
                  name: 'linkUrl',
                  title: 'Link Url',
                  type: 'string'
                }
              ]
            },
            {
              name: 'sliderImage',
              title: 'Slider Image',
              type: 'image',
              options: {
                hotspot: true
              }
            }
          ]
        }
      ]
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'sliderImage'
    }
  }
}
