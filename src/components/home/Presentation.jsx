import React from 'react'
import Button from './Button'
import { FaServicestack } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import homeDraw from "../../assets/undraw/homeDraw.png";

const Presentation = () => {
    return (
        <div className='flex flex-col md:grid md:grid-cols-2 justify-around items-center lg:mx-20'
        >
            <div>
                <h1 className='text-sky-600 font-semibold text-3xl mb-3'># Shiriki-DRC</h1>
                <p className='font-bold text-5xl mb-5'>Soutenez les actions citoyens</p>
                <p className='text-lg font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam dolorem fuga accusamus.</p>
                <div className='flex gap-3'>
                    <Button
                        icon={<FaServicestack className='mr-3 text-lg text-emerald-100' />}
                        text='NOS SERVICES'
                        color='white'
                        bgColor='#0284c7'
                    />
                    <Button
                        icon={<IoMdMail className='mr-3 text-lg text-amber-500' />}
                        text='CONTACT'
                        color='#e18e11'
                        bgColor='#fcf3e6'
                    />
                </div>
            </div>
            <div className='flex items-center w-80 md:w-full'>
                <div>
                    <img src={homeDraw} alt="" className='w-80 lg:w-800' />
                </div>
                <div className='h-28 w-20'
                    style={{
                        backgroundImage: 'radial-gradient(#0284c7 20%, transparent 20%),radial-gradient(#0284c7 20%, transparent 20%)',
                        backgroundPosition: '0 0, 50px 50px',
                        backgroundSize: '10px 10px'
                    }}
                >
                </div>
            </div>
        </div>
    )
}

export default Presentation