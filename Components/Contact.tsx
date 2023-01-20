import { BeakerIcon, EnvelopeIcon, MapIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';
import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
type Inputs = {
 name:String;
 email:String,
 subject:String,
 message:String
};
type Props = {}

export default function Contact({}: Props) {
 
 
  return (
    <div className='h-screen flex relative flex-col md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
    <h3 className='absolute top-24 text-gray-400 text-2xl uppercase tracking-[20px]'>Contact</h3>
    <div className='flex flex-col space-y-10 mt-8'>
   
    <div className='space-y-5  '>
      <div className='flex items-center space-x-4 justify-center'>
        <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse '></PhoneIcon>
        <p className='text-xl'>+8801832214481</p>
      </div>
      <div className='flex items-center space-x-4 justify-center'>
        <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse '></EnvelopeIcon>
        <p className='text-xl'>tasfiqulazad200@gmail.com</p>
      </div>
      <div className='flex items-center space-x-4 justify-center'>
        <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse '></MapPinIcon>
        <p className='text-xl'>Coxs bazar,Bangladesh</p>
      </div>
    </div>
    
    <form action='https://formspree.io/f/xknagpye' method='POST'  className='flex flex-col space-y-2 w-fit mx-auto'>
      <div className='flex space-x-2'>
        <input name='name'  placeholder='Name' className='contactInput' type="text" /> 
        <input name='email'  placeholder='E-mail' className='contactInput'type="text" />
      </div>
      <input name='subject'  placeholder='subject' className='contactInput'type="text" />
      <textarea name='message'  placeholder='Message' className='contactInput'/>
      <button type='submit' className='bg-[#F7AB0A]/80 py-5 rounded-md text-black font-bold text-lg'>submit</button>
    </form>
    </div>
  </div>
  )
}