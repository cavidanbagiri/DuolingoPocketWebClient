
import React from 'react'
import dummy_data from "../../constants/dummy.js";

function CardLayout() {
  return (

    <div className='flex flex-wrap justify-around w-full gap-5 mt-10 '>
      {
        dummy_data.map((item, index) => {
          return (
            <div key={index} className='flex flex-col items-start justify-between text-center text-white font-medium bg-gradient-to-br from-blue-500 to-indigo-600 
              border border-blue-700 w-full sm:w-80 md:w-64 lg:w-84 h-64 p-4 shadow-md rounded-lg transition-transform duration-200 hover:scale-105 cursor-pointer'>
              <div className='flex flex-col items-start justify-center mb-2'>
                <h1 className='text-3xl'>{item.word}</h1>
                <p className='text-lg text-gray-300'>
                  {item.part_of_speech}
                </p>
              </div>
              <p className='text-sm'>
                {item.translation}
              </p>
            </div>
          )
        })
      }
    </div>
  )
}

export default CardLayout