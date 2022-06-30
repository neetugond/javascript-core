import React,{useState, forwardRef, useImperativeHandle} from 'react'

// want to do setToggle true and false from parent component for that we can use useImperative

// we can grap now from parent component to child any ref and props with the help of useRef
const Button = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false);

    useImperativeHandle(ref, () => ({
        alterToggle() {
            setToggle(!toggle)
        }
    }));

    return (
        <div>
            <button>Button from child</button>
            {toggle && <span>Toggle</span>}
        </div>
    )
});

export default Button