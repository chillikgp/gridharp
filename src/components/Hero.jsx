import React, { useState, useEffect, useRef } from "react";

import "../CSS/Hero.css";

export default function Hero({ onVideoEnd }) {
  const [videoCompleted, setVideoCompleted] = useState(false);

  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setVideoCompleted(true); // Set state to true when video ends

    onVideoEnd(); // Call the original onVideoEnd prop
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.playbackRate = 2;

      videoElement.addEventListener("ended", handleVideoEnd);
    }

    // Cleanup the event listener when the component unmounts

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, [onVideoEnd]);

  return (
    <section className="hero-section">
      {videoCompleted ? (
        // If video is completed, show the hero image

        <img src="/hero.png" alt="Hero Background" className="hero-image" />
      ) : (
        // Otherwise, show the video

        <video ref={videoRef} className="hero-video" src="/videos/pixelgreen.mp4" autoPlay muted />
      )}
    </section>
  );
}
