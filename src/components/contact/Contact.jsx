import React from 'react'
import './contact.css'
import {AiOutlineMail} from "react-icons/ai"
import {BsMessenger} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__options">
          <AiOutlineMail/>
          <h4>Email</h4>
          <h5>servandoperez5556@gmail.com</h5>
          <a href="mailto:servandoperez5556@gmail.com" target={'_blank'}>Send A Message</a>
        </article>

        <article className="contact__options">
          <BsMessenger/>
          <h4>Messenger</h4>
          <h5>Servando Valenzuela</h5>
          <a href="https://m.me/servando.valenzuela.7" target={'_blank'}>Send A Message</a>
        </article>

        <article className="contact__options">
          <AiFillTwitterCircle/>
          <h4>Twitter</h4>
          <h5>S_valenz_</h5>
          <a href="https://twitter.com/S_valenz_" target={'_blank'}>Send A Message</a>
        </article>

        </div>
          {/* END OF Contact OPTIONS */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>    
      </div>
    </section>
  )
}

export default Contact