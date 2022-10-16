
import React from 'react';
import {PartiesList } from '../assist/PartiesList';
import PartiesItem from '../components/PartiesItem';
import '../styles/Parties.css';


function Parties() {
  return (
    <div className='Parties'>
    <h1 className='PartiesTitle'>Available Pubs and Clubs</h1>
      <div className='PartiesList'>
      {PartiesList.map((menuItem,Key)=>
      {
        return(<PartiesItem 
        key={Key}
        image={menuItem.image} 
        name={menuItem.name}/>);
      })}
      </div>
    </div>
  );
}

export default Parties
