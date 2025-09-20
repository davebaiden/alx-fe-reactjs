// src/components/recipeStore.js
import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],

  // add a recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // replace the whole list (useful for initial loads)
  setRecipes: (recipes) => set({ recipes }),

  // update an existing recipe by id
  updateRecipe: (id, updates) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, ...updates } : r
      ),
    })),

  // remove a recipe by id
  deleteRecipe: (id) =>
    set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),

  // helper to get a recipe (non-reactive; in components prefer a selector)
  getRecipeById: (id) => get().recipes.find((r) => r.id === id),
}));
