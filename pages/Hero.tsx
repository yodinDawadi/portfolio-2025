"use client";
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Button } from "@/components/ui/button"
import profile from "@/public/profile.png"
import Image from 'next/image'


const Hero = () => {
  const headingRef = useRef<HTMLInputElement>(null);
  const subheadingRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement >(null);
  useEffect(()=>{

    gsap.from(headingRef.current,{
      x:-1000,
      opacity:0,
      duration:2,
      delay:1,
      rotate:-30
    })

    gsap.from(subheadingRef.current,{
      y:1000,
      opacity:0,
      duration:2,
      delay:1,
      rotate:-30
    })
    
    gsap.from(buttonRef.current,{
      scale:0,
      duration:0.5,
      delay:3,
    })
  },[])
  return (
    <>
    <div className='w-full h-auto flex'>
      <div className='w-1/2 flex flex-col text-white justify-center h-96 px-7 gap-5' id='texts'>

        <p ref={headingRef} className='w-full text-5xl font-medium'>Hello i'm Yodin Dawadi. A Full Stack Developer from Nepal.</p>
        <p ref={subheadingRef} >Crafting Seamless User Experiences with NextJs & Tailwind CSS</p>
        <Button ref={buttonRef} className='w-3/12 bg-contrast_black' variant={"outline"}>About me</Button>
      </div>

      <div id='circle' className='w-1/2  h-96'>
        <svg className='w-full h-full flex items-center justify-center bg-red-500'>
        <circle cx="50" cy="50" r="50" fill="transparent" stroke='white'/>
        </svg>
      </div>
    </div>
    </>
  )
}

export default Hero
