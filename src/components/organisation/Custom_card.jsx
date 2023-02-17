/* eslint-disable jsx-a11y/alt-text */

import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { SiGoogle } from 'react-icons/si'
import { TbBrandTelegram } from 'react-icons/tb'
import { AiFillLinkedin } from 'react-icons/ai'


const Custom_card = ({ name, image }) => {
  return (
    <div className='bg-fixed mt-2 h-75 w-80 md:w-full bg-white shadow p-4 rounded-sm'>
      <p className='text-18 font-bold p-2'><span className='text-18 text-blue-900 font-extrabold'>{name}</span></p>
      <div className=''></div>
      <div className='flex flex-wrap justify-center m-2 p-2 bg-white'>
        <img className=' pl-2 h-40 bg-cover w-full' src={image}></img>
        <span className='text-slate-700 p-4'>
          Lorem ipsum dolor. Aspernatur quo dolorem porro, nostrum libero dignissimos minima explicabo ipsam illo beatae in magnam adipisci error ad quas iste fugit et saepe?
        </span>

      </div>

      <div className='bottom-0  h-10 w-200 bg-white '>
        <h1 className='text-14 font-bold p-1'>Contact nous</h1>
        <div className='flex gap-2 items-center mb-2 bg-white'>
          <BsFacebook className='w-6 h-6 bg-blue-600 text-white rounded-full cursor-pointer p-1' />
          <SiGoogle className='w-6 h-6 bg-red-500 text-white rounded-full cursor-pointer p-1' />
          <TbBrandTelegram className='w-6 h-6 bg-blue-600 text-white rounded-full cursor-pointer p-1' />
          <AiFillLinkedin className='w-6 h-6 bg-blue-600 text-white rounded-full cursor-pointer p-1' />
        </div>
      </div>
    </div>
  )
}

export default Custom_card