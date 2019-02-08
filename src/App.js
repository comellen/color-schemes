import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './home/Home';
import Navigation from './home/Navigation';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {/* <Route path="/01">
            <CS01 />
          </Route> */}
          </Switch>
        </Router>
      </div>
    );
  }
}
