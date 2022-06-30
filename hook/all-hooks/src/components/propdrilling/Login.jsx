import react from 'react';

function Login({setUsername}) {
    return (
        <div>
            <h3>login component</h3>
            <input type="text" onChange={(e) => {
                setUsername(e.target.value)
            }} />
        </div>
    )
}

export default Login