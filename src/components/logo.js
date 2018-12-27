import PropTypes from 'prop-types';
import React from 'react';
import logo from ".././images/orz-logo.png";
import './css/logo.css';

const Logo = ({siteTitle}) =>{
    var siteTitleMain = siteTitle.split(' ')[0];
    var siteTitleChild = siteTitle.split(' ')[1];

    return (
        <div className = 'logo-image-with-name'>
            <div className='logo-image-holder'>
                <img id="logo-image" src={logo}></img>
            </div>
            <div className='logo-name'>
                <h1>{siteTitleMain}</h1>
                <h6>{siteTitleChild}</h6>
            </div>
        </div>
    )
}

Logo.propTypes = {
    siteTitle: PropTypes.string,
}

export default Logo;