import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './home/Home';
import Navigation from './home/Navigation';
import A1 from './schemes/A1';

export default class App extends Component {

  render() {
    return (
      <div>
        <Navigation />
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/A1">
            <A1 />
          </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
