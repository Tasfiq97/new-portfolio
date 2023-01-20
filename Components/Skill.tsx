import React from 'react'
import { motion } from "framer-motion"
type Props = {
  img?:string,
  skill?:number,
directionLeft?:boolean;

}


export default function Skill({directionLeft,img,skill}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
    <motion.img
    initial={{
      x:directionLeft?-100:100,
      opacity:0
    }}
    transition={{
        duration:1.2,
        
    }}
    whileInView={{
        opacity:1,
        x:0
    }}
    src={img}
    className=' rounded-full  w-20 h-20 object-cover md:w-20 md:h-20  xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-200 ease-in-out'
    >

    </motion.img>
    <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-gray-800 w-20 h-20 object-cover md:w-20 md:h-20  xl:w-20 xl:h-20 rounded-full z-0'>
        <div className='flex justify-center items-center h-full '>
            <p className='text-3xl font-bold text-white opacity-100'>{skill}%</p>
        </div>
    </div>
    </div>
  )
}