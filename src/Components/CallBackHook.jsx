import React, { useCallback, useState } from 'react'
import ChildCallBack from './ChildCallBack'

function CallBackHook() {
    const [first, setfirst] = useState(0)

    // const func = () => {
    //     return first
    // }

    const func = useCallback(() => {
        return first
      },[first])
    

    return (
        <>
            <ChildCallBack func={func} />
            <h2>CallBackHook</h2>
            <button onClick={() => setfirst(first+1)}>Click</button>
        </>
    )
}

export default CallBackHook