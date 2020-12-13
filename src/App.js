import React, { Component } from 'react';
import USAMap from "react-usa-map";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import MapTest from './pages/home.js';
import About from './pages/about.js';
import Prison from './pages/prison.js';
function App(){
    return (
      <Router>
        <Navbar />
        <Switch>
          <div className="App-header">
          <Route path="/" exact component = {MapTest}/>
          <Route path="/caserates" exact component = {Prison}/>
          <Route path="/about" exact component = {About}/>
          </div>
        </Switch>
      </Router>
      
    );
  }

 
export default App;
