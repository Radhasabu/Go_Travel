import React, { useEffect, useState } from 'react'
import "../styles/Discover.css";
import axios from 'axios';
import Itemcontainer from './Itemcontainer';
import img from "../assets/jaipur.jpg"
const Discover = () => {

const [maindata,setMaindata]=useState([]);
useEffect(()=>{

    const fetchdata = async() =>{
        try{
            const {data :{data},} =await axios.get('https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchAirport',{
                params: {query: 'mumbai'},
                headers: {
                    'X-RapidAPI-Key': '14b10b1fc9mshd1d6f88fc941c43p17c2d0jsn7afbdcc233dd',
                    'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
                  }
            });

            console.log(data);
            setMaindata(data);
        }
        catch(error){
            return null;
        }
    }
    fetchdata();
  })
  return (
    <>
       <div className='container'>
            <div className='heading'>
                <h1>Discover</h1>
                <h2>The Beauty Today</h2>
            </div>
            <div>
                <h1>logo</h1>
            </div>
       </div>
       <div className='search'>
            <input className='enter' type="text" placeholder='Search City' onChange={()=>{ }} />
            <button className='button'>Search Hotels</button>
       </div>

        <div className='item'>
            <Itemcontainer key="101" imagesrc={img} title="Mumbai a dream city" location="maharashtra"/>
            <Itemcontainer key="101" imagesrc={img} title="Mumbai" location="maharashtra"/>
            <Itemcontainer key="101" imagesrc={img} title="Mumbai" location="maharashtra"/>
            <Itemcontainer key="101" imagesrc={img} title="Mumbai" location="maharashtra"/>
        </div>
    </>
  )
}

export default Discover
