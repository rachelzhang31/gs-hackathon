import React, { Component } from 'react';
import './App.css'; /* optional for styling like the :hover pseudo-class */
import USAMap from "react-usa-map";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import MapTest from './pages/home.js';
 
  render() {
    return (
      <Router>
        <Navbar />
        <div className="App">
      <header className="App-header">
        <MapTest/>
      </header>
    </div>
      </Router>
      
    );
  }

 
export default App;