import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom";
import { Header } from './componenets/Header';
import { Home } from './componenets/Home';
import { Contact } from './componenets/Contact';
import { About } from './componenets/About';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path = "/"  element ={<Home />} />;
        <Route path="/About"  element={<About />}/>;
        <Route  path="/Contact"  element={<Contact />}/>;
      </Routes>
    </BrowserRouter>
  )
}

export default App