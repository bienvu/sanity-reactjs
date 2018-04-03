import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Hero extends Component {
  render() {
    const {data} = this.props;
    let image = '';
    let title = '';
    let multiLink = [];
    
    if(data.imageUrl) {
      image = <img src={data.imageUrl} alt="FFW images" width="2000" height="1500" />
    }

    if(data.title) {
      title = <h1 className="hero-banner__heading">{data.title}</h1>
    }

    if(data.multilink) {
      data.multilink.map((item, key) => {
        return multiLink.push(
          <Link to={item.linkUrl} className="btn" key={key}>{item.linkTitle}</Link>
        )
      })
    }

    return(
      <div className="hero-banner hero-banner--large bg--dark-blue--overlay">
        <div className="hero-banner__image">{image}</div>
        <div className="hero-banner__inner">
          <div className="container">
            <div className="hero-banner__content">
              {title}
              <div className="hero-banner__link">{multiLink}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero;
