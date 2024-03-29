import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

export const header = () => {
  return (
    <header>
       <div className="container header__container">
        <h3>Hello I'm </h3>
        <h1>Servando Valenzuela</h1>
        <h2 className="text-light">Fullstack Web Developer MERN Stack</h2>
        <CTA />
        <HeaderSocials /> 

        <div className="me">
          <img src={ME} alt="me"/>
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
       </div>
    </header>
  )
}


export default header