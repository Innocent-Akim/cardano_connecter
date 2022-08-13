import React from 'react'
import { articleData } from "../../data/sidebar"

const Articles = () => {
    return (
        <div className='grid col-span-2'>
            {articleData.map((article, index) =>
                <div key={index}>
                    <img src={article.image} alt="" />
                </div>
            )}
        </div>
    )
}

export default Articles