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
          <img src={IMG4} alt="IMGFOUR" />
          <h5>Regen</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, omnis. Totam aspernatur ex a veniam qui fuga, mollitia corrupti architecto dolorum voluptatibus delectus, necessitatibus veritatis est alias consequuntur expedita repudiandae.
          </small>
        </div>
       </article>

       <article className='testimonial'>
      <div className="client__avatar">
          <img src={IMG4} alt="IMGFOUR" />
          <h5>Regen</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, omnis. Totam aspernatur ex a veniam qui fuga, mollitia corrupti architecto dolorum voluptatibus delectus, necessitatibus veritatis est alias consequuntur expedita repudiandae.
          </small>
        </div>
       </article>
       
      </div>
    </section>
  )
}

export default testimonials