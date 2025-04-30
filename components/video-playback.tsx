"use client";

import React, { useRef, useEffect, useState } from "react";

interface Detection {
  time: number;
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  color?: string;
}

interface VideoProps {
  videoSrc: string;
  detections: Detection[];
}

const VideoPlayback: React.FC<VideoProps> = ({ videoSrc, detections }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);

  // Sync detection boxes with video time
  useEffect(() => {
    const video = videoRef.current;
    const onTimeUpdate = () => {
      if (video) {
        setCurrentTime(video.currentTime);
      }
    };
    if (video) {
      video.addEventListener("timeupdate", onTimeUpdate);
    }
    return () => {
      if (video) {
        video.removeEventListener("timeupdate", onTimeUpdate);
      }
    };
  }, []);

  // Filter current detections by time
  const currentDetections = detections.filter(
    (d) => Math.abs(d.time - currentTime) < 0.1
  );

  return (
    <>
      <div className="relative w-full max-w-4xl mx-auto border">
        {/* Video */}
        <video ref={videoRef} controls autoPlay className="w-full rounded-lg">
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {currentDetections.map((det, index) => (
            <div
              key={index}
              className="absolute border-2"
              style={{
                top: `${det.y}px`,
                left: `${det.x}px`,
                width: `${det.width}px`,
                height: `${det.height}px`,
                borderColor: det.color || "lime",
              }}
            >
              <span className="text-xs bg-black text-white px-1">
                {det.label}
              </span>
            </div>
          ))}
        </div>

        {/* Status */}
        {/* <div className="absolute bottom-2 left-2 text-green-500 text-sm bg-black/70 px-2 py-1 rounded">
          Online
        </div> */}

        {/* Timestamp */}
        <div className="absolute top-2 right-2 text-white text-xs bg-black/70 px-2 py-1 rounded">
          {new Date(currentTime * 1000).toISOString().substr(11, 8)}
        </div>
      </div>
    </>
  );
};

export default VideoPlayback;
