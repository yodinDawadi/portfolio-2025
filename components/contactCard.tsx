import React from 'react'
import { Button } from '@/components/ui/button'

const ContactCard = () => {
  return (
    <div className='flex items-center justify-center  text-contrast_black h-full w-full'>
        <form className='gap-3 flex items-center flex-col justify-center w-1/4 h-full rounded-lg bg-white z-50' action="">
            
            <label className='w-9/12 text-left' htmlFor="name">Name</label>
            <input className='w-9/12 pl-3 ronded-lg border outline-none' name='name' type="text" placeholder='Enter Your Name' />
            <label className='w-9/12 text-left' htmlFor="Email">Email</label>
            <input className='w-9/12 pl-3 ronded-lg border outline-none' name='Email' type="email" placeholder='Enter Your Email' />
            <label className='w-9/12 text-left' htmlFor="message">Leave a Message</label>
            <textarea placeholder='type your message here...' className='w-9/12 pl-3 ronded-lg border outline-none resize-none' name="message" ></textarea>
        <Button>Submit</Button>
        </form>
    </div>
  )
}

export default ContactCard