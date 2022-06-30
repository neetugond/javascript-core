import React, {useEffect, useLayoutEffect, useRef } from 'react'

const UseLayoutEffect = () => {

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.value = "useEffect";
        // console.log(inputRef.current.value) 
    }, []);
    
    // always come before rendering before useEffect
    useLayoutEffect(() => {
        // inputRef.current.value = "useLayoutEffect";
       console.log(inputRef.current.value) 
    },[])
    
  return (
      <div>
          <input ref={inputRef} type="text" value="neetu" style={{width:400, height:100}} />
    </div>
  )
}

export default UseLayoutEffect