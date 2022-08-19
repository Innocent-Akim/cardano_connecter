import React from 'react'
import { AiTwotoneLike, AiFillHeart } from "react-icons/ai";
import { FaHandsWash } from "react-icons/fa";

import CallPopup from './CallPopup';

const EventCard = ({ date, objectif, modalites, lieu, image }) => {
    return (
        <div className='shadow-md rounded-md border-sky-500 border-b-4'>

            <div className='relative'>
                <img src={image} alt="" className='w-full h-40 contrast-75' />
                <div className='text-gray-600'>
                    <h1 className='my-3 mx-2 text-sky-700 font-bold'>{objectif}</h1>
                    <p className='mx-2'>{date}</p>
                </div>
            </div>
            <div className='px-2 mt-2 mb-3'>
                <p className='text-base font-normal'>{modalites}</p>
                <p>Lieu de rencontre : {lieu}</p>
            </div>
            <div className='flex justify-between items-center'>
                <CallPopup />
                <div className='flex justify-between pr-4 text-lg text-sky-900'>
                    <AiTwotoneLike className='mr-3' />
                    <AiFillHeart className='mr-3' />
                    <FaHandsWash className='mr-3' />
                </div>
            </div>

        </div>
    )
}

export default EventCard