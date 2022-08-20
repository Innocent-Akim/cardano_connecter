import React from 'react'
import Popup from '../components/Popup';
import { eventsData } from "../data/eventsData";
import { useStateContext } from '../context/contextProvider';
import EventCard from '../components/events/EventCard';
import LatestNews from '../components/events/LatestNews';

const Evenement = () => {
    const { callPopup } = useStateContext()
    const stateEvents = []

    eventsData.forEach(eventData => {
        stateEvents.push(eventData.etat)
    })

    const uniqueStateEvents = [...new Set(stateEvents)]

    return (
        <div className='my-16 mx-8 flex justify-between'>

            <div className='w-1/2 right-0 mr-6 absolute'>

                {!callPopup ?
                    <div>
                        <LatestNews />
                        {uniqueStateEvents.map((stateEvent, index) =>
                            <div key={index}>
                                <h1 className='capitalize text-3xl mt-6 mb-3 font-semibold text-blue-900'>{stateEvent} Events</h1>
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4' >

                                    {eventsData.map((event, index) =>
                                        stateEvent === event.etat ?
                                            <EventCard
                                                date={event.date}
                                                image={event.image}
                                                lieu={event.lieu}
                                                modalites={event.modalites}
                                                objectif={event.objectif}
                                                ador={event.adore}
                                                cheer={event.cheer}
                                                like={event.likes}
                                                key={index}

                                            /> : ''
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                    : <Popup />}
            </div>

        </div>
    )
}

export default Evenement