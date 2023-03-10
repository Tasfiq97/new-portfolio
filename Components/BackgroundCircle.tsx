import React, { Component } from 'react'
import { motion } from "framer-motion"
type Props = {}

type State = {}

export default class BackgroundCircle extends Component<Props, State> {
  state = {}

  render() {
    return (
      <motion.div 
      initial={{
        opacity:0
      }}
      animate={{
        scale:[1,2,2,3,1],
        opacity:[0.1,0.2,0.4,0.8,1.0],
        borderRadius:[" 20%","20%","50%","80%","20%"]
      }}
      transition={{
        duration:2.5,
      }}
      className='relative flex items-center justify-center'>
        <div className='absolute border border-[rgb(30,26,45)] rounded-full h-[200px] w-[200px] mt-52 animate-ping'>

        </div>
        <div className=' absolute border border-[rgb(46,39,69)] rounded-full h-[300px] w-[300px] mt-52 animate-ping'></div>
        <div className='absolute border border-[rgb(46,39,69)] rounded-full h-[500px] w-[500px] mt-52 '></div>
        <div className='absolute border border-gray-100 rounded-full h-[650px] w-[650px] mt-52 animate-pulse'></div>
        <div className='absolute border border-[rgb(46,39,69)] rounded-full h-[800px] w-[800px] mt-52 opacity-10'></div>
      </motion.div>
      
    )
  }
}