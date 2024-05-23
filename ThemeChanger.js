import React,{ useContext,useState} from "react";
import { ThemeContext, useThemeContext} from './ThemeProvider'

const ThemeChanger = () => {
   const { darkMode, changeTheme } = useThemeContext();

    return (
        <div>
         <button 
         style={{
          backgroundColor: darkMode ? "black" : "snow",
          color: darkMode? "white" : "black",
         }}
         onClick={changeTheme}>
            {darkMode ? "Dark" : "Light"}
         </button>
        </div>
    )
}
export default ThemeChanger;