import create from 'zustand'
import DeleteRecipe from /DeleteRecipe.jsx
import updateRecipe from /updateRecipe.jsx
const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes })

    const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};
    
    return(
  <div>
    
    <updateRecipe/>
    </deleteRecipe>
  </div>
 
export default useRecipeStore;
