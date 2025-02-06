import React from 'react';
import {useMyContext } from './GrantalyticsContext';

const CenteredVideo: React.FC = () => {
  const {videoTimeUpdate} = useMyContext();
    return (
      <div className=" m-4  flex-1 z-[1000]">
        <video
          className="rounded-lg"
          controls
          controlsList='nodownload noremoteplayback'
          onTimeUpdate={() => videoTimeUpdate((document.querySelector('video') as HTMLVideoElement).currentTime)}
        >
          <source src="./video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };
  

export default CenteredVideo;
