import React from 'react'

import user_img from '../../assets/user.png'

function UserTitle() {
  return (
    <div style={{ fontFamily: "Roboto" }}
    className='flex flex-row items-center bg-gray-100 rounded-lg p-3'>
        <img className='w-20 rounded-full '
        src={user_img} alt="" />
        <span className='text-lg font-bold'>
            Unknown-1000
        </span>
    </div>
  )
}

export default UserTitle