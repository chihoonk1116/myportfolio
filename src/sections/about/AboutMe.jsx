import React, { useEffect, useState } from 'react'
import AnimatedHeader from '../../components/animatedHeader/AnimatedHeader'
import { Marquee } from '../../components/marquee/Marquee'
import codingImage from '/assets/coding-pov.png'
import { icons } from '../../constants'
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
                I’m a freelance full-stack developer with hands-on experience building dynamic web applications and business solutions, from cloud deployment to admin tools and SEO optimization.
              </p>
            </div>
          </div>
          <div className="grid-b">
            <div className="marquee-list_wrapper">
              <Marquee animation='marquee 45s linear infinite'></Marquee>
              <Marquee animation='marquee 135s linear infinite'></Marquee>
              <Marquee animation='marquee 90s linear infinite'></Marquee>
              <div className="marquee-top-gradient" />
              <div className="marquee-right-gradient" />
              <div className="marquee-left-gradient" />
              <div className="marquee-bottom-gradient" />
            </div>
            {/* mobile */}
            <div className="aboutme_text">
              <h4>About me</h4>
              <p>
                I’m a freelance full-stack developer with hands-on experience building dynamic web applications and business solutions, from cloud deployment to admin tools and SEO optimization.
              </p>
            </div>
          </div>
          <div className="grid-c grid">
            <div className="stack_text">
              <h4>Tech Stack</h4>
              <p>
                I specialize in building robust and scalable applications using the following technologies:
              </p>
            </div>
            <ul className='stacks-list'>
                <li>React, HTML, CSS, JavaScript</li>
                <li>Node.js, Express, PHP, MongoDB, MySQL</li>
                <li>Docker, Cloud(GCP, AWS)</li>
                <li>WordPress & REST API, Git, Composer</li>
                <li>Structured metadata, keyword optimization</li>
            </ul>
            <div className="grid-c_stack-circle">
              <OrbitingCircles radius={radius} icons={icons.slice(0, Math.ceil(icons.length / 2))}></OrbitingCircles>
              <OrbitingCircles radius={radius * 2} icons={icons.slice(Math.ceil(icons.length / 2), icons.length)}></OrbitingCircles>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default AboutMe
