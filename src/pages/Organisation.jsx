
/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import Custom_card from '../components/organisation/Custom_card';
import { initDataOrga } from '../data/orgaData'

const Organisation = () => {

    return (
        <div className='mx-7'>
            <div className='overscroll-auto hover:overscroll-contain m-16 mx-4 flex flex-col justify-center items-center bg-gray-50'>
                <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-3 bg-transparent'>
                    {initDataOrga.map((data, index) =>
                        <div key={index}>
                            <Custom_card name={data.name} image={data.image} />
                        </div>

                    )}
                </div>
            </div>
        </div>

    )
}

export default Organisation