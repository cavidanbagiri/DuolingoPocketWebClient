
import React from 'react'


import dummy_data from '../../constants/dummy.js'

function CardComponent() {
    return (

<>
        {
            dummy_data.map((item, index) => {
                return (
                    <div key={index} className='flex flex-col items-between justify-between text-center text-white font-medium bg-gradient-to-br from-blue-500 to-indigo-600 border border-blue-700 w-96 h-64 p-4 shadow-md rounded-lg transition-transform duration-200 hover:scale-105'>
                        <div className='flex flex-col items-start justify-center'>
                            <h1 className='text-3xl'>{item.word}</h1>
                            <p className='text-lg color-bg-gray-500'>
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
</>


        // <div className=" flex flex-col items-between justify-between text-center text-white font-medium bg-gradient-to-br from-blue-500 to-indigo-600 border border-blue-700 w-96 h-64 p-4 shadow-md rounded-lg transition-transform duration-200 hover:scale-105"> 

        //     <div className='flex flex-col items-start justify-center'>
        //         <h1 className='text-3xl'>Сказа́ть</h1>
        //         <p className='text-lg color-bg-gray-500'>
        //             Verb
        //         </p>
        //     </div>
        //     <p className='text-sm'>
        //         Learn a new word every day
        //     </p>     
            
        // </div>
            

    )
}

export default CardComponent
