import React , { useEffect, useContext }from "react";
import { BrowserRouter, Switch } from 'react-router-dom';
import "./App.css";
import {LoginModal} from './components/LoginModal/LoginModal.jsx';
import Timeline from './components/Timeline';
import Profile from './components/Profile'

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import firebase from './plugins/firebase';
import { AuthContext } from './contexts/AuthContext';

function App() {
  const { login } = useContext(AuthContext);
  useEffect(()=>{
    firebase.auth().onAuthStateChanged( user => {
      if(user) {
        login(user)
      }
    })
  },[])
  return (
    <BrowserRouter>
    <Switch>
      <PublicRoute restricted={true} component={LoginModal} path="/" exact />
      <PrivateRoute component={Timeline} path="/timeline" exact />
      <PrivateRoute component={Profile} path="/profile" exact />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
