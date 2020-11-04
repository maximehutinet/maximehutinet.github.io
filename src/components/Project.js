import React from "react"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTerminal } from '@fortawesome/free-solid-svg-icons'
import TechStack from './TechStack.js'

 
function Project(props) {
    return (
      <div className="project">
        <Row className="project">
            <Col sm={5}>
                <h2 className="project-title">
                    {props.title}
                </h2>
                <p className="project-subtitle">
                    {props.subtitle}
                </p>
                <div className="project-descr">
                    <p>
                        {props.description}
                    </p>
                </div>
                <Row>
                    <Col>
                        <TechStack
                            technos={props.technos}
                        >

                        </TechStack>
                    </Col>
                    {props.github.length > 1 &&
                    <Col>
                        <a className="project-github" href={props.github} target="_blank" ><FontAwesomeIcon icon={faGithub}/></a>
                    </Col>
                    }
                    {props.client &&
                        <Col>
                            {props.client.map((p) =>
                                <img className="project-client-img" src={p} alt="" />
                            )}
                        </Col>
                    }
                </Row>              
            </Col>
            <Col sm={7} className="align-self-center">
                <img className="project-img" src={props.img} alt="" />
            </Col>
        </Row>
        
        
      </div>
    );
  }
   
export default Project;