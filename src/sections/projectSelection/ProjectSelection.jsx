import React from 'react'
import ProjectCard from '../../components/projectCard/ProjectCard'
import AnimatedHeader from '../../components/animatedHeader/AnimatedHeader'

import imageSrc from '/assets/coding-pov.png'
import aws from '/assets/icons/aws.png'
import js from '/assets/icons/js.png'
import html5 from '/assets/icons/html5.png'

import { icons } from '../../constants'

import './projectSelection.scss'


const ProjectSelection = () => {

  function getSkillSets(keys){
    return icons.filter(icon => keys.includes(icon.id))
  }

  const description = [
    'Lorem ipsum dolor sit amet.',
    'Lorem ipsum dolor sit amet.',
    'Lorem ipsum dolor sit amet.',
  ]
  
  const skillSets = [aws, js, html5]

  return (
    <section id='project-selection_section'>
      <div className="container project-container">
        <AnimatedHeader title={"Project"} subTitle={''}/>
        <div className="project-selection_cards-list">
          <div className="project-selection_cards_card-wrapper">
            <ProjectCard 
              source={imageSrc} 
              projectName={"Exam Simulator"}  
              description={description}
              skillSets={getSkillSets(['aws', 'js', 'html'])}
            />
          </div>
          
  
        </div>
      </div>
    </section>
  )
}

export default ProjectSelection
