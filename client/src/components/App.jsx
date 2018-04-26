import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Login from './views/Login';
import PhotoEditor from './views/PhotoEditor';
import PrivateRoute from './ui/PrivateRoute';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/app" component={PhotoEditor} />
        <Redirect from="/" to="/login" />
      </Switch>
    );
  }
}

export default App;
