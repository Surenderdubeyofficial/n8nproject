import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from './pages/Home'
import UserDetails from './pages/UserDetails'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path='/user/:id' element = {<UserDetails/>}/>
      <Route path='/userdetails' element={<UserDetails/>}/>
    </Routes>
    </BrowserRouter>
     
    </div>
  )
}

export default App