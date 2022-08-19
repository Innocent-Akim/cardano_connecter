import React from 'react'
import Services from './Services'
import coding from "../../assets/undraw/coding.png";

const About = () => {
    return (
        <div className='flex mt-20 w-full'>
            <div className='w-1/2 pr-20'>
                <h1 className='text-4xl font-semibold mb-5'>Qu'est-ce que nous faison ?</h1>
                <p className='font-light text-base'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quas quidem similique atque quisquam repellat quod, eaque pariatur ut, animi ab et iste. Animi, voluptatum nesciunt iste corrupti blanditiis qui impedit ipsum a, obcaecati sequi nihil consectetur quae quisquam quaerat distinctio fugit, cupiditate quo in atque voluptate magni! Atque, excepturi?
                </p>
                <img src={coding} alt='' />
            </div>
            <div className='w-1/2'><Services /></div>

        </div>
    )
}

export default About