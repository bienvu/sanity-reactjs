import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sanity from '../sanity';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanity);

function urlFor(source) {
  return builder.image(source)
}

class NewsList extends Component {
  render() {
    const { data } = this.props;
    console.log(data);
    let itemData = [];
    data.map((item, index) => {
      itemData.push(<div className="grid-feed__item grid-feed__item--blog" key={index} style={{backgroundImage: "url(" + urlFor(item.mainImage).size(750, 750).url() + ")"}}>
          <div className="grid-feed__content">
            <h5 className="grid-feed__date">{item.publishedAt}</h5>
            <h4 className="grid-feed__title">{item.title}</h4>
            <div className="grid-feed__divide">by</div>
            <div className="grid-feed__author">{item.author}</div>
            <div className="grid-feed__position">Marketing Content Writer</div>
          </div>
          <div className="grid-feed__link"><Link to={"/blog/" + item.slug.current} ></Link>
          </div>
        </div>);

       return itemData;
    })

    return(
      <div className="grid-feed">
        <div className="container">
          <h3 className="grid-feed__heading">Life at FFW</h3>
          <div className="grid-feed__inner">
            {itemData}
          </div>
        </div>
      </div>
    )
  }
}

export default NewsList;
