import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Login from './views/Login';
import PhotoEditor from './views/PhotoEditor';


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/app" component={PhotoEditor} />
        <Redirect from="/" to="/login" />
      </Switch>
    );
  }
}

export default App;
