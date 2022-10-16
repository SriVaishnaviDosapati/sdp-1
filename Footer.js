import React from 'react'
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import Facebook from '@mui/icons-material/Facebook';
import LinkedIn from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';
import '../styles/Footer.css';
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Instagram/><Twitter/><LinkedIn/><Facebook/>
        </div>
        <p><sub><CopyrightIcon/></sub> CopyRights: @entertainment.com</p>
    </div>
  )
}

export default Footer
