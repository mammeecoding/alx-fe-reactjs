import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  const recomendation = useRecipeStore(state => state.recomendation.map(id =>
    state.recipes.find(recipe => recipe.id === id)
  ));

  return (
    <div>
      <h2>Recomendation</h2>
      {recomendation.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};
export default RecommendationsList


useRecipeStore", "map"
