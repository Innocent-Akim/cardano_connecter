import React from 'react'
import CallPopup from '../components/events/CallPopup';
import Popup from '../components/Popup';
import { useStateContext } from "../context/contextProvider";

const Evenement = () => {
    const { callPopup } = useStateContext()

    return (
        <div className='mt-16 flex flex-col justify-center items-center'>
            <CallPopup />
            {callPopup && <Popup />}
        </div>
    )
}

export default Evenement