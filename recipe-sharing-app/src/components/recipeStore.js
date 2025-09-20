// src/components/recipeStore.js
import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  addRecipe: (recipe) => set((state) => ({
    recipes: [...state.recipes, recipe],
    filteredRecipes: [...state.recipes, recipe] // keep filtered list in sync
  })),

  updateRecipe: (id, updatedRecipe) => set((state) => {
    const updatedRecipes = state.recipes.map((recipe) =>
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    );
    return {
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    };
  }),

  deleteRecipe: (id) => set((state) => {
    const remaining = state.recipes.filter((recipe) => recipe.id !== id);
    return {
      recipes: remaining,
      filteredRecipes: remaining.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    };
  }),

  setSearchTerm: (term) =>
    set((state) => {
      return {
        searchTerm: term,
        filteredRecipes: state.recipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(term.toLowerCase())
        ),
      };
    }),
}));
