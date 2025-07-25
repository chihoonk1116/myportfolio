import React from 'react'
import CopyEmailButton from '../../components/copyEmailButton/CopyEmailButton'

import './contact.scss'
import { Globe } from '../../components/globe/Globe'

const Contact = () => {
  return (
    <section className='relative'>
      <div className='container contact-container'>
        <div className="contact-wrapper">
          <h2>Contact</h2>
          <div className="contact-form_wrapper">
            <CopyEmailButton/>
          </div>
        </div>
      </div>
      <figure className='globe_wrapper'>
        {/* <Globe/> */}
      </figure>
    </section>
    
  )
}

export default Contact
