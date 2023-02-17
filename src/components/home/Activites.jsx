import React from 'react'
import { cardData } from "../../data/homeAcivitiesData";
import Card from './Card';

const Activites = () => {
    return (
        <div className='bg-gray-100 mt-16 p-0 md:p-20 flex flex-col items-center text-center rounded-lg w-90 md:w-full h-[800px] '>
            <h1 className='font-bold text-2xl mb-4'>Activités organisées</h1>
            <p className='mb-9'>Les activités suivantes sont celles que nous soutenons</p>
            <div className='flex flex-col md:grid md:grid-cols-3 lg:grid-cols-4  justify-around gap-4'>
                {cardData.map((card, index) =>
                    <Card
                        key={index}
                        icon={card.icon}
                        titre={card.titre}
                        description={card.desc}
                    />
                )
                }
            </div>
        </div>
    )
}

export default Activites