import React from 'react';
import './Base.css'; // Import your CSS file

const Base = () => {
  return (
    <div className="BASEcontainer">
  <div className="icons-container">
    <a href="https://twitter.com/ecelliitbhu">
      <img src="/twitter.png" alt="Twitter Icon" className="icon" />
    </a>
    <a href="https://www.instagram.com/ecelliitbhu/">
      <img src="/instagram.png" alt="Instagram Icon" className="icon" />
    </a>
    <a href="https://www.linkedin.com/company/ecelliitbhu/">
      <img src="/linkedin.png" alt="LinkedIn Icon" className="icon" />
    </a>
    <a href="https://www.youtube.com/@ecelliitbhu">
      <img src="/youtube.png" alt="YouTube Icon" className="icon" />
    </a>
  </div>
      <div className="rectangle">
        <div className="text" style={{ color: '#FFFFFF' }}>E-Cell IIT-BHU</div>
        <div className="text" style={{ color: '#FFFFFF' }}>Startup Weekend Varanasi</div>
        <div className="text" style={{ color: '#FFFFFF' }}>Digital Startup Summit</div>
        <div className="text" style={{ color: '#FFFFFF' }}>Campus Ambassador</div>
      </div>
      <div className="description">
        <p>
          <span style={{ color: '#9511CD' }}>E - Cell, IIT BHU Varanasi</span> is a non-profit organization established to nurture the entrepreneurial culture in our college, and open doors for the next generation of startup founders, entrepreneurs and change makers to leave behind a legacy!
        </p>
        <p>© 2024 E-Cell IIT BHU</p>
      </div>
    </div>
  );
};

export default Base;
