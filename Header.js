/*import React from 'react' ;
import Profile from './Profile';

const Header = () => {
   return (
      <div style={{
         height:"100px",
         backgroundColor: "snow",
         border:"1px solid",
         justifyContent:"flex-end",
         alignItems:"center",
         display:"flex",
         gap:"10px",
         padding:"10px"  
      }}>
       <a>Home</a>
       <a>About</a>
       <a>Dashbord</a>
       <a>Contact</a>
       <Profile/>
      </div>
   )
}
export default Header;*/

import React, { useContext } from 'react' ;
import Profile from './Profile';
import { ThemeContext, useThemeContext } from './ThemeProvider';

const Header = () => {
   const { darkMode } =useThemeContext()
   return (
      <div   style={{
         height: "50px",
         backgroundColor:darkMode ? "black" : "snow",
         border:"1px solid",
         justifyContent:"flex-end",
         alignItems:"center",
         display:"flex",
         gap: "10px",
         padding:"10px",
         color: darkMode ? "white" : "black",
      }}>
       <a>Home</a>
       <a>About</a>
       <a>Dashboard</a>
       <a>Contact</a>
       <Profile/>
      </div>
     
   )
}
export default Header;