import React, { useState } from 'react'
import ThemeContext from './ThemeContext'
const Themeprovider = ({children}) => {
    const[theme , setTheme] = useState("light")
    const toggleTheme =(theme) =>{
      if (theme === "light") {
    setTheme("dark");
} else {
    setTheme("light");
}
    }
  return (
    
<ThemeContext.Provider value ={{theme , toggleTheme}}>
    {children}
</ThemeContext.Provider>
    
  )
}

export default Themeprovider