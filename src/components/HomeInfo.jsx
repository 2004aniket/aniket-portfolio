import React from 'react'
import { Link } from 'react-router-dom'
import arrow from "../assets/icons/arrow.svg"
const Info = ({ text, link, button }) => {
    return <div className='bg-white opacity-65 border-l-4 rounded-lg text-black p-4 w-5/12 font-mono font-bold'>
        <p className='font-medium sm:text-xl text-center p-5'> {text}</p>
        <Link to={link} className='bg-white opacity-80 hover:bg-blue-400 text-black font-bold py-2 px-4  hover:border-blue-500 rounded flex justify-center items-center'>
            {button}


        </Link>
    </div>

}
const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center bg-blue-600 rounded-md py-4 px-8 text-white mx-5'>Hi,I am <span className='font-semibold'>Aniket</span></h1>
    ),
    2: (
        <Info text={"I’m a software developer student with expertiese in different technologies specializing in full-stack development "} link={"/about"} button={"Know more"} />
    ),
    3: (
        <Info text={"I love to build Application and as a result i have a bunch of cool projects "} link={"/projects"} button={"projects"} />

    ),
    4: (
        <Info text={"do you me to build some application for you?.then hit the button below"} link={"/contacts"} button={"Contact"} />

    ),
}

const HomeInfo = ({ currentStage }) => {


    return (
        renderContent[currentStage] || null
    )
}

export default HomeInfo