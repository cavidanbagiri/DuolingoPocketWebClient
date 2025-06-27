import React from 'react'

import Card from './Card'

function Cards() {
  return (
    <div className='flex flex-wrap justify-around w-full gap-5 mt-10 '>
        <Card color={'red'} title={'Saved Words'} />
        <Card color={'green'} title={'Starred'} />
        <Card color={'blue'} title={'Learned'} />
    </div>
  )
}

export default Cards