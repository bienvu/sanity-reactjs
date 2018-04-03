import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sanity from '../sanity';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanity);

function urlFor(source) {
  return builder.image(source)
}

class OurWork extends Component {
  render() {
    const {data} = this.props;
    // console.log(data);
    const itemData = [];
    data.map((item, index) => {
      return itemData.push(<div className="grid-content__item" key={index}>
        <div className="grid-content__link"><Link to={"/work/" + item.slug.current}>Read More</Link></div>
        <div className="grid-content__image"><img src={urlFor(item.workImage).size(760, 760).url()} alt="FFW images" width="760" height="760" /></div>
        <div className="grid-content__group">
          <h4 className="grid-content__title">{item.title}</h4>
          <div className="grid-content__subtitle">{item.project}</div>
        </div>
      </div>);
    });

    return(
      <div className="grid-content grid-content--space-big ">
        <div className="container">
          <h3 className="grid-content__heading">Our Work</h3>
          <div className="grid-content__inner">
            {itemData}
          </div>
          <div className="grid-content__readmore"><Link className="btn" to="/work">See more projects</Link></div>
        </div>
      </div>
    )
  }
}

export default OurWork;
