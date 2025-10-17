import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const recipes = [
    { id: 1, title: "Spaghetti Bolognese", description: "A classic Italian pasta dish." },
    { id: 2, title: "Chicken Curry", description: "A spicy and flavorful curry." },
    { id: 3, title: "Beef Stir Fry", description: "Quick and tasty stir-fried beef." },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}
            className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
