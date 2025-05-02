/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button"; // adjust if your path differs

interface UploadButtonProps {
  uploadVideo: (file: any) => void;
  analyzeVideo: () => void;
  resetVideo: () => void;
}

export default function UploadButton({
  uploadVideo,
  analyzeVideo,
  resetVideo,
}: UploadButtonProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file);
      // You can upload the file here (e.g., using fetch or axios)
      uploadVideo(file);
    }
  };

  return (
    <div className="p-2  flex justify-start items-center gap-6 mt-7">
      <Button className="cursor-pointer" onClick={handleButtonClick}>
        Upload
      </Button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="video/*"
        className="hidden"
        aria-label="Upload file"
      />
      <Button className="cursor-pointer" onClick={analyzeVideo}>
        Analyze
      </Button>
      <Button className="cursor-pointer" onClick={resetVideo}>
        Reset / Clear
      </Button>
    </div>
  );
}
