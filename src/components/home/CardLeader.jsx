import React from 'react'
import { BsLinkedin, BsTwitter } from 'react-icons/bs';

const CardLeader = ({ srcImage, nom, fonction, linkedin, twitter }) => {
    return (
        <div className='flex flex-col items-center justify-center bg-white p-4 box-border w-56 rounded-2xl border-1 hover:bg-gray-100 hover:shadow-2xl hover:animate-pulse'>
            <img src={srcImage} alt="" className='rounded-full w-72' />
            <h1 className='text-xl font-medium mb-4'>{nom}</h1>
            <p className='text-center font-light mx-2'>{fonction}</p>
            <div className='flex justify-between'>
                <a href={linkedin}><BsLinkedin /></a>
                <a href={twitter}><BsTwitter /></a>
            </div>
        </div>
    )
}

export default CardLeader