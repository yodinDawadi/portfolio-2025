"use client";
import React, { useEffect, useRef } from 'react'
import ContactCard from '@/components/contactCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const headRef = useRef<HTMLInputElement>(null);
  const subHeadRef = useRef<HTMLInputElement>(null);
  const contactPageRef = useRef<HTMLInputElement>(null);
  const cardDivRef = useRef<HTMLInputElement>(null);
  useEffect(()=>{

    gsap.from(headRef.current,{
      y:50,
      opacity:0,
      duration:2,
      scrollTrigger:{
        trigger:contactPageRef.current,
        scrub:2,
        markers:false,
        scroller:"body",
        start:"top 100%",
        end:"top 0%"
      }
    });
    gsap.from(subHeadRef.current,{
      y:50,
      opacity:0,
      duration:2,
      scrollTrigger:{
        trigger:contactPageRef.current,
        scrub:2,
        markers:false,
        scroller:"body",
        start:"top 100%",
        end:"top 0%"
      }
    });
    gsap.from(cardDivRef.current,{
      scale:0,
      opacity:0,
      duration:2,
      zIndex:1,
      scrollTrigger:{
        trigger:contactPageRef.current,
        scrub:2,
        markers:false,
        scroller:"body",
        start:"top 100%",
        end:"top 0%"
      }
    });
    

  },[])
  return (
    <div ref={contactPageRef} className=' gap-5 justify-center w-screen h-screen flex flex-col flex-wrap text-white mt-10'>
        <div>
            <p ref={headRef} className='w-full text-center text-5xl font-bold'>Contact Me</p>
            <p ref={subHeadRef} className='w-full text-center'>Let's get connected</p>
        </div>
        <div ref={cardDivRef} className='w-full h-3/5 z-50'>
            <ContactCard/>
        </div>
    </div>
  )
}

export default Contact