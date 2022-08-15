import React from 'react'
import { createPortal } from 'react-dom';

import Home from '../pages/Home';

import { useStateContext } from "../context/contextProvider";

const Popup = () => {
    const { callPopup } = useStateContext()

    return createPortal(
        <div className='absolute top-0 right-0 '>
            {callPopup && <Home />}
        </div>, document.body
    )
}

export default Popup