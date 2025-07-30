import React from 'react'
import './skillCard.scss'
import {}  from '../../constants'

const SkillCard = ({skillName, desc}) => {
  return (
    <div className='card skillcard'>
      <div className="card-top">
        <h5>{skillName}</h5>
      </div>
      <div className="card-bottom">
        <p>
          {desc}
        </p>
      </div>
    </div>
  )
}

export default SkillCard
