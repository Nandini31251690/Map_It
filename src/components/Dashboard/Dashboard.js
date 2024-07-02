import React from 'react';
import './Dashboard.css'; 
import Maps from '../Maps/Maps';
import Base from '../Base/Base';
import Go_Back from '../Go_back/Go_back';
const eventsData = [
  {
    imgSrc: "casex.png",
    alt: "CaseX",
    description1: "LT3",
    description2: " 9:00AM onwards",
  heading:"CaseX",
    buttonText: ""
  },
  {
    imgSrc: "design.png",
    alt: "Design Rush",
    description1: "LT3",
    description2: "9:00AM onwards",
   heading: "Design Rush"
  },
  {
    imgSrc: "expo.png",
    alt: "Startup Expo",
    description1: "Rajputana Ground",
    description2: "8:00AM onwards",
    heading: "Startup Expo"
  },
  {
    imgSrc: "xpanse.png",
    alt: "Xpanse",
    description1: "LT3",
    description2: "10:00AM onwards",
    heading: "Xpanse"
  },
  {
    imgSrc: "stratify.png",
    alt: "Stratify",
    description1: "ABLT1",
    description2: "1:30PM onwards",
 heading: "Stratify"
  },
  {
    imgSrc: "million.png",
    alt: "Million Dollar Pitch",
    description1: "E-HALL",
    description2: "1:30PM onwards",
   heading: "Million Dollar Pitch",
  },

];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Go_Back/>
      <div className="dist">
      {/* Place the Logo component wherever you want it to appear */}
      <h1 className="heading_st">Startup Events</h1>
      <div className="row">
        {/* Mapping through eventsData to render each event */}
        {eventsData.map((event, index) => (
          <div className="column" key={index}>
            <div className="event-container">
              <img src={event.imgSrc} alt={event.alt} className="event-img" />
              <div className="event-details">
                <h2 className="event-heading">{event.heading}</h2>
                
                <p className="event-description2">{event.description1}</p>
                <p className="event-description1">{event.description2}</p>
              </div>
            </div>
           
          </div>
        ))}
      </div></div>
       <Maps/> 
      <Base/>
    </div>
  );
};

export default Dashboard;
