import React, { memo } from 'react'

function ChildCallBack(props) {
    console.log('ChildCallBack')
    return (
        <>
        <h5>{props.func()}</h5>
        <h3>ChildCallBack</h3>
        </>
    )
}

export default memo(ChildCallBack)