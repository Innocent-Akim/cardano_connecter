import React from 'react'
import { BiSearchAlt2 } from "react-icons/bi"
import { articlesCategories, tagsData } from "../../data/sidebarBlog";
import { useStateContext } from "../../context/contextProvider";

const Sidebar = () => {
    const { isFilter, handleChange, handleChangeCategorie, isCategory } = useStateContext()

    return (
        <div className='fixed right-0 mr-8 my-5 text-gray-600 border-l-1 pl-4 box-border w-1/4'>
            <div className='flex items-center bg-transparent border border-gray-600 rounded-md p-2'>
                <BiSearchAlt2 className='text-xl' />
                <input
                    type="text"
                    placeholder='Search'
                    value={isFilter}
                    className='placeholder:text-gray-600 ml-2 outline-none'
                    onChange={(e) => { handleChange(e) }}
                />
            </div>
            <div className='mt-4 font-normal'>
                <p className='font-semibold text-sky-700'>Catégories blogs</p>
                <div className="flex flex-col justify-start text-sm">
                    {
                        articlesCategories.map((categorie, index) =>
                            <button
                                key={index}
                                type="button"
                                className={`text-left p-2 hover:text-white hover:bg-sky-700 rounded ${categorie === isCategory ? 'bg-sky-700 rounded text-white' : ''}`}
                                onClick={() => { handleChangeCategorie(categorie) }}
                            >
                                {categorie}
                            </button>
                        )
                    }
                </div>
            </div>
            <h2 className='mt-8 mb-4 text-2xl font-bold text-sky-700'>Tags</h2>
            <div className='grid md:grid-cols-3'>

                {tagsData.map((tag, keyTag) =>
                    <p
                        key={keyTag}
                        className='p-2 border-1 border-sky-700 rounded-2xl ml-2 text-center'
                    >
                        {tag.tag}</p>
                )}
            </div>

        </div>
    )
}

export default Sidebar