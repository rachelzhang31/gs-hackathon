import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home.js';
import About from './pages/about.js';
import Prison from './pages/prison.js';
import Mortality from './pages/mortality.js';
function App(){
    return (
      <Router>
        <Navbar />
        <Switch>
          <div className="App-header">
          <Route path="/" exact component = {Home}/>
          <Route path="/caserates" exact component = {Prison}/>
          <Route path="/mortalityrates" exact component = {Mortality}/>
          <Route path="/about" exact component = {About}/>
          </div>
        </Switch>
      </Router>
      
    );
  }

 
export default App;
