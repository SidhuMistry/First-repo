import React from 'react'
import HOC from './HOC'

function Home(props) {
  return (
    <div style={{width:props.width, height: props.height, background : props.color}}>
      <h5>Home</h5>
    </div>
  )
}

export default HOC(Home , 'red')