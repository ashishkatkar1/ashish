import React from "react"
import { NavLink } from "react-router-dom";
import './Home.css'

function Home() {
    return (
      <div>
        <section className="main">
           <div className="vertical">
           <div className="d-flex align-items-center justify-content-center text-center">
             <h1>Air Pollution Search</h1>
           </div><br/>
           <div className="d-flex align-items-center justify-content-center text-center">
            <h1>Get Air Pollution Data of Your City</h1>
          </div><br/>
          <div className="d-flex align-items-center justify-content-center text-center">
            <h2>Just a Search Away</h2>
          </div><br/>
          <div className="d-flex align-items-center justify-content-center text-center">
            <NavLink to="/SearchPollution"><button type="button" className="btn btn-outline-danger">Search</button></NavLink>
          </div>
           </div>
       </section>
      </div>
    );
  }
  
  export default Home;