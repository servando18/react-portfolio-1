import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import{BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/servandovalenzuela'target='_blank'><BsLinkedin size={30} color='grey'/></a>
        <a href='https://github.com/servando18'target='_blank'><BsGithub size={30} color='grey'/></a>
        <a href='https://twitter.com/S_valenz_'target='_blank'><BsTwitter size={30} color='grey'/></a>
    </div>
  )
}

export default HeaderSocials