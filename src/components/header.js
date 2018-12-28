import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Logo from './logo';

const Header = ({ siteTitle }) => (
  <div id="navbar">
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
          color: `white`,
          fontSize: `1em`
        }}
      >
        About
      </Link>
    </h1>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
