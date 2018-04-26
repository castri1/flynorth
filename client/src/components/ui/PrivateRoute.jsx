import React from 'react';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route {...rest} render={(props) => (
      rest.logged
        ? <Component  {...props} />
        : <Redirect to="/login" />
    )} />
  );
}

const stateToProps = ({ auth }) => ({
  logged: auth.logged
});

export default connect(stateToProps, null)(PrivateRoute);