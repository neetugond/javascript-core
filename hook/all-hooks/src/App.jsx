import './App.css'
import { Routes, Route } from 'react-router-dom'
import UseStateHook from './components/UseStateHook'
import UseStateHook2 from './components/UseStateHook2'
import UseReducerHook from './components/UseReducerHook'
import UseEffectHook from './components/UseEffectHook'
import UseRefHook from './components/UseRefHook'

function App() {

  return (
    <Routes>
      <Route path='/' element={<UseStateHook></UseStateHook>}></Route>
      <Route path='/useState' element={<UseStateHook2 />}></Route>
      <Route path='/useReducer' element={<UseReducerHook></UseReducerHook>}></Route>
      <Route path='/useEffect' element={<UseEffectHook></UseEffectHook>}></Route>
      <Route path='/useRef' element={<UseRefHook></UseRefHook>}></Route>
    </Routes>
  )
}

export default App
