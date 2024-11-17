import create from 'zustand'
import DeleteRecipe from /DeleteRecipe.jsx
const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes })
  
}));
export default useRecipeStore;
