import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import home from './components/home';
import Pairing from './components/pairing'
import addStudent from './components/addStudent'
import history from './components/history'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Pairing} />
          <Route path="/pairing" component={Pairing} />
          <Route path="/history" component={history} />
          <Route path="/addStudent" component={addStudent} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
