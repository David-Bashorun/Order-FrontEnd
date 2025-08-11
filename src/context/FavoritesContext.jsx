import React, { createContext, useContext, useState, useEffect } from "react";

// named export so existing imports like `{ FavoritesContext }` work
export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // load once
  useEffect(() => {
    try {
      const saved = localStorage.getItem("favorites");
      if (saved) setFavorites(JSON.parse(saved));
    } catch (e) {
      console.error("Failed to parse favorites from localStorage", e);
    }
  }, []);

  // persist
  useEffect(() => {
    try {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } catch (e) {
      console.error("Failed to save favorites", e);
    }
  }, [favorites]);

  const addToFavorites = (item) =>
    setFavorites((prev) => (prev.find((f) => f.id === item.id) ? prev : [...prev, item]));

  const removeFromFavorites = (id) =>
    setFavorites((prev) => prev.filter((f) => f.id !== id));

  const isFavorite = (id) => favorites.some((f) => f.id === id);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

// convenience hook (also exported)
export const useFavorites = () => useContext(FavoritesContext);
