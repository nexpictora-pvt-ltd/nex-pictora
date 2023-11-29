import React, { useEffect } from 'react';
import './App.css'; // You can create a separate CSS file for styles

function App() {
  useEffect(() => {
    // Show navbar with animation
    const navbar = document.getElementById("navbar");
    navbar.style.top = "0";

    // Animate boxes
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box, index) => {
      setTimeout(() => {
        box.style.opacity = 1;
      }, 500 * index);
    });
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <nav id="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <div className="box-container">
        <div className="box" id="box1"></div>
        <div className="box" id="box2"></div>
        <div className="box" id="box3"></div>
      </div>
    </div>
  );
}

export default App;
