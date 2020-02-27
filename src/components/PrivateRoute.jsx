import React from "react";
import { Route, Redirect } from "react-router-dom";

const isLogin = () => {
  //   if (localStorage.getItem(TOKEN_KEY)) {
  //     return true;
  //   }
  //   return false;
  return true; // testing
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isLogin() ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
