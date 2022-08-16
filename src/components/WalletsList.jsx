import React from 'react'

const WalletsList = ({ children }) => {

    return (
        <div className='flex sm:items-center absolute max-h-max bottom-10 left-0 sm:bottom-auto sm:left-auto sm:relative'>
            <div className='bg-white/70 animate-pulse flex flex-col sm:animate-none md:flex-row justify-center items-center sm:p-5 p-2 rounded-lg shadow-md shadow-blue-50'>
                {children}
            </div>
        </div>

    )
}

export default WalletsList