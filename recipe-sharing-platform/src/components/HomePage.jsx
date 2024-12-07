import {useState, useEffect  } from "react";
import data from './data.json'
const HomePage = () => {
  const [ recipe, setRecipe ] = useState(null); // 'video', not 'videos'
const { recipeID } = useParams();

useEffect(() => {
  fetch("/src/components/data.json")
    .then((res) => res.json())
    .then((recipes) => recipe.filter((recipe) => {
      return recipe.id === recipeID.map();
    }))
    .then((matched) => setRecipe(matched[0]));
}, []);
 return(
  <h1 className="text-gray-700 hover:opacity-5 rounded-md shadow-md grid grid-cols-1:lg grid-cols-2:md grid-cols-3:sm ">Spagetti</h1>
)
}

export default HomePage
