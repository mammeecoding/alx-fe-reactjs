import React from 'react'
import { useState } from 'react'
const [type, value] = useState(intialValue);
const RegistrationForm = () => {
  return (
    <>
       <div>RegistrationForm</div>
    <form> 
      <label>UserName</label>
      <input type="text" name="Username" id="username"  value ={username}/>
      <label>Email</label>
      <input type="email" name="email" id="email" value={email}/>
      <label>Password</label>
      <input type="password" name="password" id="password" value={password}/>
      <input type="submit" value="submit" />
    </form>
    </>
  )
}

export default RegistrationForm
