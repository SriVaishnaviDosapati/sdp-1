import React from 'react'
function HotelItem({image,name}) {
  return (
    <div className='HotelItem'>
        <div style={{backgroundImage:`url(${image})`}}></div>
        <h1>{name}</h1>
    </div>
  )
}

export default HotelItem
