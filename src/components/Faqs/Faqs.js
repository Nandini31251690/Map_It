import React, { useState } from 'react';
import './Faqs.css'; 

function Faqs() {
  const [openAccordion, setOpenAccordion] = useState('');

  const toggleAccordion = (accordionId) => {
    setOpenAccordion(openAccordion === accordionId ? '' : accordionId);
  };

  return (
    <div><h2 className="hediii">Frequently Asked Questions</h2>
    <div className="accordion" id="accordionPanelsStayOpenExample">
      
      {/* Accordion Item #1 */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
          <button
            className={`accordion-button ${openAccordion === 'collapseOne' ? 'active' : ''}`}
            type="button"
            onClick={() => toggleAccordion('collapseOne')}
          >
            <strong>When and where is the event?</strong>
            <span className={`arrow-icon ${openAccordion === 'collapseOne' ? 'up' : 'down'}`}>&#9660;</span>
          </button>
        </h2>
        <div id="collapseOne" className={`accordion-collapse collapse ${openAccordion === 'collapseOne' ? 'show' : ''}`} aria-labelledby="panelsStayOpen-headingOne">
          <div className="accordion-body">
            The event is taking place from 2nd to 4th Feb 2024 in IIT(BHU) Varanasi. However, some of the events demand submissions prior to the main event taking place.
          </div>
        </div>
      </div>

      {/* Accordion Item #2 */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
          <button
            className={`accordion-button ${openAccordion === 'collapseTwo' ? 'active' : ''}`}
            type="button"
            onClick={() => toggleAccordion('collapseTwo')}
          >
            <strong>How will I be notified about the updates?</strong>
            <span className={`arrow-icon ${openAccordion === 'collapseTwo' ? 'up' : 'down'}`}>&#9660;</span>
          </button>
        </h2>
        <div id="collapseTwo" className={`accordion-collapse collapse ${openAccordion === 'collapseTwo' ? 'show' : ''}`} aria-labelledby="panelsStayOpen-headingTwo">
          <div className="accordion-body">
            You will be notified about all the updates via your registered email id. For urgent updates, you will be informed via phone call as well.
          </div>
        </div>
      </div>

      {/* Accordion Item #3 */}
      {/* Add more accordion items as needed */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
          <button
            className={`accordion-button ${openAccordion === 'collapseTwo' ? 'active' : ''}`}
            type="button"
            onClick={() => toggleAccordion('collapseTwo')}
          >
            <strong>What topics are covered in the E-Summit sessions?</strong>
            <span className={`arrow-icon ${openAccordion === 'collapseTwo' ? 'up' : 'down'}`}>&#9660;</span>
          </button>
        </h2>
        <div id="collapseTwo" className={`accordion-collapse collapse ${openAccordion === 'collapseTwo' ? 'show' : ''}`} aria-labelledby="panelsStayOpen-headingTwo">
          <div className="accordion-body">
          E-Summits often cover a wide range of topics related to entrepreneurship, technology, and business. Common themes include startup strategies, digital innovation, leadership development, investment trends, and emerging technologies. The specific agenda may vary, so it's advisable to check the event schedule or program to ensure the sessions align with your interests and goals.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
          <button
            className={`accordion-button ${openAccordion === 'collapseTwo' ? 'active' : ''}`}
            type="button"
            onClick={() => toggleAccordion('collapseTwo')}
          >
            <strong>Will there be any networking event in the Summit?</strong>
            <span className={`arrow-icon ${openAccordion === 'collapseTwo' ? 'up' : 'down'}`}>&#9660;</span>
          </button>
        </h2>
        <div id="collapseTwo" className={`accordion-collapse collapse ${openAccordion === 'collapseTwo' ? 'show' : ''}`} aria-labelledby="panelsStayOpen-headingTwo">
          <div className="accordion-body">
          Yes, the E-Summit 24 will host a special networking event that will engage all the investors on board with esteemed professionals, startups and participants.
          </div>
        </div>
      </div>


      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
          <button
            className={`accordion-button ${openAccordion === 'collapseTwo' ? 'active' : ''}`}
            type="button"
            onClick={() => toggleAccordion('collapseTwo')}
          >
            <strong>How can a startup participate in the Summit?</strong>
            <span className={`arrow-icon ${openAccordion === 'collapseTwo' ? 'up' : 'down'}`}>&#9660;</span>
          </button>
        </h2>
        <div id="collapseTwo" className={`accordion-collapse collapse ${openAccordion === 'collapseTwo' ? 'show' : ''}`} aria-labelledby="panelsStayOpen-headingTwo">
          <div className="accordion-body">
          Startups can become a part of the E-Summit 2024 through the Startup Expo - where they can set up their stalls for live demos of their product, and also through multiple events including the flagship event - The Million Dollar Pitch, where you get the chance to pitch your startup to a expert panel of investors from India's leading VCs
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
          <button
            className={`accordion-button ${openAccordion === 'collapseTwo' ? 'active' : ''}`}
            type="button"
            onClick={() => toggleAccordion('collapseTwo')}
          >
            <strong>Will accommodation be provided for interested attendees?</strong>
            <span className={`arrow-icon ${openAccordion === 'collapseTwo' ? 'up' : 'down'}`}>&#9660;</span>
          </button>
        </h2>
        <div id="collapseTwo" className={`accordion-collapse collapse ${openAccordion === 'collapseTwo' ? 'show' : ''}`} aria-labelledby="panelsStayOpen-headingTwo">
          <div className="accordion-body">
          Yes, the team has dedicatedly made arrangements for the stay of all attendees and proper hospitality will be provided, including food. You can purchase the pass from above.
          </div>
        </div>
      </div>


    </div>
    </div>
  );
}

export default Faqs;
