import React from 'react'
import CallPopup from './CallPopup';

const EventCard = ({ date, objectif, modalites, lieu, image }) => {
    return (
        <div className='shadow-md rounded-md border-1 border-blue-200'>

            <div className='relative'>
                <img src={image} alt="" className='w-full h-60 contrast-75 rounded-md' />
                <div className='text-gray-600'>
                    <h1 className='my-3 mx-2'>{objectif}</h1>
                    <p className='mx-2'>{date}</p>
                </div>
            </div>
            <div className='px-2 mt-2 mb-3'>
                <p className='text-base font-semibold'>{modalites}</p>
                <p>Lieu de rencontre : {lieu}</p>
            </div>
            <CallPopup />
        </div>
    )
}

export default EventCard