/*import React from 'react';
import Navbar from './Navbar';
import Cards from './Cards';
import Filter from './Filter';
import { apiUrl, filterData} from './data';
import { useState, useEffect} from 'react';
import Spinner from './Spinner';;


const App = () => {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true)

  async function fetchData () {
    setLoading(true)
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    }
    catch(error) {
       console.log("error");
    } 
    setLoading(false);
  }

 useEffect( () => {
    fetchData()
 }, [])

 return(
  <div>
    <div >
       <Navbar/>
    </div>  
    <div>
      <Filter filterData={filterData}/> 
    </div> 
    <div>
      {
        loading ? (<Spinner/>) : (<Cards courses={courses}/>)
      }
    </div> 
 </div>
 )
}
export default App;*/

import React from "react";
import Header from "./Header";
import ThemeChanger from "./ThemeChanger";

const App = () => {

  return (
    <div>
      <ThemeChanger/>
      <Header/>
    </div>
  )
}
export default App;
 

