
import React from "react";
import { Link } from "react-router-dom";
import './Home.css';
function Home(props) {
  return (
    <div className="paren">
      <div className="thin-strip">
       
         <button id="but" > <Link to="/login">Login</Link></button>
      
      
        {/* <button className="button">  <Link to="/signup">Signup</Link></button> */}
    
      </div>

     
{/* 
      <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2> */}
    </div>
  );
}

export default Home;
