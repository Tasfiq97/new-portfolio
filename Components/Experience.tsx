import React, { Component } from 'react'
import react from "../public/1_doAg1_fMQKWFoub-6gwUiQ.png"
import react2 from "../public/5838197.png"
import react3 from "../public/nodejs-image.png";
import react4 from "../public/express.png";
import Image from 'next/image';
type Props = {}

type State = {}

export default class Experience extends Component<Props, State> {
  state = {}

  render() {
    return (
      <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] bg-[#302e40] p-10 mt-14'>
        <div className='px-0 md:px-10 opacity-50 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
          <h4 className='text-4xl font-light'>Full Stack developer intern</h4>
          <p className='font-bold text-2xl mt-1'>KPR TECH</p>
          <div className='flex items-center space-x-2 my-4'>
          <Image className='h-10 w-10 text-white rounded-full' src={react}  height={40} width={40} alt="" />
          <Image className='h-10 w-10 text-white rounded-full' src={react2}  height={40} width={40}alt="" />
          <Image className='h-10 w-10 text-white rounded-full' src={react3}  height={40} width={40}alt="" />
          <Image className='h-10 w-10 text-white rounded-full' src={react4}  height={40} width={40}alt="" />
          
          </div>
          <p className='uppercase py-5 text-gray-500'>from Sept 07 - Nov 07</p>
          <ul className='list-disc space-y-4 text-lg ml-5'>
            <li>Work in frontend interface</li>
            <li>Build reusable codes</li>
            <li>Work with team for solutions</li>
            <li>Build backend apis</li>
            <li>Works in Building clone projects</li>
          </ul>
        </div>
      </article>
    )
  }
}