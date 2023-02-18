/* eslint-disable jsx-a11y/alt-text */

import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { SiGoogle } from 'react-icons/si'
import { TbBrandTelegram } from 'react-icons/tb'
import { AiFillLinkedin } from 'react-icons/ai'


const Custom_card = ({ name, image }) => {
  return (
    <div className='bg-fixed mt-2 h-75 w-80 md:w-full bg-white shadow rounded-sm'>
      <div className=''></div>
      <div className='flex flex-wrap justify-center bg-white'>
        <img className='h-40 object-cover w-full border-b-2 border-sky-600 blur-0' src={image} />
      </div>
      <div className='text-slate-700 m-5'>
        <p className='text-18 font-bold'><span className='text-18 font-extrabold text-sky-700'>{name}</span></p>
        <span className='text-slate-700 font-light'>
          Lorem ipsum dolor. Aspernatur quo
        </span>
      </div>

      <div className='m-5'>
        <h1 className='text-14 font-medium'>Contactez-nous</h1>
        <div className='flex gap-2 items-center mt-2 pb-5'>
          <BsFacebook className='w-6 h-6 rounded-full cursor-pointer p-1 text-sky-700 border border-sky-700' />
          <SiGoogle className='w-6 h-6 rounded-full cursor-pointer p-1 text-white bg-amber-500' />
          <TbBrandTelegram className='w-6 h-6 rounded-full cursor-pointer p-1 text-blue-700 border border-blue-700' />
          <AiFillLinkedin className='w-6 h-6 cursor-pointer rounded-lg p-1 text-cyan-700 border border-cyan-700' />
        </div>
      </div>
    </div>
  )
}

export default Custom_card