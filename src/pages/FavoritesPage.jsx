import React from "react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MealCard from "../components/MealCard"; // same one you use in menu





const FavoritesPage = () => {
    const { addToCart } = useContext(CartContext);
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <div className="flex flex-col min-h-screen bg-orange-50">
      <Navbar />
      <main className="flex-grow container mx-auto p-8">
        <h1 className="text-4xl md:text-5xl font-extrabold py-7 text-center text-orange-700 mb-8">
          My Favorites
        </h1>

        {favorites.length === 0 ? (
          <p className="text-center text-gray-600">
            No favorites yet. Click the heart on a meal to add it.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:mx-20 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {favorites.map((item) => (
              <MealCard
                key={item.id}
                meal={item}
                addToCart={addToCart}
                onRemove={() => removeFromFavorites(item.id)}
                isFavoritePage={true} // optional: for custom button text
              />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default FavoritesPage;
