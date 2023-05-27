import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/IMG1.jpg'
import IMG2 from '../../assets/IMG2.jpg'

export const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/servando18/react-portfolio-1" className='btn' target='_blank'>Github</a>
          <a href="https://dribbble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/servando18/react-portfolio-1" className='btn' target='_blank'>Github</a>
          <a href="https://dribbble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/servando18/react-portfolio-1" className='btn' target='_blank'>Github</a>
          <a href="https://dribbble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

      

      </div>
    </section>
  )
}


export default portfolio 