import React, { useEffect, useState } from 'react';
import "./Nav.css";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import { grey } from '@mui/material/colors';

const Nav=()=> {
  const[show, handleShow] = useState(false);
  const transitionNavBar=()=>{
    if(window.scrollY > 100){
      handleShow(true);
    } else{
      handleShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, [])
  return(
    <div className={`nav ${show && 'nav_black'}`}>
      <div className="nav_contents">
      <img
      className='nav_logo'
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
        alt=""
      />

      <Box>
        <div className='btn-group'>
          <button className='button-nav button-nav-active' >Home</button>
          <button className='button-nav' >Series</button>
          <button className='button-nav' >Films</button>
          <button className='button-nav' >Latest</button>
          <button className='button-nav' >My List</button>
        </div>
        <div className='btn-icon'>
        <IconButton sx={{ color: grey[50] }}>
          <SearchIcon />
        </IconButton>
        <IconButton sx={{ color: grey[50] }}>
          <NotificationsRoundedIcon />
        </IconButton>
        </div>
      </Box>

      <img
      className='nav_avatar'
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt=""
      />
      </div>
    </div>
  )
}
export default Nav;