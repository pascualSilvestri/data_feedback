import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './views/Home'

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/data_feedback' element={<Home/>} />
        <Route path='*' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
