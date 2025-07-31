import React from "react";
import { motion } from "motion/react";
import SkillCard from "../skillCard/SkillCard";

import './marquee.scss'

export const Marquee = ({animation = "marquee 30s linear infinite", skills}) =>{


  return(
    <div className="marquee-container">
      <div className="marquee-content-wrapper">
        <div className="marquee-content" style={{animation: animation}}>
          {skills.map((skillObj, index) => (
            <SkillCard key={index} skillName={skillObj.name} desc={skillObj.desc}/>
          ))}
        </div>
        <div className="marquee-content" style={{animation: animation}}>
          {skills.map((skillObj, index) => (
            <SkillCard key={index} skillName={skillObj.name} desc={skillObj.desc}/>
          ))}
        </div>
        <div className="marquee-content" style={{animation: animation}}>
          {skills.map((skillObj, index) => (
            <SkillCard key={index} skillName={skillObj.name} desc={skillObj.desc}/>
          ))}
        </div>
        <div className="marquee-content" style={{animation: animation}}>
          {skills.map((skillObj, index) => (
            <SkillCard key={index} skillName={skillObj.name} desc={skillObj.desc}/>
          ))}
        </div>
        
      </div>
    </div>
  )

}