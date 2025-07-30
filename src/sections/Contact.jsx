import React from 'react'
import {  Facebook, Github, Instagram, Linkedin , MailIcon, Phone, SpoolIcon, Twitter  } from 'lucide-react'

const Contact = () => {
  return (
      <section className="bg-blue-950 w-full h-[35%] bottom-0 left-0 flex flex-col justify-center items-center space-y-5 py-10">

        <div className="flex flex-row justify-center space-x-5 text-white">
        <Facebook></Facebook>
        <Instagram></Instagram>
        <Phone></Phone>
        <MailIcon></MailIcon>
        <Twitter></Twitter>
        <Github></Github>
        <a href="https://www.linkedin.com/in/sh-yoon-zk" target="_blank"><Linkedin></Linkedin></a>
        </div>

        <div>
          <img src="/icons/hacker.png" className='w-15 invert'></img>
        </div>

        <div>
          <p className='text-white'> &copy; Shaun Yoon 2025 </p>
        </div>

      </section>

  )
}

export default Contact
