import React, { useContext } from 'react'
import { NewContext } from './Parent'
function Child3() {
    const data = useContext(NewContext)
  return (
    <>
        <h3>{data}</h3>
    </>
  )
}

export default Child3