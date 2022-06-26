import './App.css'
import { Routes, Route } from 'react-router-dom'
import UseStateHook from './components/UseStateHook'
import UseStateHook2 from './components/UseStateHook2'

function App() {

  return (
    <Routes>
      <Route path='/' element={<UseStateHook></UseStateHook>}></Route>
      <Route path='/useState' element={<UseStateHook2 />}></Route>
    </Routes>
  )
}

export default App
