import React from 'react'
import { articleData, articlesCategories } from "../../data/sidebarBlog"
import Button from './Button';
import { useStateContext } from '../../context/contextProvider';
import NoSurchData from '../NoSurchData';


const Articles = () => {
    const { isFilter, isCategory } = useStateContext()
    const data = []
    const recherche = (condition, datas) => {
        if (condition) {
            return;
        } else {
            data.splice()
            data.push(datas)
        }
    }
    articleData.forEach(article => {
        const categorieArticle = articlesCategories[0]
        const checkCategorie = article.category !== isCategory
        const searchData = article.titre.toLowerCase().indexOf(isFilter.toLowerCase()) === -1;
        const search = searchData || checkCategorie;
        if (categorieArticle === isCategory) {
            recherche(searchData, article);
        } else {
            recherche(search, article);
        }
    })

    return (
        <>
            {data.length > 0 ? <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 content-center mx-5 my-4 absolute left-0 w-8/12'>
                {data.map((article, index) =>
                    <div className='shadow-md rounded-md border-b-1 border-blue-400' key={index}>
                        <div className='relative'>
                            <img src={article.image} alt="" className='w-full h-60 contrast-75 rounded-md' />
                            <div className='absolute bottom-16 right-0 left-0 border-b-1'></div>
                            <div className='flex justify-between items-center absolute bottom-0 right-0 left-0 p-4 h-16 w-full text-gray-700 bg-gray-200'>
                                <div className='text-gray-600'>
                                    <p>{article.auteur}</p>
                                    <p>{article.datePub}</p>
                                </div>
                                <p>{article.category}</p>
                            </div>
                        </div>
                        <div className='px-2 mt-2 mb-3'>
                            <h3 className='text-base text-sky-700 font-medium'>{article.titre}</h3>
                            <p className='font-light'>{article.description}</p>
                        </div>
                        <Button link={article.link} />
                    </div>
                )

                }
            </div> :
                <div className='flex justify-center content-center items-center absolute left-0 w-8/12'>
                    <NoSurchData />
                </div>}
        </>
    )
}

export default Articles