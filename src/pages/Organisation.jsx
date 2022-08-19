
/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import Custom_card from '../components/organisation/Custom_card';
import { initDataOrga } from '../data/orgaData'

export class Organisation extends Component {
    render() {
        return (
            <>
                <div className='overscroll-auto hover:overscroll-contain m-16 mx-4 flex flex-col justify-center items-center bg-gray-50'>
                    <div className='grid grid-cols-3 gap-2 w-screen h-screen bg-transparent'>
                        {initDataOrga.map((data, index) =>
                            <div key={index}>
                                <Custom_card name={data.name} image={data.image} />
                            </div>

                        )}

                    </div>
                </div>
            </>

        )
    }
}

export default Organisation