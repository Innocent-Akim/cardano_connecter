/* eslint-disable jsx-a11y/alt-text */

import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { SiGoogle } from 'react-icons/si'
import { TbBrandTelegram } from 'react-icons/tb'
import { AiFillLinkedin } from 'react-icons/ai'


const Custom_card = ({ name, image }) => {
  return (
    <div className='bg-fixed mt-2 h-75 w-200 bg-gray-50 shadow-lg p-4'>
      <p className='text-18 font-bold p-2'><span className='text-18 text-blue-900 font-extrabold'>{name}</span></p>
      <div className=''></div>
      <div className='flex m-2 p-2 bg-white'>
        <p className='text-justify text-14 font-light'>
          Lorem ipsum dolor. Aspernatur quo dolorem porro, nostrum libero dignissimos minima explicabo ipsam illo beatae in magnam adipisci error ad quas iste fugit et saepe?
        </p>
        <img className='w-52 h-44 pl-2  cursor-pointer' src={image}></img>
      </div>

      <div className='bottom-0  h-10 w-200 bg-gray-50 '>
        <h1 className='text-14 font-bold p-1'>Contact nous</h1>
        <div className='flex gap-4 items-center'>
          <BsFacebook className='w-3 h-3 bg-blue-600 text-white rounded-full' />
          <SiGoogle className='w-3 h-3 bg-red-500 text-white rounded-full' />
          <TbBrandTelegram className='w-3 h-3 bg-blue-600 text-white rounded-full' />
          <AiFillLinkedin className='w-3 h-3 bg-blue-600 text-white rounded-full' />
        </div>
      </div>
    </div>
  )
}

export default Custom_card