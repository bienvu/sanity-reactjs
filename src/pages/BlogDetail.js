import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

const query = `*[_type == "blog" && slug.current == $slug] {
  _id,
  title,
  slug,
  author,
  categories,
  publishedAt,
  body,
  mainImage,
  "blogType": categories[]-> {
    _id,
    title
  },
  "author": author-> {
    _id,
    name,
    slug,
    "imageUrl": image.asset->url
  }
}[0]
`

function urlFor(source) {
  return builder.image(source)
}

class BlogDetail extends Component {
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

        const body = blocksToHtml({
          blocks: res.body,
          serializers: serializers
        }),
          userName = res.author.name,
          userPicture = res.author.imageUrl,
          userUrl = res.author.slug.current,
          title = res.title,
          date = res.publishedAt,
          imageCrop = urlFor(res.mainImage).ignoreImageParams().url();
          const data1={userName, userPicture, userUrl, title, date, imageCrop, body};

        self.setState({
          data: data1
        });
      })
      .catch(err => {
        console.error('Oh no, error occured: ', err)
      })
  }
  render() {
    const {data } = this.state;
    let date = '',
        title = '';
    if(data.date) {
      date = <div className="article-title__datetime">{(new Date(data.date)).toLocaleString()}</div>;
    }

    if(data.title) {
      title = <h1 className="article-title__heading">{data.title}</h1>;
    }

    return(
      <div>
        <Layout>
          <div className="article-title text--center">
            <div className="container">
              {date}
              {title}
              <div className="article-title__author">
                <Link className="article-title__picture" to={"/" + data.userUrl}><img src={data.userPicture} alt="FFW images" width="60" height="60" /></Link>
                <span>Thought by</span>
                <Link className="article-title__name" to={"/" + data.userUrl}>{data.userName}</Link>,
                <span className="article-title__position">Marketing Content Writer </span>
              </div>
            </div>
          </div>
          <div className="container"><p><img src={data.imageCrop} alt="Images"/></p></div>
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

export default BlogDetail;
