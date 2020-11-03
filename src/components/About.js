import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import max from '../img/Max_Round.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTerminal } from '@fortawesome/free-solid-svg-icons'
 
function About(props) {
  return (
    <div id="about">
      <h1 className="section">About me.</h1>
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
                <ul className="tech-stack-list">
                  <li>
                    <FontAwesomeIcon className="blue-color" icon={faTerminal} />
                    Python
                  </li>
                  <li>
                    <FontAwesomeIcon className="blue-color" icon={faTerminal} />
                    C#
                  </li>
                  <li>
                    <FontAwesomeIcon className="blue-color" icon={faTerminal} />
                    Java
                  </li>
                  <li>
                    <FontAwesomeIcon className="blue-color" icon={faTerminal} />
                    JavaScript
                  </li>
                  <li>
                    <FontAwesomeIcon className="blue-color" icon={faTerminal} />
                    HTML & CSS
                  </li>
                </ul>
              </Col>
              <Col>
                <ul className="tech-stack-list">
                  <li>
                    <FontAwesomeIcon className="blue-color" icon={faTerminal} />
                    ReactJS
                  </li>
                  <li>
                    <FontAwesomeIcon className="blue-color" icon={faTerminal} />
                    NodeJS
                  </li>
                  <li>
                    <FontAwesomeIcon className="blue-color" icon={faTerminal} />
                    Django
                  </li>
                  <li>
                    <FontAwesomeIcon className="blue-color" icon={faTerminal} />
                    Flask
                  </li>
                  <li>
                    <FontAwesomeIcon className="blue-color" icon={faTerminal} />
                    Spring Boot
                  </li>
                </ul>
              </Col>
            </Row>
            </Col>
            <Col sm={4}>
              <img src={max} class="img-fluid"></img>
            </Col>

          </Row>
        
    </div>
  )
}
 
export default About;