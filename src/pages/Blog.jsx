import React from 'react'

import Articles from '../components/blog/Articles'
import Sidebar from '../components/blog/Sidebar'


const Blog = () => {

    return (
        <div className='mt-16 flex justify-center'>
            <Articles />
            <Sidebar />
        </div>
    )
}

export default Blog