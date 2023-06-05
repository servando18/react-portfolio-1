import React from 'react'
import './contact.css'
import {AiOutlineMail} from "react-icons/ai"
const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__options">
          <AiOutlineMail/>
          <h5>servandoperez5556@gmail.com</h5>
          <a href="mailto:servandoperez5556@gmail.com">Send A Message</a>
        </article>
        </div>
          {/* END OF Contact OPTIONS */}
        <form action=""></form>    
      </div>
    </section>
  )
}

export default Contact