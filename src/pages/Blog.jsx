import React from 'react'

import Articles from '../components/blog/Articles'
import Sidebar from '../components/blog/Sidebar'
import Popup from '../components/Popup';
import { useStateContext } from '../context/contextProvider';


const Blog = () => {
    const { setCallPopup } = useStateContext()

    return (
        <div className='mt-16 flex'
        // onClick={() => setCallPopup(false)}
        >
            <Sidebar />
            <Articles />
            <Popup />
        </div>
    )
}

export default Blog