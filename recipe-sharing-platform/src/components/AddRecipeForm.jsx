import React, { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    if (!title.trim() || !ingredients.trim() || !steps.trim()) {
      setError("All fields are required.");
      return;
    }

    const ingredientsList = ingredients.split(",").map((item) => item.trim());
    if (ingredientsList.length < 2) {
      setError("Please include at least two ingredients.");
      return;
    }

    setError("");

    const newRecipe = {
      title,
      ingredients: ingredientsList,
      instructions: steps.split(".").map((step) => step.trim()).filter(Boolean),
    };

    console.log("Recipe submitted:", newRecipe);

    // Reset form after submission
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg"
      >
        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Add New Recipe
        </h1>

        {error && (
          <p className="text-red-500 text-center mb-4 font-medium">{error}</p>
        )}

        {/* Recipe Title */}
        <div className="mb-5">
          <label className="block text-gray-700 font-semibold mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>

        {/* Ingredients */}
        <div className="mb-5">
          <label className="block text-gray-700 font-semibold mb-2">
            Ingredients (comma-separated)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="e.g., eggs, milk, flour"
            rows="3"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          ></textarea>
        </div>

        {/* Preparation Steps */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Preparation Steps
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="Describe the cooking steps. Separate each step with a period."
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition font-semibold"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
