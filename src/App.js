import React, { Component } from 'react';
import USAMap from "react-usa-map";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home.js';
import About from './pages/about.js';
function App(){
    return (
      <Router>
        <Navbar />
        <Switch>
          <div class="App-header">
          <Route path="/gs-hackathon" exact component = {Home}/>
          <Route path="/about" exact component = {About}/>
          </div>
        </Switch>
      </Router>
      
    );
  }

 
export default App;
