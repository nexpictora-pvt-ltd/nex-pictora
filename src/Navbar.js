// Navbar.js
// Navbar.js

import React from 'react';
import './Navbar.css';
import {Grid} from '@mui/material'

const Navbar = () => {
  return (
    <Grid  className="navbar">
      <Grid xs={12}  className="navbar-container" container direction={'row'} padding={2}>
        <Grid xs={12} sm={3} className="navbar-logo">Nex</Grid>
        <Grid display={{xs:'none' ,sm:'flex'}} sm={9} justifyContent={'flex-end'}   className="navbar-links">
          <a href="#home">Home</a>
          <a href="#products-services">Products & Services</a>
          <a href="#contact-us">Contact Us</a>
          <a href="#about">About</a>

          <button className="signin-button">Sign In</button>
        </Grid>
       
      </Grid>
    </Grid>
  );
};

export default Navbar;

