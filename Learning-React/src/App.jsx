import React, { useState } from 'react'

const App = () => {

  const [username, setUsername] = useState("")

  const submitHandler = (e) =>{
    e.preventDefault();
    setUsername('')

  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input 
        value = {username}
        onChange={(inp)=>{
          setUsername(inp.target.value)
        }} type="text" placeholder='Enter your name'/>
        <button >submit</button>
      </form>
    </div>
  )
}

export default App