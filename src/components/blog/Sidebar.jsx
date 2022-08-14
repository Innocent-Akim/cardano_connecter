import React from 'react'
import { BiSearchAlt2 } from "react-icons/bi"
import { articlesCategories } from "../../data/sidebar";
import { useStateContext } from "../../context/contextProvider";

const Sidebar = () => {
    const { isFilter, handleChange, handleChangeCategorie, isCategory } = useStateContext()

    return (
        <div className='left-0 ml-6 my-5 text-gray-600 border-r-1 pr-4 box-border'>
            <div className='flex justify-between items-center bg-transparent border border-gray-600 rounded-md p-2'>
                <BiSearchAlt2 className='text-xl' />
                <input
                    type="text"
                    placeholder='Search'
                    value={isFilter}
                    className='placeholder:text-gray-600 ml-2 outline-none'
                    onChange={(e) => { handleChange(e) }}
                />
            </div>
            <div className='mt-4 font-semibold'>
                <p>Catégories blogs</p>
                <div className="flex flex-col justify-start text-sm">
                    {
                        articlesCategories.map((categorie, index) =>
                            <button
                                key={index}
                                type="button"
                                className={`text-left p-2 hover:text-white hover:bg-gray-500 rounded ${categorie === isCategory ? 'bg-gray-500 rounded text-white' : ''}`}
                                onClick={() => { handleChangeCategorie(categorie) }}
                            >
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