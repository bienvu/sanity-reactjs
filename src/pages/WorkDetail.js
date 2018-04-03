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

const query = `*[_type == "work" && slug.current == $slug] {
  _id,
  title,
  slug,
  project,
  body,
  workImage
}[0]
`

function urlFor(source) {
  return builder.image(source)
}

class WorkDetail extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount(req) {
    let self = this;
    let url = this.props.match.params.url;
    sanity
      .fetch(query, {slug: url})
      .then(res => {
        console.log(res);
        const body = blocksToHtml({
            blocks: res.body,
            serializers: serializers
          }),
          title = res.title,
          project = res.project,
          imageCrop = urlFor(res.workImage).ignoreImageParams().url();
          const data={title, imageCrop, body, project};

        self.setState({ data });
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
          <div className="hero-banner hero-banner--small bg--dark">
            <div className="hero-banner__image"><img src={data.imageCrop} alt="FFW" width="1920" height="600" /> </div>
            <div className="hero-banner__inner">
              <div className="container">
                <div className="hero-banner__content">
                  <h1 className="hero-banner__heading">{data.title}</h1>
                  <h5 className="hero-banner__subtitle">{data.project}</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="block-text block-text--small">
            <div className="container">
              <div className="block-text__content" dangerouslySetInnerHTML={{__html: data.body }} />
            </div>
          </div>
        </Layout>
      </div>
    )
  }
}

export default WorkDetail;
