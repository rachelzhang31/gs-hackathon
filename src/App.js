import React, { Component } from 'react';
import USAMap from "react-usa-map";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home.js';
 
function App(){
    return (
      <Router>
        <Navbar />
        <div className="App">
      <header className="App-header">
        <Home/>
      </header>
    </div>
      </Router>
      
    );
  }

 
export default App;