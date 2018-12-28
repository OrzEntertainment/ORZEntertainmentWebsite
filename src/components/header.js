import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Logo from './logo';

const Header = ({ siteTitle }) => (
  <div id="navbar" style={{
    position: `fixed`,
    top: `0`,
    width: `100%`,
  }}>
    <h1>
      <Link 
        to="/"
        style={{
        textDecoration: `none`,
        float: `left`
      }}>
        <Logo siteTitle={siteTitle}/>
      </Link>
      <Link to="/about"
        style={{
          textDecoration: `none`,
          float: `right`,
          fontSize: `1em`,
          paddingRight: `2em`
        }}
      >
        About
      </Link>
      <Link to="/about"
        style={{
          textDecoration: `none`,
          float: `right`,
          fontSize: `1em`,
          paddingRight: `1em`
        }}
      >
        Projects
      </Link>
    </h1>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
