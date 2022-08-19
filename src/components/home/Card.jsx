import React from 'react'

const Card = ({ icon, titre, description }) => {
    return (
        <div className='flex flex-col items-center justify-center bg-white p-4 box-border w-56 rounded-2xl border-1'>
            <div className='p-4 mb-8 rounded-3xl text-6xl border-1'>{icon}</div>
            <h1 className='text-xl font-medium mb-4'>{titre}</h1>
            <p className='text-center font-light mx-2'>{description}</p>
        </div>
    )
}

export default Card