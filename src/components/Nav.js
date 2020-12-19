import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Button from 'react-bootstrap/Button';
import resume from '../files/CV.pdf'

export default class Nav extends Component {
    render() {
        return (
            <nav className="nav" id="navbar">
                <div className="nav-content">
                    <ul className="nav-items">
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={1000}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={1000}
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={1000}
                            >
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Button className="blue-btn" variant="outline-primary" href={resume} target="_blank">Resume</Button>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}