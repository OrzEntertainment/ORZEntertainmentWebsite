import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Logo from './logo';

const Header = ({ siteTitle }) => (
  <div id="navbar" style={{
    width: `100%`
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
      <Link id = "AboutLink" to="/about"
        style={{
          textDecoration: `none`,
          float: `right`,
          fontSize: `1em`,
          paddingRight: `2em`
        }}
      >
        About
      </Link>
      <Link id = "ProjectsLink" to="/projects"
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
