import {useState, useEffect }  from 'react'

const AddRecipeForm = () => {
  useState(() => {
    fetch("/src/components/data.json")
      .then((res) => res.json())
      .then((steps) => steps.target.value((steps) => {
        return recipe.id === recipeID;
      }))
      .then((matched) => handleSubmit(matched[0]));
      onSubmit.apply("post")
  }, []);
  return (
    <>
      <div className='shadow-sm rounded-md text-gray-700 font-sans'>Add your Recipe</div>
      <label htmlFor="Recipe title">Recipe <title></title></label>
      <input type="text" name="input your Recipe" id="in" />
      <textarea name="ingredients" id="ingredients">what are your ingredients?</textarea>
      <textarea name="ingredients" id="ingredients">How do you prepare your recipe?</textarea>
      <input type="submit" value="Post" />
    </>
    "validate", "errors", "setErrors", "preventDefault"
  )
}

export default AddRecipeForm
