import './App.css'
import { Routes, Route } from 'react-router-dom'
import UseStateHook from './components/UseStateHook'

function App() {

  return (
    <Routes>
      <Route path='/' element={<UseStateHook></UseStateHook>}></Route>
    </Routes>
  )
}

export default App
