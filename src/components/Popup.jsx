import React from 'react'
import { createPortal } from 'react-dom';

import Home from '../pages/Home';

import { useStateContext } from "../context/contextProvider";

const Popup = () => {
    const { callPopup } = useStateContext()

    return createPortal(
        <div className='absolute top-0 right-0'>
            <div className='w-screen h-screen flex justify-center items-center'>
                {callPopup && <Home />}
            </div>
        </div>, document.body
    )
}

export default Popup