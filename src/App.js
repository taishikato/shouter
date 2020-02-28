import React , { useEffect }from "react";
import { BrowserRouter, Switch } from 'react-router-dom';
import "./App.css";
import {LoginModal} from './components/LoginModal/LoginModal.jsx';
import Timeline from './components/Timeline';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  useEffect(()=>{

  })
  return (
    <AuthContextProvider>
      <BrowserRouter>
      <Switch>
        <PublicRoute restricted={false} component={LoginModal} path="/" exact />
        <PrivateRoute component={Timeline} path="/timeline" exact />
        {/* <PrivateRoute component={ProfilePage} path="/profile" exact /> */}
      </Switch>
    </BrowserRouter>
  </AuthContextProvider>
  );
}

export default App;
