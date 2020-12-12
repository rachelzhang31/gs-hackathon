import React, { Component } from 'react';
import './App.css';
import Home from './pages/home.js';
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
        <Home/>
        <MapTest/>
      </header>
    </div>
      </Router>
      
    );
  }
}

 
export default App;