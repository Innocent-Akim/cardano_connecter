import React from 'react'
import { NavLink } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsLinkedin, } from "react-icons/bs";

import { useStateContext } from "../context/contextProvider";

const NavBar = () => {
    const { setCallPopup } = useStateContext()

    const classLink = 'text-black hover:decoration-white hover:text-blue-800 font-semibold'
    const classMediasSociaux = 'text-blue-900 text-lg hover:text-blue-800 hover:animate-pulse font-semibold'

    return (
        <nav
            className='flex justify-between items-center fixed top-0 right-0 left-0 z-50 bg-gray-50 w-full h-14 mb-10 px-7 shadow-lg'
            onClick={() => setCallPopup(false)}
        >
            <div>
                <img src='' alt='' />
            </div>
            <div>
                <ul className='flex justify-between'>
                    <li className='mx-6'>
                        <NavLink className={classLink} to='home'>
                            Home
                        </NavLink>
                    </li>
                    <li className='mx-6'>
                        <NavLink className={classLink} to='organisation'>
                            Organisation
                        </NavLink>
                    </li>
                    <li className='mx-6'>
                        <NavLink className={classLink} to='evenement'>
                            Evénément
                        </NavLink>
                    </li>
                    <li className='mx-6'>
                        <NavLink className={classLink} to='blog'>
                            Blog
                        </NavLink>
                    </li>
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