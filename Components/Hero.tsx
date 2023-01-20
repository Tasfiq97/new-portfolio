import React from 'react'
import { Cursor,useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'
import Image from 'next/image'

import Link from 'next/link'

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
       words:[
        "Hi, I am Tasfiqul azad",
        "A Developer",
        "<CodeForLife>"
    ],
    loop:true,
    delaySpeed:2000,
      })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'> 
        <BackgroundCircle/>
        <img
         className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src="https://i.ibb.co/vBPXqNC/1638089535060.jpg"
        alt=" "
        >

        </img>
      <div className='z-20 '>
        <h2 className='text-sm uppercase text-gray-400 pb-2 tracking-[15px]'>Software Developer
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
        <span className='mr-3'> {text}</span>
        <Cursor
        cursorColor="orange"
        ></Cursor>
        </h1>
  <div className='pt-5'>
  <Link href={"#experience"}>
  <button className='heroButton'>Experience</button>
  </Link>
  <Link  href={"#about"}>
  <button className='heroButton'>About </button>
  </Link>
   <Link  href={"#skills"}>
   <button className='heroButton'>Skills</button>
   </Link>
<Link  href={"#projects"}>
<button className='heroButton'>Projects</button>
</Link>
      </div>
  </div>
    </div>
  )
}