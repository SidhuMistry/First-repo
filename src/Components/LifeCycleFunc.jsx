import React, { useEffect, useState } from 'react'

function LifeCycleFunc() {

    const [number, setnumber] = useState(10)
    const [count, setcount] = useState(50)
    console.log('LifeCycleFunc')
    useEffect(() => {
        console.log('Mount')
    }, [])

    useEffect(() => {
        
        return () => {
            console.log('Unmount')
        }
    }, [])

    useEffect(() => {
        console.log('number , count')
    }, [])

    // useEffect(() => {
    //     console.log('count')
    // }, [count])
    
    
  return (
    <>
    {console.log('Return')}
        <h1>{number}</h1>

        <button onClick={() => setnumber(number+1)}>Update</button>
        <button onClick={() => setcount(count+1)}>Update Count</button>
    </>
  )
}

export default LifeCycleFunc