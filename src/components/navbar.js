import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Logo from './logo';
import './css/navbar.css'

const Navbar = ({ siteTitle}) => {
  return (
      <h1>
        <Link 
          to="/"
          style={{
          textDecoration: `none`,
          float: `left`,
          paddingLeft: `3em`
        }}>
          <Logo siteTitle={siteTitle}/>
        </Link>
        <Link id = "AboutLink" to="/about"
          style={{
            textDecoration: `none`,
            float: `right`,
            fontSize: `1em`,
            paddingRight: `5em`
          }}
        >
          About
        </Link>
        <Link id = "ProjectsLink" to="/projects"
          style={{
            textDecoration: `none`,
            float: `right`,
            fontSize: `1em`,
            paddingRight: `2em`
          }}
        >
          Projects
        </Link>
      </h1>
  )
}

class AnimatedNavbar extends Component {
  state = {
    isTop: true,
    style: {
      width: `100%`,
      backgroundColor: `transparent`
    }
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      var backgroundColor = 'transparent'
      if (isTop !== this.state.isTop) {
        if(!isTop){
          backgroundColor = 'black'
        }
        this.setState({ 
          isTop: isTop, 
          style: {
            width: `100%`,
            backgroundColor: backgroundColor
          } 
        })
      }
    });
  }

  render() {
    return (
      <div id="navbar" style={this.state.style}>
        <Navbar siteTitle={this.props.siteTitle}></Navbar>
      </div>

    )
  }
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

export default AnimatedNavbar
