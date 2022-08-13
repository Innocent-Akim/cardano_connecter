import React from 'react'
import Articles from '../components/blog/Articles'
import Sidebar from '../components/blog/Sidebar'

const Blog = () => {
    return (
        <div className='absolute mt-16 flex'>
            <Sidebar />
            <Articles />
        </div>
    )
}

export default Blog