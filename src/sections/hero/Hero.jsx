import React from 'react'
import { FlipWords } from '../../components/flipWords/FlipWords'
import { Particles } from '../../components/particles/Particles'

import CodeEditorArea from '../../components/codeEditor/CodeEditor'
import AnimatedHeader from '../../components/animatedHeader/AnimatedHeader'
import './hero.scss'

const Hero = () => {
  return (
    <section>
      <div className="container hero-container">
        <div className="hero-top">
          <div className="hero-container_top-left">
            <div className="flipword-wrapper">
              <h4>I build web apps with </h4>
              <FlipWords words={['React', 'Node.js', 'PHP', 'Wordpress', 'SQL']} className='large' /> 
            </div>
          </div>
          <div className="hero-container_top-right">
            <CodeEditorArea/>
          </div>
        </div>
        <div className="hero-bottom">
          {/* <AnimatedHeader/> */}
        </div>
      </div>
    
      <Particles
        className="particles-container"
        quantity={500}
        ease={80}
        color={"#ffffff"}
        refresh
      />
    </section>
  )
}

export default Hero
