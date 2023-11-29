import React, { useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import {Grid, Typography} from '@mui/material';


const App = () => {
  useEffect(() => {
    const starContainer = document.body;
    let isConstellationDisplayed = false;

    function createStar() {
      const star = document.createElement('Grid');
      star.className = 'star';
      star.style.left = Math.random() * window.innerWidth + 'px';
      star.style.top = Math.random() * window.innerHeight + 'px';
      star.setAttribute('data-speed', Math.random() * 2 - 1);
      starContainer.appendChild(star);
    }

    for (let i = 0; i < 200; i++) {
      createStar();
    }

    document.addEventListener('mousemove', function (event) {
      const stars = document.querySelectorAll('.star[data-speed]');
      const mouseX = event.clientX / window.innerWidth - 0.5;
      const mouseY = event.clientY / window.innerHeight - 0.5;

      stars.forEach(function (star) {
        const speed = parseFloat(star.getAttribute('data-speed'));
        const x = mouseX * speed * 50;
        const y = mouseY * speed * 50;
        star.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
      });
    });

    // 
  }, []); // Empty dependency array to run the effect only once

  return (
    <Grid>
      <Grid><Navbar></Navbar></Grid>

      <Grid display={{xs:'none',sm:'block'}} sm={12} height={'30vh'}></Grid>
      
      <Grid  xs={12} container direction={'column'} >
      <Grid><Typography variant='h3' className="title">Nex Pictora</Typography></Grid>
      <Grid><Typography variant='h3' className="subtitle">Innovate, Elevate, Confide the Journey</Typography></Grid>
      <Grid><Typography variant='h3' className='tech'>We build.......</Typography></Grid>
      </Grid>
    </Grid>
  );
};

export default App;

