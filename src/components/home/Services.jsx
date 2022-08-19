import React from 'react'
import { cardServicesData } from "../../data/homeAcivitiesData";
import Card from "./Card";

const Services = () => {
    return (
        <div className='flex justify-center p-4 items-center ml-5'>
            <div className='grid grid-cols-2 gap-3 rounded-none'>
                {
                    cardServicesData.map((card, index) =>
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

export default Services