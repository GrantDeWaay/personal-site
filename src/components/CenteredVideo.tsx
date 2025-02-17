import React from 'react';
import {useMyContext } from './GrantalyticsContext';

const CenteredVideo: React.FC = () => {
  const {videoTimeUpdate} = useMyContext();
    return (
      <div className="  flex-1 z-[100000]">
        <video
          className="rounded-lg outline outline-4 outline-faded-back"
          controls
          controlsList='nodownload noremoteplayback'

          onPlay={videoTimeUpdate}
        >
          <source src="./video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };
  

export default CenteredVideo;
