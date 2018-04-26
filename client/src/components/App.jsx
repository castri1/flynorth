import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Login from './views/Login';
import PhotoEditor from './views/PhotoEditor';
import PrivateRoute from './ui/PrivateRoute';

import AppLayout from '../components/layout/AppLayout';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/layout" component={AppLayout} />
        <PrivateRoute exact path="/app" component={PhotoEditor} />
        <Redirect from="/" to="/login" />
      </Switch>
    );
  }
}

export default App;
