import React from 'react'

import { useSelector } from 'react-redux';

function Statistic() {

    const { language_pair_stats } = useSelector((state) => state.dashboardSlice);


    return (
        <div style={{ fontFamily: "IBM Plex Sans" }}
            className='flex flex-row items-center justify-between w-full p-1 '>
            {/* {language_pair_stats} */}
            <div>
                <span className='text-xl font-bold'>Native</span>
                <p className='text-sm'>English</p>
                <span className='text-xl font-bold'>Learned</span>
                <p className='text-sm'>Russian</p>
            </div>
            <div className='flex flex-row justify-start items-center'>
                <div className='flex flex-col justify-center items-center mr-5 border-10 border- rounded-full w-24 h-24'>
                    <p className='text-gray-500 text-sm font'>Total</p>
                    <p className='text-lg font-medium'>1234</p>
                </div>
                <div className='flex flex-col justify-center items-center mr-5 border-10 border-purple-500 rounded-full w-24 h-24'>
                    <p className='text-gray-500 text-sm font'>Learned</p>
                    <p className='text-lg font-medium'>12</p>
                </div>
                <div className='flex flex-col justify-center items-center mr-5 border-10 border-indigo-500 rounded-full w-24 h-24'>
                    <p className='text-gray-500 text-sm font'>Starred</p>
                    <p className='text-lg font-medium'>75</p>
                </div>
            </div>
        </div>
    )
}

export default Statistic