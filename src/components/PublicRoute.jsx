import React , { useContext }from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const { auth } = useContext(AuthContext) ;
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={props =>
        auth && restricted ? (
          <Redirect to="/timeline" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
