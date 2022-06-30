import './App.css'
import { Routes, Route } from 'react-router-dom'
import UseStateHook from './components/UseStateHook'
import UseStateHook2 from './components/UseStateHook2'
import UseReducerHook from './components/UseReducerHook'
import UseEffectHook from './components/UseEffectHook'
import UseRefHook from './components/UseRefHook'
import UseLayoutEffect from './components/UseLayoutEffect'
import UseImperativeHandle from './components/imperativeHandle/ImperativeHandle'
import PropComponent from './components/propdrilling/Prop'
import UseContextHook from './components/useConextHook/UseContextHook'

function App() {

  return (
    <Routes>
      <Route path='/' element={<UseStateHook></UseStateHook>}></Route>
      <Route path='/useState' element={<UseStateHook2 />}></Route>
      <Route path='/useReducer' element={<UseReducerHook></UseReducerHook>}></Route>
      <Route path='/useEffect' element={<UseEffectHook></UseEffectHook>}></Route>
      <Route path='/useRef' element={<UseRefHook></UseRefHook>}></Route>
      <Route path='/useLayout' element={<UseLayoutEffect></UseLayoutEffect>}></Route>
      <Route path='/useImperative' element={<UseImperativeHandle></UseImperativeHandle>}></Route>
      <Route path='/props' element={<PropComponent></PropComponent>}></Route>
      <Route path='/useContext' element={<UseContextHook></UseContextHook>}></Route>

    </Routes>
  )
}

export default App
