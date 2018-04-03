import React, { Component } from 'react';
import Layout from '../layout/Layout';
import WorkList from '../components/WorkList';
import sanity from '../sanity';


const query = `*[_type == "work"] {
  _id,
  title,
  slug,
  project,
  body,
  workImage
}
`

class Work extends Component {
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
    const { data } = this.state;
    return(
      <div>
        <Layout>
          <WorkList data={data} />
        </Layout>
      </div>
    )
  }
}

export default Work;
