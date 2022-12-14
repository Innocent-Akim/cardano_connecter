import React from 'react'
import { BsCashCoin } from "react-icons/bs";

import { useStateContext } from "../../context/contextProvider";

const CallPopup = () => {
    const { setCallPopup } = useStateContext()

    return (
        <div className='px-2 mx-4 mb-5 border-1 border-green-200 w-max text-sky-700 hover:bg-sky-700 hover:text-white hover:cursor-pointer'>
            <button
                className='flex items-center font-semibold h-full m-2'
                onClick={() => {
                    setCallPopup(true)
                }}
            >
                Soutenir <span><BsCashCoin className='ml-3 text-lg' /></span>
            </button>
        </div>
    )
}

export default CallPopup