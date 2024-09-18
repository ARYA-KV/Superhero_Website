
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Grievance from './Components/Grievance/Grievance'
import Mission from './Components/About/Mission'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Mission' element={<Mission/>}/>

      <Route path='/Grievance' element={<Grievance/>}/>
    </Routes>
    
    </>
  )
}

export default App
