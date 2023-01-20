import React from 'react'
import { motion } from "framer-motion"
import { projectData } from './ProjectData'
import Link from 'next/link'
type Props = {}
function Projects({}: Props) {
  return (
    <motion.div
    initial={{
        opacity:0,
      }}
      whileInView={{opacity:1}}
      transition={{duration:1.5}}
     className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 text-gray-400 text-2xl uppercase tracking-[20px]'>Projects</h3>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-thin scrollbar-track-gray-700/40 scrollbar-thumb-[rgb(30,26,45)]/80 '>
            {projectData.map((project,i)=>(
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-2 items-center justify-center p-10 md:p-32 h-screen' key={project.id}>
            < motion.img 
             initial={{
                y:-300,
                opacity:0,
             }}
             transition={{
                duration:1.2,
             }}
             whileInView={{opacity:1,y:0}}
             viewport={{once:true}}
             className="xl:w-1/3 xl:h-80 md:w-80 md:h-64 mt-8"
            src={project.img} alt="" />

            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='xl:text-3xl md:text-2xl sm:text-2xl font-semibold text-center'>
            <span className=' fon-semibold '> Projects {project.id} of {projectData.length}
                 </span>

                 : <span className='text-red-600/80'>{project.name}</span>
                    </h4>
                    <div className='flex items-center justify-center'>
  <Link href={project.link2}>
  <button className='heroButton'>Github link</button>
  </Link>
  <Link  href={project.link1}>
  <button className='heroButton'>Live link </button>
  </Link>
      </div>
                    <p className='xl:text-2xl md:text-lg sm:text-base text-center md:text-left p-0'>{project.desc}</p>
            </div>
                </div>
                
            ))}
        </div>

         <div className='w-full absolute top-[30%] bg-[black]/70 left-0 h-[500px] skew-y-12'></div>
    </motion.div>
  )
}

export default Projects