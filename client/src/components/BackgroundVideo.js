/* eslint-disable jsx-a11y/media-has-caption */
import React, { Component } from 'react';
import './BackgroundVideo.css';

class BackgroundVideo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoURL: 'videos/br.webm'
    };
  }

  render() {
    const { videoURL } = this.state;
    return (
      <div className="fullscreen-bg">
        <video className="video-bg" loop muted autoPlay poster="images/main.png">
          <source src={videoURL} type="video/webm" />
          <img
            src="/images/main.png"
            alt="Your browser does not support the <video> tag"
            title="Your browser does not support the <video> tag"
          />
        </video>
      </div>
    );
  }
}

export default BackgroundVideo;
