import React from 'react'
import { NavLink } from "react-router-dom";
import { AiFillInstagram, AiOutlineMenuUnfold } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsLinkedin, } from "react-icons/bs";
import { MdOutlineMenuOpen } from "react-icons/md";

import { useStateContext } from "../context/contextProvider";
import Sidebar from './Sidebar.jsx';
import MOBILISE from "../assets/undraw/MOBILISE.png";

const NavBar = () => {
    const { setCallPopup, isSidebarActive, setIsSidebarActive, isActivePage, handleChangePage } = useStateContext()

    const classLink = 'text-black hover:decoration-white hover:text-sky-700 font-normal'
    const classMediasSociaux = 'text-blue-900 text-lg hover:text-blue-800 hover:animate-pulse font-semibold'

    return (
        <nav
            className='flex justify-between items-center fixed top-0 right-0 left-0 z-50 bg-gray-50 w-full h-14 mb-10 px-7 shadow-lg'
            onClick={() => setCallPopup(false)}
        >
            <div className='hidden sm:block'>
                <NavLink className={classLink} to='home'>
                    <img src={MOBILISE} alt='' className='w-24' />
                </NavLink>

            </div>
            <div className='block sm:hidden left-0'>
                <button
                    className='text-2xl text-blue-900 font-bold'
                    onClick={() => setIsSidebarActive(!isSidebarActive)}
                >
                    {isSidebarActive === true ? <MdOutlineMenuOpen /> : <AiOutlineMenuUnfold />}
                </button>
            </div>
            <Sidebar />

            <div>
                <ul className='hidden sm:flex sm:justify-between 2xl:text-20'>
                    <li className='mx-6'>
                        <NavLink
                            className={classLink}
                            to='home'
                            onClick={() => { handleChangePage("Home") }}
                            style={{ color: isActivePage === 'Home' ? 'rgb(3, 105, 161)' : '' }}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className='mx-6'>
                        <NavLink
                            className={classLink}
                            to='organisation'
                            onClick={() => { handleChangePage("Organisation") }}
                            style={{ color: isActivePage === 'Organisation' ? 'rgb(3, 105, 161)' : '' }}
                        >
                            Organisation
                        </NavLink>
                    </li>
                    <li className='mx-6'>
                        <NavLink
                            className={classLink}
                            to='evenement'
                            onClick={() => { handleChangePage("Evénément") }}
                            style={{ color: isActivePage === 'Evénément' ? 'rgb(3, 105, 161)' : '' }}
                        >
                            Evénément
                        </NavLink>
                    </li>
                    <li className='mx-6'>
                        <NavLink
                            className={classLink}
                            to='blog'
                            onClick={() => { handleChangePage("Blog") }}
                            style={{ color: isActivePage === 'Blog' ? 'rgb(3, 105, 161)' : '' }}
                        >
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