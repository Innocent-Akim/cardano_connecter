import React from 'react'
import eventsDraw from "../../assets/undraw/eventsDraw.png";

const LatestNews = () => {
    return (
        <div className='w-1/3'>
            <h2 className='text-3xl font-bold my-7'>Retrouver les événements à venir et passés</h2>
            <p className='font-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore exercitationem illum ratione molestiae ullam ad dolores iusto voluptate cupiditate, obcaecati voluptatem aut ab cumque optio.
            </p>
            <img src={eventsDraw} alt='' />
        </div>
    )
}

export default LatestNews