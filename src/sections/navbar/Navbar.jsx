import React, { useEffect, useRef, useState } from "react";
import {AnimatePresence, motion} from 'motion/react'

import './navbar.scss'

function NavigationMenu(){
  return(
    <ul className="nav-ul">
      <li className="nav-li">
        <a href="#home" className="nav-link">Home</a>
      </li>
      <li className="nav-li">
        <a href="#about" className="nav-link">About</a>
      </li>
      <li className="nav-li">
        <a href="#projects" className="nav-link">Projects</a>
      </li>
      <li className="nav-li">
        <a href="#contact" className="nav-link">Contact</a>
      </li>
    </ul>
  )
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false);
  const navRef = useRef()

  const prevScroll = useRef(0)

  useEffect(() => {
    function handleScroll(){
      const currentScroll = window.scrollY
      if(currentScroll > prevScroll.current){
        navRef.current.classList.add("scrolled")
      }else{
        navRef.current.classList.remove("scrolled")
      }

      prevScroll.current = currentScroll
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(()=>{
   if(isHovered){
    navRef.current.classList.remove("scrolled")
   }
  }, [isHovered])

  const variants = {
    open: (delayValue) => ({
      opacity: 1,
      height: 'auto',
      y: 0,
      transition: {
        height: { duration: 0.2 },
        opacity: { duration: 0.1, delay: delayValue }
      }
    }),
    closed: (delayValue) => ({
      opacity: 0,
      height: 0,
      y: -20,
      transition: {
        opacity: { duration: 0.1 },
        height: { duration: 0.2, delay: delayValue }
      }
    })
};

  return( 
    <div 
      className="nav-section" 
      ref={navRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="nav-container">
        <div className="nav-wrapper">
          <div className="nav-title-wrapper">
            <p className="nav-title" href="">CH_K</p>
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className={`nav-button ${isOpen ? "active" : ''}`}
          >
            <div className="bar"/>
            <div className="bar"/>
            <div className="bar"/>
          </div>
          <nav id="desktop-nav">
            <NavigationMenu />
          </nav>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              custom={0.2}
              variants={variants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <nav id="mobile-nav">
                <NavigationMenu />
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
        
      </div>
    </div>
    

    
  )
}

export default Navbar
