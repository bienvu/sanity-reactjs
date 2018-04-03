import React, { Component } from 'react';
import Layout from '../layout/Layout';
import BlogList from '../components/BlogList';
import sanity from '../sanity';


const query = `*[_type == "blog"] {
  _id,
  title,
  slug,
  author,
  categories,
  publishedAt,
  body,
  "imageUrl": mainImage.asset->url,
  "blogType": categories[]-> {
    _id,
    title
  },
  "author": author-> {
    _id,
    name,
    slug,
    image
  }
}
`

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      body: ''
    }
  }

  componentDidMount() {
    let self = this;
    sanity
      .fetch(query)
      .then(res => {
        self.setState({
          data: res
        });
      })
      .catch(err => {
        console.error('Oh no, error occured: ', err)
      })
  }
  render() {
    const { data } = this.state
    return(
      <div>
        <Layout>
          <BlogList data={data} />
        </Layout>
      </div>
    )
  }
}

export default Blog;
