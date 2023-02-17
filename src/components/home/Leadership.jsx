import React from 'react'
import { leaderData } from "../../data/homeAcivitiesData";
import CardLeader from './CardLeader';

const Leadership = () => {
    return (
        <div className='bg-slate-100 mt-16 p-20 w-full flex flex-col items-center text-center rounded-lg'>
            <h1 className='font-bold text-2xl mb-4'>Leadership</h1>
            <p className='mb-9'>Rencontrez notre équipe et bénéficiez de son expertise</p>
            <div className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 justify-around gap-4'>
                {
                    leaderData.map((leader, index) =>
                        <CardLeader
                            key={index}
                            srcImage={leader.profileImg}
                            fonction={leader.fonction}
                            nom={leader.nom}
                            linkedin={leader.linkedin}
                            twitter={leader.twitter}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Leadership