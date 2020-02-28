import React , { useEffect, useContext }from "react";
import { BrowserRouter, Switch } from 'react-router-dom';
import "./App.css";
import {LoginModal} from './components/LoginModal/LoginModal.jsx';
import Timeline from './components/Timeline';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import firebase from './plugins/firebase';
import { AuthContext } from './contexts/AuthContext';

function App() {
  const { auth, login } = useContext(AuthContext);
  useEffect(()=>{
    firebase.auth().onAuthStateChanged( user => {
      console.log('user from AuthStateChanged',user)
      if(user) {
        login(user)
        console.log('logged')
      }
    })
  },[])
  return (
    <BrowserRouter>
    <Switch>
      <PublicRoute restricted={true} component={LoginModal} path="/" exact />
      <PrivateRoute component={Timeline} path="/timeline" exact />
      {/* <PrivateRoute component={ProfilePage} path="/profile" exact /> */}
    </Switch>
  </BrowserRouter>
  );
}

export default App;
