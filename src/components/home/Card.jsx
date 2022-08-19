import React from 'react'

const Card = ({ icon, titre, description }) => {
    return (
        <div>
            <div className='p-8 rounded-xl'>{icon}</div>
        </div>
    )
}

export default Card