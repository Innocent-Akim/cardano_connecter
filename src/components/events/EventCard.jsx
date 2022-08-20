import React from 'react'
import { AiTwotoneLike, AiFillHeart } from "react-icons/ai";
import { FaHandsWash } from "react-icons/fa";

import CallPopup from './CallPopup';

const EventCard = ({ date, objectif, modalites, lieu, image, like = 0, cheer = 0, ador = 0 }) => {
    const classImpressions = 'text-xl mr-2 mb-5 hover:cursor-pointer hover:animate-spin-slow'

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
                <p className='text-base font-extralight'>{modalites}</p>
                <p>Lieu de rencontre : {lieu}</p>
            </div>
            <div className='flex justify-between items-center'>
                <CallPopup />
                <div className='flex justify-between pr-4 text-lg text-sky-900'>
                    <span className='relative bg-sky-700 font-light text-sm flex items-center justify-center w-4 h-4 rounded-full text-center bottom-3 left-6 text-white'>{like}</span>


                    <div className='flex items-center relative'>
                        <AiTwotoneLike className={classImpressions} />
                    </div>
                    <span className='relative bg-sky-700 font-light text-sm flex items-center justify-center w-4 h-4 rounded-full text-center bottom-3 left-6 text-white'>{ador}</span>

                    <div><AiFillHeart className={`${classImpressions} text-red-700`} /></div>
                    <span className='relative bg-sky-700 font-light text-sm flex items-center justify-center w-4 h-4 rounded-full text-center bottom-3 left-6 text-white'>{cheer}</span>

                    <div><FaHandsWash className={`${classImpressions} text-yellow-700 `} /></div>
                </div>
            </div>

        </div>
    )
}

export default EventCard