import React from 'react'
import { IoOpenOutline } from "react-icons/io5";

const Button = ({ link }) => {
    return (
        <div className='p-2 mx-4 mb-5 border-1 w-max '>
            <a href={link} target='_blank' className='flex items-center text-teal-800' rel="noreferrer">Ouvrir<span><IoOpenOutline className='ml-3' /></span> </a>
        </div>
    )
}

export default Button