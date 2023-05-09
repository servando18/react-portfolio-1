import React from 'react'
import './about.css'
import me2 from '../../assets/me2.jpg'
import {FaAward} from 'react-icons/fa'
import {HiUsers} from 'react-icons/hi'
import {MdOutlineFolderSpecial} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me2">
          <div className="about__me2-image">
            <img src={me2} alt="about Image" />  
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ years Developing</small>
            </article>

            <article className='about__card'>
              <HiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>2+ clients</small>
            </article>

            <article className='about__card'>
              <MdOutlineFolderSpecial className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>     
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quasi officia est odit ab doloribus.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Connect</a>
        </div>
      </div>
    </section>
  )
}

export default About