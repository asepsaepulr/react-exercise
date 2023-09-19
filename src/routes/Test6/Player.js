import { cssVideo } from "./style";
import React, { useState, useRef } from 'react';

const Player = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value);
    videoRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return(
    <div>
      <video
        ref={videoRef}
        className={cssVideo}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        onTimeUpdate={handleTimeUpdate}
      />
      <button onClick={togglePlay} type="button">{isPlaying ? 'Pause' : 'Play'}</button>
      <button onClick={toggleMute} type="button">{isMuted ? 'Unmute' : 'Mute'}</button>
      <input type="range"
          value={currentTime}
          min="0"
          max={videoRef.current ? videoRef.current.duration : 0}
          step="0.1"
          onChange={handleSeek}/>
       <span>{formatTime(currentTime)}</span> /{' '}
        <span>
          {formatTime(videoRef.current ? videoRef.current.duration : 0)}
        </span>
    </div>
  )
}

export default Player;
