import React from 'react'

import { useStateContext } from "../../context/contextProvider";

const CallPopup = () => {
    const { setCallPopup } = useStateContext()

    return (
        <div>
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