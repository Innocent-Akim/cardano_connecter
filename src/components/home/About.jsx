import React from 'react'
import Services from './Services'
import coding from "../../assets/undraw/coding.png";

const About = () => {
    return (
        <div className='grid grid-cols-1 md:flex mt-80 md:mt-20 w-full '>
            <div className='flex flex-col w-full md:w-1/2 md:pr-20 '>
                <h1 className='text-2xl md:text-4xl font-semibold mb-5'>Qu'est-ce que nous faisons ?</h1>
                <p className='font-light text-sm md:text-base text-justify'>
                    Par l’application Shiriki-RDC, des structures et plateformes donnent généralement des informations sur la cause, des actions à entreprendre et des moyens d'impliquer le plus grand nombre de personnes. Elle peut également fournir des outils pour faciliter l'organisation d'activités et l'engagement des participants.
                    Shiriki-RDC étant une application basée sur la technologie blockchain, permet de collecter des fonds partout dans le monde entier pour soutenir une cause dans n’importe quelle entité (ville, village, faubourg, campagne, …) en éliminant des intermédiaires inutiles. C’est ainsi que certains portefeuilles dits wallets y sont intégrés.
                </p>
                <img src={coding} alt='' />
            </div>
            <div className='w-full md:w-1/2'><Services /></div>
        </div>
    )
}

export default About