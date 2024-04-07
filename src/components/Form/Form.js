import React, { useState } from 'react';
import './RegistrationWindow.css'; // Import the CSS file for styling

const RegistrationWindow = () => {
  const [showRegistration, setShowRegistration] = useState(false);

  const toggleRegistration = () => {
    setShowRegistration(!showRegistration);
  };

  return (
    <div className="container">
      <button onClick={toggleRegistration} className="button">Register</button>
      {showRegistration && (
        <div className="registration-window">
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Register</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default RegistrationWindow;
