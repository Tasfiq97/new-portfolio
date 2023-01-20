import React, { Component } from 'react'

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
          <img className='h-10 w-10 text-white rounded-full' src="https://cdn1.iconfinder.com/data/icons/soleicons-solid-vol-1/64/reactjs_javascript_library_atom_atomic_react-512.png" alt="" />
          <img className='h-10 w-10 text-white rounded-full' src="https://skillshack.blob.core.windows.net/uploads/express.webp" alt="" />
          <img className='h-10 w-10 text-white rounded-full' src="https://miro.medium.com/max/512/1*doAg1_fMQKWFoub-6gwUiQ.png" alt="" />
          <img className='h-10 w-10 text-white rounded-full' src="https://www.mindrops.com/images/nodejs-image.png" alt="" />
          
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