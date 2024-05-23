import React from 'react';
import { ThemeContext, useThemeContext } from './ThemeProvider';

const Profile = () => {
  const { darkMode } =useThemeContext()
    return (
        <div style={{
            height:"25px",
            width:"25px",
            backgroundColor:"chocolate",
            borderRadius:"60px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            color: darkMode ? "white" : "black"
        }}>
           S
        </div>
    )
}

export default Profile;

