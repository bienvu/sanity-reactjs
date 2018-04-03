import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sanity from '../sanity';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanity);

function urlFor(source) {
  return builder.image(source)
}

class GridResources extends Component {
  render() {
    const {data} = this.props;
    // console.log(data);
    const itemData = [];
    data.map((item, index) => {
      return itemData.push(<div className="block-cta__item bg--dark-blue--overlay" key={index} style={{backgroundImage: "url(" + urlFor(item.resourceImage).size(450, 220).url() + ")"}}>
        <div className="block-cta__content">
          <h3 className="block-cta__title">{item.title}</h3>
          <Link className="btn" to={"/Resource/" + item.slug.current}>Download The Webniar</Link>
        </div>
      </div>);
    });

    return(
      <div className="block-cta">
        <div className="container">
          <h2 className="block-cta__heading">Resources</h2>
          <div className="block-cta__grid">
            {itemData}
          </div>
        </div>
      </div>
    )
  }
}

export default GridResources;
