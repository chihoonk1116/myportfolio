import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import './footer.scss'

const Footer = () => {
  return (
    <div className='container footer-container'>
      <div className="border-div" />
      <p className='footer-title'>Chihoon Kim Portfolio</p>
      <div className="social-links">
        <FaGithub/>
        <FaLinkedin/>
      </div>
      <p className='copyright'>© {new Date().getFullYear()} Chihoon. All rights reserved.</p>
    </div>
  )
}

export default Footer
