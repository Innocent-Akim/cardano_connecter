import React from 'react'
import CallPopup from './CallPopup';

const EventCard = ({ date, objectif, modalites, lieu, image }) => {
    return (
        <div className='shadow-md rounded-md border-green-600 border-b-4'>

            <div className='relative'>
                <img src={image} alt="" className='w-full h-40 contrast-75' />
                <div className='text-gray-600'>
                    <h1 className='my-3 mx-2 text-green-600 font-bold'>{objectif}</h1>
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