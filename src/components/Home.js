import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link, animateScroll as scroll } from "react-scroll";
import TypeIt from "typeit-react";

function Home(props) {
    return (
        <section id="home">
            <p id="hi-there">Hi there, my name is</p>
            <TypeIt id="name" className="blue-color">Maxime Hutinet.</TypeIt>
            
            <p>I'm a <span className="highlight">software engineer</span> based in Geneva, Switzerland.</p>
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
>
                <Button id="contact-me-btn" variant="outline-primary">Contact me</Button>
            </Link>
        </section>
    )
}

export default Home;