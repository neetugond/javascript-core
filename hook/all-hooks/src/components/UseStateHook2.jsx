import React,{useState} from 'react'

const UseStateHook2 = () => {
    const [inputValue, setInputValue] = useState()

    const inputText = (e) => {
        const newInput = e.target.value 
        setInputValue(newInput)
    }
  return (
      <div>
          <h1>useState hook input example</h1>
          <input type="text" onChange={inputText} />
          {/* <button onClick={}>submit</button> */}
          <h3>{ inputValue}</h3>
      </div>
      

  )
}

export default UseStateHook2