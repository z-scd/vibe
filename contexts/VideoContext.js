"use client";

import { useContext, createContext, useState } from "react";

const VideoContext = createContext();

export function VideoProvider({ children }) {
  const [videoInfo, setVideoInfo] = useState();

  return (
    <VideoContext.Provider value={{ videoInfo, setVideoInfo }}>
      {children}
    </VideoContext.Provider>
  );
}

export function useVideo() {
  const context = useContext(VideoContext);

  if (!context) throw new Error("useVideo should be used in a VideoProvider");

  return context;
}
