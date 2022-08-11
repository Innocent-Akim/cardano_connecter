import React from 'react'

import { useStateContext } from "../context/contextProvider";

const WalletsList = ({ children }) => {
    const { isClicked } = useStateContext()

    return (
        <div>
            {isClicked &&
                <div className='flex flex-col absolute right-1 top-16 bg-gray-100 p-5 rounded-lg'>
                    {children}
                </div>
            }
        </div>

    )
}

export default WalletsList