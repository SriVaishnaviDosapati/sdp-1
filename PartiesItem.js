import React from 'react'
import Dback from '../locker/Dback.jpg';
function PartiesItem({image,name}) {
  return (
    <div className='PartiesItem'>
        <div style={{backgroundImage:`url(${image})`}}></div>
        <h1>{name}</h1>
    </div>
  )
}

export default PartiesItem
