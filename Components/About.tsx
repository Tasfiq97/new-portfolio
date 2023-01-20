import React, { Component } from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
import hero from "./Images/hero.jpg"
type Props = {}

type State = {}

export default class About extends Component<Props, State> {
  state = {}

  render() {
    return (
      <motion.div
      initial={{
        opacity:0,
      }}
      whileInView={{opacity:1}}
      transition={{duration:1.5}}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7 px-10 justify-evenly mx-auto items-center'
      >
        <h3 className='absolute top-24 text-gray-400 text-2xl uppercase tracking-[20px]'>About</h3>


         <motion.img
         initial={{
            x:-200,
            opacity:0,
         }}
         transition={{
            duration:1.2
         }}
         whileInView={{
            x:0,
            opacity:1
         }}
         viewport={{once:true}}
         className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-72 md:h-96 xl:w-[400px] xl:h-[400px]' 
        src="https://i.ibb.co/vBPXqNC/1638089535060.jpg"
         alt=''

         >

         </motion.img>

         <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is my <span className=' text-red-700/80 uppercase'>background</span></h4>
            <p className='text-base'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas a, est et, cumque in perspiciatis assumenda molestiae perferendis, inventore voluptatem explicabo! Eum quos magni tenetur commodi blanditiis, nulla, ex nisi quis architecto ipsum esse similique. Labore perferendis doloremque a nihil beatae nulla error, dicta, provident commodi sed et sint quasi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium temporibus nihil ex culpa nam illum voluptates debitis, provident quod adipisci incidunt suscipit deserunt voluptate architecto repellendus? Consectetur fugit ullam praesentium, sequi assumenda maxime id eveniet voluptate dignissimos quam vero dolorum facere expedita, numquam alias asperiores blanditiis eos. Nihil, eius voluptatum?</p>
         </div>
        </motion.div>
    )
  }
}