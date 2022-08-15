import React from 'react'
import { createPortal } from 'react-dom';
import { motion } from "framer-motion";

import Home from '../pages/Home';

import { useStateContext } from "../context/contextProvider";

const Popup = () => {
    const { callPopup, setCallPopup } = useStateContext()

    return createPortal(
        <div className='absolute top-5 right-0'
        >
            {callPopup &&

                <motion.div
                    className='flex justify-between'
                    initial={{ opacity: 0, y: '5%', x: '5%' }}
                    animate={{ opacity: 1, y: '-0.1%', x: '-30%' }}
                    exit={{ opacity: 0, y: '50%', x: '100%', scale: 0.2 }}
                    transition={{ duration: 1 }}
                >
                    <Home
                        handleClose={() => setCallPopup(false)}
                    />
                </motion.div>

            }
        </div>, document.body
    )
}

export default Popup