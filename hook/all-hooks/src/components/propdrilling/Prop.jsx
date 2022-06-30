import react, { useState } from 'react'
import Login from './Login';
import User from './User'

function Prop() {

    const [username, setUsername] = useState("");
    return (
        <div>
            <h1>state management prop drilling</h1>
            <Login setUsername={setUsername} />
            <User username={username} />
        </div>
    );
}

export default Prop;