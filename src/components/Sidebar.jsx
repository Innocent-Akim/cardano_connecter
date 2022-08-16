import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { GiPipeOrgan } from "react-icons/gi";
import { MdOutlineEvent } from "react-icons/md";
import { FaBlog } from "react-icons/fa";

import { useStateContext } from "../context/contextProvider";

const Sidebar = () => {
    const { isSidebarActive, setIsSidebarActive } = useStateContext()
    const classLink = 'flex items-center text-black hover:text-blue-900 hover:bg-white p-3 w-56 bg-transparent font-semibold rounded'
    const classIcon = 'text-xl mr-4 text-blue-900'

    return (
        <div className=''>
            <AnimatePresence>
                {isSidebarActive &&
                    <motion.div
                        initial={{ opacity: 0, }}
                        animate={{ opacity: 1, }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className='fixed left-0 top-16 bg-gray-100 w-60 ml-4 p-3 block sm:hidden rounded-xl shadow-lg'>
                        <ul className='flex flex-col justify-center w-60'>
                            <NavLink className={classLink} to='home'
                                onClick={() => {
                                    setIsSidebarActive(false)
                                }}
                            >
                                <AiFillHome className={classIcon} /> Home
                            </NavLink>
                            <NavLink className={classLink} to='organisation'
                                onClick={() => {
                                    setIsSidebarActive(false)
                                }}
                            >
                                <GiPipeOrgan className={classIcon} /> Organisation
                            </NavLink>
                            <NavLink className={classLink} to='evenement'
                                onClick={() => {
                                    setIsSidebarActive(false)
                                }}
                            >
                                <MdOutlineEvent className={classIcon} /> Evénément
                            </NavLink>
                            <NavLink className={classLink} to='blog'
                                onClick={() => {
                                    setIsSidebarActive(false)
                                }}
                            >
                                <FaBlog className={classIcon} /> Blog
                            </NavLink>
                        </ul>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}

export default Sidebar