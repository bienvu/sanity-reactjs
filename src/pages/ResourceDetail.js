import React, { Component } from 'react';
import Layout from '../layout/Layout';
import sanity from '../sanity';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanity);

const blocksToHtml = require('@sanity/block-content-to-html');
const h = blocksToHtml.h

const serializers = {
  types: {
    code: props => (
      h('pre', {className: props.node.language},
        h('code', props.node.code)
      )
    )
  }
}

const query = `*[_type == "resource" && slug.current == $slug] {
  _id,
  title,
  slug,
  categories,
  body,
  resourceImage,
  "resourceType": categories-> {
    title
  }
}[0]
`

function urlFor(source) {
  return builder.image(source)
}

class ResourceDetail extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount(req) {
    let self = this;
    let url = this.props.match.params.url;
    // console.log(url);
    sanity
      .fetch(query, {slug: url})
      .then(res => {
        // console.log(res);
        const body = blocksToHtml({
          blocks: res.body,
          serializers: serializers
        }),
          title = res.title,
          imageCrop = urlFor(res.resourceImage).ignoreImageParams().url();
          const data={title, imageCrop, body};

        self.setState({
          data: data
        });
      })
      .catch(err => {
        console.error('Oh no, error occured: ', err)
      })
  }

  render() {
    const {data } = this.state;
    // console.log(data);
    return(
      <div>
        <Layout>
        <div className="page-heading">
          <div className="container">
            <div className="page-heading__inner">
              <h1 className="page-heading__title">{data.title}</h1>
            </div>
          </div>
        </div>
        <div className="box-feature">
          <div className="container">
            <div className="box-feature__inner">
              <div className="box-feature__text" dangerouslySetInnerHTML={{__html: data.body }} />
              <div className="box-feature__media"><img src={data.imageCrop} alt="images" /></div>
            </div>
          </div>
          </div>
        </Layout>
      </div>
    )
  }
}

export default ResourceDetail;
