import React from 'react';
import { Link } from 'react-router-dom'; 
import './Go_back.css';
const GoBack = () => {
  return (
    <div className="go-back">
      <Link to="/" className="go-back-button">Home</Link>
    </div>
  );
};

export default GoBack;
