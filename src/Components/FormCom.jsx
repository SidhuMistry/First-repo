import React, { useState } from 'react'
import Card from './Card'

function FormCom() {
    let array= [
        {
          img : '/images/second.jpg',
          name : 'Image1',
          bgColor : 'red'
        },
        {
          img : 'https://picsum.photos/300',
          name : 'Image2',
          bgColor : 'yellow'
        },
        {
          img : 'https://picsum.photos/400',
          name : 'Image3',
          bgColor : 'red'
        },
        {
          img : 'https://picsum.photos/500',
          name : 'Image4',
          bgColor : 'red'
        }
      ]
    return (
        <>
        <h3 className='text-center'>Section 1</h3>
        <div className='main_section div'>
            {
                array.map((x,i) => {
                    return <Card img={x.img} name={x.name} bgColor={x.bgColor} />
                })
            }
        </div>
    </>
  )
}

export default FormCom