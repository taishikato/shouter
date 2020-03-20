import React, {useEffect, useContext, useState} from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import './App.css';
import {LoginPage} from './components/LoginPage/LoginPage';
import Timeline from './components/Timeline';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import firebase from './plugins/firebase';
import {AuthContext} from './contexts/AuthContext';

function App() {
  const [loading, setLoading] = useState(false);
  const {login} = useContext(AuthContext);
  useEffect(() => {
    setLoading(true);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        login(user);
      }
      setLoading(false);
    });
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute restricted={true} loading={loading} component={LoginPage} path="/" exact />
        <PrivateRoute component={Timeline} path="/timeline" exact />
        <PrivateRoute component={Profile} path="/profile" exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
