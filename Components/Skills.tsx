import React from 'react'
import { motion } from "framer-motion"
import Skill from './Skill'
import { skillData } from './SkillData'
type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div
    initial={{
        opacity:0,
      }}
      whileInView={{opacity:1}}
      transition={{duration:1.5}}
    
    className='relative flex flex-col  text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 text-gray-400 text-2xl uppercase tracking-[20px]'>Skills</h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-400 text-sm'>Hover over a skill for current proficiency</h3>
        <div className=' grid grid-cols-4 gap-6 '>
        {
        skillData.map(skill=><Skill 
          key={skill.id}
          {...skill}
        ></Skill>)
       }
            
          </div>
      
    </motion.div>
  )
}