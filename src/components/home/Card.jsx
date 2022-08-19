import React from 'react'

const Card = ({ icon, titre, description }) => {
    return (
        <div className='flex flex-col items-center justify-center bg-white p-4 box-border w-56 rounded-2xl border-1 hover:bg-gray-100 hover:shadow-2xl hover:animate-pulse'>
            <div className='p-4 mb-8 rounded-3xl text-5xl border-1 bg-white'>{icon}</div>
            <h1 className='text-xl font-medium mb-4'>{titre}</h1>
            <p className='text-center font-light mx-2'>{description}</p>
        </div>
    )
}

export default Card