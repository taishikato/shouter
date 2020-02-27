import React from "react";
import { Route, Redirect } from "react-router-dom";

const isLogin = () => {
  //   if (localStorage.getItem(TOKEN_KEY)) {
  //     return true;
  //   }
  //   return false;
  return true; // testing
};

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={props =>
        isLogin() && restricted ? (
          <Redirect to="/timeline" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
