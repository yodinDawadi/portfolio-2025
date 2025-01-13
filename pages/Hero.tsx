"use client";
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Button } from "@/components/ui/button"
import profile from "@/public/profile.png"
import Image from 'next/image'
import image from '@/public/ccchaos.svg'


const Hero = () => {
  var initialPath =`M 10 100 Q 720 100 1430 100`
var finalPath =`M 10 100 Q 720 100 1430 100`
  const headingRef = useRef<HTMLInputElement>(null);
  const subheadingRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement >(null);
  const imageRef = useRef<HTMLImageElement >(null);
  const stringRef = useRef<HTMLInputElement >(null);
  const pathRef = useRef<SVGPathElement >(null);

  



  useEffect(()=>{
stringRef.current?.addEventListener("mousemove",function(dets){
    initialPath=`M 10 100 Q  ${(dets.x)/3} ${(dets.y)/3} 1430 100`
 gsap.to(pathRef.current,{
    attr:{d:initialPath},
    duration:0.3,
    ease:"power3.out"
 })
})
  stringRef.current?.addEventListener("mouseleave",function(dets){
 gsap.to(pathRef.current,{
    attr:{d:finalPath},

 })
})
    gsap.from(headingRef.current,{
      x:-1000,
      opacity:0,
      duration:2,
      rotate:-30
    })

    gsap.from(subheadingRef.current,{
      y:1000,
      opacity:0,
      duration:2,
      rotate:-30
    })
    
    gsap.from(buttonRef.current,{
      scale:0,
      duration:0.5,
      delay:2
    })
    gsap.from(imageRef.current,{
      x:100,
      opacity:0,
      duration:2,
    })

    gsap.from(pathRef.current,{
      attr:{d:"M 10 100 Q 720 100 10 100"},
      duration:2
    })
  },[])
  return (
    <>
    <div className='w-full h-screen flex flex-wrap'>
      <div className='w-2/5 flex flex-col text-white justify-center h-96 px-7 gap-5' id='texts'>

        <p ref={headingRef} className='w-full text-pretty text-5xl font-medium'>Hello i'm Yodin Dawadi. A Full Stack Developer from Nepal.</p>
        <p ref={subheadingRef} >Crafting Seamless User Experiences with NextJs & Tailwind CSS</p>
        <Button ref={buttonRef} className='w-3/12 bg-contrast_black' variant={"outline"}>About me</Button>
      </div>

      <div id='circle' className=' w-3/5  h-3/5'>
      <Image ref={imageRef} className='pl-72 mb-72 h-full w-full' src={image} alt='image'></Image>
      </div>
      <div ref={stringRef} id="string" className=' w-full  h-40'>
    <svg className='w-full h-full' xmlns="http://www.w3.org/2000/svg">
        <path className='z-10' ref={pathRef} d="M 10 100 Q 720 100 1430 100" stroke="white" fill="transparent"/>
      </svg>
</div>
    </div>
    </>
  )
}

export default Hero
