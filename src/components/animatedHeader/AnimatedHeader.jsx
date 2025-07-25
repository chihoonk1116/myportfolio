import React, {useRef} from 'react'
import {useGSAP} from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap"

import './animatedHeader.scss'

gsap.registerPlugin(ScrollTrigger);

const AnimatedHeader = ({subTitle, title}) => {

  // use gsap to control animation delicatetly
  const contextRef = useRef(null)
  const headerRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contextRef.current,
        start: "top bottom", 
        toggleActions: "play none none none",
        once: true,
      }
    })

    tl.from(contextRef.current, {
      y: "10vh",
      duration: 0.8,
      ease: "circ.out"
    })

    tl.from(headerRef.current, {
      opacity: 0,
      y: "250",
      duration: 0.8,
      ease: "circ.out"
    }, "<+0.5")
  })


  return (
    <div ref={contextRef} className="animated-header_container">
      <div style={{clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)"}} >
        <div ref={headerRef} className="">
          <p className='animated-header_subtitle'>{subTitle}</p>
          <div className='animated-header_title_wrapper'>
            <h2 className="animated-header_title">{title}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimatedHeader
