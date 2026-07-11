"use client";
import { createContext, useContext, useState } from "react";

const ThumbnailUrlContext = createContext();

export default function ThumbnailProvider({ children }) {
  const [thumbnailUrl, setThumbnailUrl] = useState(null);
  const [title, setTitle] = useState(null);

  return (
    <ThumbnailUrlContext.Provider
      value={{ thumbnailUrl, setThumbnailUrl, title, setTitle }}
    >
      {children}
    </ThumbnailUrlContext.Provider>
  );
}

export function useThumbnail() {
  const context = useContext(ThumbnailUrlContext);

  if (!context)
    throw new Error("useThumbnail must be used in a ThumbnailProvider");

  return context;
}
