import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from '../projectCard/ProjectCard';

import videoSrc from '/assets/video/hero.mp4'
import aws from '/assets/icons/aws.png'
import js from '/assets/icons/js.png'
import html5 from '/assets/icons/html5.png'
import './projectSlider.scss'


gsap.registerPlugin(ScrollTrigger);

const ProjectSlider = () => {
  const containerRef = useRef(null);
  const panelsRef = useRef([]);

  const description = [
    'Lorem ipsum dolor sit amet.',
    'Lorem ipsum dolor sit amet.',
    'Lorem ipsum dolor sit amet.',
  ]

  const skillSets = [aws, js, html5]

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      const panels = panelsRef.current;
      const container = containerRef.current;

      const numPanels = panels.length;
      const totalScrollWidth = container.scrollWidth;
      const singleSnapInterval = 1 / (numPanels - 1);

      gsap.to(panels, {
        xPercent: -100 * (numPanels - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 0.75,
          start: "top 80px",
          pin: true,
          snap: (progress) => {
            const snapPoints = panels.map((_, i) => i / (numPanels - 1));
            const closest = snapPoints.reduce((prev, curr) =>
              Math.abs(curr - progress) < Math.abs(prev - progress) ? curr : prev
            );
            return closest;
          },
          end: () => "+=" + containerRef.current.offsetWidth,
        },
      });
    }, containerRef);

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ctx.revert();
    };
    
  }, []);

  return (
    <div className="slider-container" ref={containerRef}>
      {['ZERO', 'ONE', 'TWO', 'THREE', 'FOUR'].map((text, i) => {

        return (
          <div
            className={`project-card_wrapper bg-${['amber-50', 'amber-300', 'amber-500', 'blue-500', 'blue-300'][i]}`}
            key={i}
            ref={(el) => (panelsRef.current[i] = el)}
          >
            {i === 0 ? (
              <div>
                <h1>Hero is my project</h1>
              </div>
            ) 
            : (
              <ProjectCard 
                source={videoSrc} 
                projectName={text}  
                description={description}
                skillSets={skillSets}
              />
            )}
          </div>
        )
      })}
    </div>
  );
};

export default ProjectSlider;
