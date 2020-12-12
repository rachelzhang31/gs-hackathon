import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home.js';
import About from './pages/about.js';
import Prison from './pages/prison.js';
function App(){
    return (
      <Router basename="/gs-hackathon">
        <Navbar />
        <div className="App-header">
        <Switch>
          <Route path="/" exact component = {Home}/>
          <Route path="/prison" exact component = {Prison}/>
          <Route path="/about" exact component = {About}/>
        </Switch>
        </div>
      </Router>
      
    );
  }

 
export default App;
