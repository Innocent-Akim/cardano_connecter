import React from 'react'

const WalletsList = ({ children }) => {

    return (
        <div className='flex items-center'>
            <div className='flex justify-center items-center p-5 rounded-lg shadow-md shadow-blue-50'>
                {children}
            </div>
        </div>

    )
}

export default WalletsList