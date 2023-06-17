import React from 'react'
import HOC from './HOC'

function About(props) {
  return (
    <div style={{width:props.width, height: props.height, background : props.color}} className={props.center}>
      <h5>About</h5>
    </div>
  )
}

export default HOC(About, 'green')