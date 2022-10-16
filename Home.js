import React from 'react'
import { Link } from 'react-router-dom'
import BImage from '../locker/dance2.jpg';
import '../styles/Home.css';
import Login from './Login';

function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${BImage})`}}>
    <div className='headerContainer' >
        <Link to='/login'>
          <h1>      </h1>
          <h1>      </h1>
          <center> <button>Sign In

            </button></center> 
        </Link>
    </div>
    </div>
  )
}

export default Home
