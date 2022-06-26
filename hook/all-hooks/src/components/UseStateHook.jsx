import React,{useState, useEffect} from 'react'

const UseStateHook = () => {

  const [count, setCount] = useState(0)

  // useEffect(() => {
  // setCount()
  // }, [])
  

  const handelInc = () => {
    setCount(count + 1)
    
  }
  const handelDec = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div>
      <h1>useState</h1>
      <h2>{ count}</h2>
      <button onClick={handelDec}>-</button>
      <button onClick={handelInc}>+</button>

    </div>
  )
}

export default UseStateHook