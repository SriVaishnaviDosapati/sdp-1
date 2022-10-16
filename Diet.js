
import React from 'react';
import { Button, Card, TextField } from '@mui/material'; 
import { DietList } from '../assist/DietList';
import DietItem from '../components/DietItem';
import '../styles/Diet.css';


function Diet() {
  return (
    <div className='diet'>
    <h1 className='dietTitle'>Available Movies</h1>
      <div className='dietList'>
      {DietList.map((menuItem,Key)=>
      {
        return(<DietItem 
        key={Key}
        image={menuItem.image} 
        name={menuItem.name}/>);
      })}
      </div>
      <center>
      <br></br>
  <Card  sx={{ maxWidth: 1000 ,Height: 1000}}> 
  <h2><em><u>Booking a Movie</u></em></h2> 
  <screenLeft>
  <b>Enter your name:      </b>
  <TextField id="outlined-basic" label="input" variant="outlined"></TextField> <br/>
  </screenLeft>
  <b> Enter your age:      </b>
  <TextField id="outlined-basic" label="input" variant="outlined"></TextField> <br/>
  <b> Enter the Movie Name:</b>
  <TextField id="outlined-basic" label="input" variant="outlined"></TextField> <br/>
  <b> Enter the total number of seats required:</b>
  <TextField id="outlined-basic" label="input" variant="outlined"></TextField> <br/>
  <b> Enter the extra specifications you require:</b>
  <TextField id="outlined-basic" label="input" variant="outlined"></TextField> <br/>
  <b> Enter the mode of payment</b>
  <TextField id="outlined-basic" label="input" variant="outlined"></TextField> <br/>
     <Button variant="outlined">Save</Button>
  </Card></center>
    </div>
  );
}

export default Diet
