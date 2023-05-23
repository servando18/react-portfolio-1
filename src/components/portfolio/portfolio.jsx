import React from 'react'
import './portfolio.css'
import img1 from '../../assets/img1.jpg'

export const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com/servando18/react-portfolio-1" className='btn' target='_blank'>Github</a>
          <a href="https://dribbble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
      </div>
    </section>
  )
}


export default portfolio 