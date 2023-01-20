import React from 'react'
import Experience from './Experience'

type Props = {}

export default function WorkExperience({}: Props) {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left  md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      <h2 className='absolute top-24 text-gray-400 text-2xl uppercase tracking-[20px]'>Experience</h2>

      <div className=''>
        <Experience></Experience>
      </div>
        </div>
  )
}