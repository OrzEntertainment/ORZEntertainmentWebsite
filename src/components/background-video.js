import PropTypes from 'prop-types';
import React from 'react';
import './css/background-video.css'
import video from '../res/videos/rain.mp4'

const BackgroundVideo = ({ children }) => {
    return (
        <div id='videobackgrounddiv'>
            <video loop="true" autoplay="autoplay" muted id="myVideo">
                <source src={video} type="video/mp4"/>
            </video>
            {children}
        </div>
    )
}

BackgroundVideo.propTypes = {
    children: PropTypes.node.isRequired,
}
export default BackgroundVideo