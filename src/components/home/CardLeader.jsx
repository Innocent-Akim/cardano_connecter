import React from 'react'
import { BsLinkedin, BsTwitter } from 'react-icons/bs';

const CardLeader = ({ srcImage, nom, fonction, linkedin, twitter }) => {
    return (
        <div className='flex flex-col items-center justify-center bg-white p-4 box-border w-80 md:w-64 rounded-2xl border-1 hover:bg-gray-100 hover:shadow-2xl hover:animate-pulse'>
            <img src={srcImage} alt="" className='rounded-full h-44 w-44 bg-cover mb-9' />
            <h1 className='text-[14px] font-bold  mb-2'>{nom}</h1>
            <p className='text-center font-normal mx-2'>{fonction}</p>
            <div className='flex justify-between text-2xl'>
                <a href={linkedin} target='_blank' rel="noreferrer"><BsLinkedin className='m-3' /></a>
                <a href={twitter} target='_blank' rel="noreferrer"><BsTwitter className='m-3' /></a>
            </div>
        </div>
    )
}

export default CardLeader