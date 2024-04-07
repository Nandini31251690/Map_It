import React from 'react';
import './Stats.css'; // Import your CSS file

const Box = ({ text }) => {
  return (
    <div className="box">
      {text}
    </div>
  );
};

const Container = () => {
  return (
    <div className="containerS">
      <h1 className="headingS">Key Event Statistics</h1>
      <div className="box-containerS">
      <Box text={
  <>
    <span className="white_text">250+</span><br />
    <span className="purple text">STARTUPS</span>
  </>
} />
 <Box text={
  <>
    <span className="white_text">8000+</span><br />
    <span className="purple text">ATTENDEE</span>
  </>
} />
 <Box text={
  <>
    <span className="white_text">20+</span><br />
    <span className="purple text">GUEST SPEAKERS</span>
  </>
} />
 <Box text={
  <>
    <span className="white_text">15+</span><br />
    <span className="purple text">INVESTORS</span>
  </>
} />
 <Box text={
  <>
    <span className="white_text">10+</span><br />
    <span className="purple text">EVENTS</span>
  </>
} />
 <Box text={
  <>
    <span className="white_text">50+</span><br />
    <span className="purple text">PARTENERS</span>
  </>
} />
        
      </div>
    </div>
  );
};

export default Container;
