/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import Custom_card from '../components/organisation/Custom_card'

export class Organisation extends Component {
    render() {
        return (
            <div className='my-16 mx-4 flex flex-col justify-center items-center'>
                <div className='grid grid-cols-3 gap-2 w-screen h-screen bg-transparent'>
                    <Custom_card />
                    <Custom_card />
                    <Custom_card />
                    <Custom_card />
                    <Custom_card />
                    <Custom_card />
                    <Custom_card />
                </div>
            </div>
        )
    }
}

export default Organisation