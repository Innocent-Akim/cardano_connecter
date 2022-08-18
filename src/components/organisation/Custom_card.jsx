/* eslint-disable jsx-a11y/alt-text */

import React from 'react'
import image from '../../assets/images/ADA-Logo-500x281.jpg'

const Custom_card = () => {
  return (
    <div className='mt-2 h-75 w-150 shadow-md bg-white'>
      <p className='text-18 font-bold p-2'><span className='text-18 font-bold'>BRALIMA</span></p>
      <div className='flex m-2'>
        <p className='text-start text-16 font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quo dolorem porro, nostrum libero dignissimos minima explicabo ipsam illo beatae in magnam adipisci error ad quas iste fugit et saepe?</p>

        <img className='w-52 h-44 pl-2' src={image}></img>


      </div>
    </div>
  )
}

export default Custom_card