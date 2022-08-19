import React from 'react'
import Button from './Button'
import { FaServicestack } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Presentation = () => {
    return (
        <div className='flex justify-between items-center'>
            <div>
                <h1 className='text-sky-600 font-semibold text-3xl mb-3'># Stakepool Goma</h1>
                <p className='font-bold text-5xl mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <p className='text-lg font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam dolorem fuga accusamus.</p>
                <div className='flex gap-3'>
                    <Button
                        icon={<FaServicestack className='mr-3 text-lg text-emerald-100' />}
                        text='NOS SERVICES'
                        color='white'
                        bgColor='#0284c7'
                    />
                    <Button
                        icon={<IoMdMail className='mr-3 text-lg text-yellow-300' />}
                        text='CONTACT'
                        color='white'
                        bgColor='#0284c7'
                    />
                </div>
            </div>
        </div>
    )
}

export default Presentation