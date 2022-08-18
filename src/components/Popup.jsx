import React from 'react'
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from "framer-motion";

import Home from '../pages/Home';
import { useStateContext } from "../context/contextProvider";

const Popup = () => {
    const { setCallPopup, isSmallSize, setIsSmallSize } = useStateContext()

    window.addEventListener('resize',
        () => setIsSmallSize(window.innerWidth > 576)
    )

    return createPortal(
        <div className='bg-half-transparent pointer-events-auto focus:pointer-events-none h-screen flex items-center justify-center'
            onClick={(e) => {
                setCallPopup(false);
            }}
        >
            <AnimatePresence>
                <motion.div
                    className='static pointer-events-none bg-half-transparent rounded-3xl'
                    onClick={(e) => e.stopPropagation()}
                    initial={{ opacity: 0, }}
                    animate={{ opacity: 1, }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Home
                        isSmallScreen={isSmallSize}
                    />
                </motion.div>
            </AnimatePresence>
        </div>, document.body
    )
}

export default Popup