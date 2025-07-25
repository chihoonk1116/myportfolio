import React from 'react'
import './projectCard.scss'

const ProjectCard = ({source, projectName, description, skillSets}) => {

  const isVideo = (source) => {
    if(typeof source !== "string") return false
    const videoExt = ["mp4", "webm", "ogg"]
    const ext = source.split('.').pop().toLowerCase()
    return videoExt.includes(ext)
  }

  const isImage = (source) => {
    if(typeof source !== "string") return false
    const imageExt = ["jpg", "jpeg", "png", "gif", "bmp", "webp"]
    const ext = source.split('.').pop().toLowerCase()
    return imageExt.includes(ext)
  }


  return (
    <>
      <div className="project-card_title">
        <h3>{projectName}</h3>
      </div>
      <div className="project-card_container">
        <div className="project-card_image-wrapper">
          {isImage(source) && (
            <img src={source} alt="project-image" />
          )}

          {isVideo(source) && (
            <video className='pointer-events-none' loop autoPlay muted playsInline={true}>
              <source src={source} type="video/mp4" />
            </video>
          )}
          
        </div>
        <div className="project-card_content">
          <div className="project-card_content-description">
            {description.map((desc, i) => (
              <p key={i}>{desc}</p>
            ))}
          </div>
          <div className="project-card_content-stacks">
            {skillSets.map((skill, i) => (
              <img key={i} src={skill} alt="" />
            ))}
            
          </div>
        </div>
      </div>
    </>
      
   
  )
}

export default ProjectCard
