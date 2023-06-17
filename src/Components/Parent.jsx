import React, { createContext, useState } from 'react'
import Child from './Child'

export const NewContext = createContext()

function Parent() {
    const [number, setnumber] = useState(20)

    const changeNumber = (num) => {
        setnumber(num)
    }
    return (
    <>
        <NewContext.Provider value={number}>
            <Child changeNumber={changeNumber} /> 
        </NewContext.Provider>
    </>
    )
}

export default Parent