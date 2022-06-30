import react, { useContext } from 'react'
import {AppContext} from './UseContextHook'

function Login() {
    const {setUsername} = useContext(AppContext)
    return (
        <div>
            <h3>Login</h3>
            <input type="text" onChange={(e) => {
                setUsername(e.target.value)
            } } />

        </div>
    )
}
export default Login