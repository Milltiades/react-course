import React, { useContext } from 'react'
import { ThemeContext } from './context/ThemeProvider'

const Header = () => {
    const {theme, setTheme} = useContext(ThemeContext)
    const handleThemeCHange = () => {
        if(theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
        console.log(theme)
    }
  return (
    <div style={{ backgroundColor: theme === "light" ? "#fff" : "#000 ",
                  color:  theme === "light" ? "#000" : "#fff "}}>
        <ul>
            <li>HOME</li>
            <li>CONTACT</li>
            <li>FAQ</li>
            <li onClick={handleThemeCHange}>CHANGE THEME</li>
        </ul>
    </div>
  )
}

export default Header