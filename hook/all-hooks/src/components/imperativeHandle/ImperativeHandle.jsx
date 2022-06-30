import React,{useRef} from 'react'
import Button from './Button'
// able to access value from child component to parent
// alter the value from child component to parent
const ImperativeHandle = () => {

    const buttonRef = useRef(null);
    return (
           <div>
            <button onClick={() => {
                buttonRef.current.alterToggle();
            }}>Button from parent</button>
            <Button ref={buttonRef}/>
            </div>
      
  )
}

export default ImperativeHandle