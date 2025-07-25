import React, { useRef, useState } from 'react'
import './projectCard.scss'
import { AnimatePresence, motion } from 'motion/react'


const ProjectCard = ({source, projectName, description, skillSets}) => {

  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef()

  const variants = {
    open: () => ({
      opacity: 1,
      height: 'auto',
      y: 0,
      transition: {
        opacity: {duration: 0.4, delay: 0.3},
        height: {duration: 0.3},
        y: {duration: 0.3}
      }
    }),
    closed: () => ({
      opacity: 0,
      height: 0,
      y: -100,
      transition: {
        opacity: {duration: 0.1},
        height: {duration: 0.3, delay: 0.1},
        y: {duration: 0.3, delay: 0.1}
      }
    })
  }

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
      <div 
        className="project-card_top"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="project-card_top-title">
          <h3>{projectName}</h3>
          <div className="project-card_top-title-stacks">
            {skillSets.map((skill, i) => (
              <img key={i} src={skill} alt="" />
            ))}
          </div>
        </div>
        <div className="project-card_top-summary">
          <p>
            Wordpress Custom Theme Developement REST API, WP Query, FrontEnd Developement
          </p>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="project-card_container"
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
          >
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
            </div>
          </motion.div>  
        )}
      </AnimatePresence>
    </>
      
   
  )
}

export default ProjectCard
