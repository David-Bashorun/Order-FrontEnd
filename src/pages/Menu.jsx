import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MealCard from "../components/MealCard";
import HeartButton from "../components/HeartButton";


const Menu = () => {
  const { addToCart } = useContext(CartContext);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const res = await fetch("https://order-backend6700.onrender.com/api/meals");
        const data = await res.json();
        setMeals(data.meals); // adjust according to your backend response
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };

    fetchMeals();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-orange-50">
      <Navbar />

      <main className="flex-grow container mx-auto p-8">
        <h1 className="text-4xl md:text-5xl font-extrabold py-7 text-center text-orange-700 mb-8">
          Our Delicious Packs
        </h1>

        <div className="grid grid-cols-1 md:mx-20 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {meals.length > 0 ? (
            meals.map((meal) => (
              <MealCard
                key={meal._id}
                meal={{...meal, id: meal._id}}
                addToCart={addToCart}
              />
            ))
          ) : (
            <p className="text-center w-full text-gray-600">
              No meals available yet. Please check back later.
            </p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;