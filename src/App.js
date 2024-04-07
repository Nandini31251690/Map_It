import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your components
import Logo from './components/Logo/Logo';
import Stats from './components/Stats/Stats';
import About from './components/About/About';
import Why from './components/Why/Why';
import Belt from './components/Belt/Belt';
import Faqs from './components/Faqs/Faqs';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard'; // Import the Dashboard component

function App() {
  // This component will be used for routes that should show the additional components
  const DefaultContainer = () => (
    <>
      <div className="logo"><Logo/></div>
      <div className="Event_stat"><Stats/></div>
      <div className="why_attend"><About/></div>
      <div className="Event_stat"><Why/></div>
      {/* <div className="spnsors"><Belt/></div> */}
      <div className="FAQs"><Faqs/></div>
      <Home />
    </>
  );

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* For login and signup, only the respective component is rendered */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Add a route for the Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* For the root path or any other specific path, render the Home component along with other components */}
          <Route path="/" element={<DefaultContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
