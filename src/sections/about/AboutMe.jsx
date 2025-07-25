import React, { useEffect, useState } from 'react'
import AnimatedHeader from '../../components/animatedHeader/AnimatedHeader'
import { Marquee } from '../../components/marquee/Marquee'
import codingImage from '/assets/coding-pov.png'
import OrbitingCircles from '../../components/orbitingCircles/OrbitingCircles'

import './about.scss'

const AboutMe = () => {

  const [radius, setRadius] = useState(
    window.innerWidth < 576 ? 90 : 120
  )

  useEffect(()=>{

    function handleRadius(){
      if(window.innerWidth < 576){
        setRadius(90)
      }
      else{
        setRadius(120)
      }
    }

    window.addEventListener('resize', handleRadius)

    return () => {
      window.removeEventListener('resize', handleRadius)
    }
  }, [])
  


  return (
    <section className='about-section'>
      <div className='container aboutme-container'>
        <AnimatedHeader title={'Chihoon kim'} subTitle={'Full-Stack Developer'}/>
        {/* <h1 className='custom-h1'>About Me</h1> */}
        <div className="aboutme-container_grid">
          <div className="grid-a grid">
            <img className='aboutme_bg' src={codingImage} alt="" />
            <div className="aboutme_text">
              <h4>About me</h4>
              <p>
                Over the last 2 years, I developed my frontend and backend dev skills to deliver 
                dynamic and software and web applications.
              </p>
            </div>
          </div>
          <div className="grid-b">
            <div className="marquee-list_wrapper">
              <Marquee></Marquee>
              <Marquee></Marquee>
              <Marquee></Marquee>
              <div className="marquee-top-gradient" />
              <div className="marquee-right-gradient" />
              <div className="marquee-left-gradient" />
              <div className="marquee-bottom-gradient" />
            </div>
            
            <div className="aboutme_text">
              <h4>About me</h4>
              <p>
                Over the last 2 years, I developed my frontend and backend dev skills to deliver 
                dynamic and software and web applications.
              </p>
            </div>
          </div>
          <div className="grid-c grid">
            <div className="stack_text">
              <h4>Tech Stack</h4>
              <p>
                I specialize in a variety of languages, frameworks, and tools 
                that allow me to build robust and scalable applications
              </p>
            </div>
            <div className="grid-c_stack-circle">
              <OrbitingCircles radius={radius}></OrbitingCircles>
              <OrbitingCircles radius={radius * 2}></OrbitingCircles>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default AboutMe
