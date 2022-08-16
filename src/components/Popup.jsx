import React from 'react'
import { createPortal } from 'react-dom';
import { motion } from "framer-motion";

import Home from '../pages/Home';
import { useStateContext } from "../context/contextProvider";

const Popup = () => {
    const { setCallPopup } = useStateContext()

    return createPortal(
        <div className='bg-half-transparent pointer-events-auto focus:pointer-events-none h-screen flex items-center justify-center'
            onClick={(e) => {
                setCallPopup(false);
            }}
        >
            <motion.div
                className='pointer-events-none flex  bg-white rounded-3xl'
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, }}
                animate={{ opacity: 1, }}
                exit={{ opacity: 0, y: '50%', x: '100%', scale: 0.2 }}
                transition={{ duration: 1 }}
            >
                <Home />
            </motion.div>
        </div>, document.body
    )
}

export default Popup