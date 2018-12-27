import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Logo from './logo';

const Header = ({ siteTitle }) => (
  <div id="navbar" className="collapsed">
    <div>
      <h1>
        <Link 
          to="/"
          style={{
          textDecoration: `none`,
        }}>
          <Logo siteTitle={siteTitle}/>
        </Link>
      </h1>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
