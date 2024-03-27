import React, { useEffect } from "react";

import workSectionConfig from './work_section.json';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const WorkSection = () => {

  useEffect(() => {

    document.querySelector('.connector-icon').addEventListener('click', scrollToNextSection);

    return () => {
      document.querySelector('.connector-icon').removeEventListener('click', scrollToNextSection);
    };

  });

  const scrollToNextSection = (e) => {

        const workSectionConnector = document.querySelector('.connector-icon');

        const currentConnectorPosition = workSectionConnector.getBoundingClientRect();
        const currentConnectorPositionTop = currentConnectorPosition.top;
        const currentConnectorPositionBottom = currentConnectorPosition.bottom;

        const workSections = document.querySelectorAll('.work-example-container');

        for (var i = 0; i < workSections.length; i++) {
          
          const sectionBounds = workSections[i].getBoundingClientRect();

          const lastVisibleSectionTop = sectionBounds.top;
          const lastVisibleSectionBottom = sectionBounds.bottom;

          if (lastVisibleSectionTop < currentConnectorPositionTop && lastVisibleSectionBottom > currentConnectorPositionBottom) {

            if (window.screen.height/2 < lastVisibleSectionTop) { //if connector is at the top half of the section ie not showing the whole section
              workSections[i].scrollIntoView();
            }
            else if (i === workSections.length - 1) { //if last block in section, go to next section
              workSections[i].closest('.body-section').nextSibling.scrollIntoView();
              break;
            }
            else {
              workSections[i].nextSibling.scrollIntoView();
              break;
            }
          }
        }

  };


  return (

      <div id="MyWork" className="body-section">

          <Container fluid>
            <Col>
              <Row className="section-heading-container">

                <div className="section-heading">
                  <div className="section-title">Beautiful UI &#43; Intuitive UX</div>
                  <p className="section-description">Experienced in creating wireframes, mockups, and rapid prototypes for both interactive administration tools as well dyanmic landing pages, forms, and mobile apps.</p>
                </div>

              </Row>
            </Col>
          </Container>

          <div id="MyWorkContainer">


          {workSectionConfig &&
            workSectionConfig.map(({ title, description, imageUrl, imageAlt, id }) => (

                <Container key={id} className="work-example-container">
                  <Col>
                    <Row>    

                      <div className="section-container">

                        <div className="body-description">
                          <div className="body-title">
                            <h1>{title}</h1>
                          </div>

                          <div>
                            <p>{description}</p>   
                          </div>
                        </div>


                        <div className="body-supporting-image">
                        
                          <div>
                            <img src={imageUrl} loading="lazy" alt={imageAlt} />    
                          </div>
                        
                        </div>

                      </div>

                    </Row>
                  </Col>
                </Container>     

            ))}

            <Container>
              <Row>
                  <div className="connector">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000" className="bi bi-arrow-down-circle-fill connector-icon" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
                    </svg>
                  </div>   
              </Row>
            </Container>

          </div>
      </div>


  );
}

export default WorkSection;
