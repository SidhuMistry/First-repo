import React, { useMemo, useState } from 'react'

function MemoHook() {
    const [number, setnumber] = useState(10)
    const [count, setcount] = useState(40)
    // const increment = () => {
    //     console.log('INCREMENT')
    //     return number
    // }

    const memoFun = useMemo(() => {
        console.log('INCREMENT')
        return count
    }, [count])
    
  return (
    <>
      <h1>Number : {memoFun}</h1>
      <h1>count : {count}</h1>
        {/* <h1>Number : {increment()}</h1> */}
        <button className='btn btn-dark' onClick={() => setcount(count+1)}>INCREMENT</button>
    </>
  )
}

export default MemoHook