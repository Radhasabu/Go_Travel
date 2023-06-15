import React from 'react'
import "../styles/Itemcontainer.css";
const Itemcontainer = ({imagesrc,title,location}) => {
  return (
    <div className='conatiner'>
      <img src={imagesrc} alt="hotel" className='image'/>
      <h3>{title?.length>18 ? `${title.slice(0,18)}...` : title}</h3>
      <p>{location?.length>18 ? `${location.slice(0,18)}...` : location}</p>
    </div>
  )
}

export default Itemcontainer
