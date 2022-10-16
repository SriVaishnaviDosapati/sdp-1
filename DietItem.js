import React from 'react'
import Dback from '../locker/Dback.jpg';
function DietItem({image,name}) {
  return (
    <div className='dietItem'>
        <div style={{backgroundImage:`url(${image})`}}></div>
        <h1>{name}</h1>
    </div>
  )
}

export default DietItem


