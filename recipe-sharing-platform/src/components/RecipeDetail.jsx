import React, { useEffect, useState } from "react";
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
    return <div className="text-center text-gray-500 mt-10">Loading...</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />
        <h1 className="text-3xl font-bold text-green-700 mb-4">{recipe.title}</h1>
        <p className="text-gray-700 mb-6">{recipe.summary}</p>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Ingredient 1</li>
            <li>Ingredient 2</li>
            <li>Ingredient 3</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Instructions</h2>
          <ol className="list-decimal list-inside text-gray-600 space-y-1">
            <li>Step 1: Do this...</li>
            <li>Step 2: Then this...</li>
            <li>Step 3: Finish with this...</li>
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
