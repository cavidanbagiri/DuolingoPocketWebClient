import React from 'react'

function Card({color, title}) {
  return (
    <div className='flex items-center justify-between flex-col w-[30%] h-84 p-4 rounded-xl shadow-md bg-gray-100'>
        
        <span className='text-sm fonr-bold'>English To Russian</span>
        
        <span className='text-3xl font-bold'>{title}</span>
        
        <div style={{borderColor: color}}
        className='flex w-40 h-40 items-center justify-center rounded-full border-12 font-bold text-xl'>
            1243
        </div>

    </div>
  )
}

export default Card