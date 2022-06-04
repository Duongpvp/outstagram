import React from "react";
import "./App.css";
import Home from './pages/Home/Home.jsx'
import Profile from './pages/Profile/Profile.jsx'
import Auth from './pages/Auth/Auth.jsx'
function App() {
  return (
    <div className="App">
      <div className="blur" style={{top: '-20%', right: '0'}}></div>
      <div className="blur" style={{top: '20%', left: '-20%'}}></div>
      <div className="blur" style={{bottom: '-20%', right: '20%'}}></div>
      <Home/>
      <Profile/>
      <Auth/>
    </div>
  );
}

export default App;
