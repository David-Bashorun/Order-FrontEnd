import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function HeartButton({ item }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();
  const favorited = isFavorite(item.id);

  const toggle = (e) => {
    e.stopPropagation(); // prevent card click if any
    if (favorited) removeFromFavorites(item.id);
    else addToFavorites(item);
  };

  return (
    <button
      onClick={toggle}
      aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
      className="p-2 rounded-full hover:bg-gray-100 transition"
    >
      {favorited ? <FaHeart className="text-red-500 w-5 h-5" /> : <FaRegHeart className="text-gray-500 w-5 h-5" />}
    </button>
  );
}
