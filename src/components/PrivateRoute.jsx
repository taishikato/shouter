import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AuthContext} from '../contexts/AuthContext.js';

const PrivateRoute = ({component: Component, ...rest}) => {
  const {auth} = useContext(AuthContext);
  return <Route {...rest} render={props => (auth ? <Component {...props} /> : <Redirect to="/" />)} />;
};

export default PrivateRoute;
