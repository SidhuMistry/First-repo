import React from 'react'
import Child2 from './Child2'

function Child() {
  return (
    <>
        <Child2 />
        {/* <h2>{props.number}</h2> */}
        {/* <button onClick={() => props.changeNumber(30)}>Click</button> */}
    </>
  )
}

export default Child