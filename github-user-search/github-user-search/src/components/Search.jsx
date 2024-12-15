// import React from 'react'

const Search = () => {
  return (
    <div>
      <form>
        <label htmlFor="user">User Name</label>
        <input type="text" name="user" id="user" placeholder="enter any User Name"/>
        <label htmlFor="user's avatar">User Avatar</label>
        <input type="text" name="av" id="av" placeholder="enter user avatar" />
        <label htmlFor="user's name">User Name</label>
        <input type="text" name="nm" id="nm" placeholder="enter user Name" />
        <label htmlFor="user's github link">Github Link </label>
        <input type="text" name="gh" id="gh" placeholder="enter A github link " />
        <label htmlFor="location">location</label>
        <input type="text" name="location" id="location" />
        <input type="submit" value="submit" />

      </form>
    </div>
  )
}

export default Search