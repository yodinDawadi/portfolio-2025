"use client";
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import ScrollTigger from 'gsap'

const Navbar = () => {
   const linksRef = useRef<HTMLInputElement>(null);
   const headingRef = useRef<HTMLInputElement>(null);
  useEffect(()=>{

gsap.from(headingRef.current,{
  x:-50,
  opacity:0,
  duration:2,

})
gsap.from(linksRef.current,{
  y:-50,
  opacity:0,
  duration:2,
  stagger:0.3

})
  },[])

 
  return (
    <nav  className='w-full h-20 flex items-center justify-center'>
        <div className='w-1/2'>
            <p ref={headingRef} className='w-full text-3xl text-center  text-text'>yodin.dev</p>
        </div>
        <div ref={linksRef}  className='w-1/2 flex justify-around'>
            <Link className='text-text'  href={"/home"}>home</Link>
            <Link className='text-text' href={"/about"}>about</Link>
            <Link className='text-text' href={"/contact"}>contact</Link>
            <Link className='text-text' href={"/project"}>project</Link>
        </div>
    </nav>
  )
}

export default Navbar
