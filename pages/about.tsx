"use client";
import React, { useEffect, useRef } from 'react'
import AboutCard from '@/components/aboutCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const headRef = useRef<HTMLInputElement>(null)
  const rightdivRef = useRef<HTMLInputElement>(null)
  const leftdivRef = useRef<HTMLInputElement>(null)
  const aboutPageRef = useRef<HTMLInputElement>(null)
  const leftCardRef = useRef<HTMLDivElement[]>([]);
  const rightCardRef = useRef<HTMLDivElement[]>([]);

  useEffect(()=>{
    gsap.from(leftCardRef.current,{
      x:-1200,
      duration:2,
      opacity:0,
      rotate:10,
      stagger:0.3,
      scrollTrigger:{
        trigger:aboutPageRef.current,
        scrub:2,
        markers:false,
        scroller:"body",
        start:"top 100%",
        end:"top 0%"
        
      }
    })
    gsap.from(rightCardRef.current,{
      x:1200,
      duration:2,
      opacity:0,
      rotate:10,
      stagger:0.3,
      scrollTrigger:{
        trigger:aboutPageRef.current,
        scrub:2,
        markers:false,
        scroller:"body",
        start:"top 100%",
        end:"top 0%"
        
      }
    })
    gsap.from(headRef.current,{
      y:50,
      opacity:0,
      duration:2,
      scrollTrigger:{
        trigger:aboutPageRef.current,
        scrub:2,
        markers:false,
        scroller:"body",
        start:"top 100%",
        end:"top 0%"
      }
    })
  },[])

  const addToRefsLeft = (el: HTMLDivElement | null) => {
    if (el && !leftCardRef.current.includes(el)) {
      leftCardRef.current.push(el); // Add the element to the refs array
    }
  };
  const addToRefsRight = (el: HTMLDivElement | null) => {
    if (el && !rightCardRef.current.includes(el)) {
      rightCardRef.current.push(el); // Add the element to the refs array
    }
  };
  return (
    <div ref={aboutPageRef} className='  w-screen h-auto'>
        <div id='text-heading'>
            <p ref={headRef} className='text-5xl font-semibold text-center text-white w-full mb-20'>About Me</p>
        </div>
        <div className='w-full flex justify-center items-center' id="divs">
          <div ref={leftdivRef} className='w-1/2 flex flex-col justify-center items-center gap-5' id="left">
          <AboutCard ref={addToRefsLeft} title='Who Am I?'content='Hi, Im Yodin Dawadi, a frontend-focused developer exploring the backend world. I specialize in creating responsive, user-friendly web applications with technologies like React, JavaScript, and the MERN stack.'/>
          <AboutCard ref={addToRefsLeft} title=' My Tech Stack?' content='I specialize in frontend development with React.js, JavaScript, and Tailwind CSS, while also working on backend technologies like Node.js, Express.js, MongoDB and PostgreSQL, with a keen interest in learning TypeScript and NextJs.'/>
          <AboutCard ref={addToRefsLeft} title=' My Journey?' content='Currently pursuing a B.Sc. CSIT at Central Campus of Technology, Dharan, I began my coding journey with C++ and grew into frontend development. Now, Im building real-world applications and exploring backend technologies.'/>
          </div>
          <div ref={rightdivRef} className='w-1/2 flex flex-col justify-center items-center gap-5' id="right">
          <AboutCard ref={addToRefsRight} title='Why Work With Me?' content='I bring a unique mix of frontend proficiency, backend exploration, and a passion for creating intuitive user experiences. My approach is collaborative, detail-oriented, and focused on delivering results that exceed expectations.'/>
          <AboutCard ref={addToRefsRight} title='Beyond the Code' content='Beyond coding, I enjoy exploring new ideas and technologies that inspire growth. I value collaboration and constantly seek ways to improve myself. When not working, I spend time connecting with friends and learning something new.'/>
          <AboutCard ref={addToRefsRight} title='What I’m Working On?' content='I am currently focused on developing full-stack web applications using the MERN stack, improving user authentication systems, and creating solutions that prioritize performance and usability.'/>
          </div>
        </div>
    </div>
  )
}

export default About
