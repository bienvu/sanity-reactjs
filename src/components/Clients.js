import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import sanity from '../sanity';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanity);

function urlFor(source) {
  return builder.image(source)
}

class Clients extends Component {
  render() {
    const {data} = this.props;
    // console.log(data.multiImage);
    const itemData = [];
    if(data.multiImage) {
      data.multiImage.map((item, index) => {
        return itemData.push(<div className="grid-client__item" key={index}>
          <Link className="grid-client__logo" to="/">
            <div className="grid-client__logo__normal"><img alt="box" src={urlFor(item.clientImage).ignoreImageParams().url()}/></div>
            <div className="grid-client__logo__hover"><img  alt="box hover" src={urlFor(item.clientImageHover).ignoreImageParams().url()}/></div>
          </Link>
        </div>)
      });
    }


    return(
      <div className="grid-client bg--light-gray">
        <div className="container">
          <h2 className="grid-client__heading">{data.title}</h2>
          <div className="grid-client__description">
            <p>{data.description}</p>
          </div>
          <div className="grid-client__list">
            {itemData}
          </div>
          <div className="grid-client__link"><Link className="btn" to={"/contact"}>contact us</Link></div>
        </div>
      </div>
    )
  }
}

export default Clients;
