import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import ProfilePageTop from "./components/profilePageTop/ProfilePageTop";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <ProfilePageTop />
    </div>
  );
}

export default App;
