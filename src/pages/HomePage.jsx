import React from 'react'
import Presentation from '../components/home/Presentation'
import Activites from '../components/home/Activites';
import About from '../components/home/About';
import Leadership from '../components/home/Leadership';

const HomePage = () => {
    return (
        <div className='my-16 mx-20'>
            <Presentation />
            <Activites />
            <About />
            <Leadership />
        </div>
    )
}

export default HomePage