import React from 'react'

import { useStateContext } from "../../context/contextProvider";

const CallPopup = () => {
    const { setCallPopup } = useStateContext()

    return (
        <div className='mx-2 mb-3'>
            <button
                onClick={() => {
                    setCallPopup(true)
                }}
            >
                Ouvrir
            </button>
        </div>
    )
}

export default CallPopup