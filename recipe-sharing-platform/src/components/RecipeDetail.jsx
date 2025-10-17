import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error("Error loading recipe details:", error));
  }, [id]);

  if (!recipe) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-700 text-lg">
        Loading recipe details...
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <h1 className="text-3xl font-bold text-green-700 mb-4">
          {recipe.title}
        </h1>

        <p className="text-gray-600 mb-6">{recipe.description}</p>

        {/* Ingredients Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Ingredients
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {recipe.ingredients &&
              recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
          </ul>
        </div>

        {/* Instructions Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Instructions
          </h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700 leading-relaxed">
            {recipe.instructions &&
              recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
          </ol>
        </div>

        <div className="mt-8">
          <Link
            to="/"
            className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
