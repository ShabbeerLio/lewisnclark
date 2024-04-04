import React from 'react'
import "./Banner.css"
import bannerimg from "../../Assets/Home/hotel_Amanbagh-1.jpg"

const Banner = () => {
  return (
    <div className='Banner'>
      <img src={bannerimg} alt="india tour packages" />
    </div>
  )
}

export default Banner
