import React,{useRef, useState} from 'react'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import './timeLine2.scss'


const TimeLine2 = () => {

  const [isDesktop, setIsDesktop] = useState(false)
  const serviceRefs = useRef([])

  useGSAP(() => {
    serviceRefs.current.forEach((el) => {
      if (!el) return;

      gsap.from(el, {
        y: 200,
        scrollTrigger: {
          trigger: el,
          start: "top 0%",
        },
        duration: 1,
        ease: "circ.out",
      });
    });
  }, []);

  return (
    <section
      className="min-h-screen bg-black rounded-t-4xl"
    >
        <div className="mt-[10rem]">
            <h1>Experience</h1>
        </div>
        <div 
            ref={(el) => (serviceRefs.current[0] = el)}
            className="sticky px-10 pt-6 pb-12 text-white bg-black border-t-2 border-white/30"
            style={
            {top: 0}
            }
        >
            <div className="flex items-center justify-between gap-4 font-light">
                <div className="flex flex-col gap-6">
                    <h2 className="text-4xl lg:text-5xl">title</h2>
                    <p className="text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Natus ad dolorem ex nisi necessitatibus tempora consequatur explicabo esse qui quaerat!
                    </p>
                    <div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80">
                        <div>
                            <h3 className="flex">
                                <span className="mr-12 text-lg text-white/30">
                                index
                                </span>
                                item title
                            </h3>
                            <div className="w-full h-px my-2 bg-white/30"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div 
            ref={(el) => (serviceRefs.current[1] = el)}
            className="sticky px-10 pt-6 pb-12 text-white bg-black border-t-2 border-white/30"
            style={
            {top: 0}
            }
        >
            <div className="flex items-center justify-between gap-4 font-light">
                <div className="flex flex-col gap-6">
                    <h2 className="text-4xl lg:text-5xl">title</h2>
                    <p className="text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Natus ad dolorem ex nisi necessitatibus tempora consequatur explicabo esse qui quaerat!
                    </p>
                    <div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80">
                        <div>
                            <h3 className="flex">
                                <span className="mr-12 text-lg text-white/30">
                                index
                                </span>
                                item title
                            </h3>
                            <div className="w-full h-px my-2 bg-white/30"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TimeLine2
