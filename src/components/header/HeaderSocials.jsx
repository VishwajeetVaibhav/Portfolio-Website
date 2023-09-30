import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='http://linkedin.com' target='_blank'><BsLinkedin/></a>
        <a href='http://github.com' target='_blank'><FaGithub/></a>
        <a href='http://instagram.com' target='_blank'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials