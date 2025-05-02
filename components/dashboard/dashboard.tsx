"use client";

import { useEffect, useState } from "react";
import { AppSidebar } from "../layout/app-sidebar";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import UploadButton from "./upload";
import VideoAnalysisTabs from "./video-analysis-tabs";
import VideoPlayback from "./video-playback";

type VideoState = {
  videoFile: File | null;
  videoSrc: string | null;
};

const VideoDetection = () => {
  const [video, setVideo] = useState<VideoState>({
    videoFile: null,
    videoSrc: null,
  });

  // Clean up object URL when component unmounts or video changes
  useEffect(() => {
    return () => {
      if (video.videoSrc) {
        URL.revokeObjectURL(video.videoSrc);
      }
    };
  }, [video.videoSrc]);

  const uploadVideo = (file: File | null) => {
    if (!file) return;
    // Create a temporary URL to play the video immediately
    const videoURL = URL.createObjectURL(file);
    setVideo({
      videoFile: file,
      videoSrc: videoURL,
    });
  };

  const analyzeVideo = () => {};

  const resetVideo = () => {
    const { videoSrc } = video;
    if (videoSrc) {
      setVideo({
        videoFile: null,
        videoSrc: null,
      });
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          {/* Logout */}
          <div className="ml-auto flex items-center gap-2">
            <Button variant="outline" size="sm">
              Logout
            </Button>
          </div>
        </header>
        <div className="flex bg-white-400 flex-1 flex-col gap-4 p-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="rounded-xl col-span-5">
              <div>
                <VideoPlayback videoSrc={video.videoSrc} detections={[]} />
              </div>
              <div>
                <UploadButton
                  uploadVideo={uploadVideo}
                  analyzeVideo={analyzeVideo}
                  resetVideo={resetVideo}
                />
              </div>
            </div>
            <div className="col-span-7 flex flex-col gap-4">
              <VideoAnalysisTabs />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default VideoDetection;
