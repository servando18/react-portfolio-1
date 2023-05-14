import React from 'react'
import './experience.css'
import {IoIosCheckmarkCircle} from 'react-icons/io'

const experience = () => {
  return (
    <section id='experience'>
      <h5>The skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <IoIosCheckmarkCircle />
            <h4>HTML</h4>
            <small className="text-light">Experienced</small>
          </article>

          <article className='experience__details'>
            <IoIosCheckmarkCircle />
            <h4>CSS</h4>
            <small className="text-light">Experienced</small>
          </article>

          <article className='experience__details'>
            <IoIosCheckmarkCircle />
            <h4>JavaScript</h4>
            <small className="text-light">Intermediate</small>
          </article>

          <article className='experience__details'>
            <IoIosCheckmarkCircle />
            <h4>Bootstrap</h4>
            <small className="text-light">Experienced</small>
          </article>

          <article className='experience__details'>
            <IoIosCheckmarkCircle />
            <h4>React</h4>
            <small className="text-light">Experienced</small>
          </article>

        </div>
      </div>
          <div className="container__backend">

          </div>
      </div>

    </section>
  )
}

export default experience