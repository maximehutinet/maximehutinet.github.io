import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 
function About(props) {
  return (
    <div id="about">
      <h1>About me.</h1>
          <Row>
            <Col> 
            <p>Howdy! I’m a <span className="highlight">software engineer</span> based in Geneva, Switzerland.</p>
            <p>
              I enjoy building tools that help people in their everyday life. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              My technological stack
              </p>
            </Col>
            <Col>
            </Col>

          </Row>
        
    </div>
  )
}
 
export default About;