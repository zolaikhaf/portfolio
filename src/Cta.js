import './Cta.css';

import typingVideo from './typing.mp4';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Cta = () => {

  return (
    
    <Container id="CtaContainer">

      <Row>

        <Col>

          <div id="CtaAnimationContainer">
            
            <div id="CtaAboutMeContainer">

              <h1 id="MainGreeting">Hi&#44; I&#39;m Zolaikha</h1>
              <h5 id="MainTagline">Software Engineer &amp; Experienced Leader</h5>
            
              <Button variant="light" href="#MyWork" size="lg">More About Me</Button>

            </div>
            
            <div id="CtaMainAnimationOverlay"></div>

            <video id="CtaMainAnimation" playsInline autoPlay muted loop>
              <source src={typingVideo} type="video/mp4"/>
            </video>

          </div>

        </Col>

      </Row>

    </Container>

  );
};

export default Cta;
