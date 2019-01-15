import PropTypes from 'prop-types';
import React from 'react';

const backgroundVideo = ({source}) => {

    return (
        <div>
            <video autoplay muted loop id="videobackground">
                <source srd={source} type="video/mp4"></source>
            </video>
        </div>
    )
}