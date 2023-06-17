import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loader() {
  return (
    <>
        <div className='loader'>
            <Spinner animation="border" className='loader_spinner' role="status" variant='light' style={{width:'70px' , height : "70px"}}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    </>
  )
}

export default Loader