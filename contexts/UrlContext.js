"use client";
import { useState, useContext, createContext } from "react";

const UrlContext = createContext();

export function UrlProvider({ children }) {
  const [url, setUrl] = useState();

  return (
    <UrlContext.Provider value={{ url, setUrl }}>
      {children}
    </UrlContext.Provider>
  );
}

export function useUrl() {
  const context = useContext(UrlContext);

  if (!context) throw new Error("useUrl should be used within UrlProvider");
  return context;
}
