import React from 'react'
import { NavLink } from 'react-router-dom';

import { useStateContext } from "../context/contextProvider";

const Sidebar = () => {
    const { isSidebarActive, setIsSidebarActive } = useStateContext()
    const classLink = 'text-black p-3 w-full bg-transparent hover:bg-blue-900 hover:text-white font-semibold'

    return (
        <div className=''>
            {isSidebarActive &&
                <div className='fixed left-0 top-16 bg-gray-100 w-60 ml-4 block sm:hidden rounded-xl'>
                    <ul className='sm:justify-between flex flex-col '>
                        <li className='mx-8 my-4'>
                            <NavLink className={classLink} to='home'
                                onClick={() => {
                                    setIsSidebarActive(false)
                                }}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className='mx-8 my-4'>
                            <NavLink className={classLink} to='organisation'
                                onClick={() => {
                                    setIsSidebarActive(false)
                                }}
                            >
                                Organisation
                            </NavLink>
                        </li>
                        <li className='mx-8 my-4'>
                            <NavLink className={classLink} to='evenement'
                                onClick={() => {
                                    setIsSidebarActive(false)
                                }}
                            >
                                Evénément
                            </NavLink>
                        </li>
                        <li className='mx-8 my-4'>
                            <NavLink className={classLink} to='blog'
                                onClick={() => {
                                    setIsSidebarActive(false)
                                }}
                            >
                                Blog
                            </NavLink>
                        </li>
                    </ul>
                </div>
            }
        </div>
    )
}

export default Sidebar