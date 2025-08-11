import React from "react";
import HeartButton from "./HeartButton";

const MealCard = ({ meal, addToCart }) => {
  // ensure meal has `id` (if your backend uses _id, pass id = _id when mapping)
  const imageURL = `http://localhost:4000/${meal.image.replace(/\\/g, "/")}`;

  return (
    <div className="border rounded-lg p-4 shadow-md bg-white flex flex-col justify-between">
      <img src={imageURL} alt={meal.name} className="w-full h-48 object-cover rounded mb-4" />

      <div className="flex justify-between items-start mb-2">
        <h2 className="text-xl font-bold">{meal.name}</h2>
        <HeartButton item={meal} />
      </div>

      <p className="text-gray-600 mb-2">{meal.description}</p>

      <div className="flex items-center justify-between mt-4">
        <p className="font-bold text-orange-700">${Number(meal.price).toFixed(2)}</p>
        <button
          onClick={() => addToCart(meal)}
          className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MealCard;
