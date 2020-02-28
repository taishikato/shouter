import React from "react";
import { BrowserRouter, Switch } from 'react-router-dom';
import "./App.css";
import Timeline from './components/Timeline';
import Profile from './components/Profile'

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      {/* <PublicRoute restricted={false} component={LandingPage} path="/" exact /> */}
      <PrivateRoute component={Timeline} path="/timeline" exact />
      <PrivateRoute component={Profile} path="/profile" exact />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
