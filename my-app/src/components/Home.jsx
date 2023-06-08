import React from 'react';
import video from "../assets/video1.mp4";
import "../styles/Home.css";
const Home = () => {
  return (
    <>
      <div className="header">
        <video autoplay loop muted >
            <source src={video} type="video/mp4"/>
        </video>
        <div className="section">
            <h2>Welcome to India</h2>
            <h1>Do Come & Visit <span class="change_content"></span></h1>
            <h3>Thank you for visiting</h3>
            <a href="" className="button1">Go</a>
        </div>
    </div>
    </>
  
  )
}

export default Home
