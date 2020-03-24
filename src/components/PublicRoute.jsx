import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AuthContext} from '../contexts/AuthContext';
import {LocationContext} from '../contexts/LocationContext';
import Loader from './Loader';

const PublicRoute = ({component: Component, restricted, loading, ...rest}) => {
  const {auth} = useContext(AuthContext);
  const {currLocation} = useContext(LocationContext);

  if (loading) return <Loader />;

  return (
    <Route
      {...rest}
      render={props => (auth && restricted ? <Redirect to={currLocation} /> : <Component {...props} />)}
    />
  );
};

export default PublicRoute;
