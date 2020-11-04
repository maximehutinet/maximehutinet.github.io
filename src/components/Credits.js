import React from "react"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
 
function Credits(props) {
  return (
    <Row className="footer">
      <Col align="center">
        <a href={props.gitrepo} target="_blank">Built & Designed by <span className="highlight">Maxime Hutinet</span> with <span className="highlight">ReactJS</span></a>
      </Col>
    </Row>
  );
}
 
export default Credits;