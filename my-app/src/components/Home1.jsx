import React from 'react'
import bgvideo from "../assets/video1.mp4";
import "../styles/Home1.css";
import { Link } from 'react-router-dom';
const Home1 = () => {
  return (
    <div className='Header'>
        <video autoPlay loop muted>
            <source src={bgvideo} type="video/mp4"/>
        </video>

        <div className="section">
            <h2>Welcome to India</h2>
            <h1>Do Come & Visit <span class="change_content"></span></h1>
            <h3>Thank you for visiting</h3>
        </div>

        <div className='outer'>
            <button className='inner'>
                <Link className="link"to='/discover'><h1 >GO</h1></Link>
            </button>
        </div>
    </div>
    
  )
}

export default Home1
