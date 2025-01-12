import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full h-20 flex items-center justify-center'>
        <div className='w-1/2'>
            <p className='w-full text-3xl text-center  text-text'>yodin.dev</p>
        </div>
        <div className='w-1/2 flex justify-around'>
            <Link className='text-text'  href={"/home"}>home</Link>
            <Link className='text-text' href={"/about"}>about</Link>
            <Link className='text-text' href={"/contact"}>contact</Link>
        </div>
    </nav>
  )
}

export default Navbar
