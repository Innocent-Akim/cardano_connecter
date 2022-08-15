import React from 'react'
import Articles from '../components/blog/Articles'
import Sidebar from '../components/blog/Sidebar'
import Popup from '../components/Popup';

const Blog = () => {
    return (
        <div className='mt-16 flex'>
            <Sidebar />
            <Articles />
            <Popup />
        </div>
    )
}

export default Blog