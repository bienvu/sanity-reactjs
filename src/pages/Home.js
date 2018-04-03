import React, { Component } from 'react';
import Layout from '../layout/Layout';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import GridResources from '../components/GridResources';
import OurWork from '../components/OurWork';
import NewsList from '../components/NewsList';
import sanity from '../sanity';

const query = `* {
  "hero": *[_type == "hero"]{_id, title, multilink, link, "imageUrl": heroImage.asset->url }[0],
  "resource": *[_type == "resource"]{title, slug, resourceImage}[0...3],
  "work": *[_type == "work"]{title, slug, project, workImage}[0..4],
  "clients": *[_type == "clients"]{title, description, multiImage, link }[0],
  "blog": *[_type == "blog"]{title, mainImage, publishedAt, slug, "author": author-> name }[0..6],
}[0]
`

class Home extends Component {
  constructor() {
    super();
    this.state = {
      hero: '',
      resource: [],
      work: [],
      clients:[],
      blog: []
    }
  }

  componentDidMount() {
    let self = this;
    sanity
      .fetch(query)
      .then(res => {
        // console.log(res);
        self.setState({
          hero: res.hero,
          resource: res.resource,
          work: res.work,
          clients: res.clients,
          blog: res.blog
        });
      })
      .catch(err => {
        console.error('Oh no, error occured: ', err)
      })
  }

  render() {
    const {hero, resource, work, clients, blog} = this.state;
    // console.log(hero);
    return(
      <div>
        <Layout>
          <Hero data={hero} />
          <GridResources data={resource}/>
          <Clients data={clients}/>
          <NewsList data={blog}/>
          <OurWork data={work}/>
        </Layout>
      </div>
    )
  }
}

export default Home;
