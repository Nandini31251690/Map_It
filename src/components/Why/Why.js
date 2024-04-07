import React, { useEffect, useState } from 'react';
import './Why.css';

function Why() {
  const [enlarge, setEnlarge] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) { // Adjust the scroll position trigger as needed
        setEnlarge(true);
      } else {
        setEnlarge(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="containerW">
      <h1 className="headingW">Why should You Attend ?</h1>
      <p className="subheadingW">E-Summit has a range of events, competitions, panel discussions,
networking, and pitching opportunities for every vertical of our entrepreneurial society.</p>
      <div className="image-container">
        <img src="screenshot (100).png" alt="Image 1" className={`image ${enlarge && 'enlarged'}`} />
        <img src="screenshot (100)1.png" alt="Image 2" className={`image ${enlarge && 'enlarged'}`} />
        <img src="screenshot (100)2.png" alt="Image 3" className={`image ${enlarge && 'enlarged'}`} />
        <img src="screenshot (100)4.png" alt="Image 4" className={`image ${enlarge && 'enlarged'}`} />
      </div>
    </div>
  );
}

export default Why;
