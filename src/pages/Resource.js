import React, { Component } from 'react';
import Layout from '../layout/Layout';
import ResourceList from '../components/ResourceList';
import Slider from '../components/Slider';
import sanity from '../sanity';

const query = `*[_type == "resource"] {
  _id,
  title,
  slug,
  categories,
  body,
  "imageUrl": resourceImage.asset->url,
  "resourceType": categories-> {
    title
  }
}
`

class Resource extends Component {
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
        self.setState({
          data: res
        });
      })
      .catch(err => {
        console.error('Oh no, error occured: ', err)
      })
  }
  render() {
    const { data } = this.state
    return(
      <div>
        <Layout>
          <Slider />
          <ResourceList data={data} />
        </Layout>
      </div>
    )
  }
}

export default Resource;
