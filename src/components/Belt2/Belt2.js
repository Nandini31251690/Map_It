import React from 'react';
import './Belt2.css'; // Import your CSS file

const images = [
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png',
];

const Belt2 = () => {
  return (
    <div className="slider">
      <div className="slide-track">
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} height="100" width="250" alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Belt2;
