import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Work from './pages/Work';
import BlogDetail from './pages/BlogDetail';
import WorkDetail from './pages/WorkDetail';
import ResourceDetail from './pages/ResourceDetail';
import Resource from './pages/Resource';
import Contact from './pages/Contact';
import './assets/css/styles.min.css';

class App extends Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/work' component={Work} />
          <Route exact path='/resource' component={Resource} />
          <Route exact path='/contact' component={Contact} />
          <Route path='/blog/:url' component={BlogDetail} />
          <Route path='/work/:url' component={WorkDetail} />
          <Route path='/resource/:url' component={ResourceDetail} />
        </Switch>
      </Router>
    )
  }
}

export default App;
