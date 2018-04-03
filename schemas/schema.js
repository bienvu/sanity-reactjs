import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import blockContent from './blockContent'
import post from './post'
import blog from './blog'
import work from './work'
import clients from './clients'
import resource from './resource'
import hero from './hero'
import slider from './slider'
import category from './category'
import author from './author'
import localeString from './localeString'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([blockContent, blog, work, resource, author, category, hero, slider, clients])
})
