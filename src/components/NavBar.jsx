import React from 'react'
import { NavLink } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsLinkedin, } from "react-icons/bs";
import { RiWallet3Fill } from "react-icons/ri";

import { useStateContext } from "../context/contextProvider";

const NavBar = () => {

    const { isClicked, setIsClicked } = useStateContext()

    const classLink = 'text-black hover:decoration-white hover:text-blue-800 font-semibold'
    const classMediasSociaux = 'text-sky-900 text-lg hover:text-blue-800 font-semibold'

    return (
        <nav className='flex justify-between items-center fixed top-0 right-0 left-0 z-50 bg-gray-50 w-full h-14 mb-10 px-7 shadow-lg'>
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
                    <button
                        className='text-pink-500 text-xl ml-8'
                        onClick={() => setIsClicked(!isClicked)}
                    >
                        <RiWallet3Fill />
                    </button>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar