import React from 'react'
import Presentation from '../components/home/Presentation'
import Activites from '../components/home/Activites';
import About from '../components/home/About';

const HomePage = () => {
    return (
        <div className='my-16 mx-20'>
            <Presentation />
            <Activites />
            <About />
        </div>
    )
}

export default HomePage