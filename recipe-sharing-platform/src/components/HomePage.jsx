import React, { useState, useEffect } from "react";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading recipes:", error));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
        Recipe Sharing Platform
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {recipe.title}
              </h2>
              <p className="text-gray-600 text-sm mb-3">{recipe.summary}</p>
              <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
