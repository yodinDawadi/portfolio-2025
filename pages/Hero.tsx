import React from 'react'
import { Button } from "@/components/ui/button"
import profile from "@/public/profile.png"
import Image from 'next/image'


const Hero = () => {
  return (
    <div className='w-full h-screen flex justify-center mt-36 absolute'>
      <div className='w-2/5' id="texts">
    <p className='font-semibold text-4xl w-full text-center text-text mb-3'>Hello, I'm Yodin Dawadi 👋<br /><span>A Full-Stack Web Developer Form Nepal.</span></p>
    <p className='font-medium text-sm text-center w-full mb-10 text-text'>Passionate About Building Stunning and User-Friendly Web Applications</p>
   <div className='w-full flex justify-center'>
    <Button variant={'default'} className= 'bg-primary hover:bg-secondary'>About me</Button>
    </div> 
      </div>
</div>
  )
}

export default Hero
