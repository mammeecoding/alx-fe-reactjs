import {useState, useEffect  } from "react";
import data from './data.json'
const HomePage = () => {
  const [ recipe, setRecipe ] = useState(null); // 'video', not 'videos'
const { recipeID } = useParams();

useEffect(() => {
  fetch("/src/components/data.json")
    .then((res) => res.json())
    .then((recipes) => recipe.filter((recipe) => {
      return recipe.id === recipeID;
    }))
    .then((matched) => setRecipe(matched[0]));
}, []);
}

export default HomePage