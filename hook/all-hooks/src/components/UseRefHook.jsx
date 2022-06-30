import React, { useRef, useState } from 'react'
// for accessing dom element we use useref

const UseRefHook = () => {
  const [value, setValue] = useState("")

  const inputRef = useRef();

  const onclick = () => {
   // for focusing input 
    inputRef.current.focus();
     // for accessing input need pass always this
    console.log(inputRef.current.value)
    inputRef.current.value = "";
   
    
  }

  return (
      <div>
      <h1>neetu</h1>
      <input type="text" placeholder="ex..." ref={inputRef}></input>
      <button onClick={onclick}>change name</button>
    </div>
  )
}

export default UseRefHook