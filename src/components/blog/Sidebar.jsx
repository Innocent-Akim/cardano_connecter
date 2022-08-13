import React from 'react'
import { BiSearchAlt2 } from "react-icons/bi"
import { articlesCategories } from "../../data/sidebar";

const Sidebar = () => {
    return (
        <div className='relative left-0 mx-6 my-5 text-gray-600 border-r-1 pr-4 box-border'>
            <div className='flex justify-between items-center bg-transparent border border-gray-600 rounded-md p-2'>
                <BiSearchAlt2 className='text-xl' />
                <input type="text" placeholder='Search' className='placeholder:text-gray-600 ml-2 outline-none' />
            </div>
            <div className='mt-4 font-semibold'>
                <p>Catégories blogs</p>
                <div className="flex flex-col justify-start text-sm">
                    {
                        articlesCategories.map((categorie, index) =>
                            <button key={index} type="button" className="text-left p-2 hover:text-white hover:bg-gray-500 rounded">
                                {categorie}
                            </button>
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default Sidebar