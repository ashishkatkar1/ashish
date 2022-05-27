import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css" ;
import "../node_modules/bootstrap/dist/js/bootstrap.bundle" ;

import React from "react";
import Home from './components/Home/Home';
import Contact  from './components/Contact/Contact';
import SearchPollution from './components/UserSearch/SearchPollution';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
   <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/SearchPollution" element={<SearchPollution/>}/>
          <Route exact path="/Contact" element={<Contact/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
    </Router>
  </div>
  );
}

export default App;