import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/IMG1.jpg'
import IMG2 from '../../assets/IMG2.jpg'
import IMG3 from '../../assets/IMG3.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'under construction',
    github: 'https://github.com',
    demo: ''
  },
  {
    id: 2,
    image: IMG2,
    title: 'coming soon',
    github: 'https://github.com',
    demo: ''
  },
  {
    id: 3,
    image: IMG3,
    title: 'under construction cat',
    github: 'https://github.com',
    demo: ''
  }
]



export const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
          <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
            )
          })
        }

      </div>
    </section>
  )
}


export default portfolio 


      