import skillSectionConfig from './skills_section.json';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SkillSection = () => {

  return (

      <div id="MySkills" className="body-section">

          <Container fluid>
            <Col>
              <Row className="section-heading-container">

                <div className="section-heading">
                  <div className="section-title">Some Things I Know...</div>
                  <p className="section-description">Experienced in leading teams and getting my hands dirty developing mobile, web-based, and desktop applications in an Agile environment. See below for the languages and tools I have experience with.</p>
                </div>
              </Row>
            </Col>
          </Container>

          <div className="section-container full-width">

            <Container>

              <Row>


                {skillSectionConfig &&
                  skillSectionConfig.map(({ skill, imageUrl, imageAlt, id }) => (

                      <Col key={id} xs="6" lg="2">
                        <div className="software-icon-container">
                            <div className="software-icon"><img src={imageUrl} loading="lazy" alt="imageAlt" /></div>
                            <div className="software-icon-text">{skill}</div>
                        </div>
                      </Col>  

                  ))}


              </Row>

              <Row>


              </Row>

            </Container>   

          </div>



      </div>


  );
}

export default SkillSection;
