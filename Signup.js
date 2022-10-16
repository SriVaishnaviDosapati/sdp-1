import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PersonIcon from '@mui/icons-material/Person';
import img from '../locker/bg4.jpg';
import '../styles/Login.css';
import { useState } from 'react';
import axios from 'axios';




function Login() {

    const paperStyle={padding :20,height:'75vh',width:'25%',margin:"20px auto",borderRadius:'20px'}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnStyle={margin:'8px 0'}
    const [studName,setName]=useState("");
    console.log(studName);
    const [studEmail,setEmail]=useState("");
    const [studPassword,setPassword]=useState("");
    const [studNumber,setNumber]=useState(0);
    const addToList=()=>
    {
      axios.post("/newstud",{studName: studName, studNumber : studNumber,studEmail:studEmail,studPassword:studPassword});
      console.log(studName,studNumber);
      document.getElementById('name').value = '';
      document.getElementById('reg').value = '';
      document.getElementById('pass').value = '';
      document.getElementById('email').value = '';
    }  
  return (
    <div  style={{backgroundImage:`url(${img})`}}>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
                <Avatar style={avatarStyle}><PersonIcon/></Avatar>
                <h2><i>Entertainment</i></h2>
            </Grid>
            <TextField label='Student Name' id='name'
onChange={(event)=>setName(event.target.value)}placeholder='Enter Student Name' fullWidth required/>&nbsp;<br/>

<TextField label='Registration number'id='reg'
onChange={(event)=>setNumber(event.target.value)} placeholder='Enter Registration Number' fullWidth required/>&nbsp;<br/>
<TextField label='Email'id='email'
onChange={(event)=>setEmail(event.target.value)}placeholder='Enter Email'  fullWidth required/>&nbsp;<br/>
<TextField label='password' type='password'id='pass'
onChange={(event)=>setPassword(event.target.value)}placeholder='Enter Password Name' fullWidth required/>&nbsp;<br/>


        <FormControlLabel
        control={
        <Checkbox name="checkeddB" color='primary' />} 
        label="Remember me" />
        <Button type='submit' color='secondary' variant='contained' onClick={addToList}

 style={btnStyle} fullWidth>Log in</Button>
        <Typography>
            <Link href='#' >
                Forget password?
            </Link>
        </Typography>
        <Typography> Do you have an account ? 
            <Link href='/Login' >
                Login
            </Link>
        </Typography>
        </Paper>
      </Grid>
    </div>
  )
}

export default Login