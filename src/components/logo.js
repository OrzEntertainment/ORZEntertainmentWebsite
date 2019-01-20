import PropTypes from 'prop-types';
import React from 'react';
import logo from '../res/images/orz-logo.png';
import './css/logo.css';

const Logo = ({siteTitle}) =>{
    var siteTitleMain = siteTitle.split(' ')[0];
    var siteTitleChild = siteTitle.split(' ')[1];

    return (
        <span id = "logo-image-with-name">
            <span className="logo-image-holder">
                <span>
                    <img id="logo-image" src={logo}></img>
                </span>
            </span>
            <span id="logo-name-holder">
                <strong id="MainTitle">{siteTitleMain}</strong>
                <br></br>
                <strong id="SubTitle">{siteTitleChild}</strong>
            </span>
        </span>
    )
}

Logo.propTypes = {
    siteTitle: PropTypes.string,
}

export default Logo;