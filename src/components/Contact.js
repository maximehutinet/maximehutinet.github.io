import React from "react"
import Button from 'react-bootstrap/Button';
 
function Contact(props) {
  return (
    <section id="contact" className="gray-background">
      <h1>Contact.</h1>
      <p>
        Even though I'm currently not looking for any new opportunities, <span className="highlight">my mailbox is always open</span>. 
        If you have any project ideas, suggestions or if you simply want to say hi, don't hesitate to ping me !
      </p>
      <Button className="mt-3" variant="outline-primary" href="mailto:maxime@hutinet.ch">Email me</Button>
    </section>
  )
}
 
export default Contact;