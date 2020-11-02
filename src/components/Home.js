import React from 'react';
import Button from 'react-bootstrap/Button';

function Home(props) {
    return (
        <div id="home">
            <p id="hi-there">Hi there, my name is</p>
            <span id="name">Maxime Hutinet.</span>
            <p>I'm a <span className="highlight">software engineer</span> based in Geneva, Switzerland.</p>
            <Button id="contact-me-btn" variant="outline-primary">Contact me</Button>
        </div>
    )
}

export default Home;