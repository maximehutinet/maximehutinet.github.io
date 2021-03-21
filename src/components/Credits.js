import React from "react"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
 
function Credits(props) {
  return (
    <section className="footer gray-background">
      <Row>
        <Col align="center">
          <a href={props.gitrepo} target="_blank">Built & Designed by <span className="highlight">Maxime Hutinet</span> with <span className="highlight">ReactJS</span></a>
        </Col>
      </Row>
      <Row>
        <Col align="center">
          <a className="linkedin-logo" href={props.linkedin} target="_blank" >
            <FontAwesomeIcon icon={faLinkedin}/>
          </a>
        </Col>
      </Row>
      
    </section>
  );
}
 
export default Credits;