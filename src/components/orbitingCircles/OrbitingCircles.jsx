import React from 'react'

import './orbitingCircles.scss'
import { icons } from '../../constants'



const OrbitingCircles = ({radius}) => {

  const numIcons = icons.length
  const baseAngleStep = 360 / numIcons


  return (
    <div 
      className='orbit-container' 
      style={{'width' : radius * 2, 'height' : radius * 2}}
    >
      <div className="orbit-circle">
        {icons.map((icon, index) => {
          const currentAngle = index * baseAngleStep
          return (
            <div  
              key={index} 
              className='orbit-circle_item' 
              style={{
                '--angle': currentAngle,
                '--radius' : radius,
              }} >
                <img
                  className='orbit-circle_icon' 
                  src={icon} alt={`icon ${index+1}`} 
                />
            </div>
          )

        })}
      </div>
    </div>
  )
}

export default OrbitingCircles
