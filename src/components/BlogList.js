import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

function urlFor(source) {
  return builder.image(source)
}

class BlogList extends Component {
  render() {
    const { data } = this.props;

    let itemData = [];
    data.map((item, index) => {
      const el = blocksToHtml({
        blocks: item.body,
        serializers: serializers
      })

      itemData.push(<div className="article-list__item" key={index}>
        <div className="article-list__left">
          <h4 className="article-list__title"><Link to={{pathname: '/blog/' + item.slug.current, query: {id: item._id}}} className="">{item.title}</Link></h4>
          <div className="article-author">
            <Link className="article-author__picture" to={item.author.slug.current}><img src={urlFor(item.author.image).size(30, 30).url()} alt="FFW images" /></Link>
            <span>Thought by</span>
            <Link className="article-author__name" to={item.author.slug.current}>{item.author.name}</Link>,
            <span className="article-author__position">Marketing Content Writer </span>
          </div>
          <div className="article-list__body" dangerouslySetInnerHTML={{__html: el.substring(0, 289)}} />
          <div className="article-list__meta">
            <div className="article-list__datetime">{(new Date(item.publishedAt)).toLocaleString()}</div>
            <div className="article-list__tags">
              {item.blogType.map((itemType, index) => {
                return(<div className="article-list__tags__item" key={index}>{itemType.title}</div>)
              })}
            </div>
          </div>
          <div className="article-list__link"><Link to={{pathname: '/blog/' + item.slug.current, query: {id: item._id}}} className="btn btn--primary">Learn More and Register</Link>
          </div>
        </div>
        <div className="article-list__right">
          <div className="article-list__image"><img src={`${item.imageUrl}?h=150`} alt="FFW images" />
          </div>
        </div>
      </div>);

       return itemData;
    })

    return(
      <div className="article-list bg--light-gray">
        <div className="container">
          {itemData}
        </div>
      </div>
    )
  }
}

export default BlogList;
