import React ,{useState} from 'react'
import logo from '../locker/klulogo.jpeg';
import ReorderIcon from '@mui/icons-material/Reorder';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
function Navbar() {
    const [openLinks,setOpenLinks]=useState(false)

    const toggleNavbar=()=>
    {
        setOpenLinks(!openLinks);
    }
  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? 'open': 'close'}>
            <img src={logo}/>
            <div className='hiddenLinks'>
            <Link to='/'>Home</Link>
           
            <Link to='/login'>Login</Link>
            {/* <Link to='/signup'>signup</Link> */}
            <Link to='/diet'>Movies</Link>
            <Link to='/Parties'>Parties</Link>
            <Link to='/exercises'>Game Zone</Link>  
            </div>
        </div>
        <div className='rightSide'>
            <Link to='/'>Home</Link>
           
            <Link to='/login'>Login</Link>
            {/* <Link to='/signup'>signup</Link> */}
            <Link to='/diet'>Movies</Link>
            <Link to='/Parties'>Parties</Link>
           

            <Link to='/exercises'>Game Zone</Link>
            <button onClick={toggleNavbar}>
            <ReorderIcon/>
            </button>
                
            
        </div>
      
    </div>
  )
}

export default Navbar
