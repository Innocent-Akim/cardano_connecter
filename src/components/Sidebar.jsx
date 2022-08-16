import React from 'react'
import { NavLink } from 'react-router-dom';

import { useStateContext } from "../context/contextProvider";

const Sidebar = () => {
    const { isSidebarActive, setIsSidebarActive } = useStateContext()
    const classLink = 'text-black hover:decoration-white hover:text-blue-800 font-semibold'

    return (
        <div>
            {isSidebarActive &&
                <div className=''>
                    <ul className='sm:justify-between flex flex-col'>
                        <li className='mx-6'>
                            <NavLink className={classLink} to='home'
                                onClick={() => {
                                    setIsSidebarActive(false)
                                }}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className='mx-6'>
                            <NavLink className={classLink} to='organisation'
                                onClick={() => {
                                    setIsSidebarActive(false)
                                }}
                            >
                                Organisation
                            </NavLink>
                        </li>
                        <li className='mx-6'>
                            <NavLink className={classLink} to='evenement'
                                onClick={() => {
                                    setIsSidebarActive(false)
                                }}
                            >
                                Evénément
                            </NavLink>
                        </li>
                        <li className='mx-6'>
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