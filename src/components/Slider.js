import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sanity from '../sanity';
import SlickSlider from 'react-slick';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanity);

const query = `*[_type == "slider"] {
  slideritem
}[0]
`
function urlFor(source) {
  return builder.image(source)
}

class Slider extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    let self = this;
    sanity
      .fetch(query)
      .then(res => {
        // console.log(res);
        self.setState({
          data: res.slideritem
        });
      })
      .catch(err => {
        console.error('Oh no, error occured: ', err)
      })
  }

  render() {
    const {data} = this.state;
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false
    };
    const itemData = [];
    data.map((item, index) => {
      itemData.push(<div className="slide__item bg--dark-blue--overlay" key={index}>
         <div className="slide__media" style={{backgroundImage: "url(" + urlFor(item.sliderImage).ignoreImageParams().url() + ")"}}>
          </div>
          <div className="slide__constrained">
            <div className="slide__caption container">
              <h2 className="slide__title">{item.title}</h2>
              <div className="slide__description">{item.description}</div>
              <div className="slide__link"><Link to={"/resource/" + item.link.linkUrl} className="btn">{item.link.linkTitle}</Link></div>
            </div>
          </div>
       </div>);
       return itemData;
    })

    return (
      <div className="featured-resources">
        <SlickSlider {...settings}>
          {itemData}
        </SlickSlider>
      </div>
    );
  }
}

export default Slider;
