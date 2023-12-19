// VideoBackground.js
import React from 'react';
import './VideoBackground.css'; // Import your CSS file for styling
import Vid from '../../images/bgCode.mp4'


const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop>
        <source src={Vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Your other content goes here */}
    </div>
  );
};

export default VideoBackground;
