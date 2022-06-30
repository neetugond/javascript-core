import react,{useState, createContext} from 'react'
import Login from './Login';
import User from './User';

export const AppContext = createContext(null)

function UseContextHook() {
    const [username, setUsername] = useState("");
    return (
        
        // whatever need to access in child component need to pass in value 
        <AppContext.Provider value={{ username, setUsername }}>
            <h1>Use context</h1>
            <Login />
            <User/>
        </AppContext.Provider>
    )
}

export default UseContextHook;