import React from 'react'

const AddRecipeForm = () => {
  return (
    <>
      <div>Add your Recipe</div>
      <label htmlFor="Recipe title">Recipe <title></title></label>
      <input type="text" name="input your Recipe" id="in" />
      <textarea name="ingredients" id="ingredients">what are your ingredients?</textarea>
      <textarea name="ingredients" id="ingredients">How do you prepare your recipe?</textarea>
      <input type="submit" value="Post" />
    </>
    
  )
}

export default AddRecipeForm