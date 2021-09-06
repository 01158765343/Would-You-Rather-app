
// import { isAuthenticated } from './api'

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = ({
  path,
  component: Component,
  render,
  loggedIn,
  id,
  exact,
  login,
  
}) => {
  return (
    <Route
      path={path}
      id={id}
      exact={exact}
      login={login}
      render={(props) => {
        if (loggedIn ===true) {
          return Component ? <Component   /> : render(props)
        }
        return (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        );
      }}
    />
  );
};

const mapStateToProps = (state) => {
  const  {loggedIn}  = state.rootId;
  return {
    loggedIn
  };
};

export default connect(mapStateToProps)(ProtectedRoute);