import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navigation menu--main">
        <ul className="menu header__nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/resource">Resources</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
