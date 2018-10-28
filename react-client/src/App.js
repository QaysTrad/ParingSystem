import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/home';
import Pairing from './components/pairing'
import addStudent from './components/addStudent'
import history from './components/history'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={addStudent} />
          <Route path="/pairing" component={Pairing} />
          <Route path="/history" component={history} />
          <Route path="/addStudent" component={addStudent} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
