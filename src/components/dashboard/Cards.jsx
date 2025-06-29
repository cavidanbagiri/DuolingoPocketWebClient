import React from 'react'

import Card from './Card'

function Cards({ language_pair_stats }) {
  return (
    <div className='flex flex-wrap justify-around w-full gap-5 mt-10 '>
        
        {
            language_pair_stats.map((item, index) => {
                return <Card key={index} title='Words' data={item} /> 
            })
        }
        
    </div>
  )
}

export default Cards