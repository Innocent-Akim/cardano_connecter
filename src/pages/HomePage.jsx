import React from 'react'
import Presentation from '../components/home/Presentation'
import Activites from '../components/home/Activites';

const HomePage = () => {
    return (
        <div className='my-16 mx-20'>
            <Presentation />
            <Activites />
        </div>
    )
}

export default HomePage