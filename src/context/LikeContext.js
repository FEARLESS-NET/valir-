"use client";
import { createContext, useContext, useEffect, useState } from "react";

const LikeContext = createContext();

export function LikeProvider({ children }) {
  const [likes, setLikes] = useState([]);

  // localStorage dan yuklash
  useEffect(() => {
    const stored = localStorage.getItem("likes");
    if (stored) {
      setLikes(JSON.parse(stored));
    }
  }, []);

  // localStorage ga saqlash
  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(likes));
  }, [likes]);

  const toggleLike = (id) => {
    setLikes((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <LikeContext.Provider value={{ likes, toggleLike }}>
      {children}
    </LikeContext.Provider>
  );
}

export const useLike = () => useContext(LikeContext);