import React from 'react'
import {TimeLine} from '../../components/timeLine/TimeLine'
import { experiences } from '../../constants'
import './experience.scss'

const Projects = () => {
  return (
    <section className='experience-section'>
      <div className="container projects-container">
        <TimeLine data={experiences} />
        {/* <TimeLine2 /> */}
      </div>
      
    </section>
  )
}

export default Projects
