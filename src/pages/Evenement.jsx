import React from 'react'
import Popup from '../components/Popup';
import { eventsData } from "../data/eventsData";
import { useStateContext } from '../context/contextProvider';
import EventCard from '../components/events/EventCard';

const Evenement = () => {
    const { callPopup } = useStateContext()
    const stateEvents = []

    eventsData.forEach(eventData => {
        stateEvents.push(eventData.etat)
    })

    const uniqueStateEvents = [...new Set(stateEvents)]
    console.log(uniqueStateEvents)

    return (
        <div className='mt-16 mx-8 flex flex-col justify-center items-center'>
            <div >
                {!callPopup ? uniqueStateEvents.map((stateEvent, index) =>
                    <>
                        <h1 className='capitalize text-3xl mt-6 mb-3 font-semibold text-blue-900'>{stateEvent} Events</h1>
                        <div className='grid gap-4 grid-cols-3' key={index}>

                            {eventsData.map((event, index) =>
                                stateEvent === event.etat ?
                                    <EventCard
                                        date={event.date}
                                        image={event.image}
                                        lieu={event.lieu}
                                        modalites={event.modalites}
                                        objectif={event.objectif}
                                        key={index}
                                    /> : ''
                            )}
                        </div>
                    </>
                ) : <Popup />}
            </div>

        </div>
    )
}

export default Evenement