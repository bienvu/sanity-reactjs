import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ResourceList extends Component {
  render() {
    const { data } = this.props;
    // console.log(data);
    let itemData = [];
    data.map((item, index) => {

      itemData.push(<div className="resources-view__item" key={index}>
          <div className="resources-view__link-img">
          <Link to={'/resource/' + item.slug.current } style={{backgroundImage: "url(" + item.imageUrl + ")"}}>
            <span className="read-more">Read More</span>
          </Link>
          </div>
          <div className="resources-view__type">{item.resourceType.title}</div>
          <div className="resources-view__title"><Link to={{pathname: '/resource/' + item.slug.current }} className="">{item.title}</Link></div>
        </div>);

       return itemData;
    })

    return(
      <div className="resources-view">
        <div className="container">
          <div className="resources-view__grid">
            {itemData}
          </div>
        </div>
      </div>
    )
  }
}

export default ResourceList;
