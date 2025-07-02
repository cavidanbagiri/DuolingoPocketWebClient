import React from 'react'

import Card from './Card'

function Cards({ language_pair_stats }) {
  return (
    <div className='flex flex-row justify-around w-full gap-5 mt-3 '>
        
        {
            language_pair_stats.map((item, index) => {
                return <Card key={index}  data={item} /> 
            })
        }
        
    </div>
  )
}

export default Cards