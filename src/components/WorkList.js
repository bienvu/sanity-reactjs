import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sanity from '../sanity';
import imageUrlBuilder from '@sanity/image-url';
const blocksToHtml = require('@sanity/block-content-to-html');

const builder = imageUrlBuilder(sanity);
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

// Crop image function
function urlFor(source) {
  return builder.image(source)
}

class WorkList extends Component {
  render() {
    const { data } = this.props;
    // console.log(data);
    let itemData = [];
    data.map((item, index) => {
      const el = blocksToHtml({
        blocks: item.body,
        serializers: serializers
      }),
      imageCrop = urlFor(item.workImage).size(640, 450).url();

      itemData.push(<div className="article-list__item" key={index}>
          <div className="article-list__left">
            <h4 className="article-list__title"><Link to={{pathname: '/work/' + item.slug.current }} className="">{item.title}</Link></h4>
            <div className="article-list__body" dangerouslySetInnerHTML={{__html: el.substring(0, 289)}} />
            <div className="article-list__link"><Link to={{pathname: '/work/' + item.slug.current }} className="btn">See the case study</Link></div>
          </div>
          <div className="article-list__right">
            <div className="article-list__image"><img src={imageCrop} alt="FFW images" /></div>
          </div>
        </div>);

       return itemData;
    })

    return(
      <div className="article-list work-list">
        <div className="container">
          {itemData}
        </div>
      </div>
    )
  }
}

export default WorkList;
