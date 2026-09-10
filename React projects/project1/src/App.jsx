import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Components/Home.jsx"
import About from "./Components/About.jsx"
import Contact from "./Components/Contact.jsx"
import Userlist from './Components/Userlist.jsx'
import Navbar from './Components/Navbar.jsx'
import Dashboard from './Components/Dashboard.jsx'
import Userapp from './Components/Userapp.jsx'
import Profile from './Components/Profile.jsx'
import Orders from './Components/Orders.jsx'
import Setting from './Components/Setting.jsx'
import ThemeProvider from './context/ThemeProvider.jsx'
import Counter from './components/counter.jsx'
import Login from './Components/Login.jsx'
import Memohook from './Components/Memohook.jsx'
import Parent from './Components/Parent.jsx'
import Child from './Components/Child.jsx'
const App = () => {
  return (
    <div>
  <ThemeProvider> <BrowserRouter>
    <h1>App</h1>
    <Navbar/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path ='/about' element = {<About/>}/>
        <Route path = '/contact' element = {<Contact/>}/>
        <Route path = '/userlist' element = {<Userlist/>}/>
                  <Route path='/dashboard' element ={<Dashboard/>}>
                  <Route path='profile' element = {<Profile/>}/>
                  <Route path = 'orders' element = {<Orders/>}/>
                  <Route path='setting' element = {<Setting/>}/>
                  </Route>
        <Route path='/user/:id' element = {<Userapp/>}/>
        <Route path='/counter' element ={<Counter />}/>
        <Route path='/login' element ={<Login/>}/>
        <Route path='/memohook' element ={<Memohook/>}/>
        <Route path='/parent' element = {<Parent/>}/>
        <Route path='/child' element =  {<Child/>}/>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
    </div>
          
  )
}

export default App