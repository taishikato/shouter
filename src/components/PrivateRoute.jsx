import React , { useContext }from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext.js';

const isLogin = () => {
  //   if (localStorage.getItem(TOKEN_KEY)) {
  //     return true;
  //   }
  //   return false;
  return true; // testing
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { auth } = useContext(AuthContext);
  console.log(auth)
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
