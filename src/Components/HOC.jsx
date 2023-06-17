import React from 'react'
  
const HOC = (OriginalComponent, color) => {
    const NewComponent = () => {
        return <OriginalComponent width='500px' height='300px' color={color} center='text-center' /> 
    }
    return NewComponent
}
  
export default HOC;