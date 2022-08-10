import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsLinkedin, } from "react-icons/bs";

const NavBar = () => {
    const classLink = 'text-black hover:decoration-white hover:text-blue-800 font-semibold'
    const classMediasSociaux = 'text-sky-900 text-lg hover:text-blue-800 font-semibold'

    return (
        <nav className='flex justify-between items-center fixed top-0 right-0 left-0 z-50 bg-gray-50 w-full h-14 mb-10 px-7 shadow-lg'>
            <div>
                <img src='' alt='' />
            </div>
            <div>
                <ul className='flex justify-between'>
                    <li className='mx-6'><a className={classLink} href="/">Home</a></li>
                    <li className='mx-6'><a className={classLink} href="/">Organisation</a></li>
                    <li className='mx-6'><a className={classLink} href="/">Evénement</a></li>
                    <li className='mx-6'><a className={classLink} href="/">Blog</a></li>
                </ul>
            </div>
            <div>
                <ul className='flex justify-around'>
                    <li className='mx-2'><a href="/"><AiFillInstagram className={classMediasSociaux} /></a></li>
                    <li className='mx-2'><a href="/"><BsLinkedin className={classMediasSociaux} /></a></li>
                    <li className='mx-2'><a href="/"><BsTwitter className={classMediasSociaux} /></a></li>
                    <li className='mx-2'><a href="/"><BsFacebook className={classMediasSociaux} /></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar