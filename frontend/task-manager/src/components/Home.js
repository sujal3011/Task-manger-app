import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import Lists from './Lists'
import Navbar from './Navbar'

const Home = () => {
    return (
        <>
            <div className='h-screen flex flex-col items-center'>
                <Navbar />
                <Lists />
            </div>
        </>
    )
}

export default Home