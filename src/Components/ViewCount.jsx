import React from 'react'
import { useSelector } from 'react-redux'

function ViewCount() {
   const count = useSelector(state => state.count.count)
   const number = useSelector(state => state.num.num)
  return (
    <>
        <h2>Count : {count}</h2>
        <h2>number : {number}</h2>
    </>
  )
}

export default ViewCount