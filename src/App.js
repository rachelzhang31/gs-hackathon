
import React, { Component } from 'react';
import './App.css';
import Home from './pages/home.js';
import USAMap from "react-usa-map";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  /* mandatory */
  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };
 
  /* optional customization of filling per state and calling custom callbacks per state */
  statesCustomConfig = () => {
    return {
      "NJ": {
        fill: "navy",
        clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
      },
      "NY": {
        fill: "#CC0000"
      }
    };
  };
 
 
  render() {
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
}
export default App;