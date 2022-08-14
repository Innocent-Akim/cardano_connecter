import React from 'react'
import empty from "../assets/images/empty.png";

const NoSurchData = () => {
    return (
        <div className='flex flex-col justify-center items-center content-center'>
            <img src={empty} alt='No surch data' className='w-40 h-40' />
            <p>Aucune donnée</p>
        </div>
    )
}

export default NoSurchData