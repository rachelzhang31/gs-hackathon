import React, { Component } from 'react';
import USAMap from "react-usa-map";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import MapTest from './pages/home.js';
import About from './pages/about.js';
import Global from './pages/global.js';

import { FirebaseContext } from './components/Firebase';

function App(){
    return (
      <Router>
        <Navbar />
        <Switch>
          <div class="App-header">
            <Route path="/about" exact component={About} />
            <Route path="/global">
              <FirebaseContext.Consumer>
                {(firebase) => <Global firebase={firebase} />}
              </FirebaseContext.Consumer>
            </Route>
            <Route path="/" exact component={MapTest} />
          </div>
        </Switch>
      </Router>
    );
  }

 
export default App;
