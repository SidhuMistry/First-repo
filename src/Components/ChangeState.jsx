import React from 'react'
import { useDispatch } from 'react-redux'
import { DecrementCount, IncrementCount } from '../Redux/Actions/counterAction'
import { DecrementNumber, IncrementNumber } from '../Redux/Actions/numberAction'

function ChangeState() {
    const dispatch = useDispatch()
  return (
    <>
        <button onClick={() => dispatch(IncrementCount())}>INCREMENT</button>
        <button onClick={() => dispatch(DecrementCount())}>DECREMENT</button>


        <button onClick={() => dispatch(IncrementNumber())}>INCREMENT NUMBER</button>
        <button onClick={() => dispatch(DecrementNumber())}>DECREMENT NUMBER</button>
    </>
  )
}

export default ChangeState