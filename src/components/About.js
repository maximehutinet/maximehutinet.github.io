import React from "react"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TechStack from './TechStack.js'
 
function About(props) {
  return (
    <section id="about" className="gray-background">
      <h1>About me.</h1>
          <Row>
            <Col sm={8}> 
            <p>Howdy! I’m a <span className="highlight">software engineer</span> based in Geneva, Switzerland.</p>
            <p>
              I enjoy <span className="highlight">building tools</span> that help people in their everyday life. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <span className="highlight">eiusmod</span> 
               tempor incididunt ut labore et dolore magna aliqua. 
            </p>
            <p>
            My <span className="highlight">technological stack</span>
            </p>
            <Row>
              <Col>
                <TechStack
                  technos={['Java', 'C#', 'Python', 'JavaScript', 'HTML & CSS']}
                >
                </TechStack>
              </Col>
              <Col>
                <TechStack
                  technos={['Angular', 'ReactJS', 'NodeJS', 'Django', 'Flask', 'Thorntail']}
                >
                </TechStack>
              </Col>
            </Row>
            </Col>
          </Row>
    </section>
  )
}
 
export default About;