import React from 'react'
import ProjectCard from '../../components/projectCard/ProjectCard'

import imageSrc from '/assets/coding-pov.png'
import aws from '/assets/icons/aws.png'
import js from '/assets/icons/js.png'
import html5 from '/assets/icons/html5.png'

import './projectSelection.scss'


const ProjectSelection = () => {

   const description = [
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
    ]
  
    const skillSets = [aws, js, html5]

  return (
    <section id='project-selection_section'>
      <div className="container">
        <div className="project-selection_cards-list">
          <div className="project-selection_cards_card-wrapper">
            <ProjectCard 
              source={imageSrc} 
              projectName={"project one"}  
              description={description}
              skillSets={skillSets}
            />
          </div>
          <div className="project-selction_cards_card-wrapper">
            <ProjectCard 
              source={imageSrc} 
              projectName={"project one"}  
              description={description}
              skillSets={skillSets}
            />
          </div>
          <div className="project-selction_cards_card-wrapper">
            <ProjectCard 
              source={imageSrc} 
              projectName={"project one"}  
              description={description}
              skillSets={skillSets}
            />
          </div>
          <div className="project-selction_cards_card-wrapper">
            <ProjectCard 
              source={imageSrc} 
              projectName={"project one"}  
              description={description}
              skillSets={skillSets}
            />
          </div>
          <div className="project-selction_cards_card-wrapper">
            <ProjectCard 
              source={imageSrc} 
              projectName={"project one"}  
              description={description}
              skillSets={skillSets}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectSelection
