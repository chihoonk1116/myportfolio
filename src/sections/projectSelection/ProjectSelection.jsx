import React from 'react'
import ProjectCard from '../../components/projectCard/ProjectCard'
import AnimatedHeader from '../../components/animatedHeader/AnimatedHeader'
import { icons, projects } from '../../constants'

import './projectSelection.scss'

const ProjectSelection = () => {

  function getSkillSets(keys){
    return icons.filter(icon => keys.includes(icon.id))
  }

  return (
    <section id='project-selection_section'>
      <div className="container project-container">
        <AnimatedHeader title={"Project"} subTitle={''}/>
        <div className="project-selection_cards-list">
          {projects.map((projectObj, index) => (
            <div className="project-selection_cards_card-wrapper">
              <ProjectCard 
                key={index}
                source={projectObj.source} 
                projectName={projectObj.title}  
                description={projectObj.description}
                skillSets={getSkillSets(projectObj.skillSets)}
                summary={projectObj.summary}
                links={projectObj.links}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectSelection
