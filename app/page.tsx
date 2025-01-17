"use client";
import About from "@/pages/about";
import Hero from "@/pages/Hero";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import Lenis from "lenis";
import Contact from "@/pages/contact";

export default function Home() {
  const [isHidden, setIsHidden] = useState<boolean>();
  const dotRef = useRef<HTMLInputElement>(null)
  useEffect(()=>{
    setIsHidden(true);

const lenis = new Lenis();
function raf(time:any){
  lenis.raf(time);
  requestAnimationFrame(raf);
}

 dotRef.current?.addEventListener("mouseenter",()=>{
  setIsHidden(false)
gsap.to(dotRef.current,{
  scale:3,
  borderRadius:"10px",
  duration:0.3,
  width:"100px",
  height:"100px",
  scrub:5,
})

 })

 dotRef.current?.addEventListener("mouseleave",()=>{
  setIsHidden(true)
  gsap.to(dotRef.current,{
    scale:1,
    borderRadius:"100px",
    duration:0.3,
    height:"28px",
    width:"28px"
  })
  
   })
   requestAnimationFrame(raf);
  },[])
  return (
    <>
    <div ref={dotRef} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed z-10 mix-blend-difference bg-white rounded-full h-7 w-7 cursor-pointer scroll-smooth">
    {!isHidden && <ul className="w-full h-3/4 flex justify-center items-center flex-wrap">
      <li><Link className="underline" href={"/home"}>Home</Link></li>
      <li><Link className="underline" href={"/about"}>About me</Link></li>
      <li><Link className="underline" href={"/contact"}>Contact</Link></li>
      <li><Link className="underline" href={"/project"}>Projects</Link></li>
    </ul>}
    </div>
    <Hero/>
    <About/>
    <Contact/>
    </>
  );
}
