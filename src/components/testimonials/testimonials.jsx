import React from 'react'
import './testimonials.css'
import IMG4 from '../../assets/IMG4.png'
import IMG5 from '../../assets/IMG4.png'


const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className='testimonial'>
      <div className="client__avatar">
          <img src="IMG4" alt="IMGFOUR" />
        
        </div>
       </article>
      </div>
    </section>
  )
}

export default testimonials