import React from 'react'

const Button = ({ icon, text, color, bgColor }) => {
    return (
        <button className='flex p-3 rounded-md hover:shadow-lg hover:bg-white' style={{ color, backgroundColor: bgColor }}>
            {icon}
            {text}
        </button>
    )
}

export default Button