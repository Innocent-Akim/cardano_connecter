import React from 'react'
import Popup from '../components/Popup';
import { eventsData } from "../data/eventsData";
import { useStateContext } from '../context/contextProvider';
import EventCard from '../components/events/EventCard';

const Evenement = () => {
    const { callPopup } = useStateContext()

    return (
        <div className='mt-16 mx-8 flex flex-col justify-center items-center'>
            <div className='grid gap-4 grid-cols-3'>
                {!callPopup ? eventsData.map((event, index) =>
                    <EventCard
                        date={event.date}
                        image={event.image}
                        lieu={event.lieu}
                        modalites={event.modalites}
                        objectif={event.objectif}
                        key={index}
                    />
                ) : <Popup />}
            </div>

        </div>
    )
}

export default Evenement