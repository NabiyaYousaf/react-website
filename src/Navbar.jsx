import React from "react";
import { NavLink } from "react-router-dom";
const Navabar=()=>{
    return(
        <>
        <div className="container-fluid nav-bg">
            <div className="row">
                <div className=" mx-auto">

               
        <nav className="navbar navbar-expand-lg navbar-light background">
  <NavLink className="navbar-brand ml-3 brand_decoration" to="/">HATE LIARS</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto ">
     
      <li className="nav-item">
        <NavLink  className="nav-link" to="/">Home</NavLink>
      </li>


      <li className="nav-item">
        <NavLink
         className="nav-link" to="/services">Services</NavLink>
      </li>


      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>


      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
      
     
    </ul>
    
  </div>
</nav>
</div>

</div>

</div>
        </>
    );
} 
export default Navabar;