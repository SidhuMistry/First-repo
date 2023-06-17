import React, { useState } from 'react'
import { HiSearch } from "react-icons/hi";
function Card(props) {
  return (
    <>
        <div className='Card' style={{backgroundColor : props.bgColor}}>
            <img src={props.img} alt="" width='100%' height='80%' />
            <h6 className='Card_img'> <HiSearch color='black' size={40} /> {props.name}</h6>
        </div>
    </>
  )
}

export default Card























