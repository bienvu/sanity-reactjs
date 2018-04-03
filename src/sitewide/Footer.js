import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="block-newsletter">
            <h2>Stay up to date with our latest news and events.</h2>
            <div className="block-newsletter__inner">
              <form>
                <div className="form-item form-type-textfield form-item-emal"> <input id="edit-text" className="form-text" type="text" placeholder="Email Address" /> </div>
                <div className="form-actions"> <input type="submit" className="form-submit" value="Sign Up" /> </div>
              </form>
            </div>
          </div>
          <nav className="menu--footer">
            <ul className="menu footer__menu">
              <li> <a href="/">Resources</a> </li>
              <li> <a href="/" className="is-active">Work</a> </li>
              <li> <a href="/">Services</a> </li>
              <li> <a href="/">Blog</a> </li>
              <li> <a href="/">About</a> </li>
              <li> <a href="/">News</a> </li>
              <li> <a href="/">Events</a> </li>
              <li> <a href="/">Drupal Training</a> </li>
              <li> <a href="/">Careers</a> </li>
              <li> <a href="/">Contact</a> </li>
              <li className="header__search">
                <div></div>
              </li>
              <li className="header__burger">
                <div><i></i> </div>
              </li>
            </ul>
          </nav>
          <div className="block-locale">
            <div className="footer__menu__language"> <a href="/" className="footer__menu__language__link en">English</a>
              <ul id="ffw-lang-switch">
                <li> <a className="active en" href="/">
                  <span>English</span>
                  </a> </li>
                <li> <a href="/" className="da">
                  <span>Dansk</span>
                  </a> </li>
                <li> <a href="/" className="de">
                  <span>Deutsch</span>
                  </a> </li>
                <li> <a href="/" className="fr">
                  <span>Français</span>
                  </a> </li>
              </ul>
            </div>
          </div>
          <div className="footer__legal">
            <p>We are a part of the <a href="http://intellecta.com/">Intellecta Group</a>. Other companies within the Intellecta Group are <a href="http://www.bysted.se/">Bysted AB</a>, <a href="http://hilanders.se/">Hilanders AB</a>, <a href="http://intellectacorporate.se/">Intellecta Corporate AB</a>, <a href="http://isbitgames.com/">ISBIT GAMES AB</a>, <a href="http://rewir.com/">Rewir AB</a>, <a href="http://river.se/">River Cresco AB</a>,&nbsp;<a href="http://www.unreel.se/">Unreel AB</a> and <a href="http://wowevents.se/">Wow Events AB</a>.<br/><br/>Intellecta AB (publ) is noted on NASDAQ OMX Stockholm and employs around 550 people in Sweden, Denmark, Austria, Germany, the Netherlands, UK, Bulgaria, Moldova, Ukraine, Brazil, the US, Vietnam and China.</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
