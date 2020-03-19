import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AuthContext} from '../contexts/AuthContext';
import Loader from './Loader';

const PublicRoute = ({component: Component, restricted, loading, ...rest}) => {
  const {auth} = useContext(AuthContext);
  if (loading) return <Loader />;
  return (
    <Route {...rest} render={props => (auth && restricted ? <Redirect to="/timeline" /> : <Component {...props} />)} />
  );
};

export default PublicRoute;
