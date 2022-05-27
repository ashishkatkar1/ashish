import React from "react";
import {NavLink} from "react-router-dom"
import './Navbar.css'



function Navbar() {
    return (
      <div>
          <nav className="navbar navbar-expand-lg">
        <div className="container">
          <NavLink className="navbar-brand" to="/">Air Pollution</NavLink>
          <button className="navbar-toggler navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/SearchPollution">Search AirPollution</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contact">Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      </div>
    );
  }
  
  export default Navbar;