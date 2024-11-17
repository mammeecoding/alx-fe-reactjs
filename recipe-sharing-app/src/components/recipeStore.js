import create from 'zustand'
import DeleteRecipe from /DeleteRecipe.jsx
import updateRecipe from /updateRecipe.jsx
const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes })

    const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm, searchTerm);

  const FavoritesList = () => {
  const favorites = useRecipeStore(state => state.favorites.map(id =>
    state.recipes.find(recipe => recipe.id === id)
  ));

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
   return (
    <div>
      <h2>Recomendations</h2>
      {recomendations.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};
  
  return (
     <div>
    <updateRecipe/>
    </deleteRecipe>
    </div>
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};
    
export default useRecipeStore;
