
import React from 'react';
import { ExerciseList } from '../assist/ExerciseList';
import ExerciseItem from '../components/ExerciseItem';
import '../styles/Exercise.css';



function Exercise() {
  return (
    <div className='exercise'>
    <h1 className='exerciseTitle'>Available Game Spots </h1>
      <div className='exerciseList'>
      {ExerciseList.map((menuItem,Key)=>
      {
        return(<ExerciseItem 
        key={Key}
        image={menuItem.image} 
        name={menuItem.name}/>);
      })}
      </div>
    </div>
  );
}

export default Exercise