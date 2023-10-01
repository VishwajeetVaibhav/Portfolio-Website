import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/vishwajeet-vaibhav-120362167/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/VishwajeetVaibhav' target='_blank'><FaGithub/></a>
        <a href='https://www.instagram.com/vaibhavvishwajeet/' target='_blank'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials