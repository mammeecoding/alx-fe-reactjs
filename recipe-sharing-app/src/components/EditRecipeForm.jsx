// EditReciptForm component
import { useRecipeStore } from './recipeStore';

const EditReciptForm = ({ recipeId }) => {
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );

  return (
    <div>
      <form>
      event.preventDefault
        <button>Edit yor Recipe</button>
      </form>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* Render EditRecipeForm and DeleteRecipeButton here */}
    </div>
  );
};
export default RecipeDetails;
