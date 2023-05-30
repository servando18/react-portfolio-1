import React from 'react'
import './testimonials.css'
import IMG4 from '../../assets/IMG4.png'
import IMG5 from '../../assets/IMG5.png'


const data = [
{
  avatar: IMG4,
  name: 'regen',
  review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum repellat soluta aspernatur deserunt id maiores laudantium. Totam fugit expedita quam'
},

{
  avatar: IMG5,
  name: 'next',
  review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, culpa.'
}
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {
         data.map(({avatar, name, review}, index) => {
          return (
            <article key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
             </article>
          )
         }) 
        }
     </div>
    </section>
  )
}

export default testimonials