"use client";

import { createContext, useContext, useState } from "react";

const CommentsContext = createContext();

export function CommentsProvider({ children }) {
  const [comments, setComments] = useState();
  return (
    <CommentsContext.Provider value={{ setComments, comments }}>
      {children}
    </CommentsContext.Provider>
  );
}

export function useComments() {
  const context = useContext(CommentsContext);

  if (!context)
    throw new Error("useComments should be used in CommentsProvider");

  return context;
}
