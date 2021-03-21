import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link, animateScroll as scroll } from "react-scroll";
import TypeIt from "typeit-react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import max from '../img/Max_Round.jpg'

function Home(props) {
    return (
        <section id="home">
            <Container>
                <Row>
                <Col sm={8}>
                <p id="hi-there">Hi there, my name is</p>
                <TypeIt id="name" className="blue-color">Maxime Hutinet.</TypeIt>
                
                <p>I'm a <span className="highlight">software engineer</span> based in Geneva, Switzerland.</p>
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}
    >
                    <Button className="mt-3" variant="outline-primary">Contact me</Button>
                </Link>
                </Col>
                <Col sm={4}>
                    <img src={max} id="img-max" class="img-fluid"></img>
                </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Home;