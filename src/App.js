import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home.js';
import About from './pages/about.js';
import Global from './pages/global.js';
import Unemployment from './pages/unemployment.js';

import { FirebaseContext } from './components/Firebase';

import Prison from './pages/prison.js';
import Mortality from './pages/mortality.js';
function App(){
    return (
      <Router>
        <Navbar />
        <Switch>
          <div class="App-header">
            <Route path="/about" exact component={About} />
            <Route path="/caserates" exact component={Prison} />
            <Route path="/mortalityrates" exact component={Mortality} />
            <Route path="/unemployment" exact component={Unemployment} />
            <Route path="/global">
              <FirebaseContext.Consumer>
                {(firebase) => <Global firebase={firebase} />}
              </FirebaseContext.Consumer>
            </Route>
            <Route path="/" exact component={Home} />
          </div>
        </Switch>
      </Router>
    );
  }

 
export default App;
