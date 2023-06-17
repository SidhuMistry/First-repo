import React, { useContext } from 'react'
import Child3 from './Child3'
import { NewContext } from './Parent'

function Child2() {
    const data = useContext(NewContext)
  return (
    <>
    {data}
        <Child3 />
    </>
  )
}

export default Child2